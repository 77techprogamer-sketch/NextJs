const fs = require('fs');
const path = require('path');
const { translate } = require('google-translate-api-x');

const BLOGS_FILE = path.join(__dirname, 'src/data/blogs.json');
const LANGS = ['hi', 'bn', 'mr', 'te', 'ta', 'gu', 'kn', 'ml', 'pa'];
const LANG_NAMES = {
  hi: 'Hindi', bn: 'Bengali', mr: 'Marathi', te: 'Telugu', ta: 'Tamil',
  gu: 'Gujarati', kn: 'Kannada', ml: 'Malayalam', pa: 'Punjabi'
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function translateText(text, targetLang) {
  if (!text || text.trim() === '') return text;
  try {
    const maxLen = 4000;
    if (text.length > maxLen) text = text.substring(0, maxLen);
    const result = await translate(text, { to: targetLang, autoCorrect: true });
    return result.text;
  } catch (err) {
    console.error(`    [Error] ${err.message}`);
    return null;
  }
}

async function main() {
  const blogs = JSON.parse(fs.readFileSync(BLOGS_FILE, 'utf-8'));
  let fixed = 0, errors = 0;

  for (const post of blogs) {
    if (!post.translations) post.translations = {};

    // Check which languages are missing
    const missing = LANGS.filter(l => !post.translations[l]?.title);
    if (missing.length === 0) continue;

    console.log(`\nFixing: ${post.slug.substring(0, 55)} (${missing.length} missing)`);

    for (const lang of missing) {
      process.stdout.write(`  ${LANG_NAMES[lang]}... `);
      try {
        const title = await translateText(post.title, lang);
        await delay(1000);
        const summary = await translateText(post.summary, lang);
        await delay(1000);
        const content = await translateText(post.content.substring(0, 3000), lang);
        await delay(1000);

        if (title && summary && content) {
          post.translations[lang] = { title, summary, content };
          fixed++;
          console.log('✓');
        } else {
          errors++;
          console.log('✗');
        }
      } catch (err) {
        errors++;
        console.log(`✗ ${err.message.substring(0, 40)}`);
      }

      fs.writeFileSync(BLOGS_FILE, JSON.stringify(blogs, null, 2), 'utf-8');
    }
  }

  // Final count
  const fully = blogs.filter(b => LANGS.every(l => b.translations?.[l]?.title)).length;
  console.log(`\nFixed: ${fixed} translations, Errors: ${errors}`);
  console.log(`Fully translated: ${fully}/${blogs.length}`);
}

main().catch(err => { console.error(err); process.exit(1); });
