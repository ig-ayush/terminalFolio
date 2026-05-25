const PORTFOLIO = {
  name: "Ayush Acharya",
  role: "Aspiring Full-Stack Developer",
  bio: "I’m a aspiring developer skilled in backend and frontend technologies. I enjoy building scalable web applications and learning new tech stacks.",
  location: "Bangalore, India",
  email: "igayushacharya@gmail.com",
  phone: "+91 98765 43210",
  education: {
    degree: "Bachelor of Computer Applications (BCA)",
    college: "Sri Dharmasthala Manjunatheshwara College (Autonomous)",
    year: "2025",
    details: "Specialization in Computer Applications · CGPA: 7.38/10",
  },
  skills: {
    Frontend: ["React.js", "Tailwind CSS", "Framer Motion"],
    Backend: ["Java", "Python", "Node.js", "Java Spring"],
    Database: ["MySQL", "MongoDB", "Firebase"],
    Tools: ["Git", "GitHub", "Vercel", "Linux", "Docker", "VS Code"],
  },
  projects: [
    {
      title: "DevCollab",
      description: "Real-time collaborative code editor with WebSocket-powered live sync, syntax highlighting, and shared terminal sessions.",
      tech: ["React", "Node.js", "Socket.io", "Monaco Editor", "Redis"],
      github: "https://github.com/ayush/devcollab",
      demo: "https://devcollab.vercel.app",
    },
    {
      title: "NeuralFeed",
      description: "AI-curated developer news aggregator using NLP to rank and summarize articles based on your stack preferences.",
      tech: ["Next.js", "Python", "FastAPI", "PostgreSQL", "OpenAI API"],
      github: "https://github.com/ayush/neuralfeed",
      demo: "https://neuralfeed.app",
    },
    {
      title: "CloudShell",
      description: "Browser-based terminal emulator that connects to remote cloud instances with full PTY support and session persistence.",
      tech: ["React", "Go", "WebSockets", "Docker", "AWS EC2"],
      github: "https://github.com/ayush/cloudshell",
      demo: "https://cloudshell.dev",
    },
    {
      title: "PixelVault",
      description: "NFT gallery platform with generative art engine, IPFS storage, and smart contract minting via MetaMask integration.",
      tech: ["Next.js", "Solidity", "Ethers.js", "IPFS", "Hardhat"],
      github: "https://github.com/ayush/pixelvault",
      demo: "https://pixelvault.io",
    },
  ],
  experience: [
    {
      role: "Software Engineering Intern",
      company: "Razorpay",
      period: "May 2023 – Aug 2023",
      desc: "Built microservices for the payment gateway infra. Reduced API latency by 40% via Redis caching strategies.",
    },
    {
      role: "Frontend Developer Intern",
      company: "Groww",
      period: "Dec 2022 – Feb 2023",
      desc: "Revamped the mutual funds dashboard UI in React, improving Time-to-Interactive by 2.3s.",
    },
    {
      role: "Open Source Contributor",
      company: "Mozilla Foundation",
      period: "2022 – Present",
      desc: "Active contributor to Firefox DevTools. Merged 12+ PRs fixing UI bugs and accessibility issues.",
    },
  ],
  certificates: [
    { title: "AWS Certified Developer – Associate", org: "Amazon Web Services", year: "2023" },
    { title: "Google Cloud Professional Data Engineer", org: "Google", year: "2023" },
    { title: "MongoDB Certified Developer", org: "MongoDB University", year: "2022" },
    { title: "Meta Frontend Developer Certificate", org: "Coursera / Meta", year: "2022" },
  ],
  socials: {
    GitHub: "https://github.com/ayush",
    LinkedIn: "https://linkedin.com/in/ayush",
    Twitter: "https://twitter.com/ayush_dev",
    Portfolio: "https://ayush.dev",
  },
};

export { PORTFOLIO };