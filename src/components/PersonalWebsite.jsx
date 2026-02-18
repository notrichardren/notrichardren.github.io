import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Github, Linkedin, Twitter, ChevronDown, ChevronUp, ChevronRight, ArrowLeft, BookOpen } from 'lucide-react';

const SubstackIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
  </svg>
);

// Import the images
import sillyGoose from '../assets/silly-goose.jpg';
import gooseIpad from '../assets/goose-ipad.gif';
import gooseHonking from '../assets/goose-honking-goose.gif';
import upennLogo from '../assets/upenn-logo.png';
import safetywashing from '../assets/safetywashing.png';
import repe from '../assets/repe.png';
import lll from '../assets/lll.png';
import scatteringprobe from '../assets/scatteringprobe.png';
import validml from '../assets/validml.png';
import maskImg from '../assets/mask.png';
import utilityEngImg from '../assets/utility-engineering.png';
import hleImg from '../assets/hle.png';
import rliImg from '../assets/rli.png';

const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-3xl mx-auto px-6 py-8 font-serif">
      <button
        onClick={() => navigate('/')}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </button>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Research style</h2>
        <p className="text-gray-700 mb-6">
          I'm an experimentalist at heart. My research style is quick, iterative, and empirically-driven. I like to continually re-prioritize, remodel my worldview, and minimize entropy quickly. I've found my findings are <a href="https://paulgraham.com/relres.html" className="text-blue-600 hover:underline">bottlenecked by iteration speed</a>: the faster you move, the more creative and unusual you can get.
        </p>
        <p className="text-gray-700">
          I also like focusing on <a href="https://paulgraham.com/smart.html" className="text-blue-600 hover:underline">understudied directions</a> and new potential research areas that the ML community is not focused on.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Why?</h2>
        <p className="text-gray-700 mb-6">
          My inspiration and interest in AI safety research stems from reading <em>Human Compatible</em> and <em>Code</em> during my sophomore year of undergrad. I want to understand the implicit values encoded into AI systems. How we build AI systems may be the new law.
        </p>
        <p className="text-gray-700">
          I've been called a RAISIN (Responsible AI Safety and INterpretability researcher) by an <a href="https://vgel.me/posts/representation-engineering/" className="text-blue-600 hover:underline">article</a> that reached the front page of Hacker News.
        </p>
        {/* <p className="text-gray-700">
          I also co-run <a href="https://pennai.notion.site/SafeAI-Penn-Labs-a4f262c3061b46d2975667c97b964ad3" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">SafeAI@Penn</a>.
        </p> */}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">How do I get into research?</h2>
        <p className="text-gray-700 mb-4">
          This is some advice I typed up over DM for someone completely new at research.
        </p>
        <p className="text-gray-700 mb-4">
          The way I "dive into a research area" — particularly one I'm not familiar with at all — is an iterative process of (a) paper reading, (b) idea generation, and (c) conversation.
        </p>
        <p className="text-gray-700 mb-4">
          This means that I usually start by talking to people who work in the space I want, and getting some papers — and then picking one and diving in detail. Afterwards, I type up notes and questions, and iteratively keep on picking papers and writing notes and having conversations.
        </p>
        <p className="text-gray-700 mb-4">
          This iteration looks like: doing readings for lots of papers, writing annotations that serve as both useful for the people I talk to as well as artifacts of the effort I put in (that I can reference in applications or conversations), and then talking to mentors who can recommend next steps and who I can discuss the paper with. Notes on new papers can be especially useful to mentors too.
        </p>
        <p className="text-gray-700 mb-4">
          Eventually, I'll have enough knowledge to type up research ideas and present them to people. They might give feedback around how it's not novel, or how it is, or how it's interesting, or critique the setup – but it'll usually be really useful.
        </p>
        <p className="text-gray-700 mb-4">
          Then, I usually pick a research topic and find collaborators and go for it. Generally, I value informally figuring out your own research you want to do, and then diving into that space and talking to people there to build expertise. Pursue <em>those</em> research ideas – ones that you created, or ones that you think you vibe with, or offhand remarks from a professor or someone you talked to that you truly believe pose an interesting research question.
        </p>
        <p className="text-gray-700 mb-4">
          In general, I'm a big fan of informal interactions for research, research mentorship, and research collaboration — above getting a posted RA position for a PhD student — but your mileage can vary. Other people have done the RA route and turned out great. My belief is that you're much better off taking an approach of "I'm reading this paper I like, let me email them" over official posted positions. Make sure you're ambitious and focused on research that you truly believe in.
        </p>
        <p className="text-gray-700">
          I also really like this <a href="https://www.youtube.com/watch?v=vtIzMaLkCaM" className="text-blue-600 hover:underline">lecture</a> on how to present and write research.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Quotes</h2>
        <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700">
          "Forget the yen. Bet on the Ren." — Chenrui Zhang
        </blockquote>
      </section>
    </div>
  );
};

