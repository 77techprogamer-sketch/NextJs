
const stripHtmlTags = (html: string): string => {
    if (!html) return "";
    const decoded = html
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");

    // Regex for stripping tags
    return decoded.replace(/<[^>]*>?/gm, '').trim();
};

const input = `<p></p><div class="separator" style="clear: both; text-align: center;"><a href="https://lh3.google.com/u/0/d/16As4VO8CIRzYdwlDJ634yJ2j0g6UEl-f=s1536?auditContext=thumbnail" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="1024" data-original-width="1536"`;

console.log("Input:", input);
console.log("Output (Partial Tag):", stripHtmlTags(input));

const input2 = `&lt;p&gt;This is &lt;b&gt;bold&lt;/b&gt; text with an unclosed &lt;div class="test"`;
console.log("Input 2 (Escaped Partial):", input2);
console.log("Output 2:", stripHtmlTags(input2));
