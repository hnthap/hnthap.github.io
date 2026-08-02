"use strict";

/**

### **Featured Projects** (Top Tier – 2–3 max)

* **Strong impact & relevance**: Projects that directly demonstrate skills
needed for your target jobs (e.g., web app if applying for frontend/backend, ML
project if applying for data/AI roles).
* **Complexity & depth**: Shows multiple skills (system design, algorithms,
APIs, databases, UI/UX, deployment).
* **Real-world alignment**: Solves a practical problem, has a live demo, or is
used by real users.
* **Polish**: Clean documentation, professional-looking UI (if applicable),
well-structured code.
* **Talking point**: Something you can confidently discuss in detail during
interviews.

### **Good Projects** (Middle Tier)

* **Solid skill showcase**: Demonstrates understanding of important concepts
(data structures, web frameworks, cloud, etc.).
* **Complete but smaller**: A functional project but less complex or polished
than "featured."
* **Learning-oriented**: Built mainly to practice a new tech stack or concept
but still relevant to employers.
* **Clear presentation**: Decent README, screenshots, maybe hosted demo.

### **Normal Projects** (Baseline / Supporting)

* **Foundational work**: Course assignments, hackathon prototypes, or toy apps
that taught you something.
* **Limited scope**: Small scripts, algorithm implementations, or practice
projects.
* **Outdated stack or relevance**: Useful for your growth, but not strong
differentiators for recruiters.
* **Optional to include**: Only list if you need more volume; otherwise, keep
them in GitHub but not in the main portfolio.

---

👉 Rule of thumb:

* **2–3 featured**, **3–4 good**, **rest normal (or hidden)**.
* Quality >>> quantity. Better to have **fewer, polished projects** than a long
list.

 */

/**
 * @typedef { |
 * "Android Development" |
 * "C/C++" |
 * "CI/CD" |
 * "Chatbot Development" |
 * "Computer Vision" |
 * "Data Annotation" |
 * "Data Science" |
 * "Deep Learning" |
 * "Desktop Development" |
 * "Django" |
 * "Docker" |
 * "Express" |
 * "FAISS" |
 * "FastAPI" |
 * "Google AI SDK" |
 * "Gradle" |
 * "HTML/CSS" |
 * "Hugging Face Transformers" |
 * "Image Processing (OpenCV, Sharp)" |
 * "Java" |
 * "JavaFX" |
 * "JavaScript/TypeScript" |
 * "Jupyter Notebook" |
 * "jQuery" |
 * "Keras" |
 * "LangChain" |
 * "Machine Learning" |
 * "Natural Language Processing" |
 * "Netlify" |
 * "Node.js" |
 * "OpenVINO Model Server" |
 * "Data Processing (Pandas, Polars)" |
 * "Python" |
 * "PyTorch" |
 * "React" |
 * "React Native" |
 * "Responsive Design" |
 * "Roboflow" |
 * "SQL (MySQL, PostgreSQL, SQLite)" |
 * "Scikit-learn" |
 * "TensorFlow" |
 * "Three.js" |
 * "Vite" |
 * "Web Scraping" |
 * "WordPress"
 * } SkillName
 */

/** @type {SkillName[]} */
const SkillNames = [
  // Core Programming Languages
  "Python",
  "JavaScript/TypeScript",
  "Java",
  "C/C++",

  // Machine Learning & AI
  "Machine Learning",
  "Deep Learning",
  "TensorFlow",
  "PyTorch",
  "Keras",
  "Scikit-learn",
  "Hugging Face Transformers",

  // Specialized AI Applications
  "Natural Language Processing",
  "Computer Vision",
  "Image Processing (OpenCV, Sharp)",
  "Chatbot Development",

  // AI Tools & Platforms
  "FAISS",
  "Google AI SDK",
  "LangChain",
  "OpenVINO Model Server",
  "Roboflow",

  // Backend Development
  "Node.js",
  "Express",
  "FastAPI",
  "Django",

  // Frontend Development
  "HTML/CSS",
  "Responsive Design",
  "React",
  "jQuery",
  "Three.js",
  "Vite",

  // Mobile Development
  "React Native",
  "Android Development",
  "JavaFX",

  // Database & Data Processing
  "SQL (MySQL, PostgreSQL, SQLite)",
  "Data Processing (Pandas, Polars)",
  "Data Science",
  "Data Annotation",

  // Development Tools & Deployment
  "Jupyter Notebook",
  "Docker",
  "Gradle",
  "Netlify",
  "WordPress",
  "Web Scraping",

  // Miscellaneous
  "CI/CD",
  "Desktop Development",
];

