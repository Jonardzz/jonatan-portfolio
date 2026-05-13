export default function Home() {

  // Adds a warm, sunset-like color to match the Ghibli picture
  const ghibliWarmGrade = {
    filter: 'sepia(0.4) saturate(0.85) contrast(0.95) brightness(0.95) hue-rotate(-5deg)'
  };

  return (
    <div className="min-h-screen px-6 py-12 md:px-16 md:py-20 relative">
        
        <div className="max-w-5xl mx-auto relative z-10">
            
            {/* Top Menu Icon */}
            <header className="flex justify-end mb-16">
                <button className="flex flex-col gap-2 items-end group cursor-pointer focus:outline-none">
                    <span className="w-8 h-[1px] bg-[#e6ddc5] transition-all group-hover:bg-[#cfa262] group-hover:w-6"></span>
                    <span className="w-6 h-[1px] bg-[#e6ddc5] transition-all group-hover:bg-[#cfa262] group-hover:w-8"></span>
                </button>
            </header>

            {/* Main Top Section */}
            <main className="mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    
                    {/* Intro Text */}
                    <div className="order-2 md:order-1 space-y-8">
                        <div className="space-y-2">
                            <p className="text-[#cfa262] font-display italic text-xl tracking-wide">Welcome, I am</p>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-wide leading-none font-display text-[#e6ddc5]">
                                Jonatan <br />Rodriguez
                            </h1>
                        </div>
                        
                        <p className="text-lg text-[#e6ddc5]/80 font-light leading-relaxed max-w-md">
                            A Computer Science student @ UH and <span className="text-[#cfa262] font-medium">Aspiring Software Engineer</span> specializing in Full Stack Development, NLP, and AI.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-6 text-xl pt-4">
                            <a href="https://github.com/Jonardzz" target="_blank" rel="noopener noreferrer" className="text-[#e6ddc5]/60 hover:text-[#cfa262] transition-colors">
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/jonatan-rodriguez-9872213ba/" target="_blank" rel="noopener noreferrer" className="text-[#e6ddc5]/60 hover:text-[#cfa262] transition-colors">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                            <a href="/Rodriguez, Jonatan Resume 2026.pdf" target="_blank" rel="noopener noreferrer" className="text-[#e6ddc5]/60 hover:text-[#cfa262] transition-colors" title="Resume">
                                <i className="fa-solid fa-scroll"></i>
                            </a>
                        </div>
                    </div>

                    {/* Main Top Image */}
                    <div className="order-1 md:order-2">
                        <div className="p-3 bg-[#333b47] rounded-sm shadow-2xl border border-[#e6ddc5]/10 transform md:rotate-2 hover:rotate-0 transition-transform duration-700">
                            <img 
                                src="/gifs/Intro3.gif" 
                                alt="Cinematic Hero" 
                                className="w-full h-auto rounded-sm opacity-90"
                                style={ghibliWarmGrade}
                            />
                        </div>
                    </div>
                </div>
            </main>

            {/* About Me and Skills Section */}
            <section className="mb-32 border-t border-[#e6ddc5]/10 pt-20">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
                    
                    {/* Side Image for About Section */}
                    <div className="md:col-span-5 relative">
                        <div className="sticky top-12 p-2 bg-[#333b47] rounded-full overflow-hidden shadow-xl border border-[#e6ddc5]/5 aspect-square flex items-center justify-center">
                            <img src="/gifs/G2.gif" alt="About Illustration" className="w-full h-full object-cover rounded-full opacity-80 hover:opacity-100 transition-opacity duration-500" style={ghibliWarmGrade} />
                        </div>
                    </div>

                    <div className="md:col-span-7 space-y-12">
                        
                        {/* About Text */}
                        <div>
                            <h2 className="text-3xl font-bold font-display text-[#cfa262] mb-6">About</h2>
                            <div className="space-y-4 text-[#e6ddc5]/80 leading-relaxed font-light text-lg">
                                <p>
                                    I’m a Computer Science student at the University of Houston, graduating in May 2026. My interests include full stack development, natural language processing, and software engineering.
                                </p>
                                <p>
                                    I have experience with Python, C++, and SQL, along with hands-on project work in text processing, semantic search, and sentiment analysis. I have built projects that use tools such as PyTorch, Sentence-Transformers, NLTK, Pandas, and NumPy to process data and improve search results.
                                </p>
                                <p>
                                    I’m currently seeking an entry-level software engineering role where I can apply my technical skills, keep learning, and contribute to real-world software solutions.
                                </p>
                            </div>
                        </div>

                        {/* Skill Links and Badges */}
                        <div>
                            <h2 className="text-3xl font-bold font-display text-[#cfa262] mb-6">Skills</h2>
                            <div className="flex flex-wrap gap-2 font-body text-sm">
                                <a href="https://en.wikipedia.org/wiki/Information_retrieval" target="_blank" rel="noopener noreferrer" className="px-3 py-1 border border-[#cfa262]/30 bg-[#cfa262]/5 rounded-sm text-[#e6ddc5]/90 hover:bg-[#cfa262] hover:text-[#1e221f] transition-all cursor-pointer">Information Retrieval (IR)</a>
                                <a href="https://en.wikipedia.org/wiki/Sentiment_analysis" target="_blank" rel="noopener noreferrer" className="px-3 py-1 border border-[#cfa262]/30 bg-[#cfa262]/5 rounded-sm text-[#e6ddc5]/90 hover:bg-[#cfa262] hover:text-[#1e221f] transition-all cursor-pointer">Sentiment Analysis</a>
                                <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 border border-[#cfa262]/30 bg-[#cfa262]/5 rounded-sm text-[#e6ddc5]/90 hover:bg-[#cfa262] hover:text-[#1e221f] transition-all cursor-pointer">Python</a>
                                <a href="https://isocpp.org/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 border border-[#cfa262]/30 bg-[#cfa262]/5 rounded-sm text-[#e6ddc5]/90 hover:bg-[#cfa262] hover:text-[#1e221f] transition-all cursor-pointer">C++</a>
                                <a href="https://en.wikipedia.org/wiki/SQL" target="_blank" rel="noopener noreferrer" className="px-3 py-1 border border-[#cfa262]/30 bg-[#cfa262]/5 rounded-sm text-[#e6ddc5]/90 hover:bg-[#cfa262] hover:text-[#1e221f] transition-all cursor-pointer">SQL</a>
                                <a href="https://pytorch.org/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 border border-[#cfa262]/30 bg-[#cfa262]/5 rounded-sm text-[#e6ddc5]/90 hover:bg-[#cfa262] hover:text-[#1e221f] transition-all cursor-pointer">PyTorch</a>
                                <a href="https://sbert.net/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 border border-[#cfa262]/30 bg-[#cfa262]/5 rounded-sm text-[#e6ddc5]/90 hover:bg-[#cfa262] hover:text-[#1e221f] transition-all cursor-pointer">Sentence-Transformers</a>
                                <a href="https://www.nltk.org/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 border border-[#cfa262]/30 bg-[#cfa262]/5 rounded-sm text-[#e6ddc5]/90 hover:bg-[#cfa262] hover:text-[#1e221f] transition-all cursor-pointer">NLTK</a>
                                <a href="https://pandas.pydata.org/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 border border-[#cfa262]/30 bg-[#cfa262]/5 rounded-sm text-[#e6ddc5]/90 hover:bg-[#cfa262] hover:text-[#1e221f] transition-all cursor-pointer">Pandas</a>
                                <a href="https://numpy.org/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 border border-[#cfa262]/30 bg-[#cfa262]/5 rounded-sm text-[#e6ddc5]/90 hover:bg-[#cfa262] hover:text-[#1e221f] transition-all cursor-pointer">NumPy</a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* School and Certificates Section */}
            <section className="mb-32 pt-12 border-t border-[#e6ddc5]/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 items-start">
                    
                    {/* Left Box: School */}
                    <div className="space-y-6">
                        <div className="p-2 bg-[#2a313d] rounded-sm border border-[#e6ddc5]/10 shadow-xl transform md:-rotate-1 transition-transform hover:rotate-0">
                            <img src="/gifs/education.gif" alt="Education" className="w-full h-56 object-cover rounded-sm opacity-90" style={ghibliWarmGrade} />
                        </div>
                        <div className="bg-[#333b47] border border-[#e6ddc5]/5 p-8 rounded-sm shadow-lg space-y-8">
                            <h2 className="text-2xl font-display font-bold text-[#cfa262] border-b border-[#e6ddc5]/10 pb-4">Education</h2>
                            
                            <div className="space-y-2 border-l-2 border-[#cfa262]/40 pl-4">
                                <h3 className="font-bold text-lg text-[#e6ddc5]">University of Houston</h3>
                                <p className="text-[#e6ddc5]/80 font-light">Bachelor's Degree, Computer Science</p>
                                <p className="text-sm text-[#cfa262] italic">Aug 2024 - May 2026</p>
                            </div>

                            <div className="space-y-2 border-l-2 border-[#e6ddc5]/20 pl-4">
                                <h3 className="font-bold text-lg text-[#e6ddc5]">Houston Community College</h3>
                                <p className="text-[#e6ddc5]/80 font-light">Associate's Degree, Computer Science</p>
                                <p className="text-sm text-[#cfa262] italic">Aug 2022 - May 2024</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Box: Certificates */}
                    <div className="space-y-6">
                        <div className="p-2 bg-[#2a313d] rounded-sm border border-[#e6ddc5]/10 shadow-xl transform md:rotate-1 transition-transform hover:rotate-0">
                            <img src="/gifs/Education.webp" alt="Licenses & Certifications" className="w-full h-56 object-cover rounded-sm opacity-90" style={ghibliWarmGrade} />
                        </div>
                        <div className="bg-[#333b47] border border-[#e6ddc5]/5 p-8 rounded-sm shadow-lg space-y-8">
                            <h2 className="text-2xl font-display font-bold text-[#cfa262] border-b border-[#e6ddc5]/10 pb-4">Licenses & certifications</h2>
                            
                            <div className="space-y-3 border-l-2 border-[#cfa262]/40 pl-4">
                                <h3 className="font-bold text-lg text-[#e6ddc5] leading-snug">Fundamentals of Machine Learning & AI</h3>
                                <p className="text-[#e6ddc5]/80 font-light">Amazon Web Services (AWS)</p>
                                <p className="text-sm text-[#cfa262] italic">Issued May 2026</p>
                                <p className="text-sm text-[#e6ddc5]/60 font-light leading-relaxed pt-2">
                                    Deep dive into the core mechanisms of modern AI/ML systems powered by AWS. Covered deep learning neural networks, generative AI architectures, and practical cloud deployment.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* My Projects Section */}
            <section className="mb-24 pt-12 border-t border-[#e6ddc5]/10">
                <h2 className="text-3xl font-bold font-display text-[#e6ddc5] mb-8">Projects</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    
                    {/* First Project: Amazon Search */}
                    <div className="bg-[#333b47] rounded-md overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-lg border border-[#e6ddc5]/5 group">
                        <div className="h-40 overflow-hidden relative">
                            <img src="/gifs/G6.webp" alt="NLP Amazon Project" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500" style={ghibliWarmGrade} />
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
                                {/* Links to GitHub and Live Site */}
                                <div className="flex items-center gap-3">
                                    <a href="https://github.com/Jonardzz/NLP-Project" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfa262] transition-colors flex items-center gap-1 font-medium">
                                        GitHub<i className="fa-solid fa-angle-right text-[10px]"></i>
                                    </a>
                                    <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfa262] transition-colors flex items-center gap-1 font-medium">
                                        Visit<i className="fa-solid fa-angle-right text-[10px]"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second Project: Portfolio Website */}
                    <div className="bg-[#333b47] rounded-md overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-lg border border-[#e6ddc5]/5 group">
                        <div className="h-40 overflow-hidden relative">
                            <img src="/gifs/G5.gif" alt="Portfolio Project Art" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500" style={ghibliWarmGrade} />
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
                                {/* Links to GitHub and Live Site */}
                                <div className="flex items-center gap-3">
                                    <a href="https://github.com/Jonardzz" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfa262] transition-colors flex items-center gap-1 font-medium">
                                        GitHub<i className="fa-solid fa-angle-right text-[10px]"></i>
                                    </a>
                                    <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfa262] transition-colors flex items-center gap-1 font-medium">
                                        Visit<i className="fa-solid fa-angle-right text-[10px]"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Spoken Languages Section */}
            <section className="mb-32">
                <h2 className="text-3xl font-bold font-display text-[#cfa262] mb-8 text-center md:text-left">Languages</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-[#333b47] border border-[#e6ddc5]/5 p-6 rounded-sm flex justify-between items-center shadow-lg">
                        <span className="text-[#e6ddc5] font-light text-lg">English</span>
                        <span className="text-[#cfa262] text-sm italic">Full professional proficiency</span>
                    </div>
                    <div className="bg-[#333b47] border border-[#e6ddc5]/5 p-6 rounded-sm flex justify-between items-center shadow-lg">
                        <span className="text-[#e6ddc5] font-light text-lg">Spanish</span>
                        <span className="text-[#cfa262] text-sm italic">Native or bilingual proficiency</span>
                    </div>
                </div>
            </section>

            {/* Email Form Section */}
            <section className="border-t border-[#e6ddc5]/10 pt-20 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center bg-[#333b47] p-8 md:p-12 rounded-sm border border-[#e6ddc5]/5 shadow-2xl relative overflow-hidden">
                    
                    <div className="md:col-span-6 space-y-6 relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold font-display text-[#cfa262]">Contact info</h2>
                        <p className="text-lg text-[#e6ddc5]/80 font-light leading-relaxed">
                            I am open to work and actively seeking entry-level software engineering roles (On-site, Hybrid, or Remote). Got a question or want to get connected? Let's talk.
                        </p>
                        
                        {/* Connected Formspree Form */}
                        <form action="https://formspree.io/f/mojrblqo" method="POST" className="space-y-6 pt-4">
                            <div className="relative">
                                <input type="text" name="name" required placeholder="Your Name" className="w-full bg-transparent border-b border-[#e6ddc5]/20 py-2 text-[#e6ddc5] placeholder-[#e6ddc5]/30 focus:outline-none focus:border-[#cfa262] transition-colors font-light" />
                            </div>
                            <div className="relative">
                                <input type="email" name="email" required placeholder="Your Email" className="w-full bg-transparent border-b border-[#e6ddc5]/20 py-2 text-[#e6ddc5] placeholder-[#e6ddc5]/30 focus:outline-none focus:border-[#cfa262] transition-colors font-light" />
                            </div>
                            <div className="relative">
                                <textarea name="message" required rows={3} placeholder="Your Message" className="w-full bg-transparent border-b border-[#e6ddc5]/20 py-2 text-[#e6ddc5] placeholder-[#e6ddc5]/30 focus:outline-none focus:border-[#cfa262] transition-colors font-light resize-none"></textarea>
                            </div>
                            <button type="submit" className="bg-[#cfa262] text-[#1e221f] px-8 py-3 rounded-sm hover:bg-[#e6ddc5] transition-all font-display text-lg tracking-wide font-bold shadow-lg">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Image next to email form */}
                    <div className="md:col-span-6 md:pl-12">
                        <div className="relative p-2 bg-[#2a313d] rounded-sm border border-[#e6ddc5]/10 transform md:-rotate-2 shadow-xl">
                            <img 
                                src="/gifs/info.gif" 
                                alt="Contact Info Delivery" 
                                className="w-full h-auto opacity-90 rounded-sm"
                                style={ghibliWarmGrade}
                            />
                        </div>
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
  );
}