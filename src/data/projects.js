const projects = [
  {
    title: "LLM + RAG Pipeline for O-RAN Docs",
    description: "Built a domain-specific RAG system for summarizing and answering questions from O-RAN documents.",
    points: [
      "Developed a scalable backend using Python and Flask for document ingestion and embedding.",
      "Integrated FAISS and ChromaDB for chunked vector storage and semantic retrieval.",
      "Enabled local LLM querying to generate document-aware summaries and answers."
    ],
    link: "https://github.com/AdithyaSwarna/LLM_ORAN_RAG"
  },
  {
    title: "AI Agent Builder (In Progress)",
    description: "A scalable platform to build autonomous AI agents capable of dynamic planning, decision-making, and tool usage.",
    points: [
      "Currently building modular microservices using FastAPI, Redis, PostgreSQL, and Docker.",
      "Implemented base agent lifecycle with task queue processing, prompt chaining, and CI/CD integration.",
      "Planned extensions include autonomous multi-agent collaboration, tool/plugin registry, and memory store integration using vector DB + LLM context."
    ]
  },
  {
    title: "YouTube Timestamps Jumper",
    description: "Developed a Chrome extension for bookmarking, looping, and jumping to video timestamps.",
    points: [
      "Used JavaScript and Chrome Extension APIs to manipulate and control YouTube playback.",
      "Stored user-defined timestamp bookmarks with local persistent storage.",
      "Provided loop and quick-jump features for productivity and content review."
    ],
    link: "https://github.com/AdithyaSwarna/youtube-timestamps-jumper"
  },
  {
    title: "Conway’s Game of Life (CUDA)",
    description: "Simulated cellular automata with GPU acceleration for massive performance gains.",
    points: [
      "Implemented the simulation using Python and CUDA C with Numba for parallel execution.",
      "Achieved 10x performance over CPU version by leveraging GPU matrix operations.",
      "Used NumPy for fallback support and dynamic simulation scaling."
    ]
  },
  {
    title: "IEEE XOR CAM Design",
    description: "Published CAM architecture in IEEE using XOR logic and optimized pre-charge circuitry.",
    points: [
      "Designed an 8x8 content addressable memory (CAM) using SRAM in Cadence gpdk180.",
      "Achieved sub-20ns search time by optimizing pre-charge logic and reducing capacitance.",
      "Demonstrated functional simulation and presented results in IEEE Xplore."
    ],
    link: "https://ieeexplore.ieee.org/document/9298389"
  },
  {
    title: "SpaceX Rocket Landing Prediction",
    description: "Created a machine learning pipeline to predict Falcon 9 booster landing outcomes.",
    points: [
      "Cleaned and engineered features from SpaceX mission datasets using Pandas and SQL.",
      "Trained classification models in scikit-learn reaching 87% prediction accuracy.",
      "Visualized landing success trends using Plotly and Matplotlib."
    ]
  },
  {
    title: "Financial Data Dashboards",
    description: "Built dashboards for exploring market trends using real-time financial data.",
    points: [
      "Fetched stock data via yfinance and processed time series metrics using Pandas.",
      "Visualized price, volume, and moving averages using Plotly’s interactive charts.",
      "Enabled user filters and dynamic charts with Dash for exploratory analysis."
    ]
  },
  {
    title: "Python & Selenium Automation",
    description: "Automated web scraping and OS-level tasks with integrated dashboards.",
    points: [
      "Used Selenium to extract data from portals and Python for task scheduling.",
      "Stored extracted data in MongoDB and displayed it via Flask-based dashboard UI.",
      "Automated offer letter checks, data parsing, and PDF notifications."
    ]
  },
  {
    title: "LLM Literature Survey",
    description: "Studied efficiency and applications of large language models across platforms.",
    points: [
      "Analyzed 10+ LLM architectures including mobile and edge deployments.",
      "Summarized trade-offs in accuracy, inference time, and memory use.",
      "Documented best practices for fine-tuning and retrieval-based workflows."
    ]
  }
];

export default projects;
