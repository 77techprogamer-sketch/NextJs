const fs = require('fs');
const path = require('path');

const BLOGS_FILE = path.join(__dirname, 'src/data/blogs.json');
const LANGS = ['hi', 'bn', 'mr', 'te', 'ta', 'gu', 'kn', 'ml', 'pa'];
const LANG_NAMES = {
  hi: 'Hindi', bn: 'Bengali', mr: 'Marathi', te: 'Telugu', ta: 'Tamil',
  gu: 'Gujarati', kn: 'Kannada', ml: 'Malayalam', pa: 'Punjabi'
};

// Use the google-translate-api-x package
const { translate } = require('google-translate-api-x');

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
  const args = process.argv.slice(2);
  const limit = args[0] ? parseInt(args[0]) : 3;
  const startFrom = args[1] ? parseInt(args[1]) : 0;

  console.log('=== Blog Translation Script ===');
  console.log(`Limit: ${limit} posts, starting from #${startFrom}\n`);

  const blogs = JSON.parse(fs.readFileSync(BLOGS_FILE, 'utf-8'));
  let translated = 0, skipped = 0, errors = 0;

  const postsToProcess = blogs.slice(startFrom, startFrom + limit);

  for (let i = 0; i < postsToProcess.length; i++) {
    const post = postsToProcess[i];
    const globalIndex = startFrom + i;
    console.log(`[${globalIndex + 1}/${blogs.length}] ${post.slug.substring(0, 55)}`);

    if (!post.translations) post.translations = {};

    for (const lang of LANGS) {
      if (post.translations[lang]?.title) {
        skipped++;
        continue;
      }

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
          translated++;
          console.log('✓');
        } else {
          errors++;
          console.log('✗ (null result)');
        }
      } catch (err) {
        errors++;
        console.log(`✗ ${err.message.substring(0, 50)}`);
      }

      fs.writeFileSync(BLOGS_FILE, JSON.stringify(blogs, null, 2), 'utf-8');
    }
    console.log('');
  }

  console.log(`Done. Translated: ${translated}, Skipped: ${skipped}, Errors: ${errors}`);
  console.log(`Next: node translate-blogs.js ${limit} ${startFrom + limit}`);
}

main().catch(err => { console.error(err); process.exit(1); });