/**
 * @typedef {{
 *  title: string;
 *  time: string;
 *  bullets: string[];
 *  skills: SkillName[];
 *  slidesUrl?: string;
 *  reportUrl?: string;
 *  codeUrl?: string;
 *  demoUrl?: string;
 *  demoTitle?: string;
 *  imageUrl?: string;
 *  rating: "featured" | "good" | "normal";
 * }} ProjectItem
 */

/** @type {ProjectItem[]} */
const Projects = [
  {
    title: "DocuChat: Modular RAG System with LangChain and PGVector",
    time: "Jun 2025 - Aug 2025",
    bullets: [
      "Built a RAG system for question-answering over private documents, " +
      "with retrieval and generation coordinated by a LangGraph state machine.",
      "Made ingestion idempotent with SHA1 hashing, so re-indexing skips " +
      "documents that have not changed.",
      "Instructed the model to ignore prompt injection in retrieved context, " +
      "and shipped a CLI and Gradio web app over containerized pgvector.",
    ],
    skills: [
      "Python",
      "Docker",
      "SQL (MySQL, PostgreSQL, SQLite)",
      "PyTorch",
      "LangChain",
      "Google AI SDK",
      "Machine Learning",
      "Hugging Face Transformers",
      "Chatbot Development",
      "Deep Learning",
      "Natural Language Processing",
      "CI/CD",
    ],
    codeUrl: "https://github.com/hnthap/docu-chat",
    imageUrl: "./images/docuchat.png",
    rating: "featured",
  },
  {
    title: "Cat or Dog? (Image Classifier Website)",
    time: "Jul 2025 - Aug 2025",
    bullets: [
      "Trained and deployed a custom CV classifier reaching 98.4% accuracy, served " +
      "through OpenVINO Model Server in a full-stack React/Node.js application.",
      "Demonstrated end-to-end ML deployment from Jupyter to production.",
    ],
    skills: [
      "Docker",
      "Express",
      "JavaScript/TypeScript",
      "Machine Learning",
      "OpenVINO Model Server",
      "PyTorch",
      "React",
      "Vite",
      "Image Processing (OpenCV, Sharp)",
      "Node.js",
      "Computer Vision",
      "Deep Learning",
      "Jupyter Notebook",
      "Data Processing (Pandas, Polars)",
      "CI/CD",
    ],
    codeUrl: "https://github.com/hnthap/cat-or-dog",
    imageUrl: "./images/cat-or-dog.png",
    rating: "featured",
  },
  {
    title: "Lunar Calendar API",
    time: "Jul 2024 - Mar 2026",
    bullets: [
      "Built a Gregorian–Lunar calendar conversion API in TypeScript, implementing " +
      "the astronomical equations from Meeus's Astronomical Algorithms " +
      "to replace licensed third-party code.",
      "Served over 6,000 requests daily during peak times on the public endpoint before shifting to a " +
      "self-hostable model when free hosting became unsustainable.",
      "Packaged the service with multi-stage Docker builds and a one-click deploy " +
      "pipeline, so users can run their own instance in minutes.",
    ],
    skills: [
      "Express",
      "JavaScript/TypeScript",
      "Netlify",
      "Docker",
      "Node.js",
      "HTML/CSS",
      "CI/CD",
    ],
    codeUrl: "https://github.com/hnthap/lunar-calendar-api",
    demoUrl: "https://hnthap.github.io/lunar-calendar-converter-interface",
    imageUrl: "./images/lunar-calendar.png",
    demoTitle: "Live Demo",
    rating: "featured",
  },
  {
    title: "Vietnamese Invoice Information Extraction",
    time: "Sep 2024 - Dec 2024",
    bullets: [
      "Developed a Machine Learning pipeline integrating Text Detection and " +
      "Optical Character Recognition with Deep Learning techniques, " +
      "implementing core data processing and model integration " +
      "architecture.",
      "Built ReactJS frontend interface connected to PyTorch model via " +
      "FastAPI backend, designing a scalable system architecture for " +
      "automated invoice processing for the Vietnamese language.",
    ],
    skills: [
      "Machine Learning",
      "PyTorch",
      "Express",
      "Node.js",
      "FastAPI",
      "Image Processing (OpenCV, Sharp)",
      "Python",
      "JavaScript/TypeScript",
      "React",
      "Hugging Face Transformers",
      "Computer Vision",
      "Data Annotation",
      "Deep Learning",
      "Jupyter Notebook",
      "Natural Language Processing",
      "Data Processing (Pandas, Polars)",
    ],
    slidesUrl:
      "https://drive.google.com/file/d/1I7TDQ73osCg6QX-hnpNC-Pq2x_eHn2fs" +
      "/view?usp=drive_link",
    reportUrl:
      "https://drive.google.com/file/d/1jpssMAcYcMVVe-HiFcGPxjpOS8bXmUIR" +
      "/view?usp=drive_link",
    codeUrl:
      "https://github.com/hnthap/invoice_extraction_webapp/blob/main/HOW.md",
    demoTitle: "Demo Video",
    demoUrl: "https://youtu.be/bJuKjnQJpw0",
    imageUrl: "./images/invoice.png",
    rating: "normal",
  },
  {
    title: "Graduation Exam Scores Lookup Website",
    time: "Mar 2025",
    bullets: [
      "Developed a full-stack web application using Django, MySQL, and " +
      "Docker to facilitate the lookup of high school graduation exam scores.",
      "Designed a user-friendly frontend with HTML, CSS, and JavaScript, " +
      "integrating JQuery for enhanced interactivity.",
      "Containerized the application components using Docker Compose for " +
      "easy deployment and scalability.",
    ],
    skills: [
      "Docker",
      "Django",
      "Python",
      "JavaScript/TypeScript",
      "jQuery",
      "SQL (MySQL, PostgreSQL, SQLite)",
      "HTML/CSS",
      "Data Processing (Pandas, Polars)",
      "CI/CD",
    ],
    codeUrl: "https://github.com/hnthap/g-scores",
    demoTitle: "Demo Video",
    demoUrl: "https://youtu.be/C-cNHqDPkus",
    imageUrl: "./images/g-scores.png",
    rating: "good",
  },
  {
    title: "Vietnamese News Summarization",
    time: "Sep 2024 - Dec 2024",
    bullets: [
      "Built an automated filtering pipeline that reduced 390,000 raw " +
      "Vietnamese news articles to 1,819 high-quality article-summary pairs, " +
      "tuning the filter thresholds by Bayesian optimization against " +
      "human-annotated samples.",
      "Fine-tuned ViT5 and FLAN-T5 on the resulting dataset, more than " +
      "doubling summary quality over the untrained baseline, and deployed a " +
      "demo on Hugging Face Spaces."
    ],
    skills: [
      "Data Science",
      "Machine Learning",
      "PyTorch",
      "Python",
      "Hugging Face Transformers",
      "Chatbot Development",
      "Data Annotation",
      "Deep Learning",
      "FAISS",
      "Jupyter Notebook",
      "Natural Language Processing",
      "Data Processing (Pandas, Polars)",
    ],
    slidesUrl:
      "https://drive.google.com/file/d/16hb5M3BwaEw5d-DjmXmDH1uEWlX3QCqT/" +
      "view?usp=drive_link",
    reportUrl:
      "https://drive.google.com/file/d/1dYaA8Rr9bVySz6Hd_QM6blr1JcbPDhqF/" +
      "view?usp=drive_link",
    codeUrl:
      "https://drive.google.com/drive/folders/" +
      "1dNgeJpC1PNhGJQMVk3M42G8yWTyOMN82?usp=drive_link",
    demoUrl:
      "https://huggingface.co/spaces/hnthap/vietnamese-news-summary-ds310",
    demoTitle: "Live Demo",
    imageUrl: "./images/newspaper.jpg",
    rating: "good",
  },
  {
    title: "Automated Vietnamese Cake Recognition",
    time: "Feb 2024 - Jun 2024",
    bullets: [
      "Engineered and optimized image crawling and annotation workflows, " +
      "resulting in a significant 80% reduction in manual data " +
      "preparation through automation.",
      "Fine-tuned and deployed a Deep Learning Computer Vision system " +
      "using YOLO architecture, achieving 85% precision in " +
      "classifying Vietnamese traditional cakes from diverse image " +
      "inputs.",
    ],
    skills: [
      "Data Science",
      "Machine Learning",
      "PyTorch",
      "Image Processing (OpenCV, Sharp)",
      "Python",
      "Roboflow",
      "Computer Vision",
      "Data Annotation",
      "Deep Learning",
      "Jupyter Notebook",
    ],
    slidesUrl:
      "https://drive.google.com/file/d/1-5jURgTwwV66E3Zua72qqzA45jGtItxL/" +
      "view?usp=sharing",
    reportUrl:
      "https://drive.google.com/file/d/1-0SDqFiH6n_nqQSmKLa820_a17C3AnBJ/" +
      "view?usp=sharing",
    codeUrl: "https://huggingface.co/spaces/hnthap/banh-detector/blob/main",
    demoUrl: "https://huggingface.co/spaces/hnthap/banh-detector",
    demoTitle: "Live Demo",
    imageUrl: "./images/banh-chung.jpg",
    rating: "good",
  },
  {
    title: "Car Simulator",
    time: "Feb 2024 - Jun 2024",
    bullets: [
      "Collaborated on developing server-side logic and data management " +
      "for a web-based application, optimizing performance through " +
      "efficient architecture and collaborative debugging processes.",
      "Designed and deployed a browser-based 3D car simulator with HTML, " +
      "CSS and JavaScript (Three.js and React) via Vite, enabling user " +
      "controls and interactive features.",
    ],
    skills: [
      "Vite",
      "Three.js",
      "React",
      "JavaScript/TypeScript",
      "HTML/CSS",
      "Node.js",
    ],
    slidesUrl:
      "https://drive.google.com/file/d/14KZkozAyX3mRFBQ9f_wKTnI6Em2HSJBr/" +
      "view?usp=sharing",
    codeUrl: "https://github.com/hnthap/car-ride",
    demoUrl: "https://pariscar.netlify.app/",
    demoTitle: "Live Demo",
    imageUrl: "./images/car-ride.png",
    rating: "normal",
  },
  {
    title: "Restaurant Review Aspect-Based Sentiment Analysis",
    time: "Sep 2023 - Dec 2023",
    bullets: [
      "Engineered multiple sentiment analysis models, leveraging " +
      "fine-tuned PhoBERT and XLM-R weights within customized " +
      "architectures, to categorize over 1,000 Vietnamese restaurant " +
      "reviews by different aspects such as food and service quality.",
      "Improved classification accuracy by 20% over existing techniques " +
      "through the strategic integration of enhanced input features.",
    ],
    skills: [
      "Data Science",
      "Machine Learning",
      "PyTorch",
      "Python",
      "Data Annotation",
      "Deep Learning",
      "Hugging Face Transformers",
      "Jupyter Notebook",
      "Natural Language Processing",
      "Data Processing (Pandas, Polars)",
    ],
    slidesUrl:
      "https://docs.google.com/presentation/d/" +
      "1-B0lUp_bwJfTAGg683bCA0WwZpu8AOZc",
    reportUrl:
      "https://drive.google.com/file/d/" +
      "1-ALRI-lJoqmjclAIVaTo1CRRwinX-EPr/view?usp=sharing",
    imageUrl: "./images/restaurant.jpeg",
    rating: "normal",
  },
  {
    title: "ChipPiano: Cross-Platform Piano Synthesizer",
    time: "Sep 2025",
    bullets: [
      "Wrote a polyphonic synthesizer in C99, mixing up to 10 simultaneous " +
      "oscillators through SDL3's real-time audio API at a 512-sample buffer.",
      "Mapped a 46-key visual keyboard onto QWERTY input, with sustain pedal " +
      "simulation and automatic note cleanup when the window loses focus.",
      "Built with CMake and Conan for reproducible cross-platform compilation.",
    ],
    skills: ["C/C++", "Desktop Development"],
    codeUrl: "https://github.com/hnthap/chip-piano",
    imageUrl: "./images/chip-piano.png",
    rating: "good",
  },
  {
    title: "Barebonesim: Educational Barebone Compiler",
    time: "Feb 2023 - Jun 2023",
    bullets: [
      "Built a parser and interpreter for the Barebone teaching language, " +
      "compiling source into an abstract syntax tree and executing it against " +
      "an isolated variable state.",
      "Wrapped it in a Java Swing desktop IDE with file management, syntax " +
      "beautification, and a snippets library, so students could run code and " +
      "watch variable values change instead of tracing it on paper.",
      "Ran execution on a separate thread with a configurable timeout, since " +
      "the language's only control flow is a while loop and infinite loops " +
      "are easy to write by accident.",
    ],
    skills: ["Java", "Gradle", "Desktop Development"],
    slidesUrl:
      "https://docs.google.com/presentation/d/" +
      "1-YqRb4C5tWUJo3MegXoxBurtoQWV5AC3/edit?usp=drive_link",
    codeUrl: "https://github.com/hnthap/barebonesim",
    demoUrl:
      "https://drive.google.com/file/d/1y-IIQErBsdHo7xsg7t01xQNsanJs-bAM/" +
      "view?usp=drive_link",
    demoTitle: "Live Demo",
    imageUrl: "./images/barebonesim.png",
    rating: "normal",
  },
  {
    title: "Personal Portfolio Website",
    time: "Nov 2021 - Present",
    bullets: [
      "Developed a responsive personal website with modular components to showcase education, certificates, and projects.",
      "Implemented project search/filtering and integrated GitHub API for live repository statistics.",
      "Added dark mode with persistent user settings using localStorage.",
    ],
    skills: [
      "JavaScript/TypeScript",
      "jQuery",
      "HTML/CSS",
      "Responsive Design",
    ],
    codeUrl: "https://github.com/hnthap/hnthap.github.io",
    demoUrl: "https://hnthap.github.io/",
    demoTitle: "Live Site",
    imageUrl: "./images/portfolio.png",
    rating: "normal",
  },
];

/**
 * @type {Pick<ProjectItem, "title" | "bullets" | "skills">[]}
 */
// @ts-ignore
const LowerCasedProjects = Projects.map((project) => {
  const obj = {
    title: project.title.toLowerCase(),
    bullets: project.bullets.map(() => ""),
    skills: project.skills.map(() => ""),
  };
  for (let i = 0; i < project.bullets.length; i += 1) {
    obj.bullets[i] = project.bullets[i].toLowerCase();
  }
  for (let i = 0; i < project.skills.length; i += 1) {
    //@ts-ignore
    obj.skills[i] = project.skills[i].toLowerCase();
  }
  return obj;
});

const CountedSkills = new Map(
  [
    ...SkillNames.reduce((obj, skill) => {
      const count = Projects.filter((p) => p.skills.includes(skill)).length;
      if (count > 0) {
        obj.set(skill, count);
      }
      return obj;
    }, new Map()).entries(),
  ].sort((a, b) => {
    if (b[1] === a[1]) {
      return a[0].localeCompare(b[0]);
    }
    return b[1] - a[1];
  })
);
