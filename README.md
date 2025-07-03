# TinyMCE Clipboard Injector for Chess.com Forums

## What It Does
This Firefox extension allows you to:
- Click a toolbar icon
- Paste code from your clipboard
- Automatically convert indentation to `&nbsp;` to preserve formatting
- Inject it into the Chess.com TinyMCE forum editor

## How to Install (Temporary)
1. Open Firefox
2. Go to `about:debugging`
3. Click "This Firefox" > "Load Temporary Add-on"
4. Select the `manifest.json` file from this folder

## How to Use
1. Copy any code block to your clipboard (e.g. Python, HTML)
2. Click the extension icon while focused on a Chess.com forum reply
3. The HTML will be injected directly into the reply editor

## Sharing with ChessDev Hub
To share this tool with other members of the ChessDev Hub:
- Upload the ZIP or folder to the club's shared resource (Google Drive, Discord, etc.)
- Or host the repo on GitHub (see below)
- Encourage users to install via `about:debugging` or a guide you provide

## Security & Protection Tips
- Keep the extension local or in a private GitHub repo
- Do not publish to the Firefox Add-ons store unless reviewed and tested
- To prevent unauthorized use, add a `README` disclaimer: "Not for redistribution without author’s permission"
- To restrict updates, don't use auto-updating manifest keys

## Starting a GitHub Project
1. Go to [https://github.com](https://github.com) and sign in
2. Click "+" → New Repository
3. Name it `tinymce-clipboard-injector`
4. Choose **Private** (to limit to ChessDev Hub)
5. Upload the files manually or use Git:

```bash
git init
git remote add origin https://github.com/YOUR_USERNAME/tinymce-clipboard-injector.git
git add .
git commit -m "Initial commit"
git push -u origin master
```

6. Add ChessDev Hub members as collaborators (Settings → Collaborators & teams)

## License
See [LICENSE](LICENSE) for MIT license terms.