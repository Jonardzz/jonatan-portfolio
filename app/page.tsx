"use client"; // This line lets us use click events and state
import { useState, useRef } from 'react';
import Grainient from '@/components/Grainient';
import { Button } from "@/components/ui/stateful-button";

export default function Home() {
  // This state tracks if the navigation menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Adds a soft, clean watercolor tone to match your paintbrush GIF
  const ghibliSoftGrade = {
    filter: 'brightness(1.05) contrast(0.9) saturate(0.85) sepia(0.05)'
  };

  // Promise-based form submit handler for StatefulButton
  const handleFormSubmit = () => {
    const form = formRef.current;
    if (!form) return Promise.reject();

    // Trigger HTML5 Validation visually
    if (!form.reportValidity()) {
      return Promise.reject(new Error("Validation failed"));
    }

    const data = new FormData(form);

    return new Promise<void>(async (resolve, reject) => {
      try {
        const response = await fetch("https://formspree.io/f/mojrblqo", {
          method: "POST",
          body: data,
          headers: {
            'Accept': 'application/json'
          }
        });
        
        if (response.ok) {
          form.reset();
          resolve();
        } else {
          reject(new Error("Submission failed"));
        }
      } catch (error) {
        reject(error);
      }
    });
  };

  // Technical Skills Array for the clean floating icon grid
  const technicalSkills = [
      { name: 'Python', icon: <i className="fa-brands fa-python text-xl"></i>, link: 'https://www.python.org/' },
      { name: 'JavaScript', icon: <i className="fa-brands fa-js text-xl"></i>, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { name: 'TypeScript', icon: <span className="font-bold text-[11px] font-mono border-[1.5px] border-current px-1 rounded-sm">TS</span>, link: 'https://www.typescriptlang.org/' },
      { name: 'React', icon: <i className="fa-brands fa-react text-xl"></i>, link: 'https://react.dev/' },
      { name: 'Next.js', icon: <span className="font-serif italic font-bold text-xl">N</span>, link: 'https://nextjs.org/' },
      { name: 'Tailwind CSS', icon: <span className="font-mono font-bold text-[13px] border-[1.5px] border-current pb-0.5">TW</span>, link: 'https://tailwindcss.com/' },
      { name: 'SQL', icon: <i className="fa-solid fa-database text-lg"></i>, link: 'https://en.wikipedia.org/wiki/SQL' },
      { name: 'C++', icon: <span className="font-bold text-base">C++</span>, link: 'https://isocpp.org/' },
      { name: 'PyTorch', icon: <i className="fa-solid fa-fire-flame-simple text-lg"></i>, link: 'https://pytorch.org/' },
      { name: 'Pandas', icon: <i className="fa-solid fa-table text-lg"></i>, link: 'https://pandas.pydata.org/' },
      { name: 'NumPy', icon: <i className="fa-solid fa-cubes text-lg"></i>, link: 'https://numpy.org/' },
      { name: 'NLTK', icon: <i className="fa-solid fa-book-open text-lg"></i>, link: 'https://www.nltk.org/' },
      { name: 'Sentence Transformers', icon: <i className="fa-solid fa-language text-lg"></i>, link: 'https://sbert.net/' },
      { name: 'Natural Language Processing', icon: <i className="fa-solid fa-brain text-lg"></i>, link: 'https://en.wikipedia.org/wiki/Natural_language_processing' },
      { name: 'Full Stack Development', icon: <i className="fa-solid fa-layer-group text-lg"></i>, link: 'https://en.wikipedia.org/wiki/Solution_stack' },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#05070a]">
      
      {/* FULL-PAGE GRAINIENT BACKGROUND - Optimized for mobile scroll */}
      <div className="fixed top-0 left-0 w-full h-[100dvh] z-0 pointer-events-none">
        <Grainient
          color1="#2a313d"
          color2="#8e8e8e"
          color3="#2a313d"
          timeSpeed={1.3}
          colorBalance={0.0}
          warpStrength={1.0}
          warpFrequency={5.0}
          warpSpeed={2.0}
          warpAmplitude={50.0}
          blendAngle={0.0}
          blendSoftness={0.05}
          rotationAmount={500.0}
          noiseScale={2.0}
          grainAmount={0.1}
          grainScale={2.0}
          grainAnimated={false}
          contrast={1.5}
          gamma={1.0}
          saturation={1.0}
          centerX={0.0}
          centerY={0.0}
          zoom={1.3}
        />
      </div>

      {/* ORIGINAL CONTENT WRAPPER */}
      <div className="relative z-10">
        <div className="min-h-screen px-6 py-8 md:px-16 md:py-12 relative overflow-x-hidden font-sans">
            
            <div className="max-w-6xl mx-auto relative z-10">
                
                {/* Interactive Top Header */}
                <header className="flex justify-end items-center mb-16 relative z-50 h-10 w-full">
                    
                    {/* Responsive Navigation Menu */}
                    <div className={`absolute top-14 right-0 md:static flex flex-col md:flex-row items-end md:items-center gap-6 md:gap-8 transition-all duration-300 bg-[#333b47]/80 backdrop-blur-md md:bg-transparent p-6 md:p-0 rounded-xl md:rounded-none shadow-2xl md:shadow-none border border-[#e6ddc5]/10 md:border-none min-w-[200px] md:min-w-0 z-40 origin-top-right ${
                        menuOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none md:opacity-100 md:scale-100 md:pointer-events-auto'
                    }`}>
                        <a href="#about" onClick={() => setMenuOpen(false)} className="text-[#e6ddc5]/80 hover:text-[#cfa262] font-display italic text-lg transition-colors w-full md:w-auto text-right">About</a>
                        <a href="#education" onClick={() => setMenuOpen(false)} className="text-[#e6ddc5]/80 hover:text-[#cfa262] font-display italic text-lg transition-colors w-full md:w-auto text-right">Education</a>
                        <a href="#projects" onClick={() => setMenuOpen(false)} className="text-[#e6ddc5]/80 hover:text-[#cfa262] font-display italic text-lg transition-colors w-full md:w-auto text-right">Projects</a>
                        <a href="#contact" onClick={() => setMenuOpen(false)} className="text-[#e6ddc5]/80 hover:text-[#cfa262] font-display italic text-lg transition-colors w-full md:w-auto text-right">Contact</a>
                        {/* Resume Link */}
                        <a href="/Rodriguez, Jonatan Resume 2026.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="text-[#e6ddc5]/80 hover:text-[#cfa262] font-display italic text-lg transition-colors flex items-center justify-end gap-2 w-full md:w-auto text-right">
                            Resume <i className="fa-solid fa-arrow-up-right-from-square text-[10px] opacity-50"></i>
                        </a>
                    </div>

                    {/* Animated 2-Line Hamburger Button (Mobile Only) */}
                    <button 
                        onClick={() => setMenuOpen(!menuOpen)} 
                        className="flex flex-col gap-2.5 items-end cursor-pointer focus:outline-none group p-2 z-50 relative md:hidden ml-6"
                        aria-label="Toggle Menu"
                    >
                        <span className={`h-[1.5px] bg-[#e6ddc5] transition-all duration-300 ${
                            menuOpen ? 'w-7 rotate-45 translate-y-[5.5px] bg-[#cfa262]' : 'w-8 group-hover:bg-[#cfa262] group-hover:w-6'
                        }`}></span>
                        <span className={`h-[1.5px] bg-[#e6ddc5] transition-all duration-300 ${
                            menuOpen ? 'w-7 -rotate-45 -translate-y-[5.5px] bg-[#cfa262]' : 'w-6 group-hover:bg-[#cfa262] group-hover:w-8'
                        }`}></span>
                    </button>
                </header>

                {/* Main Top Section */}
                <main className="mb-24">
                    <div className="flex flex-col lg:flex-row gap-10 md:gap-12 items-center">
                        
                        {/* Intro Text */}
                        <div className="w-full lg:w-1/2 order-2 lg:order-1 space-y-8">
                            <div className="space-y-3">
                                <p className="text-[#cfa262] font-display italic text-2xl tracking-wide">Welcome, I am</p>
                                <h1 className="text-6xl lg:text-8xl font-bold tracking-wide leading-none font-display text-[#e6ddc5]">
                                    Jonatan <br />Rodriguez
                                </h1>
                            </div>
                            
                            <p className="text-xl text-[#e6ddc5]/80 font-light leading-relaxed max-w-lg">
                                A Computer Science graduate from UH and <span className="text-[#cfa262] font-medium">Aspiring Software Engineer</span> specializing in Full Stack Development, NLP, and AI.
                            </p>

                            {/* Social Links */}
                            <div className="flex items-center gap-8 text-2xl pt-2">
                                <a href="https://github.com/Jonardzz" target="_blank" rel="noopener noreferrer" className="text-[#e6ddc5]/60 hover:text-[#cfa262] hover:-translate-y-1 transition-all duration-300">
                                    <i className="fa-brands fa-github"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/jonatan-rodriguez-9872213ba/" target="_blank" rel="noopener noreferrer" className="text-[#e6ddc5]/60 hover:text-[#cfa262] hover:-translate-y-1 transition-all duration-300">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                                <a href="/Rodriguez, Jonatan Resume 2026.pdf" target="_blank" rel="noopener noreferrer" className="text-[#e6ddc5]/60 hover:text-[#cfa262] hover:-translate-y-1 transition-all duration-300" title="Resume">
                                    <i className="fa-solid fa-scroll"></i>
                                </a>
                            </div>
                        </div>

                        {/* Main Top Image */}
                        <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end">
                            <div className="p-4 md:p-5 bg-[#333b47]/40 backdrop-blur-md rounded-2xl shadow-2xl border border-[#e6ddc5]/10 transform lg:rotate-2 hover:rotate-0 transition-all duration-700 w-full max-w-md flex items-center justify-center">
                                <img 
                                    src="/gifs/Intro3.gif" 
                                    alt="Cinematic Hero" 
                                    className="w-full h-auto object-contain rounded-xl opacity-90"
                                    style={ghibliSoftGrade}
                                />
                            </div>
                        </div>
                    </div>
                </main>

                {/* About Me and Skills Section */}
                <section id="about" className="mb-24 pt-8 scroll-mt-20">
                    {/* Unified Section Header */}
                    <div className="flex items-center gap-6 mb-10">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-[#cfa262]">About</h2>
                        <div className="h-[1px] flex-grow bg-gradient-to-r from-[#cfa262]/40 to-transparent"></div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-center lg:items-start">
                        
                        {/* Side Image for About Section - Profile Style Circle */}
                        <div className="w-full lg:w-5/12 relative flex justify-center lg:justify-start">
                            <div className="sticky top-24 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full shadow-2xl border-4 border-[#e6ddc5]/10 bg-[#2a313d]/40 backdrop-blur-md flex items-center justify-center overflow-hidden ring-1 ring-[#e6ddc5]/10 group">
                                <img 
                                    src="/gifs/G2.gif" 
                                    alt="About Illustration" 
                                    className="w-full h-full object-cover object-center opacity-85 group-hover:opacity-100 transition-opacity duration-500" 
                                    style={ghibliSoftGrade} 
                                />
                            </div>
                        </div>

                        <div className="w-full lg:w-7/12 flex flex-col justify-center space-y-10 bg-[#333b47]/40 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-[#e6ddc5]/10 shadow-xl">
                            
                            {/* About Text - Smaller, cleaner typography */}
                            <div className="space-y-4 text-[#e6ddc5]/80 leading-relaxed font-light text-[15px] sm:text-base">
                                <p>
                                    I’m a Computer Science graduate from the University of Houston. My interests include full stack development, natural language processing, and software engineering.
                                </p>
                                <p>
                                    I have experience with Python, C++, and SQL, along with hands-on project work in text processing, semantic search, and sentiment analysis. I have built projects that use tools such as PyTorch, Sentence-Transformers, NLTK, Pandas, and NumPy to process data and improve search results.
                                </p>
                                <p>
                                    I’m currently seeking an entry-level software engineering role where I can apply my technical skills, keep learning, and contribute to real-world software solutions.
                                </p>
                            </div>

                            {/* Technical Skills - Clean Floating Icons with Tooltips */}
                            <div>
                                <h3 className="text-xl font-bold font-display text-[#e6ddc5] mb-6">Technical Skills</h3>
                                <div className="flex flex-wrap gap-6 sm:gap-8 justify-center lg:justify-start pt-2">
                                    {technicalSkills.map((skill, index) => (
                                        <a 
                                            key={index} 
                                            href={skill.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="relative group flex items-center justify-center text-[#e6ddc5]/50 hover:text-[#cfa262] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(207,162,98,0.5)] cursor-pointer"
                                        >
                                            <div className="flex items-center justify-center transition-all duration-300 w-10 h-10">
                                                {skill.icon}
                                            </div>
                                            {/* Desktop-only Tooltip/Label placed ABOVE the icon to prevent overlap */}
                                            <div className="hidden md:flex absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 text-[11px] font-medium tracking-wide bg-[#1e221f] border border-[#e6ddc5]/10 text-[#e6ddc5] px-3 py-1.5 rounded-md shadow-2xl whitespace-nowrap z-50 pointer-events-none items-center justify-center">
                                                {skill.name}
                                                {/* Small triangle pointer */}
                                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-[#1e221f]"></div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* COMBINED SECTION: Education & Certifications */}
                <section id="education" className="mb-24 pt-12 scroll-mt-20">
                    <div className="flex items-center gap-6 mb-10">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-[#cfa262]">Education & Certifications</h2>
                        <div className="h-[1px] flex-grow bg-gradient-to-r from-[#cfa262]/20 to-transparent"></div>
                    </div>
                    
                    {/* 1. Academic Background */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold font-display text-[#e6ddc5] mb-6 opacity-90 pl-2 border-l-4 border-[#cfa262]">Academic Background</h3>
                        
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center lg:items-stretch">
                            
                            {/* Natural, Unboxed GIF */}
                            <div className="w-full lg:w-5/12 flex items-center justify-center relative group p-2">
                                <img 
                                    src="/gifs/education.gif" 
                                    alt="Education Illustration" 
                                    className="w-full h-auto max-h-[380px] object-contain opacity-90 transition-opacity duration-500 group-hover:opacity-100" 
                                    style={ghibliSoftGrade} 
                                />
                            </div>

                            {/* Education Cards Stack */}
                            <div className="w-full lg:w-7/12 flex flex-col gap-5 justify-center">
                                
                                {/* UH Card */}
                                <div className="bg-[#333b47]/40 backdrop-blur-md rounded-md shadow-lg border border-[#e6ddc5]/10 p-6 flex flex-col sm:flex-row gap-5 items-center sm:items-start hover:-translate-y-1 transition-all duration-300">
                                    {/* Clickable Transparent Logo Container */}
                                    <a href="https://www.uh.edu/" target="_blank" rel="noopener noreferrer" className="h-10 sm:h-12 w-28 sm:w-32 flex-shrink-0 flex items-center justify-center sm:justify-start bg-transparent hover:scale-105 transition-transform" title="University of Houston">
                                        <img src="/UH.png" alt="University of Houston Logo" className="max-h-full max-w-full object-contain object-left drop-shadow-md" />
                                    </a>
                                    <div className="flex flex-col w-full text-center sm:text-left mt-2 sm:mt-0">
                                        {/* Clickable Title */}
                                        <a href="https://www.uh.edu/" target="_blank" rel="noopener noreferrer" className="font-bold text-[#e6ddc5] text-lg leading-tight mb-1 hover:text-[#cfa262] transition-colors flex items-center justify-center sm:justify-start gap-2 group w-fit mx-auto sm:mx-0">
                                            University of Houston
                                            <i className="fa-solid fa-arrow-up-right-from-square text-[10px] opacity-0 group-hover:opacity-100 transition-opacity"></i>
                                        </a>
                                        <p className="text-[#e6ddc5]/60 text-sm font-light leading-snug mb-2">Bachelor's Degree, Computer Science</p>
                                        <p className="text-[13px] text-[#cfa262] italic font-medium">Aug 2024 - May 2026</p>
                                    </div>
                                </div>

                                {/* HCC Card */}
                                <div className="bg-[#333b47]/40 backdrop-blur-md rounded-md shadow-lg border border-[#e6ddc5]/10 p-6 flex flex-col sm:flex-row gap-5 items-center sm:items-start hover:-translate-y-1 transition-all duration-300">
                                    {/* Clickable Transparent Logo Container */}
                                    <a href="https://www.hccs.edu/" target="_blank" rel="noopener noreferrer" className="h-10 sm:h-12 w-28 sm:w-32 flex-shrink-0 flex items-center justify-center sm:justify-start bg-transparent hover:scale-105 transition-transform" title="Houston Community College">
                                        <img src="/HCC.png" alt="Houston Community College Logo" className="max-h-full max-w-full object-contain object-left drop-shadow-md" />
                                    </a>
                                    <div className="flex flex-col w-full text-center sm:text-left mt-2 sm:mt-0">
                                        {/* Clickable Title */}
                                        <a href="https://www.hccs.edu/" target="_blank" rel="noopener noreferrer" className="font-bold text-[#e6ddc5] text-lg leading-tight mb-1 hover:text-[#cfa262] transition-colors flex items-center justify-center sm:justify-start gap-2 group w-fit mx-auto sm:mx-0">
                                            Houston Community College
                                            <i className="fa-solid fa-arrow-up-right-from-square text-[10px] opacity-0 group-hover:opacity-100 transition-opacity"></i>
                                        </a>
                                        <p className="text-[#e6ddc5]/60 text-sm font-light leading-snug mb-2">Associate's Degree, Computer Science</p>
                                        <p className="text-[13px] text-[#cfa262] italic font-medium">Aug 2022 - May 2024</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. Professional Certifications */}
                    <div>
                        <h3 className="text-2xl font-bold font-display text-[#e6ddc5] mb-6 opacity-90 pl-2 border-l-4 border-[#cfa262]">Licenses & Certifications</h3>
                        
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center lg:items-stretch">
                            
                            {/* Natural, Unboxed GIF */}
                            <div className="w-full lg:w-5/12 flex items-center justify-center relative group p-2">
                                <img 
                                    src="/gifs/Education.webp" 
                                    alt="Licenses & Certifications Illustration" 
                                    className="w-full h-auto max-h-[450px] object-contain opacity-90 transition-opacity duration-500 group-hover:opacity-100" 
                                    style={ghibliSoftGrade} 
                                />
                            </div>

                            {/* Certification Cards Stack */}
                            <div className="w-full lg:w-7/12 flex flex-col gap-4 justify-center">
                                
                                {/* AWS Cert */}
                                <div className="bg-[#333b47]/40 backdrop-blur-md rounded-md shadow-lg border border-[#e6ddc5]/10 p-5 flex flex-col sm:flex-row gap-5 items-start hover:-translate-y-1 transition-all duration-300">
                                    {/* Official AWS Course Link */}
                                    <a href="https://www.coursera.org/learn/fundamentals-of-machine-learning-and-artificial-intelligence" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-12 h-12 flex items-center justify-center hover:scale-105 transition-transform" title="View Official Course">
                                        <i className="fa-brands fa-aws text-4xl sm:text-5xl text-[#e6ddc5] opacity-90"></i>
                                    </a>
                                    <div className="flex flex-col">
                                        {/* Official AWS Course Link */}
                                        <a href="https://www.coursera.org/learn/fundamentals-of-machine-learning-and-artificial-intelligence" target="_blank" rel="noopener noreferrer" className="font-bold text-[#e6ddc5] text-[17px] leading-tight mb-1 hover:text-[#cfa262] transition-colors flex items-center gap-2 group w-fit">
                                            Fundamentals of Machine Learning & AI
                                            <i className="fa-solid fa-arrow-up-right-from-square text-[10px] opacity-0 group-hover:opacity-100 transition-opacity"></i>
                                        </a>
                                        <p className="text-[#e6ddc5]/80 text-[13px] font-light mb-2 flex items-center gap-1.5 flex-wrap">
                                            Amazon Web Services (AWS) <span className="text-[#cfa262]/50">•</span> <span className="text-[#cfa262] italic font-medium">May 2026</span>
                                        </p>
                                        <p className="text-xs text-[#e6ddc5]/60 font-light leading-relaxed">
                                            Deep dive into the core mechanisms of modern AI/ML systems powered by AWS. Covered deep learning neural networks, generative AI architectures, and practical cloud deployment.
                                        </p>
                                    </div>
                                </div>

                                {/* Anthropic Cert 1 */}
                                <div className="bg-[#333b47]/40 backdrop-blur-md rounded-md shadow-lg border border-[#e6ddc5]/10 p-5 flex flex-col sm:flex-row gap-5 items-start hover:-translate-y-1 transition-all duration-300">
                                    {/* Official Claude 101 Course Link */}
                                    <a href="https://anthropic.skilljar.com/claude-101" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-12 h-12 flex items-center justify-center hover:scale-105 transition-transform" title="View Official Course">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg" alt="Anthropic Logo" className="w-full h-full object-contain brightness-0 invert opacity-90" />
                                    </a>
                                    <div className="flex flex-col">
                                        {/* Official Claude 101 Course Link */}
                                        <a href="https://anthropic.skilljar.com/claude-101" target="_blank" rel="noopener noreferrer" className="font-bold text-[#e6ddc5] text-[17px] leading-tight mb-1 hover:text-[#cfa262] transition-colors flex items-center gap-2 group w-fit">
                                            Claude 101
                                            <i className="fa-solid fa-arrow-up-right-from-square text-[10px] opacity-0 group-hover:opacity-100 transition-opacity"></i>
                                        </a>
                                        <p className="text-[#e6ddc5]/80 text-[13px] font-light mb-2 flex items-center gap-1.5 flex-wrap">
                                            Anthropic <span className="text-[#cfa262]/50">•</span> <span className="text-[#cfa262] italic font-medium">June 2026</span>
                                        </p>
                                        <p className="text-xs text-[#e6ddc5]/60 font-light leading-relaxed">
                                            Foundational training in Anthropic's Claude AI. Covered practical prompt engineering, utilizing Projects and Artifacts for workflow organization, and applying Generative AI to streamline everyday business tasks.
                                        </p>
                                    </div>
                                </div>

                                {/* Anthropic Cert 2 */}
                                <div className="bg-[#333b47]/40 backdrop-blur-md rounded-md shadow-lg border border-[#e6ddc5]/10 p-5 flex flex-col sm:flex-row gap-5 items-start hover:-translate-y-1 transition-all duration-300">
                                    {/* Official AI Fluency Course Link */}
                                    <a href="https://anthropic.skilljar.com/ai-fluency-framework-foundations" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-12 h-12 flex items-center justify-center hover:scale-105 transition-transform" title="View Official Course">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg" alt="Anthropic Logo" className="w-full h-full object-contain brightness-0 invert opacity-90" />
                                    </a>
                                    <div className="flex flex-col">
                                        {/* Official AI Fluency Course Link */}
                                        <a href="https://anthropic.skilljar.com/ai-fluency-framework-foundations" target="_blank" rel="noopener noreferrer" className="font-bold text-[#e6ddc5] text-[17px] leading-tight mb-1 hover:text-[#cfa262] transition-colors flex items-center gap-2 group w-fit">
                                            AI Fluency: Framework & Foundations
                                            <i className="fa-solid fa-arrow-up-right-from-square text-[10px] opacity-0 group-hover:opacity-100 transition-opacity"></i>
                                        </a>
                                        <p className="text-[#e6ddc5]/80 text-[13px] font-light mb-2 flex items-center gap-1.5 flex-wrap">
                                            Anthropic <span className="text-[#cfa262]/50">•</span> <span className="text-[#cfa262] italic font-medium">June 2026</span>
                                        </p>
                                        <p className="text-xs text-[#e6ddc5]/60 font-light leading-relaxed">
                                            Developed by Anthropic with University College Cork and Ringling College of Art and Design, this course covers the AI Fluency Framework. It focuses on the four key areas of Delegation, Description, Discernment, and Diligence.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* My Projects Section */}
                <section id="projects" className="mb-24 pt-12 border-t border-[#e6ddc5]/10 scroll-mt-12">
                    <div className="flex items-center gap-6 mb-10">
                        <h2 className="text-3xl font-bold font-display text-[#e6ddc5]">Projects</h2>
                        <div className="h-[1px] flex-grow bg-gradient-to-r from-[#e6ddc5]/10 to-transparent"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        
                        {/* First Project: Amazon Search */}
                        <div className="bg-[#333b47]/40 backdrop-blur-md rounded-md overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-lg border border-[#e6ddc5]/10 group">
                            <div className="h-40 overflow-hidden relative">
                                <img src="/gifs/G6.webp" alt="NLP Amazon Project" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500" style={ghibliSoftGrade} />
                            </div>
                            <div className="p-4 pt-5 flex flex-col flex-grow">
                                <h3 className="font-bold text-[#e6ddc5] text-lg leading-tight mb-1">Amazon Review Search</h3>
                                <p className="text-[#e6ddc5]/60 text-sm font-light leading-snug">Semantic sentiment retrieval pipeline</p>
                                
                                <div className="mt-6 flex items-center justify-between text-xs text-[#e6ddc5]/60 mt-auto pt-4 border-t border-[#e6ddc5]/5">
                                    {/* Tech Stack Icons */}
                                    <div className="flex items-center gap-3">
                                        <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfa262] transition-colors" title="Python">
                                            <i className="fa-brands fa-python text-lg"></i>
                                        </a>
                                        <a href="https://pytorch.org/" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfa262] transition-colors" title="PyTorch">
                                            <span className="font-mono font-bold text-[11px]">PT</span>
                                        </a>
                                        <a href="https://www.nltk.org/" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfa262] transition-colors" title="NLTK">
                                            <span className="font-mono font-bold text-[11px]">NLTK</span>
                                        </a>
                                    </div>
                                    {/* Only GitHub Link */}
                                    <div className="flex items-center gap-3">
                                        <a href="https://github.com/Jonardzz/NLP-Project" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfa262] transition-colors flex items-center gap-1 font-medium">
                                            GitHub<i className="fa-solid fa-angle-right text-[10px]"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Second Project: Portfolio Website */}
                        <div className="bg-[#333b47]/40 backdrop-blur-md rounded-md overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-lg border border-[#e6ddc5]/10 group">
                            <div className="h-40 overflow-hidden relative">
                                <img src="/gifs/G5.gif" alt="Portfolio Project Art" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500" style={ghibliSoftGrade} />
                            </div>
                            <div className="p-4 pt-5 flex flex-col flex-grow">
                                <h3 className="font-bold text-[#e6ddc5] text-lg leading-tight mb-1">Jonatan Rodriguez</h3>
                                <p className="text-[#e6ddc5]/60 text-sm font-light leading-snug">My Portfolio</p>
                                
                                <div className="mt-6 flex items-center justify-between text-xs text-[#e6ddc5]/60 mt-auto pt-4 border-t border-[#e6ddc5]/5">
                                    {/* Tech Stack Icons */}
                                    <div className="flex items-center gap-3">
                                        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-4 h-4 rounded-full bg-[#e6ddc5] text-[#333b47] hover:bg-[#cfa262] transition-colors font-serif italic text-[10px] font-bold" title="Next.js">N</a>
                                        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfa262] transition-colors" title="React">
                                            <i className="fa-brands fa-react text-lg"></i>
                                        </a>
                                        <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfa262] transition-colors" title="Tailwind CSS">
                                            <span className="font-mono font-bold text-[11px]">TW</span>
                                        </a>
                                    </div>
                                    {/* Only GitHub Link */}
                                    <div className="flex items-center gap-3">
                                        <a href="https://github.com/Jonardzz/jonatan-portfolio" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfa262] transition-colors flex items-center gap-1 font-medium">
                                            GitHub<i className="fa-solid fa-angle-right text-[10px]"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Spoken Languages Section */}
                <section className="mb-24">
                    <h2 className="text-3xl font-bold font-display text-[#cfa262] mb-8 text-center md:text-left">Languages</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-[#333b47]/40 backdrop-blur-md border border-[#e6ddc5]/10 p-6 rounded-md flex justify-between items-center shadow-lg">
                            <span className="text-[#e6ddc5] font-light text-lg">English</span>
                            <span className="text-[#cfa262] text-sm italic">Full professional proficiency</span>
                        </div>
                        <div className="bg-[#333b47]/40 backdrop-blur-md border border-[#e6ddc5]/10 p-6 rounded-md flex justify-between items-center shadow-lg">
                            <span className="text-[#e6ddc5] font-light text-lg">Spanish</span>
                            <span className="text-[#cfa262] text-sm italic">Native or bilingual proficiency</span>
                        </div>
                    </div>
                </section>

                {/* Email Form Section */}
                <section id="contact" className="border-t border-[#e6ddc5]/10 pt-20 pb-12 scroll-mt-12">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center bg-[#333b47]/40 backdrop-blur-md p-8 md:p-12 rounded-sm border border-[#e6ddc5]/10 shadow-2xl relative overflow-hidden">
                        
                        <div className="md:col-span-6 space-y-6 relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#cfa262]">Contact info</h2>
                            <p className="text-lg text-[#e6ddc5]/80 font-light leading-relaxed">
                                I am open to work and actively seeking entry-level software engineering roles (On-site, Hybrid, or Remote). Got a question or want to get connected? Let's talk.
                            </p>
                            
                            {/* Connected Formspree Form */}
                            <form ref={formRef} className="space-y-6 pt-4">
                                <div className="relative">
                                    <input type="text" name="name" required placeholder="Your Name" className="w-full bg-transparent border-b border-[#e6ddc5]/20 py-2 text-[#e6ddc5] placeholder-[#e6ddc5]/30 focus:outline-none focus:border-[#cfa262] transition-colors font-light" />
                                </div>
                                <div className="relative">
                                    <input type="email" name="email" required placeholder="Your Email" className="w-full bg-transparent border-b border-[#e6ddc5]/20 py-2 text-[#e6ddc5] placeholder-[#e6ddc5]/30 focus:outline-none focus:border-[#cfa262] transition-colors font-light" />
                                </div>
                                <div className="relative">
                                    <textarea name="message" required rows={3} placeholder="Your Message" className="w-full bg-transparent border-b border-[#e6ddc5]/20 py-2 text-[#e6ddc5] placeholder-[#e6ddc5]/30 focus:outline-none focus:border-[#cfa262] transition-colors font-light resize-none"></textarea>
                                </div>
                                <Button type="button" onClick={handleFormSubmit} className="bg-[#cfa262] text-[#1e221f] px-8 py-3 rounded-sm hover:bg-[#e6ddc5] transition-all font-display text-lg tracking-wide font-bold shadow-lg w-full sm:w-auto">
                                    Send Message
                                </Button>
                            </form>
                        </div>

                        {/* Natural Unboxed Contact GIF */}
                        <div className="md:col-span-6 flex justify-center md:justify-end group">
                            <img 
                                src="/gifs/Mail 2.gif" 
                                alt="Contact Info Delivery" 
                                className="w-full max-w-sm md:max-w-md h-auto object-contain opacity-90 transition-transform duration-700 group-hover:scale-[1.02]"
                                style={ghibliSoftGrade}
                            />
                        </div>

                    </div>
                </section>

                {/* Footer Section */}
                <footer className="py-8 mt-12 border-t border-[#e6ddc5]/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[#e6ddc5]/40 text-sm font-light">
                        © {new Date().getFullYear()} Jonatan Rodriguez. All rights reserved.
                    </p>
                    <p className="text-[#e6ddc5]/40 text-sm font-light">
                        Crafted with <span className="text-[#cfa262]">Next.js</span> and <span className="text-[#cfa262]">Tailwind</span>.
                    </p>
                </footer>

            </div>
        </div>
      </div>
    </div>
  );
}