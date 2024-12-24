import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, ChevronDown, ChevronUp, ArrowLeft, BookOpen } from 'lucide-react';

// Import the images
import sillyGoose from '../assets/silly-goose.jpg';
import gooseIpad from '../assets/goose-ipad.gif';
import gooseHonking from '../assets/goose-honking-goose.gif';
import safetywashing from '../assets/safetywashing.png';
import repe from '../assets/repe.png';
import lll from '../assets/lll.png';
import scatteringprobe from '../assets/scatteringprobe.png';
import validml from '../assets/validml.png';

const AboutPage = ({ onBack }) => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-8 font-serif">
      <button
        onClick={onBack}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </button>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Research style</h2>
        <p className="text-gray-700 mb-6">
          I'm an experimentalist at heart. My research style is quick, iterative, and empirically-driven. I like to continually re-prioritize, remodel my worldview based on the experimental evidence, and minimize entropy quickly. I've found my findings are <a href="https://paulgraham.com/relres.html" className="text-blue-600 hover:underline">bottlenecked by iteration speed</a>: the faster you move, the more creative and unusual you can get.
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
    </div>
  );
};

const ResearchItem = ({ title, authors, link, details, image, publication }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="border border-gray-200 rounded-lg p-4 mb-6 shadow-sm">
      <a
        href={link}
        className="flex space-x-6"
      >
        <img
          src={image}
          alt={title}
          className="w-48 h-36 object-cover rounded flex-shrink-0 bg-white"
        />
        <div className="flex-grow">
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
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
          <p className="text-blue-600">{publication}</p>
        </div>
      </a>
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

const HomePage = ({ onNavigateToAbout }) => {
  const profileImages = [sillyGoose, gooseIpad];
  const randomImage = profileImages[Math.floor(Math.random() * profileImages.length)];

  const researchProjects = [
    {
      title: "Safetywashing: Do AI Safety Benchmarks Actually Measure Safety Progress? (2024)",
      authors: ["Richard Ren*", "Steven Basart*", "Adam Khoja", "Alice Gatti", "Long Phan", "Xuwang Yin", "Mantas Mazeika", "Alexander Pan", "Gabriel Mukobi", "Ryan H. Kim", "Stephen Fitz", "Dan Hendrycks"],
      publication: "NeurIPS 2024 Datasets & Benchmarks Track",
      link: "http://www.arxiv.org/abs/2407.21792",
      details: [
        "The most comprehensive empirical meta-analysis of AI safety benchmarks to date, measuring the correlations of safety benchmark scores with compute and capabilities benchmarks across models.",
        "I was invited to present this work at the UK Government AI Safety Institute.",
        <span key="links">Links: <a href="https://www.safetywashing.ai/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Website</a> | <a href="https://github.com/centerforaisafety/safetywashing" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Codebase</a> | <a href="https://x.com/notRichardRen/status/1819427976309780574" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Thread</a>.</span>
      ],
      image: safetywashing
    },
    {
      title: "Representation Engineering: A Top-Down Approach to AI Transparency (2023)",
      authors: ["Andy Zou", "Long Phan*", "Sarah Chen*", "James Campbell*", "Phillip Guo*", "Richard Ren*", "Alexander Pan", "Xuwang Yin", "Mantas Mazeika", "Ann-Kathrin Dombrowski", "Shashwat Goel", "Nathaniel Li", "Michael J. Byun", "Zifan Wang", "Alex Mallen", "Steven Basart", "Sanmi Koyejo", "Dawn Song", "Matt Fredrikson", "J. Zico Kolter", "Dan Hendrycks"],
      publication: "arXiv preprint",
      link: "http://www.arxiv.org/abs/2310.01405",
      details: [
        "We obtain control vectors for concepts such as honesty, morality, happiness, sadness, etc. in intermediate model layers, which could be used to steer the model's behavior as desired.",
        "Cited by OpenAI's Superalignment Fast Grants page, and has over 200 citations generally.",
        "Techniques from the paper (e.g. RepControl) have been incorporated into llama.cpp and vLLM.",
        <span key="links">Links: <a href="https://www.ai-transparency.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Website</a> | <a href="https://github.com/andyzoujm/representation-engineering" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Codebase</a>.</span>
      ],
      image: repe
    },
    {
      title: "Localizing Lying in Llama: Understanding Instructed Dishonesty on True-False Questions Through Prompting, Probing, and Patching (2023)",
      authors: ["James Campbell*", "Richard Ren*", "Phillip Guo*"],
      publication: "NeurIPS 2023 SoLaR Workshop",
      link: "http://www.arxiv.org/abs/2311.15131",
      details: [
        "We mechanistically investigate lying in a controlled setting by (a) engineering prompts to induce dishonest behavior, (b) training and transferring linear probes on intermediate model activations, and (c) causally patching activations.",
      ],
      image: lll
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
      link: "https://iopscience.iop.org/article/10.35848/1882-0786/abd716/meta",
      details: [
        "Used neural networks and k-nearest-neighbors to fit a map from spectroscopy output (scattering signal) to a property of interest (sample dielectric function) on simulated data.",
        < span key="pdf" > The article is published by a non-open-access journal, which there's unfortunately absolutely <a href="./PhysRevApl.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">no way</a> to get around.</span>
      ],
      image: validml
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 py-8 font-serif">
      <div className="mb-12">
        <img
          src={randomImage}
          alt="Profile"
          className="w-32 h-32 rounded-lg mb-6"
        />
        <h1 className="text-4xl font-bold mb-2">Richard Ren</h1>
        <p className="text-gray-600 italic mb-4">
          {["a professional silly goose", "a high entropy researcher"][Math.floor(Math.random() * 2)]}
        </p>
        <p className="text-lg text-gray-700 mb-4">
          I'm a fourth-year undergraduate student at the Jerome Fisher M&T Program at the University of Pennsylvania. My research is on the science of AI evaluations as well as steering model behaviors.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          My past work has been presented at the UK AI Safety Institute, cited by OpenAI's Superalignment Fast Grants page, accepted at NeurIPS, and incorporated into llama.cpp and vLLM (two open-source model inference libraries). I have recently co-authored the most comprehensive empirical meta-analysis of AI safety benchmarks to date.
        </p>

        <button
          onClick={onNavigateToAbout}
          className="text-blue-600 hover:text-blue-800 hover:underline mb-6 flex items-center"
        >
          More About Me <ChevronDown className="w-4 h-4 ml-1" />
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
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">News</h2>
        <div className="space-y-4">
          {[
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
            }
          ].map((item, index) => (
            <div key={index} className="flex">
              <span className="w-40 flex-shrink-0 font-medium">{item.date}</span>
              <span className="text-gray-700">{item.content}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Research</h2>
        <div className="space-y-4">
          {researchProjects.map((project, index) => (
            <ResearchItem key={index} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
};

const PersonalWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div>
      {currentPage === 'home' ? (
        <HomePage onNavigateToAbout={() => setCurrentPage('about')} />
      ) : (
        <AboutPage onBack={() => setCurrentPage('home')} />
      )}
    </div>
  );
};

export default PersonalWebsite;