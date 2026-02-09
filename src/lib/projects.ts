
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

export const projects: Project[] = [
  {
    id: "churn-prediction",
    title: "Bank Customer Churn Prediction",
    description: "Built a machine learning solution to predict customer churn for a retail banking dataset.",
    longDescription: "Analyzed demographic, behavioral, and account-level features to identify high-risk customers. Performed feature engineering, model comparison, and evaluation using business-relevant metrics to support retention strategies.",
    technologies: ["Python", "Pandas", "Scikit-learn", "XGBoost", "SHAP"],
    challenges: "Handling imbalanced datasets and selecting the most impactful features from a high-dimensional feature space.",
    outcomes: "Developed a robust prediction model that successfully identified churn risk with high precision, allowing targeted retention campaigns.",
    imageUrl: PlaceHolderImages.find(img => img.id === "churn-prediction")?.imageUrl || "",
    imageHint: "analytics dashboard",
    link: "#",
    github: "#"
  },
  {
    id: "stock-forecasting",
    title: "Deep Learning–Based Stock Price Forecasting",
    description: "Designed a deep learning–based time-series forecasting system using CNN, BiLSTM, and GRU.",
    longDescription: "Captured temporal patterns in historical stock data by evaluating multiple neural architectures. Focused on improving prediction accuracy for short- and long-term market trends.",
    technologies: ["Python", "TensorFlow", "Keras", "CNN", "BiLSTM", "GRU"],
    challenges: "Capturing non-linear temporal dependencies in volatile market data and preventing model overfitting.",
    outcomes: "Achieved significant improvements in mean absolute error compared to baseline statistical models.",
    imageUrl: PlaceHolderImages.find(img => img.id === "stock-forecasting")?.imageUrl || "",
    imageHint: "stock chart",
    link: "#",
    github: "#"
  },
  {
    id: "restaurant-rec",
    title: "Personalized Restaurant Recommendation System",
    description: "Developed a recommendation system using the Yelp dataset to suggest restaurants.",
    longDescription: "Implemented collaborative filtering and content-based techniques to deliver personalized dining recommendations based on user preferences, cuisine types, and location.",
    technologies: ["Python", "Recommender Systems", "Collaborative Filtering", "NLP"],
    challenges: "Addressing the 'cold start' problem for new users and scaling the system for a large dataset of reviews.",
    outcomes: "Successfully delivered highly relevant restaurant suggestions that improved user discovery engagement.",
    imageUrl: PlaceHolderImages.find(img => img.id === "restaurant-rec")?.imageUrl || "",
    imageHint: "app interface",
    link: "#",
    github: "#"
  },
  {
    id: "hybrid-chess",
    title: "Hybrid Reinforcement Learning Chess Engine",
    description: "Built a hybrid chess engine combining Minimax, MCTS, and Reinforcement Learning.",
    longDescription: "Integrated classical search algorithms with reinforcement learning–based evaluation. Improved playing strength through self-play training and systematic benchmarking against baseline engines.",
    technologies: ["Python", "Reinforcement Learning", "Minimax", "MCTS", "Game AI"],
    challenges: "Balancing the exploration vs. exploitation trade-off in MCTS and optimizing the neural network evaluation speed.",
    outcomes: "Engine demonstrated master-level strategic play and outperformed traditional Minimax engines in tactical scenarios.",
    imageUrl: PlaceHolderImages.find(img => img.id === "hybrid-chess")?.imageUrl || "",
    imageHint: "chess board",
    link: "#",
    github: "#"
  },
  {
    id: "cpp-chess",
    title: "High-Performance Chess Engine (C++)",
    description: "Implemented a high-performance chess engine in C++ using reinforcement learning.",
    longDescription: "Focused on computational efficiency, optimized evaluation functions, and engine-versus-engine benchmarking. Utilized low-level optimizations to maximize nodes-per-second search performance.",
    technologies: ["C++", "Reinforcement Learning", "Algorithms", "Game Engines"],
    challenges: "Managing memory efficiency for large transposition tables and optimizing multi-threaded search performance.",
    outcomes: "Achieved exceptionally high search depths and maintained stability under extreme competitive benchmarking.",
    imageUrl: PlaceHolderImages.find(img => img.id === "cpp-chess")?.imageUrl || "",
    imageHint: "dark chess",
    link: "#",
    github: "#"
  },
  {
    id: "animal-detection",
    title: "Real-Time Animal Detection (CCTV)",
    description: "Developed a real-time computer vision system to detect animals from CCTV video streams.",
    longDescription: "Trained object detection models and optimized inference for live video processing. Designed for safety and surveillance use cases in diverse environmental conditions.",
    technologies: ["Python", "OpenCV", "YOLO", "Computer Vision"],
    challenges: "Ensuring high detection accuracy in low-light conditions and maintaining real-time frame rates on edge devices.",
    outcomes: "Reliably detected various animal species with high confidence, enabling automated alerts for safety monitoring.",
    imageUrl: PlaceHolderImages.find(img => img.id === "animal-detection")?.imageUrl || "",
    imageHint: "security camera",
    link: "#",
    github: "#"
  },
  {
    id: "cv-pipeline",
    title: "End-to-End Computer Vision Pipeline",
    description: "Built a complete computer vision pipeline covering data ingestion to inference.",
    longDescription: "Designed modular components to support experimentation, reproducibility, and scalability. Covers data ingestion, preprocessing, model training, evaluation, and deployment.",
    technologies: ["Python", "Computer Vision", "Model Evaluation", "ML Pipelines"],
    challenges: "Standardizing data augmentation techniques across different datasets and ensuring pipeline portability.",
    outcomes: "Created a reusable framework that reduced model deployment time by 50% for subsequent CV projects.",
    imageUrl: PlaceHolderImages.find(img => img.id === "cv-pipeline")?.imageUrl || "",
    imageHint: "pipeline diagram",
    link: "#",
    github: "#"
  },
  {
    id: "mlops-forge",
    title: "MLOps Forge Platform",
    description: "Scalable platform to automate machine learning workflows including training and deployment.",
    longDescription: "Integrated monitoring and CI/CD to ensure reliable and reproducible model lifecycle management. Automated versioning, evaluation, and scaling of ML models.",
    technologies: ["Docker", "MLflow", "CI/CD", "Monitoring", "Git"],
    challenges: "Coordinating diverse toolchains into a unified developer experience and managing model state across environments.",
    outcomes: "Established a robust lifecycle for models that minimized production errors and improved collaboration between data science and ops.",
    imageUrl: PlaceHolderImages.find(img => img.id === "mlops-forge")?.imageUrl || "",
    imageHint: "dashboard ui",
    link: "#",
    github: "#"
  },
  {
    id: "ml-cicd",
    title: "CI/CD for Machine Learning",
    description: "Implemented CI/CD pipelines to automate testing, training, and validation of ML workflows.",
    longDescription: "Ensured code quality and experiment reproducibility through automated checks and version control. Built specific triggers for retraining upon data changes.",
    technologies: ["GitHub Actions", "CI/CD", "Python", "ML Pipelines"],
    challenges: "Automating validation of non-deterministic ML results and managing large artifact storage within CI environments.",
    outcomes: "Reduced manual testing effort by 70% and ensured that only validated models reached the registry.",
    imageUrl: PlaceHolderImages.find(img => img.id === "ml-cicd")?.imageUrl || "",
    imageHint: "workflow diagram",
    link: "#",
    github: "#"
  },
  {
    id: "aws-cicd",
    title: "AWS-Based CI/CD Pipeline",
    description: "Built an AWS-based CI/CD pipeline for automated deployment of cloud applications.",
    longDescription: "Applied cloud-native DevOps best practices for reliability, scalability, and automation using AWS CodePipeline and associated services.",
    technologies: ["AWS", "CI/CD", "DevOps", "Cloud Infrastructure"],
    challenges: "Configuring fine-grained IAM permissions and ensuring secure secret management during the build process.",
    outcomes: "Successfully automated the entire deployment lifecycle, resulting in zero-downtime updates and improved scalability.",
    imageUrl: PlaceHolderImages.find(img => img.id === "aws-cicd")?.imageUrl || "",
    imageHint: "aws architecture",
    link: "#",
    github: "#"
  },
  {
    id: "data-pipeline",
    title: "End-to-End Data Pipeline",
    description: "Developed a scalable data pipeline supporting batch and streaming workflows.",
    longDescription: "Focused on data ingestion, transformation, orchestration, and reliability for analytics and downstream machine learning tasks. Used modern orchestration tools for workflow management.",
    technologies: ["Python", "Data Engineering", "Pipelines", "Orchestration"],
    challenges: "Maintaining data integrity during high-volume streaming transformations and managing backfill for historical data.",
    outcomes: "Built a reliable data foundation that supports real-time analytics dashboards and large-scale model training.",
    imageUrl: PlaceHolderImages.find(img => img.id === "data-pipeline")?.imageUrl || "",
    imageHint: "data flow",
    link: "#",
    github: "#"
  },
  {
    id: "pdf-ai-saas",
    title: "AI-Powered PDF SaaS",
    description: "SaaS application that allows users to upload PDFs and interact using natural language queries.",
    longDescription: "Implemented document parsing and language model–based question answering. Users can get instant insights and summaries from complex PDF documents via a modern chat interface.",
    technologies: ["LLMs", "NLP", "TypeScript", "SaaS"],
    challenges: "Optimizing document chunking for context-aware LLM retrieval and managing costs for high-volume API calls.",
    outcomes: "Delivered a high-utility productivity tool that accurately answers complex queries based on uploaded context.",
    imageUrl: PlaceHolderImages.find(img => img.id === "pdf-ai-saas")?.imageUrl || "",
    imageHint: "saas interface",
    link: "#",
    github: "#"
  },
  {
    id: "chatsphere",
    title: "ChatSphere: Real-Time Messaging",
    description: "Developed a real-time chat application demonstrating scalable full-stack architecture.",
    longDescription: "Demonstrates core full-stack concepts including real-time messaging, user interaction, and high-performance frontend state management.",
    technologies: ["JavaScript", "TypeScript", "Real-Time Systems"],
    challenges: "Managing state synchronization across multiple connected clients and optimizing message delivery latency.",
    outcomes: "Produced a responsive and reliable chat platform capable of handling concurrent conversations with ease.",
    imageUrl: PlaceHolderImages.find(img => img.id === "chatsphere")?.imageUrl || "",
    imageHint: "chat app",
    link: "#",
    github: "#"
  },
  {
    id: "zoom-lite",
    title: "Zoom Lite: Video Conferencing",
    description: "Built a lightweight video conferencing application inspired by Zoom.",
    longDescription: "Focuses on real-time communication using WebRTC, frontend performance, and user experience. Features a dynamic grid layout for participants.",
    technologies: ["TypeScript", "WebRTC", "Frontend Development"],
    challenges: "Handling peer-to-peer connection stability and optimizing video bandwidth for various network speeds.",
    outcomes: "Successfully implemented a functional video call environment with low latency and a clean user interface.",
    imageUrl: PlaceHolderImages.find(img => img.id === "zoom-lite")?.imageUrl || "",
    imageHint: "video call",
    link: "#",
    github: "#"
  }
];
