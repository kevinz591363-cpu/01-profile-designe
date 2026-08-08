# Section 1: Profile Designer

**Level:** Beginner  
**Goal:** Personalize a profile card and switch its color theme.  
**Coding ideas:** HTML text and images, CSS variables, click events

## Files in this folder

- `index.html` - webpage structure and words
- `style.css` - colors, spacing, layout, and responsive design
- `script.js` - interactions and app logic
- `images/` - sample images that students should replace

Keep these files together. Open `index.html` in a browser to test the project.

## Step-by-step student instructions

1. Download and unzip the complete course package.
2. Open the folder named `01-profile-designer`.
3. Double-click `index.html` to see the starting version.
4. Open `index.html` in a text editor. Replace the sample name, grade, descriptions, project titles, and other visible words.
5. Open `style.css`. Change the color values under `:root`, especially `--accent`, `--accent2`, and `--bg`. Save and refresh the browser.
6. Open `script.js`. Read the comments and sample data, then replace the sample questions, cards, tasks, formulas, or answers for this project.
7. Test every button. Also make the browser narrow to check the phone layout.
8. Never publish a home address, private phone number, student ID, password, API key, or private schedule.

## How to replace the pictures

1. Choose only a photo you have permission to publish.
2. Put it in the `images` folder. Use a simple lowercase filename such as `profile.jpg` or `science-project.jpg`.
3. In `index.html`, find the matching `<img>` tag and change its `src`. Example:

```html
<img src="images/profile.jpg" alt="Portrait of Alex Student">
```

4. Write a short, accurate `alt` description.
5. If a filename ends in `.jpg.jpg`, rename it to end in only one `.jpg`. Filenames are case-sensitive on GitHub.

## Required modifications for this section

- Change all sample personal information.
- Replace at least one image or placeholder.
- Change at least two colors in `style.css`.
- Make at least one meaningful JavaScript change.
- Add a short footer credit using your first name only, unless your teacher approves otherwise.

## Publish this section with GitHub Pages

1. Create a new public GitHub repository named `01-profile-designer`.
2. Upload the contents of this folder. Upload `index.html`, `style.css`, `script.js`, and the `images` folder - not the outer course-package folder.
3. Commit the changes.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Choose branch **main**, folder **/ (root)**, then click **Save**.
7. After GitHub finishes publishing, open:

`https://YOUR-USERNAME.github.io/01-profile-designer/`

8. Submit the published webpage link, not only the repository link.

## Troubleshooting

- **404:** Verify that the file is exactly `index.html`, Pages uses `main` and `/ (root)`, and the URL includes the repository name.
- **No styling:** Verify `href="style.css"` and the lowercase filename.
- **Buttons do nothing:** Verify `<script src="script.js"></script>` is near the bottom of the page and check the browser console.
- **Old version appears:** Press Ctrl+Shift+R (Windows) or Command+Shift+R (Mac).
