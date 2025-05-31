# 💼 Aathithya's Personal Portfolio

Welcome to my personal portfolio repository! This project showcases my work as a frontend developer, UI/UX enthusiast, and embedded systems explorer using modern technologies like React, Three.js, Tailwind, Framer Motion, and more.

---

---

## 🚀 Live Demo

**🌐 Website:** [https://aathithyapr-portfolio.netlify.app/](https://aathithyapr-portfolio.netlify.app/)

---

## 🧐 Features

* 🌀 **3D Hero Animation** using Three.js and `@react-three/fiber`
* 🎯 **Smooth Page Transitions** with Framer Motion
* 💡 **Interactive Canvas-based Scenes** for Hero section
* 📱 **Fully Responsive** on all screen sizes
* 🎨 **Dark Mode / Themed UI** with TailwindCSS
* 🖼️ **Image-Driven Work Experience Cards**
* 📜 **Dynamic JSON-Based Content** (projects, testimonials, education)
* 🧹 **Modular Components & Code-Splitting**

---

## 🛠️ Tech Stack

### Frontend

* **React.js**
* **TypeScript**
* **Vite** *(super-fast dev/build tool)*
* **Tailwind CSS** *(utility-first CSS framework)*
* **Framer Motion** *(page & component animations)*
* **Three.js** + **@react-three/fiber** *(3D graphics for Hero)*
* **React Router DOM** *(page routing)*

### Assets/Tools

* **Figma** *(UI design & prototyping)*
* **GitHub Pages / Vercel / Netlify** *(for deployment)*
* **Postman** *(API testing)*
* **Visual Studio Code**

### Backend (for future extension)

* WordPress (used in internship experience)
* MongoDB (used in C# project)

---

## 🧹 Folder Structure

```bash
Aathi-s-Portfolio/
├── .github/             # GitHub-specific configurations and workflows
├── public/              # Static assets served directly (e.g., images, favicon)
├── src/                 # Source code
│   ├── assets/          # Images, icons, and other media assets
│   ├── components/      # Reusable React components
│   ├── constants/       # Static data like skills, projects, and navigation links
│   ├── hoc/             # Higher-Order Components (e.g., SectionWrapper)
│   ├── types/           # TypeScript interfaces and type definitions
│   ├── utils/           # Utility functions and helpers
│   ├── App.tsx          # Root component
│   ├── globals.css      # Global Tailwind CSS styles
│   ├── main.tsx         # Application entry point
│   └── vite-env.d.ts    # Vite environment declarations
├── .eslintignore        # Files and directories ignored by ESLint
├── .eslintrc.cjs        # ESLint configuration
├── .gitignore           # Files and directories ignored by Git
├── .prettierignore      # Files and directories ignored by Prettier
├── .prettierrc.cjs      # Prettier configuration
├── index.html           # Main HTML file
├── package.json         # Project metadata and dependencies
├── postcss.config.cjs   # PostCSS configuration
├── tailwind.config.cjs  # Tailwind CSS configuration
├── tsconfig.json        # TypeScript compiler options
├── tsconfig.node.json   # TypeScript configuration for Node.js
└── vite.config.js       # Vite build tool configuration
```

---

## 📌 Key Sections

![Key Sections Visual](https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress\&cs=tinysrgb\&dpr=2\&h=650\&w=940)

### 🢁‍♂️ Hero Section

![Hero Section](https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress\&cs=tinysrgb\&dpr=2\&h=650\&w=940)

* 3D rotating model
* Animated typing effects

### 📂 Work & Projects

![Projects](https://images.pexels.com/photos/3184638/pexels-photo-3184638.jpeg?auto=compress\&cs=tinysrgb\&dpr=2\&h=650\&w=940)

* Dynamic cards rendered from JSON
* Each includes GitHub links, tag badges

### 🎓 Education (Testimonial Styled)

![Education](https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress\&cs=tinysrgb\&dpr=2\&h=650\&w=940)

* Reused testimonial layout to present academic background

### 🧠 Skills Section

![Skills](https://images.pexels.com/photos/3861965/pexels-photo-3861965.jpeg?auto=compress\&cs=tinysrgb\&dpr=2\&h=650\&w=940)

* Uses custom icons
* Categorized skill groups

### 📞 Contact

!\[Contact]\([https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress\&cs=tinysrgb\&dpr=](https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=)

* Contact form using `emailjs`
* Responsive layout with input validation

---

## 📟 Installation

```bash
git clone https://github.com/aathithya-27/Aathi-s-Portfolio
cd portfolio
npm install
npm run dev
```

---

## 📦 Deployment

**Recommended:** [Netlify](https://netlify.com) or [Vercel](https://vercel.com)

### 🚀 Deploying to Netlify (from GitHub)

1. Push your code to a GitHub repository.
2. Visit [Netlify](https://app.netlify.com/) and log in or sign up.
3. Click on **"Add new site" > "Import an existing project"**.
4. Authorize and select your GitHub repository.
5. Configure build settings:

   * **Build command**: `npm run build`
   * **Publish directory**: `dist`
6. Click **Deploy Site**.
7. Netlify will build and deploy your site. You’ll get a live link like `https://your-site.netlify.app`.

> ⚙️ Netlify also supports auto-deploy from GitHub. Any changes pushed to the linked branch will auto-deploy.

### 🌐 Deploying to GitHub Pages

```bash
npm run build
cd dist
git init
git remote add origin https://github.com/aathithya-27/Aathi-s-Portfolio.git
git checkout -b gh-pages
git add .
git commit -m "Deploy"
git push -f origin gh-pages
```

Enable GitHub Pages in repo settings and set the source branch to `gh-pages`.
bash
npm run build
cd dist
git init
git remote add origin [https://github.com/aathithya-27/Aathi-s-Portfolio.git](https://github.com/aathithya-27/Aathi-s-Portfolio.git)
git checkout -b gh-pages
git add .
git commit -m "Deploy"
git push -f origin gh-pages

```

Ensure you enable GitHub Pages in your repo settings and point it to the `gh-pages` branch.
bash
npm preview
npm run build
git add dist && git commit -m "Build"
git subtree push --prefix dist origin gh-pages
```

---

## 📄 License

This project is open source under the [MIT License](LICENSE).

---

## 🖼️ Background & Visuals

Here are some fresh visual assets to enhance your README:

### 🔹 Hero Background Example

![Hero Background](https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress\&cs=tinysrgb\&dpr=2\&h=650\&w=940)

### 🔹 3D & Code Aesthetic

![3D Tech](https://images.pexels.com/photos/3861431/pexels-photo-3861431.jpeg?auto=compress\&cs=tinysrgb\&dpr=2\&h=650\&w=940)

### 🔹 Developer Workspace Style

![Workspace](https://images.pexels.com/photos/245032/pexels-photo-245032.jpeg?auto=compress\&cs=tinysrgb\&dpr=2\&h=650\&w=940)

---

You can embed these images above your "Live Demo" or "Tech Stack" sections, or use them in a custom GitHub README theme with CSS for profile README.md.

---

## 🙌 Acknowledgements

* [Three.js Journey](https://threejs-journey.xyz/)
* [Framer Motion Docs](https://www.framer.com/motion/)
* [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
* Inspired by modern developer portfolios from GitHub & Dribbble

---

##
