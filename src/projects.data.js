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
 * "Chatbot Development" |
 * "Computer Vision" |
 * "Data Annotation" |
 * "Data Science" |
 * "Deep Learning" |
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
    title: "Image to Base64 Converter",
    time: "Sep 2025",
    bullets: [
      "Developed a user-friendly web application that converts images to Base64 strings using HTML, CSS, and JavaScript, ensuring privacy by processing images locally in the browser.",
      "Implemented drag-and-drop functionality, responsive design, and real-time previews for enhanced user experience.",
    ],
    skills: ["JavaScript/TypeScript", "HTML/CSS", "Responsive Design"],
    codeUrl: "https://github.com/hnthap/image-to-base64",
    demoUrl: "https://hnthap.github.io/image-to-base64/",
    demoTitle: "Live Demo",
    imageUrl: "./images/image-to-base64.png",
    rating: "normal",
  },
  {
    title: "DocuChat: Modular RAG System with LangChain and PGVector",
    time: "Jun 2025 - Aug 2025",
    bullets: [
      "Built a complete Retrieval-Augmented Generation (RAG) system using LangChain and PGVector, enabling question-answering over custom documents with both CLI and web interfaces.",
      "Implemented an efficient data ingestion pipeline with content deduplication to saving time and computational resources.",
      "Containerized the PostgreSQL database with pgvector extension using Docker Compose for easy setup and scalability.",
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
    ],
    codeUrl: "https://github.com/hnthap/docu-chat",
    imageUrl: "./images/docuchat.png",
    rating: "good",
  },
  {
    title: "WordPress Development Environment with Docker",
    time: "Aug 2025",
    bullets: [
      "Built multi-service Docker environment with WordPress, " +
        "MySQL and phpMyAdmin.",
      "Wrote custom image that automatically resolves WordPress " +
        "file permission issues - show ability to identify real-world " +
        "deployment problems and implement technical solutions.",
      "Designed loosely-coupled architecture with proper dependency " +
        "management and created comprehansive technical " +
        "documentation - demonstrates understanding  of scalable " +
        "system design.",
    ],
    skills: ["Docker", "SQL (MySQL, PostgreSQL, SQLite)", "WordPress"],
    codeUrl: "https://github.com/hnthap/wordpress-docker",
    imageUrl: "./images/wordpress-blue.png",
    rating: "normal",
  },
  {
    title: "Cat or Dog? (Image Classifier Website)",
    time: "Jul 2025 - Aug 2025",
    bullets: [
      "Engineered a full-stack web application with React, Node.js, " +
        "and Docker, delivering seamless image classification functionality.",
      "Designed, trained, and deployed a custom machine learning model " +
        "using OpenVINO Model Server, achieving real-time inference with " +
        "optimized preprocessing pipelines.",
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
    ],
    codeUrl: "https://github.com/hnthap/cat-or-dog",
    imageUrl: "./images/cat-or-dog.png",
    rating: "featured",
  },
  {
    title: "Lunar Calendar API",
    time: "Jun 2025 - Aug 2025",
    bullets: [
      "Developed a robust API for converting between Gregorian and Lunar calendars, utilizing advanced astronomical algorithms to ensure high accuracy.",
      "Implemented the API using Node.js and Express, with TypeScript for type safety and maintainability.",
      "Deployed the API on Netlify, ensuring scalability and reliability for global users.",
    ],
    skills: [
      "Express",
      "JavaScript/TypeScript",
      "Netlify",
      "Docker",
      "Node.js",
      "HTML/CSS",
    ],
    codeUrl: "https://github.com/hnthap/lunar-calendar-api",
    demoUrl: "https://hnthap.github.io/lunar-calendar-converter-interface",
    imageUrl: "./images/lunar-calendar.png",
    demoTitle: "Live Demo",
    rating: "good",
  },
  {
    title: "Furniture Commercial App",
    time: "Sep 2024 - Dec 2024",
    bullets: [
      "Implemented a customer-focused commercial mobile app specialized in " +
        "furniture products.",
      "Made the app cross-platform by implementing it using React Native " +
        "and server-client architecture.",
    ],
    skills: [
      "React Native",
      "Express",
      "SQL (MySQL, PostgreSQL, SQLite)",
      "JavaScript/TypeScript",
      "Node.js",
      "Android Development",
    ],
    slidesUrl:
      "https://docs.google.com/presentation/d/" +
      "1sAqUDdmubmH0FZT7Eq6QeORNJZPQ55Pa",
    reportUrl:
      "https://drive.google.com/file/d/" +
      "1oORJHgGCogJYi_fdawhnqS6RGpzm25Ao/view?usp=sharing",
    codeUrl: "https://github.com/hnthap/furniture_selling_app",
    imageUrl: "./images/furniture-app.png",
    rating: "normal",
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
    ],
    codeUrl: "https://github.com/hnthap/g-scores",
    demoTitle: "Demo Video",
    demoUrl: "https://youtu.be/C-cNHqDPkus",
    imageUrl: "./images/g-scores.png",
    rating: "good",
  },
  {
    title: "Sign Language Video-to-Text Translation",
    time: "Sep 2024 - Dec 2024",
    bullets: [
      "Implemented and trained an AI model that translates word-level sign " +
        "language video to text.",
      "Proposed a method to show the effectiveness of Attention mechanism in " +
        "Sign Language Recognition.",
    ],
    skills: [
      "Machine Learning",
      "PyTorch",
      "Image Processing (OpenCV, Sharp)",
      "Python",
      "Computer Vision",
      "Deep Learning",
      "Jupyter Notebook",
      "Natural Language Processing",
    ],
    slidesUrl:
      "https://docs.google.com/presentation/d/1P3X8SyoZfiytYj8HwVwnjtI3T-AKdH95",
    reportUrl:
      "https://drive.google.com/file/d/1JCNF6CMXpz3MmppEYjouoJGU-GOk3EWh/" +
      "view?usp=drive_link",
    codeUrl:
      "https://drive.google.com/drive/folders/" +
      "1k9TDxe0B1_S9GE9-no3fibkioHcFdwk_?usp=drive_link",
    imageUrl: "./images/sign-language.jpg",
    rating: "normal",
  },
  {
    title: "Vietnamese News Summarization",
    time: "Sep 2024 - Dec 2024",
    bullets: [
      "Created a Vietnamese news summarization dataset from 100,000+ " +
        "unfiltered news articles using rigorous automated quality " +
        "checks that resulted in 1,800 high-quality article-summary " +
        "pairs, which were evaluated by fine-tuning Deep Learning " +
        "models. Researched existing automated summarization methods " +
        "for Vietnamese.",
      "Achieved a 25% improvement in ROUGE-L scores and 23% increase in " +
        "BERTScore Recall on fine-tuned T5 models. " +
        "Deployed a complete chatbot with the trained model.",
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
    rating: "featured",
  },
  {
    title: "Automated Vietnamese Cake Recognition",
    time: "Feb 2024 - Jun 2024",
    bullets: [
      "Fine-tuned and deployed a Deep Learning Computer Vision system " +
        "using YOLO architecture, achieving 85% precision in " +
        "classifying Vietnamese traditional cakes from diverse image " +
        "inputs.",
      "Engineered and optimized image crawling and annotation workflows, " +
        "resulting in a significant 80% reduction in manual data " +
        "preparation through automation.",
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
    rating: "featured",
  },
  {
    title: "Part-of-Speech Tagging (Vietnamese)",
    time: "Feb 2024 - Jun 2024",
    bullets: [
      "Trained some Part-of-Speech tagging models on Vietnamese text, " +
        "involving some pre-processing techniques specifically for Vietnamese.",
    ],
    skills: [
      "Data Science",
      "Machine Learning",
      "Python",
      "Jupyter Notebook",
      "Natural Language Processing",
      "Data Processing (Pandas, Polars)",
    ],
    slidesUrl:
      "https://drive.google.com/file/d/1TBT_A6GWrbcLw_mAWxuF0Y6Myps2j8X1/" +
      "view?usp=sharing",
    reportUrl:
      "https://drive.google.com/file/d/1tcC4gq5ktM52iwwZcQd-KkGB4hVcpEQ-/" +
      "view?usp=sharing",
    codeUrl:
      "https://drive.google.com/drive/folders/" +
      "1dm4MOiApQpBSxboqekLIUiBqmIMf8r_v?usp=sharing",
    imageUrl: "./images/gia-dinh-bao.jpg",
    rating: "normal",
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
    rating: "good",
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
    title: "Image Restoration Model",
    time: "Sep 2023 - Dec 2023",
    bullets: [
      "Implemented an image restoration model based on learning " +
        "distortion invariant representation from a causality perspective.",
    ],
    skills: [
      "Machine Learning",
      "PyTorch",
      "Image Processing (OpenCV, Sharp)",
      "Python",
      "Computer Vision",
      "Jupyter Notebook",
    ],
    slidesUrl:
      "https://drive.google.com/file/d/1-5rqSBSeOo3K-jC7c_PgyeoHJN81aI-2/" +
      "view?usp=sharing",
    reportUrl:
      "https://drive.google.com/file/d/1-ABMXjtI8rT7DRKgJfFt3lOkeKOW6teJ/" +
      "view?usp=sharing",
    codeUrl:
      "https://drive.google.com/drive/folders/" +
      "1uWM8kABuaLsFAV2Cq2pYAaEDAiNQBBmC?usp=sharing",
    imageUrl: "./images/distortion.jpg",
    rating: "normal",
  },
  {
    title: "Barebonesim: Educational Barebone Compiler",
    time: "Feb 2023 - Jun 2023",
    bullets: [
      "Designed a cross-platform desktop code editor using Java and " +
        "JavaFX to support the BareBone programming language for " +
        "educational purposes; utilizing various types of controls " +
        "and components for a fully functional, easy-to-use UI.",
      "Directed the project timeline and resources, identifying and " +
        "implementing key enhancements.",
    ],
    skills: ["Gradle", "Java", "JavaFX"],
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
    title: "Primality Test",
    time: "2022",
    bullets: [
      "Developed an efficient primality test web app using modern JavaScript " +
        "and algorithmic optimization techniques.",
      "Demonstrated expertise in frontend engineering, UI design, and " +
        "mathematical problem solving through end-to-end deployment of an " +
        "interactive number theory tool.",
    ],
    skills: ["JavaScript/TypeScript", "HTML/CSS"],
    codeUrl: "https://github.com/hnthap/primality",
    demoUrl: "https://hnthap.github.io/primality/",
    demoTitle: "Live Demo",
    imageUrl: "./images/primality-test.png",
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
    rating: "good",
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
