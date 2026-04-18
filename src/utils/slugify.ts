export const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[_\s]+/g, '-')   // Replace spaces and underscores with -
    .replace(/[^\w-]+/g, '')   // Remove all non-word chars
    .replace(/--+/g, '-');     // Replace multiple - with single -
};