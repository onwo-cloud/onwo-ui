function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function highlightJsx(code: string): string {
  if (!code) return "";

  const lines = code.split("\n");
  const highlightedLines = lines.map((line) => {
    if (line.trim().startsWith("//")) {
      return `<span class="text-shade-400 italic">${escapeHtml(line)}</span>`;
    }

    let escaped = escapeHtml(line);

    escaped = escaped.replace(
      /(&quot;[\s\S]*?&quot;|&#039;[\s\S]*?&#039;)/g,
      '<span class="text-emerald-600 font-normal">$1</span>'
    );

    escaped = escaped.replace(
      /(&lt;\/?)([A-Za-z0-9_.-]+)/g,
      (_, p1, p2) => {
        const isComponent = /^[A-Z]/.test(p2);
        const tagClass = isComponent
          ? "text-purple-600 font-semibold"
          : "text-blue-600 font-medium";
        return `${p1}<span class="${tagClass}">${p2}</span>`;
      }
    );

    escaped = escaped.replace(
      /(\/&gt;|&gt;)/g,
      '<span class="text-shade-400">$1</span>'
    );

    escaped = escaped.replace(
      /\b([a-zA-Z0-9_-]+)=/g,
      '<span class="text-amber-600 font-medium">$1</span>='
    );

    escaped = escaped.replace(
      /\b(disabled|isLoading)\b(?!=)/g,
      '<span class="text-amber-600 font-medium">$1</span>'
    );

    return escaped;
  });

  return highlightedLines.join("\n");
}
