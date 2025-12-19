/**
 * @param name
 * @returns Takes a string (name) as input and returns a URL-friendly slug by converting
 * it to lowercase, normalizing diacritic characters, and replacing non-alphanumeric
 * characters with hyphens while removing any leading or trailing hyphens.
 */
export function createSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
