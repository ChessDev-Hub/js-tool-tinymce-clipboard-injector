chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id, allFrames: true },
    func: injectFromClipboard
  });
});

async function injectFromClipboard() {
  try {
    const text = await navigator.clipboard.readText();
    const htmlSafe = escapeHTML(text);
    const withNbsp = htmlSafe.replace(/^\s+/gm, (spaces) => '&nbsp;'.repeat(spaces.length)).replace(/\n/g, '<br>');
    const htmlToInject = `<pre>${withNbsp}</pre>`;

    const interval = setInterval(() => {
      const iframe = document.querySelector("iframe.tox-edit-area__iframe");
      if (!iframe) return;

      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      const body = iframeDoc.getElementById("tinymce");
      if (body) {
        body.innerHTML = htmlToInject;
        clearInterval(interval);
      }
    }, 500);
  } catch (err) {
    alert("Failed to read from clipboard: " + err);
  }
}

function escapeHTML(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}