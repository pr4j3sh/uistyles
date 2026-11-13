/**
 * Copy text to the clipboard.
 * Prefers the async Clipboard API (needs a secure context / permission);
 * falls back to a hidden textarea + `execCommand("copy")` for older
 * browsers and non-secure contexts.
 */
export async function copyToClipboard(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
    return;
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    // avoid layout jump and keep the element out of sight
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    ta.setAttribute("readonly", "");
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
  }
}