const ResearchItem = ({ title, authors, link, details, image, publication }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="border border-gray-200 rounded-lg p-4 mb-6 shadow-sm">
      <div className="flex space-x-6">
        <a href={link} onClick={(e) => e.stopPropagation()} className="flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-48 h-36 object-cover rounded bg-white"
          />
        </a>
        <div className="flex-grow">
          <a href={link} onClick={(e) => e.stopPropagation()} className="text-xl font-semibold mb-3 text-blue-600 hover:underline block">{title}</a>
          <p className="text-gray-700 mb-2">
            {authors.map((author, i) => (
              <span key={i}>
                {author.includes("Richard Ren") ? (
                  <u>{author}</u>
                ) : (
                  author
                )}
                {i < authors.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>
          <p className="text-gray-500">{publication}</p>
        </div>
      </div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center text-blue-600 hover:text-blue-800 mt-2 w-full"
      >
        <span className="flex-grow text-left">Details</span>
        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      {isExpanded && (
        <ul className="mt-4 ml-4 list-disc space-y-2 text-gray-700">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const HomePage = () => {
  const navigate = useNavigate();
  const allGooseImages = [sillyGoose, gooseIpad, gooseHonking];
  const [gooseIndex, setGooseIndex] = useState(0);
  const [spinning, setSpinning] = useState(false);

  const handleGooseClick = () => {
    if (spinning) return;
    setSpinning(true);
    setTimeout(() => {
      setGooseIndex((prev) => (prev + 1) % allGooseImages.length);
    }, 300);
    setTimeout(() => {
      setSpinning(false);
    }, 600);
  };

  const researchProjects = [
    {
      title: "Remote Labor Index: Measuring AI Automation of Remote Work (2025)",
      authors: ["Mantas Mazeika", "Alice Gatti", "Cristina Menghini", "...", "Richard Ren", "...", "Dan Hendrycks", "(46 authors)"],
      publication: "arXiv preprint",
      link: "https://arxiv.org/abs/2510.26787",
      details: [
        "Contributing researcher on the Remote Labor Index, in collaboration with Scale AI. A broadly multi-sector benchmark comprising 240 real-world, economically valuable projects sourced from freelance platforms, designed to evaluate end-to-end agent performance.",
        <span key="links">Links: <a href="https://www.remotelabor.ai/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Website</a> | <a href="https://scale.com/research/rli" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Scale AI</a>.</span>,
        <span key="citations"><a href="https://scholar.google.com/scholar?cites=&as_sdt=2005&sciodt=0,5&hl=en&oi=gsb&q=Remote+Labor+Index" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:underline">4 citations</a></span>
      ],
      image: rliImg
    },
    {
      title: "The MASK Benchmark: Disentangling Honesty From Accuracy in AI Systems (2025)",
      authors: ["Richard Ren*", "Arunim Agarwal*", "Mantas Mazeika*", "Cristina Menghini*", "Robert Vacareanu", "Brad Kenstler", "Mick Yang", "Isabelle Barrass", "Alice Gatti", "Xuwang Yin", "Eduardo Trevino", "Matias Geralnik", "Adam Khoja", "Dean Lee", "Summer Yue", "Dan Hendrycks"],
      publication: "arXiv preprint",
      link: "https://arxiv.org/abs/2503.03750",
      details: [
        "Led the development of MASK, a first-of-its-kind benchmark disentangling honesty from accuracy in AI systems (co-1st author). In collaboration with Scale AI.",
        "Cited by the Singapore Consensus on Global AI Safety Research Priorities, Anthropic Alignment Team, and xAI model card.",
        <span key="links">Links: <a href="https://www.mask-benchmark.ai/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Website</a> | <a href="https://github.com/centerforaisafety/mask" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Codebase</a> | <a href="https://scale.com/research/mask" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Scale AI</a>.</span>,
        <span key="citations"><a href="https://scholar.google.com/scholar?cites=&as_sdt=2005&sciodt=0,5&hl=en&oi=gsb&q=MASK+Benchmark+Disentangling+Honesty" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:underline">24 citations</a></span>
      ],
      image: maskImg
    },
    {
      title: "Utility Engineering: Analyzing and Controlling Emergent Value Systems in AIs (2025)",
      authors: ["Mantas Mazeika", "Xuwang Yin", "Rishub Tamirisa", "Jaehyuk Lim", "Bruce W. Lee", "Richard Ren", "Long Phan", "Norman Mu", "Adam Khoja", "Oliver Zhang", "Dan Hendrycks"],
      publication: "ICML 2025 Spotlight",
      link: "https://arxiv.org/abs/2502.08640",
      details: [
        "Contributing researcher on Utility Engineering. Examines how goals and values emerge in large language models through utility function frameworks. Independently-sampled preferences in current LLMs exhibit high degrees of structural coherence that intensifies with scale.",
        <span key="links">Links: <a href="https://www.emergent-values.ai/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Website</a>.</span>,
        <span key="citations"><a href="https://scholar.google.com/scholar?cites=&as_sdt=2005&sciodt=0,5&hl=en&oi=gsb&q=Utility+Engineering+Analyzing+Controlling+Emergent+Value" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:underline">36 citations</a></span>
      ],
      image: utilityEngImg
    },
    {
      title: "Humanity's Last Exam: A Benchmark of Expert-Level Academic Questions to Assess AI Capabilities (2025)",
      authors: ["Long Phan", "Alice Gatti", "Ziwen Han", "Nathaniel Li", "Josephina Hu", "...", "Richard Ren", "... (1000+ authors)"],
      publication: "Nature",
      link: "https://www.nature.com/articles/s41586-025-09962-4",
      details: [
        "On the organizing team for Humanity's Last Exam, a professor/researcher/postdoc-level QA benchmark in collaboration with Scale AI. Published in Nature.",
        <span key="coverage">Covered by the <a href="https://www.nytimes.com/2025/01/22/technology/ai-test-humanitys-last-exam.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">New York Times</a>, <a href="https://www.reuters.com/technology/artificial-intelligence/ai-experts-ready-humanitys-last-exam-2024-11-27/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Reuters</a>, <a href="https://qz.com/humanitys-last-exam-ai-test-stumped-1851749313" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Quartz</a>, and others.</span>,
        <span key="links">Links: <a href="https://lastexam.ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Website</a> | <a href="https://scale.com/research/humanitys-last-exam" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Scale AI</a>.</span>,
        <span key="citations"><a href="https://scholar.google.com/scholar?cites=&as_sdt=2005&sciodt=0,5&hl=en&oi=gsb&q=Humanity%27s+Last+Exam" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:underline">302 citations</a></span>
      ],
      image: hleImg
    },
    {
      title: "Safetywashing: Do AI Safety Benchmarks Actually Measure Safety Progress? (2024)",
      authors: ["Richard Ren*", "Steven Basart*", "Adam Khoja", "Alice Gatti", "Long Phan", "Xuwang Yin", "Mantas Mazeika", "Alexander Pan", "Gabriel Mukobi", "Ryan H. Kim", "Stephen Fitz", "Dan Hendrycks"],
      publication: "NeurIPS 2024 Datasets & Benchmarks Track",
      link: "https://arxiv.org/abs/2407.21792",
      details: [
        "Co-led the most comprehensive empirical meta-analysis of AI safety benchmarks to date (co-1st author), collaborating with three research engineers and three external collaborators.",
        <span key="invited"><a href="https://x.com/tomekkorbak/status/1828154620138660352" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Invited to present</a> at the UK Government AI Safety Institute. Cited by OpenAI, the Singapore Consensus on Global AI Safety Research Priorities, and featured in TechCrunch as research paper of the week.</span>,
        <span key="links">Links: <a href="https://www.safetywashing.ai/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Website</a> | <a href="https://github.com/centerforaisafety/safetywashing" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Codebase</a> | <a href="https://x.com/notRichardRen/status/1819427976309780574" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Thread</a>.</span>,
        <span key="citations"><a href="https://scholar.google.com/scholar?cites=&as_sdt=2005&sciodt=0,5&hl=en&oi=gsb&q=Safetywashing+AI+Safety+Benchmarks" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:underline">49 citations</a></span>
      ],
      image: safetywashing
    },
    {
      title: "Localizing Lying in Llama: Understanding Instructed Dishonesty on True-False Questions Through Prompting, Probing, and Patching (2023)",
      authors: ["James Campbell*", "Richard Ren*", "Phillip Guo*"],
      publication: "NeurIPS 2023 SoLaR Workshop",
      link: "https://arxiv.org/abs/2311.15131",
      details: [
        "We mechanistically investigate instructed dishonesty in a controlled setting by (a) training and transferring linear probes on intermediate model activations and (b) activation patching.",
        <span key="links">Links: <a href="https://github.com/jam3scampbell/llama-lying" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Codebase</a> | <a href="https://x.com/jam3scampbell/status/1729981499397603558?s=20" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Thread</a>.</span>,
        <span key="citations"><a href="https://scholar.google.com/scholar?cites=&as_sdt=2005&sciodt=0,5&hl=en&oi=gsb&q=Localizing+Lying+Llama" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:underline">25 citations</a></span>
      ],
      image: lll
    },
    {
      title: "Representation Engineering: A Top-Down Approach to AI Transparency (2023)",
      authors: ["Andy Zou", "Long Phan*", "Sarah Chen*", "James Campbell*", "Phillip Guo*", "Richard Ren*", "Alexander Pan", "Xuwang Yin", "Mantas Mazeika", "Ann-Kathrin Dombrowski", "Shashwat Goel", "Nathaniel Li", "Michael J. Byun", "Zifan Wang", "Alex Mallen", "Steven Basart", "Sanmi Koyejo", "Dawn Song", "Matt Fredrikson", "J. Zico Kolter", "Dan Hendrycks"],
      publication: "arXiv preprint",
      link: "https://arxiv.org/abs/2310.01405",
      details: [
        "Co-2nd author on Representation Engineering, a foundational paper on steering model behavior via control vectors in intermediate layers.",
        <span key="citation">Cited by OpenAI's Superalignment Team's <a href="https://openai.notion.site/Research-directions-0df8dd8136004615b0936bf48eb6aeb8" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Fast Grants page</a> as "work we would be excited to fund." Techniques merged into <a href="https://github.com/ggerganov/llama.cpp/pull/5970" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">llama.cpp</a> and <a href="https://github.com/vllm-project/vllm/issues/3861" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">vLLM</a> (two of the most widely used open-source AI inference libraries).</span>,
        <span key="links">Links: <a href="https://www.ai-transparency.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Website</a> | <a href="https://github.com/andyzoujm/representation-engineering" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Codebase</a>.</span>,
        <span key="citations"><a href="https://scholar.google.com/scholar?cites=&as_sdt=2005&sciodt=0,5&hl=en&oi=gsb&q=Representation+Engineering+Top-Down+AI+Transparency" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:underline">766 citations</a></span>
      ],
      image: repe
    },
    {
      title: "High-Efficiency Scattering Probe Design for S-Polarized Near-Field Microscopy (2021)",
      authors: ["Richard Ren", "Xinzhong Chen", "Mengkun Liu"],
      publication: "Applied Physics Express",
      link: "https://iopscience.iop.org/article/10.35848/1882-0786/abd716/meta",
      details: [
        "Used computational physics simulations to design a new probe for s-polarized near-field microscopy that improved signal-to-noise ratio by two orders of magnitude.",
        <span key="pdf">The article is published by a non-open-access journal, which there's unfortunately absolutely <a href="./APEX.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">no way</a> to get around.</span>
      ],
      image: scatteringprobe
    },
    {
      title: "Validity of Machine Learning in the Quantitative Analysis of Complex Scanning Near-Field Optical Microscopy Signals Using Simulated Data (2021)",
      authors: ["Xinzhong Chen", "Richard Ren", "Mengkun Liu"],
      publication: "Physical Review Applied",
      link: "https://journals.aps.org/prapplied/abstract/10.1103/PhysRevApplied.15.014001",
      details: [
        "Used neural networks and k-nearest-neighbors to fit a map from spectroscopy output (scattering signal) to a property of interest (sample dielectric function) on simulated data.",
        <span key="pdf">The article is published by a non-open-access journal, which there's unfortunately absolutely <a href="./PhysRevApl.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">no way</a> to get around.</span>
      ],
      image: validml
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 py-8 font-serif">
      <div className="mb-12">
        <div className="flip-card mb-6" onClick={handleGooseClick}>
          <div className={`flip-card-inner ${spinning ? 'spinning' : ''}`}>
            <img src={allGooseImages[gooseIndex]} alt="Profile" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-2">Richard Ren</h1>
        <p className="text-lg text-gray-700 mb-4">
          I work on research and special projects at the Center for AI Safety, advised by <a href="https://scholar.google.com/citations?user=czyretsAAAAJ&hl=en" className="text-blue-600 hover:underline">Dan Hendrycks</a>.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          I have co-led the most comprehensive empirical meta-analysis of AI safety benchmarks to date (<a href="https://arxiv.org/abs/2407.21792" className="text-blue-600 hover:underline">Safetywashing</a>, NeurIPS '24) as well as the development of an AI honesty benchmark (<a href="https://arxiv.org/abs/2503.03750" className="text-blue-600 hover:underline">MASK</a>). My co-1st-authored work has been presented at the UK Government AI Safety Institute (by invitation), cited by the <a href="https://arxiv.org/pdf/2506.20702" className="text-blue-600 hover:underline">Singapore Consensus</a> on AI Safety Priorities, and used by researchers at xAI (<a href="https://data.x.ai/2025-08-20-grok-4-model-card.pdf" className="text-blue-600 hover:underline">1</a>), OpenAI (<a href="https://openai.notion.site/Research-directions-0df8dd8136004615b0936bf48eb6aeb8" className="text-blue-600 hover:underline">1</a>, <a href="https://cdn.openai.com/papers/trading-inference-time-compute-for-adversarial-robustness-20250121_1.pdf" className="text-blue-600 hover:underline">2</a>), and Anthropic (<a href="https://alignment.anthropic.com/2025/honesty-elicitation/" className="text-blue-600 hover:underline">1</a>).
        </p>
        <button
          onClick={() => navigate('/about')}
          className="text-blue-600 hover:text-blue-800 hover:underline mb-6 flex items-center"
        >
          More About Me <ChevronRight className="w-4 h-4 ml-1" />
        </button>

        <div className="flex space-x-4 mb-8">
          <a href="https://scholar.google.com/citations?user=o-Vl80UAAAAJ&hl=en" className="text-gray-600 hover:text-gray-900">
            <BookOpen className="w-6 h-6" />
          </a>
          <a href="https://github.com/notrichardren" className="text-gray-600 hover:text-gray-900">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/richard-ren-tech/" className="text-gray-600 hover:text-gray-900">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:hi.richard.ren@gmail.com" className="text-gray-600 hover:text-gray-900">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://x.com/notRichardRen" className="text-gray-600 hover:text-gray-900">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="https://richardren.substack.com/" className="text-gray-600 hover:text-gray-900">
            <SubstackIcon className="w-6 h-6" />
          </a>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">News</h2>
        <div className="news-scroll space-y-4 max-h-64 overflow-y-auto pr-2">
          {[
            {
              date: 'January 28, 2026',
              content: <><em>Humanity's Last Exam</em> published in <a href="https://www.nature.com/articles/s41586-025-09962-4" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Nature</a>.</>
            },
            {
              date: 'January 8, 2026',
              content: <><em>Remote Labor Index</em> featured in the <a href="https://www.washingtonpost.com/technology/interactive/2026/ai-jobs-automation/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Washington Post</a>.</>
            },
            {
              date: 'November 25, 2025',
              content: <><em>MASK Benchmark</em> cited by Anthropic Alignment Science Blog (<a href="https://alignment.anthropic.com/2025/honesty-elicitation/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Evaluating honesty and lie detection techniques on a diverse suite of dishonest models</a>).</>
            },
            {
              date: 'August 20, 2025',
              content: <><em>MASK Benchmark</em> cited in <a href="https://data.x.ai/2025-08-20-grok-4-model-card.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">xAI's Grok 4 model card</a>.</>
            },
            {
              date: 'May 8, 2025',
              content: <><em>Safetywashing</em> and <em>MASK Benchmark</em> cited by the <a href="https://arxiv.org/pdf/2506.20702" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Singapore Consensus</a> on Global AI Safety Research Priorities.</>
            },
            {
              date: 'January 23, 2025',
              content: <><em>Humanity's Last Exam</em> released. Coverage from <a href="https://www.nytimes.com/2025/01/23/technology/ai-test-humanitys-last-exam.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">New York Times</a>, <a href="https://www.reuters.com/technology/artificial-intelligence/ai-experts-ready-humanitys-last-exam-2024-11-27/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Reuters</a>, <a href="https://qz.com/humanitys-last-exam-ai-test-stumped-1851749313" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Quartz</a>, etc.</>
            },
            {
              date: 'January 22, 2025',
              content: <><em>Safetywashing</em> cited in OpenAI's <a href="https://cdn.openai.com/papers/trading-inference-time-compute-for-adversarial-robustness-20250121_1.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">inference-time compute and adversarial robustness paper</a>.</>
            },
            {
              date: 'January 15, 2025',
              content: <><em>Safetywashing</em> cited as "research paper of the week" in TechCrunch.</>
            },
            {
              date: 'September 26, 2024',
              content: <>Publication accepted to NeurIPS '24 D&B (<em>Safetywashing</em>).</>
            },
            {
              date: 'August 23, 2024',
              content: <>Invited to present to the United Kingdom AI Safety Institute (<em>Safetywashing</em>).</>
            },
            {
              date: 'April 4, 2024',
              content: <>Control vectors added to vLLM (<em>Representation Engineering</em>).</>
            },
            {
              date: 'March 16, 2024',
              content: <>Technique introduced in research paper, control vectors, added to llama.cpp (<em>Representation Engineering</em>).</>
            },
            {
              date: 'December 14, 2023',
              content: <>Paper cited by OpenAI's Superalignment Team under their <a href="https://openai.notion.site/Research-directions-0df8dd8136004615b0936bf48eb6aeb8" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Fast Grants page</a> as "work we would be excited to fund" (<em>Representation Engineering</em>).</>
            }
          ].map((item, index) => (
            <div key={index} className="flex">
              <span className="w-48 flex-shrink-0 font-medium">{item.date}</span>
              <span className="text-gray-700">{item.content}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Research</h2>
        <div className="space-y-4">
          {researchProjects.map((project, index) => (
            <ResearchItem key={index} {...project} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Education</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <img src={upennLogo} alt="University of Pennsylvania" className="w-10 h-10 object-contain" />
            <div>
              <p className="text-gray-700 font-medium">University of Pennsylvania</p>
              <p className="text-gray-500">Computer Science (Penn Engineering) and Economics (Wharton School of Business)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export { HomePage, AboutPage };