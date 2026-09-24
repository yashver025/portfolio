export const profile = {
  name: 'Yash Verma',
  role: 'AI/ML Engineer',
  email: 'yashvermaaa2525@gmail.com',
  github: 'https://github.com/yashver025',
  // NOTE: resume shows linkedin.com/in/yashver025 — confirm this is the URL you want.
  linkedin: 'https://www.linkedin.com/in/yashver025',
  resume: '/resume.pdf', // replace public/resume.pdf to update
};

export const experience = {
  org: 'C3iHub, IIT Kanpur', role: 'Research Intern', period: 'May 2025 – June 2025',
  title: 'Machine-learning detection of hardware Trojans',
  points: [
    'Developed ML-based Hardware Trojan detection using side-channel analysis.',
    'Designed a golden-chip-free approach, removing dependence on trusted reference hardware samples.',
    'Identified stealthy hardware Trojans with a low false-positive rate.',
  ],
  tags: ['Hardware security', 'Side-channel analysis', 'Machine learning', 'Golden-chip-free'],
  stats: [{ v: '98%', l: 'detection accuracy' }, { v: '3.19', l: 'false positives per 1000 gates' }],
};

export type Project = {
  id: string; name: string; date: string; tagline: string; hue: string;
  problem: string; approach: string; architecture: string[]; stack: string[];
  features: string[]; results?: string[]; repo?: string; demo?: string;
};

// `repo`: paste each project's GitHub URL. Until set, buttons link to your GitHub profile.
export const projects: Project[] = [
  {
    id: 'hiring', name: 'AI Hiring Agent', date: 'Jan 2026', hue: '#8aa4ff',
    tagline: 'Semantic resume screening and hiring decision support.',
    problem: 'Screening resumes consistently and turning them into a clear, explainable hiring recommendation.',
    approach: 'Resumes are parsed from PDFs and matched semantically with Sentence Transformers. A LangGraph workflow with a Mistral LLM produces scoring, skill gaps, strengths, interview questions and a recommendation, served through a FastAPI API.',
    architecture: ['Resume parsing', 'Semantic matching', 'Candidate scoring', 'Skill gap & strengths', 'Interview questions', 'Hiring recommendation'],
    stack: ['Python', 'FastAPI', 'LangGraph', 'HuggingFace Transformers', 'SentenceTransformers', 'Mistral LLM', 'Docker', 'PDF parsing', 'HTML/CSS/JS'],
    features: ['Resume parsing', 'Semantic matching', 'Candidate scoring', 'Skill gap analysis', 'Strength extraction', 'Interview question generation', 'Hiring recommendation', 'API-based workflow'],
    repo: 'https://github.com/yashver025/AI-Hiring-Agent'
  },
  {
    id: 'brainybot', name: 'BrainyBot', date: 'Feb 2026', hue: '#5eead4',
    tagline: 'Conversational assistant with RAG, tools and persistent memory.',
    problem: 'Multi-turn conversations that stay contextual, can query documents and can call external tools.',
    approach: 'A stateful LangGraph/LangChain agent retrieves context from a FAISS vector store built with Hugging Face embeddings, calls tools via FastMCP, persists memory in SQLite and streams responses in a Streamlit UI.',
    architecture: ['User message', 'Stateful agent (LangGraph)', 'RAG retrieval (FAISS)', 'MCP tools', 'Streaming response', 'Memory (SQLite)'],
    stack: ['Python', 'Streamlit', 'LangGraph', 'LangChain', 'FastMCP', 'RAG', 'Hugging Face Inference API', 'HF embeddings', 'FAISS', 'SQLite'],
    features: ['Stateful memory', 'RAG retrieval', 'FAISS vector search', 'MCP integration', 'Expense tracking', 'PDF querying', 'Streaming responses', 'Thread management', 'Metadata tracing'],
    repo: 'https://github.com/yashver025/BrainyBot'
  },
  {
    id: 'rl', name: 'Dual-Source Inventory Optimization', date: 'Apr 2026', hue: '#c4a7ff',
    tagline: 'Deep RL for ordering decisions across two suppliers.',
    problem: 'Choosing how much to order from two suppliers so that total inventory cost is minimised.',
    approach: 'A custom OpenAI Gym environment simulates inventory dynamics; a PyTorch agent learns an ordering policy from reward signals that penalise cost, inside a modular RL pipeline with a Streamlit interface.',
    architecture: ['Custom Gym environment', 'Inventory simulation', 'PyTorch policy', 'Reward: cost minimisation', 'Optimal ordering'],
    stack: ['Python', 'Reinforcement Learning', 'OpenAI Gym', 'PyTorch', 'NumPy', 'Streamlit'],
    features: ['Custom RL environment', 'Inventory simulation', 'Policy learning for optimal ordering', 'Reward-based cost minimisation', 'Modular RL pipeline'],
    repo: 'https://github.com/yashver025/Dual-Source-RL'
  },
];

export const skills: Record<string, string[]> = {
  'AI/ML & Generative AI': ['PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn', 'Hugging Face Transformers', 'LangChain', 'LangGraph', 'RAG', 'FAISS', 'ChromaDB', 'NLP', 'Computer Vision', 'spaCy', 'NLTK', 'Prompt Engineering'],
  'Backend & Deployment': ['FastAPI', 'Flask', 'React.js', 'Docker', 'AWS EC2', 'AWS S3', 'AWS Lambda', 'AWS SageMaker', 'Git/GitHub', 'LangSmith', 'Prometheus', 'Model Deployment', 'MLOps', 'REST APIs', 'CI/CD'],
  'Languages': ['Python', 'C++', 'C', 'SQL', 'JavaScript', 'HTML5', 'CSS3', 'MATLAB'],
  'Data & Tools': ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'OpenCV', 'Jupyter Notebook', 'MS Excel'],
};

export const education = [
  { t: 'B.Tech, Information Technology', s: 'Rajiv Gandhi Institute of Petroleum Technology (RGIPT), Amethi', d: '2022 – 2026', n: 'CGPA 7.23 / 10' },
  { t: 'Senior Secondary (CBSE)', s: 'Welfare Mission International School', d: '2021', n: '90.8%' },
  { t: 'Secondary (CBSE)', s: 'Welfare Mission International School', d: '2019', n: '94.2%' },
];
export const courses = ['Data Structures & Algorithms', 'DBMS', 'Machine Learning', 'Artificial Intelligence', 'Deep Learning', 'Generative AI', 'Computer Vision & Pattern Recognition', 'Data Mining', 'Web Development', 'Operating Systems'];
