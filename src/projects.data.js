/**
 * @typedef { |
 * "C/C++" |
 * "Data Science" |
 * "Docker" |
 * "Express" |
 * "FastAPI" |
 * "Gradle" |
 * "Java" |
 * "JavaScript/TypeScript" |
 * "Keras" |
 * "Machine Learning" |
 * "Netlify" |
 * "OpenCV" |
 * "Python" |
 * "PyTorch" |
 * "React" |
 * "React Native" |
 * "SQL" |
 * "SQLite" |
 * "TensorFlow" |
 * "ThreeJS" |
 * "Vite"
 * } SkillName
 *
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
 *  featured: boolean;
 * }} ProjectItem
 */

/** @type {ProjectItem[]} */
const Projects = [
  // {
  //   title: "Furniture Commercial App",
  //   time: "Sep 2024 - Dec 2024",
  //   bullets: [
  //     "Implemented a customer-focused commercial mobile app specialized in " +
  //       "furniture products.",
  //     "Made the app cross-platform by implementing it using React Native " +
  //       "and server–client architecture.",
  //   ],
  //   skills: [
  //     "React Native",
  //     "Express",
  //     "SQL",
  //     "JavaScript/TypeScript",
  //     "SQLite",
  //   ],
  //   slidesUrl:
  //     "https://docs.google.com/presentation/d/" +
  //     "1sAqUDdmubmH0FZT7Eq6QeORNJZPQ55Pa",
  //   reportUrl:
  //     "https://drive.google.com/file/d/" +
  //     "1oORJHgGCogJYi_fdawhnqS6RGpzm25Ao/view?usp=sharing",
  //   codeUrl: "https://github.com/hnthap/furniture_selling_app",
  //   imageUrl: "./images/furniture-app.png",
  // },
  {
    title: "Lunar Calendar API",
    time: "2024",
    bullets: [
      "Converting between the Gregorian and Lunar calendars.",
      "Built on top of the astronomical formulae from " +
        "Astronomical Algorithms by Jean Meeus (1998) and Ho Ngoc Duc's " +
        "Lunar calendar calculator.",
    ],
    skills: ["Express", "JavaScript/TypeScript"],
    codeUrl: "https://github.com/hnthap/lunar-calendar-api",
    imageUrl: "./images/earth-moon.jpg",
    featured: false,
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
      "FastAPI",
      "OpenCV",
      "Python",
      "JavaScript/TypeScript",
      "React",
    ],
    slidesUrl:
      "https://drive.google.com/file/d/1I7TDQ73osCg6QX-hnpNC-Pq2x_eHn2fs" +
      "/view?usp=drive_link",
    reportUrl:
      "https://drive.google.com/file/d/1jpssMAcYcMVVe-HiFcGPxjpOS8bXmUIR" +
      "/view?usp=drive_link",
    codeUrl:
      "https://github.com/hnthap/invoice_extraction_webapp/blob/main/HOW.md",
    imageUrl: "./images/invoice.png",
    featured: false,
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
    skills: ["Machine Learning", "PyTorch", "OpenCV", "Python"],
    slidesUrl:
      "https://docs.google.com/presentation/d/1P3X8SyoZfiytYj8HwVwnjtI3T-AKdH95",
    reportUrl:
      "https://drive.google.com/file/d/1JCNF6CMXpz3MmppEYjouoJGU-GOk3EWh/" +
      "view?usp=drive_link",
    codeUrl:
      "https://drive.google.com/drive/folders/" +
      "1k9TDxe0B1_S9GE9-no3fibkioHcFdwk_?usp=drive_link",
    imageUrl: "./images/sign-language.jpg",
    featured: false,
  },
  {
    title: "Vietnamese News Summarization",
    time: "Sep 2024 - Dec 2024",
    bullets: [
      "Created a Vietnamese news summarization dataset from 100,000+ " +
        "unfiltered news articles using rigorous automated quality " +
        "checks that resulted in 1,800 high-quality article–summary " +
        "pairs, which were evaluated by fine-tuning Deep Learning " +
        "models. Researched existing automated summarization methods " +
        "for Vietnamese.",
      "Achieved a 25% improvement in ROUGE-L scores and 23% increase in " +
        "BERTScore Recall on fine-tuned T5 models. " +
        "Deployed a complete chatbot with the trained model.",
      // "Developed a high-quality news summarization dataset specific to " +
      //   "Vietnamese.",
      // "Optimized the filtering process, improving efficiency by 30% and " +
      //   "enhancing data quality.",
      // "Trained and deployed benchmark language models on the dataset, " +
      //   "achieving 20% improvement in key evaluation metrics.",
      // "Proposed new methods to filter existing news dataset to automatically " +
      //   "create a high-quality and abstractive news summarization dataset " +
      //   "(consisting of pairs of news articles and their corresponding " +
      //   "summaries) for Vietnamese specifically.",
      // "Trained and deployed existing benchmark language models on the " +
      //   "created summarization dataset; proved the dataset quality " +
      //   "through the trained models’ evaluation.",
      // "Proposed an annotating guideline for parts that require human " +
      //   "annotation in the data creation pipeline.",
    ],
    skills: ["Data Science", "Machine Learning", "PyTorch", "Python"],
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
    featured: true,
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
      // "Developed and deployed an AI model to accurately detect the position" +
      //   "and type of Vietnamese cakes (e.g., banh chung, banh gio) from images" +
      //   "with 85% precision.",
      // "Designed an automatic tool for crawling images from the Internet, " +
      //   "significantly reducing manual labor and improving data collection " +
      //   "efficiency by 80%.",
      // "Proposed and implemented a detailed annotating guideline for labeling " +
      //   "training images, enhancing the quality of the training data.",
      // "Trained and deployed an AI model that detects the position and type " +
      //   "of Vietnamese cakes (e.g., banh chung, banh gio) from images " +
      //   "quickly and accurately.",
      // "Designed a tool to crawled images from the Internet automatically; " +
      //   "helped reducing manual work.",
      // "Proposed an annotating guideline for labeling the crawled images; " +
      //   "improved the training data quality.",
    ],
    skills: ["Data Science", "Machine Learning", "PyTorch", "OpenCV", "Python"],
    slidesUrl:
      "https://drive.google.com/file/d/1-5jURgTwwV66E3Zua72qqzA45jGtItxL/" +
      "view?usp=sharing",
    reportUrl:
      "https://drive.google.com/file/d/1-0SDqFiH6n_nqQSmKLa820_a17C3AnBJ/" +
      "view?usp=sharing",
    codeUrl:
      "https://www.kaggle.com/code/huynhnhanthap/banh-detection-with-yolo",
    demoUrl: "https://huggingface.co/spaces/hnthap/banh-detector",
    demoTitle: "Live Demo",
    imageUrl: "./images/banh-chung.jpg",
    featured: true,
  },
  {
    title: "Part-of-Speech Tagging for Vietnamese",
    time: "Feb 2024 - Jun 2024",
    bullets: [
      "Trained some Part-of-Speech tagging models on Vietnamese text, " +
        "involving some pre-processing techniques specifically for Vietnamese.",
    ],
    skills: ["Data Science", "Machine Learning", "Python"],
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
    featured: false,
  },
  // {
  //   title: "Credit Risk Detection",
  //   time: "Feb 2024 - Jun 2024",
  //   bullets: [
  //     "Trained a model that predicts whether a client will default based on " +
  //       "existing data.",
  //   ],
  //   skills: ["Data Science", "Machine Learning", "Python"],
  //   slidesUrl:
  //     "https://drive.google.com/file/d/1JJEstjS3JJbvpblhkf5ryf9Fw9z4C8WT/" +
  //     "view?usp=sharing",
  //   reportUrl:
  //     "https://www.kaggle.com/code/huynhnhanthap/home-credit-2024-p4ml" +
  //     "?scriptVersionId=219006927",
  //   imageUrl: "./images/bank.jpeg",
  // },
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
      // "Designed and deployed a car simulator running directly on browsers, " +
      //   "where users can ride a car on a 3D landscape that introduces " +
      //   "various famous buildings from Paris.",
    ],
    skills: ["Vite", "ThreeJS", "React", "JavaScript/TypeScript"],
    slidesUrl:
      "https://drive.google.com/file/d/14KZkozAyX3mRFBQ9f_wKTnI6Em2HSJBr/" +
      "view?usp=sharing",
    codeUrl: "https://github.com/hnthap/car-ride",
    demoUrl: "https://pariscar.netlify.app/",
    demoTitle: "Live Demo",
    imageUrl: "./images/car-ride.png",
    featured: false,
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
      // "Developed an aspect-based sentiment analysis model for restaurant " +
      //   "reviews in Vietnamese.",
      // "Implemented advanced natural language processing techniques to " +
      //   "improve sentiment classification accuracy.",
      // "Created an AI model that classifies restaurant reviews into " +
      //   "“positive”, “neutral” or “negative” based on multiple aspects.",
    ],
    skills: ["Data Science", "Machine Learning", "PyTorch", "Python"],
    slidesUrl:
      "https://docs.google.com/presentation/d/" +
      "1-B0lUp_bwJfTAGg683bCA0WwZpu8AOZc",
    reportUrl:
      "https://drive.google.com/file/d/" +
      "1-ALRI-lJoqmjclAIVaTo1CRRwinX-EPr/view?usp=sharing",
    imageUrl: "./images/restaurant.jpeg",
    featured: true,
  },
  {
    title: "Image Restoration Model",
    time: "Sep 2023 - Dec 2023",
    bullets: [
      "Implemented an image restoration model based on learning " +
        "distortion invariant representation from a causality perspective.",
    ],
    skills: ["Machine Learning", "PyTorch", "OpenCV", "Python"],
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
    featured: false,
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
      // "Designed a desktop code editor to run the Barebone programming " +
      //   "language for educational use.",
      // "Developed an easy-to-use cross-platform application using Java and " +
      //   "JavaFX.",
    ],
    skills: ["Gradle", "Java"],
    slidesUrl:
      "https://docs.google.com/presentation/d/" +
      "1-YqRb4C5tWUJo3MegXoxBurtoQWV5AC3/edit?usp=drive_link",
    codeUrl: "https://github.com/hnthap/barebonesim",
    demoUrl:
      "https://drive.google.com/file/d/1y-IIQErBsdHo7xsg7t01xQNsanJs-bAM/" +
      "view?usp=drive_link",
    demoTitle: "Live Demo",
    imageUrl: "./images/barebonesim.png",
    featured: false,
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

/** @type {SkillName[]} */
const ShownSkills = [
  "Data Science",
  "Machine Learning",
  "Docker",
  "React Native",
  "React",
  "Express",
  "FastAPI",
  "SQL",
  // "C/C++",
  "Java",
];
