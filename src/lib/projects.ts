
import { PlaceHolderImages } from "./placeholder-images";

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  challenges: string;
  outcomes: string;
  imageUrl: string;
  imageHint: string;
  link: string;
  github: string;
};

const getProjectImage = (id: string) => {
  const img = PlaceHolderImages.find(i => i.id === id);
  return {
    url: img?.imageUrl || "",
    hint: img?.imageHint || ""
  };
};

export const projects: Project[] = [
  {
    id: "churn-prediction",
    title: "Bank Customer Churn Prediction using Machine Learning",
    description: "Built a machine learning solution to predict customer churn for a retail banking dataset by analyzing demographic, behavioral, and account-level features.",
    longDescription: "Built a machine learning solution to predict customer churn for a retail banking dataset by analyzing demographic, behavioral, and account-level features. Performed feature engineering, model comparison, and evaluation using business-relevant metrics to identify high-risk customers and support retention strategies.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "SHAP"],
    challenges: "Handling imbalanced datasets and selecting the most impactful features from a high-dimensional feature space.",
    outcomes: "Developed a robust prediction model that successfully identified churn risk with high precision, allowing targeted retention campaigns.",
    imageUrl: getProjectImage("churn-prediction").url,
    imageHint: getProjectImage("churn-prediction").hint,
    link: "#",
    github: "#"
  },
  {
    id: "stock-forecasting",
    title: "Deep Learning–Based Stock Price Forecasting System",
    description: "Designed a deep learning–based time-series forecasting system using CNN, BiLSTM, and GRU architectures to capture temporal patterns.",
    longDescription: "Designed a deep learning–based time-series forecasting system using CNN, BiLSTM, and GRU architectures to capture temporal patterns in historical stock data. Evaluated multiple neural architectures to improve prediction accuracy and analyze short- and long-term market trends.",
    technologies: ["Python", "TensorFlow", "Keras", "CNN", "BiLSTM", "GRU", "Time Series"],
    challenges: "Capturing non-linear temporal dependencies in volatile market data and preventing model overfitting.",
    outcomes: "Achieved significant improvements in mean absolute error compared to baseline statistical models.",
    imageUrl: getProjectImage("stock-forecasting").url,
    imageHint: getProjectImage("stock-forecasting").hint,
    link: "#",
    github: "#"
  },
  {
    id: "restaurant-rec",
    title: "Personalized Restaurant Recommendation System",
    description: "Developed a recommendation system using the Yelp dataset to suggest restaurants based on user preferences, cuisine types, and location.",
    longDescription: "Developed a recommendation system using the Yelp dataset to suggest restaurants based on user preferences, cuisine types, and location. Implemented collaborative filtering and content-based techniques to deliver personalized dining recommendations.",
    technologies: ["Python", "Recommender Systems", "Collaborative Filtering", "NLP"],
    challenges: "Addressing the 'cold start' problem for new users and scaling the system for a large dataset of reviews.",
    outcomes: "Successfully delivered highly relevant restaurant suggestions that improved user discovery engagement.",
    imageUrl: getProjectImage("restaurant-rec").url,
    imageHint: getProjectImage("restaurant-rec").hint,
    link: "#",
    github: "#"
  },
  {
    id: "hybrid-chess",
    title: "Hybrid Chess Engine using Minimax, MCTS, and Reinforcement Learning",
    description: "Built a hybrid chess engine combining classical search algorithms with reinforcement learning–based evaluation.",
    longDescription: "Built a hybrid chess engine combining classical search algorithms such as Minimax and Monte Carlo Tree Search with reinforcement learning–based evaluation. Improved playing strength through self-play training and systematic benchmarking against baseline engines.",
    technologies: ["Python", "Reinforcement Learning", "Minimax", "MCTS", "Game AI"],
    challenges: "Balancing the exploration vs. exploitation trade-off in MCTS and optimizing the neural network evaluation speed.",
    outcomes: "Engine demonstrated master-level strategic play and outperformed traditional Minimax engines in tactical scenarios.",
    imageUrl: getProjectImage("hybrid-chess").url,
    imageHint: getProjectImage("hybrid-chess").hint,
    link: "#",
    github: "#"
  },
  {
    id: "cpp-chess",
    title: "High-Performance Chess Engine with Deep Reinforcement Learning (C++)",
    description: "Implemented a high-performance chess engine in C++ using reinforcement learning and classical search algorithms.",
    longDescription: "Implemented a high-performance chess engine in C++ using reinforcement learning and classical search algorithms. Focused on computational efficiency, optimized evaluation functions, and engine-versus-engine benchmarking.",
    technologies: ["C++", "Reinforcement Learning", "Algorithms", "Game Engines"],
    challenges: "Managing memory efficiency for large transposition tables and optimizing multi-threaded search performance.",
    outcomes: "Achieved exceptionally high search depths and maintained stability under extreme competitive benchmarking.",
    imageUrl: getProjectImage("cpp-chess").url,
    imageHint: getProjectImage("cpp-chess").hint,
    link: "#",
    github: "#"
  },
  {
    id: "animal-detection",
    title: "Real-Time Animal Detection using CCTV Footage",
    description: "Developed a real-time computer vision system to detect animals from CCTV video streams for safety and surveillance.",
    longDescription: "Developed a real-time computer vision system to detect animals from CCTV video streams for safety and surveillance use cases. Trained object detection models and optimized inference for live video processing.",
    technologies: ["Python", "OpenCV", "YOLO", "Computer Vision"],
    challenges: "Ensuring high detection accuracy in low-light conditions and maintaining real-time frame rates on edge devices.",
    outcomes: "Reliably detected various animal species with high confidence, enabling automated alerts for safety monitoring.",
    imageUrl: getProjectImage("animal-detection").url,
    imageHint: getProjectImage("animal-detection").hint,
    link: "#",
    github: "#"
  },
  {
    id: "cv-pipeline",
    title: "End-to-End Computer Vision Pipeline",
    description: "Built a complete computer vision pipeline covering data ingestion, preprocessing, model training, evaluation, and inference.",
    longDescription: "Built a complete computer vision pipeline covering data ingestion, preprocessing, model training, evaluation, and inference. Designed modular components to support experimentation, reproducibility, and scalability.",
    technologies: ["Python", "Computer Vision", "Model Evaluation", "ML Pipelines"],
    challenges: "Standardizing data augmentation techniques across different datasets and ensuring pipeline portability.",
    outcomes: "Created a reusable framework that reduced model deployment time by 50% for subsequent CV projects.",
    imageUrl: getProjectImage("cv-pipeline").url,
    imageHint: getProjectImage("cv-pipeline").hint,
    link: "#",
    github: "#"
  },
  {
    id: "mlops-forge",
    title: "MLOps Forge: Scalable Machine Learning Operations Platform",
    description: "Designed and implemented an MLOps platform to automate machine learning workflows including training, evaluation, and deployment.",
    longDescription: "Designed and implemented an MLOps platform to automate machine learning workflows including training, evaluation, versioning, and deployment. Integrated monitoring and CI/CD to ensure reliable and reproducible model lifecycle management.",
    technologies: ["Docker", "MLflow", "CI/CD", "Monitoring", "Git"],
    challenges: "Coordinating diverse toolchains into a unified developer experience and managing model state across environments.",
    outcomes: "Established a robust lifecycle for models that minimized production errors and improved collaboration between data science and ops.",
    imageUrl: getProjectImage("mlops-forge").url,
    imageHint: getProjectImage("mlops-forge").hint,
    link: "#",
    github: "#"
  },
  {
    id: "ml-cicd",
    title: "CI/CD Pipelines for Machine Learning Workflows",
    description: "Implemented CI/CD pipelines to automate testing, training, and validation of machine learning workflows.",
    longDescription: "Implemented CI/CD pipelines to automate testing, training, and validation of machine learning workflows. Ensured code quality and experiment reproducibility through automated checks and version control.",
    technologies: ["GitHub Actions", "CI/CD", "Python", "ML Pipelines"],
    challenges: "Automating validation of non-deterministic ML results and managing large artifact storage within CI environments.",
    outcomes: "Reduced manual testing effort by 70% and ensured that only validated models reached the registry.",
    imageUrl: getProjectImage("ml-cicd").url,
    imageHint: getProjectImage("ml-cicd").hint,
    link: "#",
    github: "#"
  },
  {
    id: "aws-cicd",
    title: "AWS-Based CI/CD Pipeline for Automated Deployment",
    description: "Built an AWS-based CI/CD pipeline to automate build, test, and deployment processes using cloud-native best practices.",
    longDescription: "Built an AWS-based CI/CD pipeline to automate build, test, and deployment processes. Applied cloud-native DevOps best practices for reliability, scalability, and automation.",
    technologies: ["AWS", "CI/CD", "DevOps", "Cloud Infrastructure"],
    challenges: "Configuring fine-grained IAM permissions and ensuring secure secret management during the build process.",
    outcomes: "Successfully automated the entire deployment lifecycle, resulting in zero-downtime updates and improved scalability.",
    imageUrl: getProjectImage("aws-cicd").url,
    imageHint: getProjectImage("aws-cicd").hint,
    link: "#",
    github: "#"
  },
  {
    id: "data-pipeline",
    title: "Scalable End-to-End Data Engineering Pipeline",
    description: "Developed a scalable data pipeline supporting batch and streaming workflows for analytics and downstream ML tasks.",
    longDescription: "Developed a scalable data pipeline supporting batch and streaming workflows. Focused on data ingestion, transformation, orchestration, and reliability for analytics and downstream machine learning tasks.",
    technologies: ["Python", "Data Engineering", "Pipelines", "Orchestration"],
    challenges: "Maintaining data integrity during high-volume streaming transformations and managing backfill for historical data.",
    outcomes: "Built a reliable data foundation that supports real-time analytics dashboards and large-scale model training.",
    imageUrl: getProjectImage("data-pipeline").url,
    imageHint: getProjectImage("data-pipeline").hint,
    link: "#",
    github: "#"
  },
  {
    id: "pdf-ai-saas",
    title: "AI-Powered PDF Question Answering Platform",
    description: "Built an AI-powered SaaS application that allows users to interact with PDF documents using natural language queries.",
    longDescription: "Built an AI-powered SaaS application that allows users to upload PDF documents and interact with them using natural language queries. Implemented document parsing and language model–based question answering.",
    technologies: ["LLMs", "NLP", "TypeScript", "SaaS"],
    challenges: "Optimizing document chunking for context-aware LLM retrieval and managing costs for high-volume API calls.",
    outcomes: "Delivered a high-utility productivity tool that accurately answers complex queries based on uploaded context.",
    imageUrl: getProjectImage("pdf-ai-saas").url,
    imageHint: getProjectImage("pdf-ai-saas").hint,
    link: "#",
    github: "#"
  },
  {
    id: "chatsphere",
    title: "ChatSphere: Real-Time Messaging Platform",
    description: "Developed a real-time chat application demonstrating core full-stack concepts including real-time messaging and user interaction.",
    longDescription: "Developed a real-time chat application demonstrating core full-stack concepts including real-time messaging, user interaction, and scalable frontend architecture.",
    technologies: ["JavaScript", "TypeScript", "Real-Time Systems"],
    challenges: "Managing state synchronization across multiple connected clients and optimizing message delivery latency.",
    outcomes: "Produced a responsive and reliable chat platform capable of handling concurrent conversations with ease.",
    imageUrl: getProjectImage("chatsphere").url,
    imageHint: getProjectImage("chatsphere").hint,
    link: "#",
    github: "#"
  },
  {
    id: "zoom-lite",
    title: "Video Conferencing Application (Zoom Lite Clone)",
    description: "Built a lightweight video conferencing application inspired by Zoom, focusing on real-time communication and WebRTC.",
    longDescription: "Built a lightweight video conferencing application inspired by Zoom, focusing on real-time communication, frontend performance, and user experience.",
    technologies: ["TypeScript", "WebRTC", "Frontend Development"],
    challenges: "Handling peer-to-peer connection stability and optimizing video bandwidth for various network speeds.",
    outcomes: "Successfully implemented a functional video call environment with low latency and a clean user interface.",
    imageUrl: getProjectImage("zoom-lite").url,
    imageHint: getProjectImage("zoom-lite").hint,
    link: "#",
    github: "#"
  }
];
