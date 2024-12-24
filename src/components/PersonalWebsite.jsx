import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, ChevronDown, ChevronUp, ArrowLeft, BookOpen } from 'lucide-react';

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
        <h2 className="text-2xl font-bold mb-6">Research Philosophy</h2>
        <p className="text-gray-700 mb-6">
          My research style is rapid, iterative, and experimentally-focused. In my research, I like to continually re-prioritize, remodel my worldview based on the empirical evidence, and minimize entropy quickly. I've also found my findings are <a href="https://paulgraham.com/relres.html" className="text-blue-600 hover:underline">bottlenecked by iteration speed</a>: the faster you move, the more creative and unusual you can get.
        </p>
        <p className="text-gray-700 mb-6">
          I also like focusing on <a href="https://paulgraham.com/smart.html" className="text-blue-600 hover:underline">understudied directions</a> and potential new areas that the ML community at large is not focused on but could be <a href="https://www.youtube.com/watch?v=vtIzMaLkCaM" className="text-blue-600 hover:underline">valuable</a>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Why?</h2>
        <p className="text-gray-700 mb-6">
          My inspiration and interest in AI safety research stems from reading <em>Human Compatible</em> and <em>Code</em> during my sophomore year of undergrad. I want to understand the implicit values encoded into AI systems. How we build AI systems may be the new law.
        </p>
        <p className="text-gray-700">
          I've been called a RAISIN (Responsible AI Safety and INterpretability researcher) by an <a href="https://vgel.me/posts/representation-engineering/" className="text-blue-600 hover:underline">article</a> that reached the front page of Hacker News. I would like this title to take off.
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
          className="w-48 h-36 object-cover rounded flex-shrink-0"
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
  const researchProjects = [
    {
      title: "Safetywashing: Do AI Safety Benchmarks Actually Measure Safety Progress? (2024)",
      authors: ["Richard Ren*", "Steven Basart*", "Adam Khoja", "Alice Gatti", "Long Phan", "Xuwang Yin", "Mantas Mazeika", "Alexander Pan", "Gabriel Mukobi", "Ryan H. Kim", "Stephen Fitz", "Dan Hendrycks"],
      publication: "NeurIPS 2024 Datasets & Benchmarks Track",
      link: "http://www.arxiv.org/abs/2407.21792",
      details: [
        "The most comprehensive empirical meta-analysis of AI safety benchmarks to date.",
        "I was invited to present this work at the UK Government AI Safety Institute.",
      ],
      image: "https://placehold.co/200x150"
    },
    {
      title: "Representation Engineering: A Top-Down Approach to AI Transparency (2023)",
      authors: ["Andy Zou", "Long Phan*", "Sarah Chen*", "James Campbell*", "Phillip Guo*", "Richard Ren*", "Alexander Pan", "Xuwang Yin", "Mantas Mazeika", "Ann-Kathrin Dombrowski", "Shashwat Goel", "Nathaniel Li", "Michael J. Byun", "Zifan Wang", "Alex Mallen", "Steven Basart", "Sanmi Koyejo", "Dawn Song", "Matt Fredrikson", "J. Zico Kolter", "Dan Hendrycks"],
      publication: "arXiv preprint arXiv:2310.01405",
      link: "http://www.arxiv.org/abs/2310.01405",
      details: [
        "We obtain control vectors for concepts such as honesty, morality, happiness, sadness, etc. (in intermediate model layers) which could be used to steer the model's behavior as desired.",
        "Cited by OpenAI's Superalignment Fast Grants page, and has over 200 citations generally.",
        "Techniques from the paper (e.g. RepControl) have been incorporated into llama.cpp and vLLM."
      ],
      image: "https://placehold.co/200x150"
    },
    {
      title: "Localizing Lying in LLaMA: Understanding Instructed Dishonesty on True-False Questions Through Prompting, Probing, and Patching (2023)",
      authors: ["James Campbell*", "Richard Ren*", "Phillip Guo*"],
      publication: "NeurIPS 2023 SoLaR Workshop",
      link: "http://www.arxiv.org/abs/2311.15131",
      details: [
        "By engineering prompts to induce dishonest behavior, training a linear probe on intermediate model activations, and patching activations, we mechanistically investigate lying in a controlled setting.",
      ],
      image: "https://placehold.co/200x150"
    },
    {
      title: "High-Efficiency Scattering Probe Design for S-Polarized Near-Field Microscopy (2021)",
      authors: ["Richard Ren", "Xinzhong Chen", "Mengkun Liu"],
      publication: "Applied Physics Express",
      link: "https://iopscience.iop.org/article/10.35848/1882-0786/abd716/meta",
      details: [
        "Used computational physics simulations to design a new probe for s-polarized near-field microscopy that improved signal-to-noise ratio by two orders of magnitude."
      ],
      image: "https://placehold.co/200x150"
    },
    {
      title: "Validity of Machine Learning in the Quantitative Analysis of Complex Scanning Near-Field Optical Microscopy Signals Using Simulated Data (2021)",
      authors: ["Xinzhong Chen", "Richard Ren", "Mengkun Liu"],
      publication: "Physical Review Applied",
      link: "https://iopscience.iop.org/article/10.35848/1882-0786/abd716/meta",
      details: [
        "Used neural networks and k-nearest-neighbors to fit a map from spectroscopy output (scattering signal) to a property of interest (sample dielectric function)."
      ],
      image: "https://placehold.co/200x150"
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 py-8 font-serif">
      <div className="mb-12">
        <img
          src="https://placehold.co/150x150"
          alt="Profile"
          className="w-32 h-32 rounded-lg mb-6"
        />
        <h1 className="text-4xl font-bold mb-2">Richard Ren</h1>
        <p className="text-gray-600 italic mb-4">
          {["a professional silly goose", "a high entropy researcher"][Math.floor(Math.random() * 2)]}
        </p>
        <p className="text-lg text-gray-700 mb-4">
          I'm a fourth-year undergraduate student at the Jerome Fisher M&T Program at the University of Pennsylvania. My research is the science of AI evaluations as well as steering model behaviors.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          My past work has been presented at the UK AI Safety Institute, cited by OpenAI's Superalignment Fast Grants page, accepted at NeurIPS, and incorporated into llama.cpp and vLLM (two open-source model inference libraries). I have recently conducted the largest empirical meta-analysis of AI safety benchmarks to date.
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
              content: <>Technique introduced in research paper, control vectors, added to vLLM (<em>Representation Engineering</em>).</>
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