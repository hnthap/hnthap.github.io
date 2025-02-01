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
 * }} ProjectItem
 */

/** @type {ProjectItem[]} */
const Projects = [
  {
    title: "Furniture Commercial App",
    time: "Sep 2024 - Dec 2024",
    bullets: [
      "Implemented a customer-focused commercial mobile app specialized in " +
        "furniture products.",
      "Made the app cross-platform by implementing it using React Native " +
        "and server–client architecture.",
    ],
    skills: [
      "React Native",
      "Express",
      "SQL",
      "JavaScript/TypeScript",
      "SQLite",
    ],
    slidesUrl:
      "https://docs.google.com/presentation/d/" +
      "1sAqUDdmubmH0FZT7Eq6QeORNJZPQ55Pa",
    reportUrl:
      "https://drive.google.com/file/d/" +
      "1oORJHgGCogJYi_fdawhnqS6RGpzm25Ao/view?usp=sharing",
    codeUrl: "https://github.com/hnthap/furniture_selling_app",
    imageUrl: "./images/furniture-app.png",
  },
  {
    title: "Vietnamese Invoice Information Extraction",
    time: "Sep 2024 - Dec 2024",
    bullets: [
      "Implemented and trained a model that extracts necessary information " +
        "from invoices in Vietnamese, referencing recent advanced researches.",
    ],
    skills: [
      "Machine Learning",
      "PyTorch",
      "Express",
      "FastAPI",
      "OpenCV",
      "Python",
      "JavaScript/TypeScript",
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
  },
  {
    title: "Vietnamese News Summarization",
    time: "Sep 2024 - Dec 2024",
    bullets: [
      "Proposed new methods to filter existing news dataset to automatically " +
        "create a high-quality and abstractive news summarization dataset " +
        "(consisting of pairs of news articles and their corresponding " +
        "summaries) for Vietnamese specifically.",
      "Trained and deployed existing benchmark language models on the " +
        "created summarization dataset; proved the dataset quality " +
        "through the trained models’ evaluation.",
      "Proposed an annotating guideline for parts that require human " +
        "annotation in the data creation pipeline.",
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
  },
  {
    title: "Vietnamese Cake Detection",
    time: "Feb 2024 - Jun 2024",
    bullets: [
      "Trained and deployed an AI model that detects the position and type " +
        "of Vietnamese cakes (e.g., banh chung, banh gio) from images " +
        "quickly and accurately.",
      "Designed a tool to crawled images from the Internet automatically; " +
        "helped reducing manual work.",
      "Proposed an annotating guideline for labeling the crawled images; " +
        "improved the training data quality.",
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
  },
  {
    title: "Credit Risk Detection",
    time: "Feb 2024 - Jun 2024",
    bullets: [
      "Trained a model that predicts whether a client will default based on " +
        "existing data.",
    ],
    skills: ["Data Science", "Machine Learning", "Python"],
    slidesUrl:
      "https://drive.google.com/file/d/1JJEstjS3JJbvpblhkf5ryf9Fw9z4C8WT/" +
      "view?usp=sharing",
    reportUrl:
      "https://www.kaggle.com/code/huynhnhanthap/home-credit-2024-p4ml" +
      "?scriptVersionId=219006927",
    imageUrl: "./images/bank.jpeg",
  },
  {
    title: "Car Simulator",
    time: "Feb 2024 - Jun 2024",
    bullets: [
      "Designed and deployed a car simulator running directly on browsers, " +
        "where users can ride a car on a 3D landscape that introduces " +
        "various famous buildings from Paris.",
    ],
    skills: ["Vite", "ThreeJS", "React", "JavaScript/TypeScript"],
    slidesUrl:
      "https://drive.google.com/file/d/14KZkozAyX3mRFBQ9f_wKTnI6Em2HSJBr/" +
      "view?usp=sharing",
    codeUrl: "https://github.com/hnthap/car-ride",
    demoUrl: "https://pariscar.netlify.app/",
    demoTitle: "Live Demo",
    imageUrl: "./images/car-ride.png",
  },
  {
    title: "Restaurant Review Aspect-Based Sentiment Analysis",
    time: "Sep 2023 - Dec 2023",
    bullets: [
      "Created an AI model that classifies restaurant reviews into " +
        "“positive”, “neutral” or “negative” based on multiple aspects.",
    ],
    skills: ["Data Science", "Machine Learning", "PyTorch", "Python"],
    slidesUrl:
      "https://docs.google.com/presentation/d/" +
      "1-B0lUp_bwJfTAGg683bCA0WwZpu8AOZc",
    reportUrl:
      "https://drive.google.com/file/d/" +
      "1-ALRI-lJoqmjclAIVaTo1CRRwinX-EPr/view?usp=sharing",
    imageUrl: "./images/restaurant.jpeg",
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
  },
  {
    title: "Barebonesim: Educational Barebone Compiler",
    time: "Feb 2023 - Jun 2023",
    bullets: [
      "Designed a desktop code editor to run the Barebone programming " +
        "language for educational use.",
      "Developed an easy-to-use cross-platform application using Java and " +
        "JavaFX.",
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
  },
];

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
