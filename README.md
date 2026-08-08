# Personal Academic Website (Roberta Valtorta Design Structure)
### Custom Academic Website for Dr. Yuan Shyong Ooi (黃垣熊)

This website template is directly inspired by the design structure and layout of [robertavaltorta.com](https://www.robertavaltorta.com/).

---

## 🌟 Key Design Features
1. **Minimalist Top Banner & Hero Profile Card**:
   - Clean top banner with an overlapping profile card displaying your Avatar photo, Name, Title, Department, Institution, Contact details, and Social Chip buttons (Google Scholar, MathSciNet, ResearchGate, GitHub, NCTS).
2. **Top Navigation Tabs**:
   - Navigation bar with single-page tab switching: `Home`, `Publications`, `Projects`, `Teaching`, `CV`, and `Contact`.
3. **Decoupled Configuration (`config.js`)**:
   - All website information (bio, publications, research themes, courses, talks, CV history) is separated into `config.js`.
   - Editing your site is as simple as editing plain text in `config.js`—no HTML, CSS, or complex site generator compilation required.
4. **LaTeX Math Support (MathJax)**:
   - Built-in LaTeX rendering for equations such as \(\lambda\)-translators, mean curvature flow, and differential geometry formulas.
5. **Dark / Light Mode Toggle**:
   - Visitors can toggle theme colors with a single click.

---

## 📝 How to Customize Your Information

Open **`config.js`** in any text editor or directly in the GitHub web editor:
* **To add a paper**: Append a new item to `siteData.publications`.
* **To add a research project**: Append a new item to `siteData.projects`.
* **To update your bio or title**: Edit `siteData.profile` or `siteData.home.bioParagraphs`.
* **To update teaching history**: Edit `siteData.teaching`.

---

## 🖼️ Adding Profile Photo & Banner Image

1. Create an `assets/` folder in your repository.
2. Add your profile photo as `assets/photo.jpg` and your CV as `assets/cv.pdf`.
3. (Optional) Add a custom top banner image as `assets/banner.jpg`.

---

## 🚀 Deployment to GitHub Pages

1. Create or open your repository on GitHub (e.g. `shyongeometry.github.io` or `yuanshyong.github.io`).
2. Upload all files from this directory (`index.html`, `config.js`, `styles.css`, `README.md`, and `assets/`).
3. In GitHub, go to **Settings** > **Pages**.
4. Set **Source** to `Deploy from a branch` and select `main` (or `master`).
5. Save changes. Your site will be live within 1–2 minutes!
