# Personal Academic Website for Dr. Yuan Shyong Ooi

Welcome to your new, clean, and easily editable personal academic website!

---

## 🌟 Why is this website so easy to edit?

All content—your biography, research interests, publications, positions, education, talks, and teaching—is separated into a single configuration file: **`config.js`**.

You **never** need to touch HTML, CSS, or complex build frameworks (like Jekyll or Hugo) to update your site!

---

## 📝 How to Update Your Content

1. Open **`config.js`** in any text editor or directly on GitHub.
2. Edit or add items in the clean JavaScript structure:
   - **Add a new publication:**
     ```js
     {
       title: "Your New Paper Title",
       authors: "Yuan Shyong Ooi and Co-author",
       journal: "Journal Name",
       year: "2026",
       doi: "10.xxxx/...",
       arxiv: "2601.xxxxx",
       description: "Brief summary of the results."
     }
     ```
   - **Add a new talk:**
     ```js
     {
       title: "Talk Title",
       event: "Conference Name",
       location: "City, Country",
       date: "Month 2026",
       type: "Invited Presentation"
     }
     ```
   - **Update your profile / bio / title:** Just edit the `profile` or `bio` fields at the top of `config.js`.
3. Save and commit your changes! The website will update automatically on GitHub Pages.

---

## 🖼️ Adding Profile Photo & CV PDF

1. Create an `assets/` folder inside your repository.
2. Place your photo as `assets/photo.jpg` and CV as `assets/cv.pdf`.
3. In `config.js`, verify:
   ```js
   avatar: "assets/photo.jpg",
   cvLink: "assets/cv.pdf"
   ```

---

## 🚀 How to Deploy on GitHub Pages

1. Go to your GitHub repository (e.g. `shyongeometry.github.io` or `yuanshyong.github.io`).
2. Upload or push all files from this directory (`index.html`, `config.js`, `styles.css`, `README.md`, and `assets/`).
3. In GitHub, go to **Settings** > **Pages**.
4. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` (or `master`), Folder: `/ (root)`.
   - Click **Save**.
5. Your website will be live in 1–2 minutes!

---

## 📐 Features Included
- **MathJax Support:** LaTeX formulas like `\(\lambda\)`-translators and mean curvature flow equations render automatically.
- **Dark / Light Mode Toggle:** Visitors can toggle themes with a click.
- **Responsive & Mobile Friendly:** Looks great on desktop, tablet, and mobile phones.
- **Publication Links:** Badges for DOI, arXiv, and PDF links.
