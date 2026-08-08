# Personal Homepage - Dr. Yuan Shyong Ooi (黃垣熊)

Welcome to the source repository for the personal academic homepage of **Dr. Yuan Shyong Ooi**, Assistant Professor in the Department of Applied Mathematics at National University of Tainan (NUTN).

This website is built with **React, Vite, Tailwind CSS, and KaTeX** for rendering LaTeX math formulas. It automatically deploys to **GitHub Pages** via GitHub Actions whenever you commit changes to the `main` or `master` branch.

---

## 🛠️ How to Edit Your Homepage Content directly on GitHub

You do **not** need to touch any complex React or HTML code! All content on the website is controlled by **3 easy-to-read configuration files** in the root of your repository:

### 1. General Profile, Announcements & Contact Info: `site.config.js`
Edit this file to update:
- **Announcements & Important Updates**: Edit the `announcement` section to post new position updates, call for papers, or conference news directly on your homepage:
  ```javascript
  announcement: {
    enabled: true, // set to false when you want to hide the announcement
    badge: "NEW POSITION STARTING FALL 2026",
    title: "Assistant Professor at National University of Tainan (NUTN)",
    description: "Dr. Yuan Shyong Ooi will be joining the Department of Applied Mathematics at National University of Tainan starting Fall 2026.",
    date: "Fall 2026",
    icon: "fa-solid fa-bullhorn",
    link: "" // optional link to job announcement, paper, or news
  },
  ```
- **Profile Name, Title, Institution, and Email addresses**
- **Profile Picture** (`avatarImage`)
- **Bio Paragraphs** (about your career, education, and interests)
- **CV Link & Social Media Links** (Google Scholar, arXiv, GitHub, Genealogy)
- **Campus Address & Office details**

### 2. Research, Publications & Seminar Talks: `research.config.js` & `teaching.config.js`
Edit these files to update:
- **Research Statement & Research Themes** (`research.config.js`)
- **Co-Authors & Collaborators** (`research.config.js`)
- **Publications & Preprints List** (`research.config.js`)
- **Academic Seminar & Conference Talks**: Located under `teaching.config.js` in the `talks` list (now automatically merged under the **Research** tab on the website!).

### 3. Teaching & Course Webpages: `teaching.config.js`
Edit `teaching.config.js` to update:
- **Teaching Philosophy Statement**
- **Academic Appointments & Course Catalog**: Each course in `courseList` automatically generates its own **dedicated course webpage**!
- **How to Add or Edit Course Webpages**:
  Simply add an entry to `courseList` inside `teaching.config.js`:
  ```javascript
  {
    id: "math-301-diff-geom", // Unique ID for direct shareable link (#course/math-301-diff-geom)
    code: "MATH 301",
    name: "Differential Geometry",
    semester: "Fall 2026",
    level: "Undergraduate",
    institution: "NUTN",
    time: "Mon & Wed 10:00 - 11:50",
    location: "Math Science Building, Room 302",
    instructor: "Dr. Yuan Shyong Ooi",
    officeHours: "Tue & Thu 14:00 - 16:00",
    description: "An introductory course in differential geometry...",
    textbook: "M. P. do Carmo, 'Differential Geometry of Curves and Surfaces'",
    gradingPolicy: "Homework (30%), Midterm Exam (35%), Final Exam (35%)",
    announcements: [
      { date: "Sept 10, 2026", title: "Welcome!", content: "First homework released." }
    ],
    syllabus: [
      { week: "Week 1-3", topic: "Theory of Curves", description: "Arc length, Frenet frame..." }
    ],
    materials: [
      { title: "Course Syllabus (PDF)", link: "syllabus.pdf", type: "pdf" },
      { title: "Lecture Notes 01", link: "#", type: "notes" }
    ]
  }
  ```
  When students click on the course in your Teaching tab or open `#course/math-301-diff-geom`, a complete standalone course webpage opens with announcements, syllabus, and download links!

---

## 🖼️ How to Change Your Profile Picture

You can change your profile picture using either of these two methods:

### Method 1: Upload a new image file to GitHub (Recommended)
1. In your GitHub repository, navigate into the `public/` folder (or create a `public/` folder if it doesn't exist yet).
2. Click **Add file** -> **Upload files**.
3. Drag & drop your picture (e.g. `profile.jpg`) and click **Commit changes**.
4. Edit `site.config.js`:
   ```javascript
   avatarImage: "profile.jpg",
   ```
5. Commit your changes. GitHub Actions will rebuild and update your photo live!

### Method 2: Use an Online Image Link or GitHub Profile Photo
You can also directly link to any public image URL or your GitHub profile photo:
- **Using your GitHub avatar**:
  ```javascript
  avatarImage: "https://github.com/yuanshyong.png",
  ```
- **Using any web image URL**:
  ```javascript
  avatarImage: "https://your-domain.com/photo.jpg",
  ```

---

## 📄 How to Upload or Update Your CV (PDF)

1. Upload your updated PDF file (e.g. `cv.pdf`) to the `public/` folder on GitHub.
2. Ensure `site.config.js` points to your CV file:
   ```javascript
   cvLink: "cv.pdf",
   ```
   and under `miscLinks`:
   ```javascript
   { name: "Curriculum Vitae (PDF)", url: "cv.pdf", isPdf: true }
   ```

---

## 📝 Step-by-Step Guide: How to Make Changes on GitHub

1. Open your repository on GitHub (`https://github.com/yuanshyong/<repo-name>`).
2. Click on the config file you wish to update (e.g., `site.config.js`, `research.config.js`, or `teaching.config.js`).
3. Click the **Pencil icon** (✏️ *Edit this file*) in the top right corner.
4. Modify the text, add new publications, or update course details.
5. Click the green **Commit changes...** button at the top right.
6. **Automatic Deployment**:
   - Go to the **Actions** tab on GitHub to watch the **Deploy to GitHub Pages** workflow run.
   - Within 1 to 2 minutes, your website will automatically update live at your GitHub Pages URL!

---

## 🧮 Writing Math Equations (LaTeX)

- Use single dollar signs `$...$` for inline math formulas (e.g., `$\nabla u$`).
- In `keyMathTopics` inside `research.config.js`, provide raw LaTeX strings (e.g., `\partial_t F = \mathbf{H}`).

---

*Made with ❤️ for Dr. Yuan Shyong Ooi.*
