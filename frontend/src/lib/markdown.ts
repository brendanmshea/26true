import { marked } from 'marked';

marked.setOptions({
  gfm: true,
  breaks: true,
});

/**
 * Parses markdown text into HTML string for rich FAQ and text content.
 */
export function renderMarkdown(content: string = ''): string {
  if (!content) return '';
  return marked.parse(content) as string;
}
