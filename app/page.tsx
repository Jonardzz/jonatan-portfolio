"use client"; // This line lets us use click events and state
import { useState } from 'react';

export default function Home() {
  // This state tracks if the navigation menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);

  // Adds a soft, clean watercolor tone to match your paintbrush GIF
  const ghibliSoftGrade = {
    filter: 'brightness(1.05) contrast(0.9) saturate(0.85) sepia(0.05)'
  };

  return (
    <div className="min-h-screen px-6 py-8 md:px-16 md:py-12 relative overflow-hidden font-sans">
        
        <div className="max-w-6xl mx-auto relative z-10">
            
            {/* Interactive Top Header */}
            <header className="flex justify-end items-center mb-16 relative z-50 h-10">
                
                {/* Responsive Navigation Menu */}
                <div className={`absolute top-12 right-0 md:static flex flex-col md:flex-row items-end md:items-center gap-6 md:gap-8 pr-2 md:pr-6 transition-all duration-300 bg-[#333b47] md:bg-transparent p-6 md:p-0 rounded-md md:rounded-none shadow-2xl md:shadow-none border border-[#e6ddc5]/10 md:border-none min-w-[180px] md:min-w-0 ${
                    menuOpen ? 'opacity-100 translate-y-0 md:translate-x-0 pointer-events-auto' : 'opacity-0 -translate-y-4 md:-translate-y-0 md:translate-x-4 pointer-events-none'
                }`}>
                    <a href="#about" onClick={() => setMenuOpen(false)} className="text-[#e6ddc5]/80 hover:text-[#cfa262] font-display italic text-lg transition-colors">About</a>
                    <a href="#education" onClick={() => setMenuOpen(false)} className="text-[#e6ddc5]/80 hover:text-[#cfa262] font-display italic text-lg transition-colors">Education</a>
                    <a href="#projects" onClick={() => setMenuOpen(false)} className="text-[#e6ddc5]/80 hover:text-[#cfa262] font-display italic text-lg transition-colors">Projects</a>
                    <a href="#contact" onClick={() => setMenuOpen(false)} className="text-[#e6ddc5]/80 hover:text-[#cfa262] font-display italic text-lg transition-colors">Contact</a>
                    {/* Resume Link */}
                    <a href="/Rodriguez, Jonatan Resume 2026.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="text-[#e6ddc5]/80 hover:text-[#cfa262] font-display italic text-lg transition-colors flex items-center gap-2">
                        Resume <i className="fa-solid fa-arrow-up-right-from-square text-[10px] opacity-50"></i>
                    </a>
                </div>

                {/* Animated 2-Line Button */}
                <button 
                    onClick={() => setMenuOpen(!menuOpen)} 
                    className="flex flex-col gap-2.5 items-end cursor-pointer focus:outline-none group p-2 z-50 relative md:hidden ml-4"
                    aria-label="Toggle Menu"
                >
                    <span className={`h-[1px] bg-[#e6ddc5] transition-all duration-300 ${
                        menuOpen ? 'w-7 rotate-45 translate-y-[5px] bg-[#cfa262]' : 'w-8 group-hover:bg-[#cfa262] group-hover:w-6'
                    }`}></span>
                    <span className={`h-[1px] bg-[#e6ddc5] transition-all duration-300 ${
                        menuOpen ? 'w-7 -rotate-45 -translate-y-[6px] bg-[#cfa262]' : 'w-6 group-hover:bg-[#cfa262] group-hover:w-8'
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
                        <div className="p-4 md:p-5 bg-[#333b47]/80 rounded-2xl shadow-2xl border border-[#e6ddc5]/10 transform lg:rotate-2 hover:rotate-0 transition-all duration-700 w-full max-w-md flex items-center justify-center">
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

                <div className="flex flex-col lg:flex-row gap-10 md:gap-12 items-stretch">
                    
                    {/* Side Image for About Section */}
                    <div className="w-full lg:w-5/12 relative">
                        <div className="sticky top-20 w-full p-4 md:p-5 bg-[#333b47]/80 rounded-2xl shadow-2xl border border-[#e6ddc5]/5 flex items-center justify-center">
                            <img 
                                src="/gifs/G2.gif" 
                                alt="About Illustration" 
                                className="w-full h-auto max-h-[60vh] object-contain rounded-xl opacity-80 hover:opacity-100 transition-opacity duration-500" 
                                style={ghibliSoftGrade} 
                            />
                        </div>
                    </div>

                    <div className="w-full lg:w-7/12 flex flex-col justify-center space-y-10 bg-[#333b47]/30 p-8 md:p-10 rounded-2xl border border-[#e6ddc5]/5">
                        
                        {/* About Text */}
                        <div className="space-y-5 text-[#e6ddc5]/80 leading-relaxed font-light text-lg">
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

                        {/* Skill Links and Badges */}
                        <div>
                            <h3 className="text-xl font-bold font-display text-[#e6ddc5] mb-5">Technical Skills</h3>
                            <div className="flex flex-wrap gap-2.5 font-body text-sm">
                                {[
                                    { name: 'Information Retrieval (IR)', link: 'https://en.wikipedia.org/wiki/Information_retrieval' },
                                    { name: 'Sentiment Analysis', link: 'https://en.wikipedia.org/wiki/Sentiment_analysis' },
                                    { name: 'Python', link: 'https://www.python.org/' },
                                    { name: 'C++', link: 'https://isocpp.org/' },
                                    { name: 'SQL', link: 'https://en.wikipedia.org/wiki/SQL' },
                                    { name: 'PyTorch', link: 'https://pytorch.org/' },
                                    { name: 'Sentence-Transformers', link: 'https://sbert.net/' },
                                    { name: 'NLTK', link: 'https://www.nltk.org/' },
                                    { name: 'Pandas', link: 'https://pandas.pydata.org/' },
                                    { name: 'NumPy', link: 'https://numpy.org/' }
                                ].map((skill, index) => (
                                    <a 
                                        key={index} 
                                        href={skill.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="px-4 py-2 border border-[#cfa262]/30 bg-[#333b47] rounded-lg text-[#e6ddc5]/90 hover:bg-[#cfa262] hover:text-[#1e221f] hover:scale-105 transition-all duration-300 cursor-pointer shadow-sm"
                                    >
                                        {skill.name}
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
                            <div className="bg-[#333b47] rounded-md shadow-lg border border-[#e6ddc5]/5 p-6 flex flex-col sm:flex-row gap-5 items-center sm:items-start hover:-translate-y-1 transition-all duration-300">
                                {/* Balanced Transparent Logo Container */}
                                <div className="h-10 sm:h-12 w-28 sm:w-32 flex-shrink-0 flex items-center justify-center sm:justify-start bg-transparent">
                                    <img src="/UH.png" alt="University of Houston Logo" className="max-h-full max-w-full object-contain object-left drop-shadow-md" />
                                </div>
                                <div className="flex flex-col w-full text-center sm:text-left mt-2 sm:mt-0">
                                    <h4 className="font-bold text-[#e6ddc5] text-lg leading-tight mb-1">University of Houston</h4>
                                    <p className="text-[#e6ddc5]/60 text-sm font-light leading-snug mb-2">Bachelor's Degree, Computer Science</p>
                                    <p className="text-[13px] text-[#cfa262] italic font-medium">Aug 2024 - May 2026</p>
                                </div>
                            </div>

                            {/* HCC Card */}
                            <div className="bg-[#333b47] rounded-md shadow-lg border border-[#e6ddc5]/5 p-6 flex flex-col sm:flex-row gap-5 items-center sm:items-start hover:-translate-y-1 transition-all duration-300">
                                {/* Balanced Transparent Logo Container */}
                                <div className="h-10 sm:h-12 w-28 sm:w-32 flex-shrink-0 flex items-center justify-center sm:justify-start bg-transparent">
                                    <img src="/HCC.png" alt="Houston Community College Logo" className="max-h-full max-w-full object-contain object-left drop-shadow-md" />
                                </div>
                                <div className="flex flex-col w-full text-center sm:text-left mt-2 sm:mt-0">
                                    <h4 className="font-bold text-[#e6ddc5] text-lg leading-tight mb-1">Houston Community College</h4>
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
                            <div className="bg-[#333b47] rounded-md shadow-lg border border-[#e6ddc5]/5 p-5 flex flex-col sm:flex-row gap-5 items-start hover:-translate-y-1 transition-all duration-300">
                                {/* TODO: Replace href="#" with official AWS Machine Learning course link */}
                                <a href="#" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-12 h-12 flex items-center justify-center hover:scale-105 transition-transform" title="View Official Course">
                                    <i className="fa-brands fa-aws text-4xl sm:text-5xl text-[#e6ddc5] opacity-90"></i>
                                </a>
                                <div className="flex flex-col">
                                    {/* TODO: Replace href="#" with official AWS Machine Learning course link */}
                                    <a href="#" target="_blank" rel="noopener noreferrer" className="font-bold text-[#e6ddc5] text-[17px] leading-tight mb-1 hover:text-[#cfa262] transition-colors flex items-center gap-2 group w-fit">
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
                            <div className="bg-[#333b47] rounded-md shadow-lg border border-[#e6ddc5]/5 p-5 flex flex-col sm:flex-row gap-5 items-start hover:-translate-y-1 transition-all duration-300">
                                {/* TODO: Replace href="#" with official Anthropic Claude 101 course link */}
                                <a href="#" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-12 h-12 flex items-center justify-center hover:scale-105 transition-transform" title="View Official Course">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg" alt="Anthropic Logo" className="w-full h-full object-contain brightness-0 invert opacity-90" />
                                </a>
                                <div className="flex flex-col">
                                    {/* TODO: Replace href="#" with official Anthropic Claude 101 course link */}
                                    <a href="#" target="_blank" rel="noopener noreferrer" className="font-bold text-[#e6ddc5] text-[17px] leading-tight mb-1 hover:text-[#cfa262] transition-colors flex items-center gap-2 group w-fit">
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
                            <div className="bg-[#333b47] rounded-md shadow-lg border border-[#e6ddc5]/5 p-5 flex flex-col sm:flex-row gap-5 items-start hover:-translate-y-1 transition-all duration-300">
                                {/* TODO: Replace href="#" with official Anthropic AI Fluency course link */}
                                <a href="#" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-12 h-12 flex items-center justify-center hover:scale-105 transition-transform" title="View Official Course">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg" alt="Anthropic Logo" className="w-full h-full object-contain brightness-0 invert opacity-90" />
                                </a>
                                <div className="flex flex-col">
                                    {/* TODO: Replace href="#" with official Anthropic AI Fluency course link */}
                                    <a href="#" target="_blank" rel="noopener noreferrer" className="font-bold text-[#e6ddc5] text-[17px] leading-tight mb-1 hover:text-[#cfa262] transition-colors flex items-center gap-2 group w-fit">
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
                    <div className="bg-[#333b47] rounded-md overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-lg border border-[#e6ddc5]/5 group">
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
                    <div className="bg-[#333b47] rounded-md overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-lg border border-[#e6ddc5]/5 group">
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

            {/* Spoken Languages Section (Communication Toolkit Style) */}
            <section className="mb-24 pt-12 border-t border-[#e6ddc5]/10">
                <div className="flex items-center gap-6 mb-8">
                    <h2 className="text-3xl font-bold font-display text-[#cfa262]">Languages</h2>
                    <div className="h-[1px] flex-grow bg-gradient-to-r from-[#cfa262]/20 to-transparent"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* English Badge */}
                    <div className="bg-[#333b47] border border-[#e6ddc5]/5 p-5 rounded-md flex items-center gap-5 shadow-lg relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                        {/* Glow Accent Line */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#cfa262] opacity-50 group-hover:opacity-100 transition-opacity"></div>
                        {/* Clean Typographic Badge */}
                        <div className="w-12 h-12 flex-shrink-0 rounded-full bg-[#2a313d] flex items-center justify-center text-[#cfa262] border border-[#e6ddc5]/10 shadow-inner">
                            <span className="font-serif font-bold tracking-wide">EN</span>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-[#e6ddc5] font-bold text-lg leading-tight mb-1">English</h3>
                            <span className="text-[#e6ddc5]/60 text-sm font-light">Full professional proficiency</span>
                        </div>
                    </div>

                    {/* Spanish Badge */}
                    <div className="bg-[#333b47] border border-[#e6ddc5]/5 p-5 rounded-md flex items-center gap-5 shadow-lg relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                        {/* Glow Accent Line */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#cfa262] opacity-50 group-hover:opacity-100 transition-opacity"></div>
                        {/* Clean Typographic Badge */}
                        <div className="w-12 h-12 flex-shrink-0 rounded-full bg-[#2a313d] flex items-center justify-center text-[#cfa262] border border-[#e6ddc5]/10 shadow-inner">
                            <span className="font-serif font-bold tracking-wide">ES</span>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-[#e6ddc5] font-bold text-lg leading-tight mb-1">Spanish</h3>
                            <span className="text-[#e6ddc5]/60 text-sm font-light">Native or bilingual proficiency</span>
                        </div>
                    </div>

                </div>
            </section>

            {/* Modern Split-Layout Contact Section */}
            <section id="contact" className="mb-24 pt-12 border-t border-[#e6ddc5]/10 scroll-mt-12">
                <div className="bg-[#333b47] rounded-md border border-[#e6ddc5]/5 shadow-2xl overflow-hidden flex flex-col md:flex-row items-stretch">
                    
                    {/* Left Side: Context & Visuals */}
                    <div className="w-full md:w-5/12 bg-[#2a313d]/50 p-8 md:p-10 flex flex-col justify-between relative border-b md:border-b-0 md:border-r border-[#e6ddc5]/5">
                        <div className="relative z-10 space-y-6 mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#cfa262]">Let's Connect</h2>
                            <p className="text-base text-[#e6ddc5]/80 font-light leading-relaxed">
                                I am open to work and actively seeking entry-level software engineering roles (On-site, Hybrid, or Remote). Got a question or want to get connected? Let's talk.
                            </p>
                        </div>
                        {/* Contact GIF securely embedded without cropping */}
                        <div className="relative w-full max-w-[200px] mx-auto flex justify-center items-center opacity-90 group-hover:opacity-100 transition-opacity">
                            <img src="/gifs/Mail 2.gif" alt="Contact Delivery" className="w-full h-auto object-contain drop-shadow-2xl" style={ghibliSoftGrade} />
                        </div>
                    </div>
                    
                    {/* Right Side: Clean Modern Form */}
                    <div className="w-full md:w-7/12 p-8 md:p-10 flex flex-col justify-center bg-[#333b47]/20">
                        <form action="https://formspree.io/f/mojrblqo" method="POST" className="space-y-5">
                            <div className="space-y-1.5">
                                <label className="text-xs text-[#e6ddc5]/50 uppercase tracking-widest font-semibold ml-1">Name</label>
                                <input type="text" name="name" required className="w-full bg-[#2a313d] border border-[#e6ddc5]/10 rounded-md px-4 py-3 text-[#e6ddc5] placeholder-[#e6ddc5]/30 focus:outline-none focus:border-[#cfa262] transition-colors font-light shadow-inner" />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs text-[#e6ddc5]/50 uppercase tracking-widest font-semibold ml-1">Email</label>
                                <input type="email" name="email" required className="w-full bg-[#2a313d] border border-[#e6ddc5]/10 rounded-md px-4 py-3 text-[#e6ddc5] placeholder-[#e6ddc5]/30 focus:outline-none focus:border-[#cfa262] transition-colors font-light shadow-inner" />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs text-[#e6ddc5]/50 uppercase tracking-widest font-semibold ml-1">Message</label>
                                <textarea name="message" required rows={4} className="w-full bg-[#2a313d] border border-[#e6ddc5]/10 rounded-md px-4 py-3 text-[#e6ddc5] placeholder-[#e6ddc5]/30 focus:outline-none focus:border-[#cfa262] transition-colors font-light resize-none shadow-inner"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-[#cfa262] text-[#1e221f] px-8 py-3.5 rounded-md hover:bg-[#e6ddc5] transition-all font-display text-lg tracking-wide font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 mt-2">
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </section>

            {/* Footer Section */}
            <footer className="py-8 border-t border-[#e6ddc5]/10 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-[#e6ddc5]/40 text-sm font-light">
                    © {new Date().getFullYear()} Jonatan Rodriguez. All rights reserved.
                </p>
                <p className="text-[#e6ddc5]/40 text-sm font-light">
                    Crafted with <span className="text-[#cfa262]">Next.js</span> and <span className="text-[#cfa262]">Tailwind</span>.
                </p>
            </footer>

        </div>
    </div>
  );
}