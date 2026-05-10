import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, 
  Cpu, 
  Globe, 
  Shield, 
  ExternalLink, 
  Mail, 
  Github, 
  Linkedin, 
  ChevronRight,
  Database,
  Cloud,
  Zap,
  BookOpen,
  Code2,
  FileText,
  MapPin,
  MessageSquare,
  Briefcase,
  GraduationCap,
  LayoutDashboard,
  Search,
  Settings,
  Bell,
  MoreHorizontal,
  Plus,
  Terminal as TerminalIcon,
  MousePointer2,
  CircleDot,
  ShoppingBag,
  BarChart3,
  Scissors,
  Home,
  User,
  Coffee,
  Smartphone
} from 'lucide-react';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('HOME');
  const [projectFilter, setProjectFilter] = useState('All');
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    const interval = setInterval(() => setCurrentTime(new Date().toLocaleTimeString()), 1000);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id.toUpperCase());
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#fef7ff] flex flex-col items-center justify-center z-50">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-32 h-32 flex items-center justify-center"
        >
          <div className="absolute inset-0 border-4 border-[#e040a0]/20 rounded-full animate-ping" />
          <div className="w-20 h-20 bg-gradient-to-tr from-[#e040a0] to-[#7c52aa] rounded-full flex items-center justify-center shadow-lg shadow-pink-200 overflow-hidden">
            <img src="/mascot.png" alt="Mascot" className="w-full h-full object-cover animate-pulse" />
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f6f9] text-[#2e1a28] font-sans selection:bg-[#e040a0]/20 selection:text-[#e040a0] flex overflow-hidden">
      
      {/* LEFT SIDEBAR - FIXED TO VIEWPORT */}
      <aside className="hidden lg:flex w-80 flex-col p-4 z-30 h-screen fixed top-0 left-0">
        <div className="bg-white/70 backdrop-blur-xl border border-white rounded-[40px] h-full flex flex-col p-6 shadow-2xl shadow-pink-100/20">
          {/* Compact Profile Identity */}
          <div className="mb-8 p-4 bg-pink-50/50 rounded-[32px] border border-pink-100/50 flex items-center gap-4 shadow-sm relative overflow-hidden group">
             <motion.div 
               whileHover={{ scale: 1.1, rotate: 5 }}
               className="w-12 h-12 rounded-full border-2 border-[#e040a0] shadow-lg relative overflow-hidden bg-white shrink-0"
             >
               <img 
                 src="/mascot.png" 
                 alt="Mascot" 
                 className="w-full h-full object-cover"
               />
             </motion.div>
             <div className="min-w-0">
                <h1 className="text-sm font-black tracking-tight leading-tight truncate">Nirmiti Tamore</h1>
                <p className="text-[9px] font-bold text-[#e040a0] font-mono uppercase tracking-widest">~/SECURE_ROOT</p>
             </div>
          </div>
  
          <nav className="space-y-4 flex-grow px-4">
            {[
              { id: 'HOME', icon: <Home />, label: 'Overview' },
              { id: 'ABOUT', icon: <User />, label: 'About Me' },
              { id: 'WORK', icon: <TerminalIcon />, label: 'Projects' },
              { id: 'PUBLICATIONS', icon: <FileText />, label: 'Publications' },
              { id: 'CONTACT', icon: <Mail />, label: 'Contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id.toLowerCase())}
                className={`w-full flex items-center gap-4 px-6 py-4 rounded-[24px] text-[13px] font-black transition-all group ${
                  activeSection === item.id 
                  ? 'bg-[#e040a0] text-white shadow-xl shadow-pink-200' 
                  : 'text-[#7c52aa] hover:bg-pink-50'
                }`}
              >
                <span className={`${activeSection === item.id ? 'text-white' : 'text-[#e040a0]'} transition-colors`}>
                  {React.cloneElement(item.icon as React.ReactElement, { size: 20 })}
                </span>
                {item.label}
                {activeSection === item.id && (
                  <motion.div layoutId="activeDot" className="ml-auto w-2 h-2 rounded-full bg-white shadow-inner" />
                )}
              </button>
            ))}
          </nav>
  
          <div className="mt-auto pt-6 border-t border-pink-50 flex items-center justify-center">
             <p className="text-[10px] font-black text-[#e040a0]/40 font-mono tracking-widest uppercase">READY_FOR_INPUT</p>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA - Pushed by Sidebar Width */}
      <main className="flex-grow overflow-y-auto relative lg:ml-80">
        
        {/* TOP HEADER */}
        <header className="sticky top-0 z-20 bg-[#f8f6f9]/80 backdrop-blur-md px-8 py-6 flex items-center justify-between">
           <div className="flex items-center gap-4">
              <div className="lg:hidden flex items-center gap-2">
                  <div className="w-8 h-8 bg-white border border-pink-100 rounded-lg flex items-center justify-center shadow-lg shadow-pink-100 overflow-hidden">
                     <img src="/mascot.png" alt="Mascot" className="w-6 h-6 object-contain" />
                  </div>
                 <span className="font-black text-sm">NT Portfolio</span>
              </div>
              <div className="hidden md:flex items-center gap-2 text-xs font-bold text-gray-400">
                 <Coffee size={14} className="text-[#e040a0]" />
                 <span>Crafting Digital Excellence</span>
              </div>
           </div>
           <div className="flex items-center gap-6">
              <div className="hidden sm:flex flex-col items-end">
                <span className="text-[10px] font-black text-[#e040a0] font-mono tracking-widest">{currentTime}</span>
              </div>
              <div className="flex gap-1.5">
                 <div className="w-3 h-3 rounded-full bg-[#ff5f57]/20 border border-[#ff5f57]/40" />
                 <div className="w-3 h-3 rounded-full bg-[#ffbd2e]/20 border border-[#ffbd2e]/40" />
                 <div className="w-3 h-3 rounded-full bg-[#28c941]/20 border border-[#28c941]/40" />
              </div>
           </div>
        </header>

        {/* PAGE CONTENT */}
        <div className="p-8 space-y-8 pb-10 relative">
           {/* Subtle background decoration to fill voids */}
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#ffd6ee_0%,transparent_50%)] opacity-20 pointer-events-none" />
          
          {/* HERO SECTION */}
          <section id="home" className="grid lg:grid-cols-3 gap-8 relative z-10">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="lg:col-span-2 bg-white rounded-[48px] p-10 md:p-14 border border-gray-100 shadow-xl shadow-pink-50 relative overflow-hidden group"
             >
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-pink-50/50 to-transparent pointer-events-none" />
                
                <div className="relative z-10 space-y-8">
                   <div className="inline-flex items-center gap-2 bg-[#ffd6ee] px-4 py-1.5 rounded-full border border-pink-100">
                      <span className="text-[10px] font-black text-[#e040a0] font-mono uppercase tracking-widest">SYSTEM_STABLE</span>
                   </div>
                   
                   <div className="space-y-2">
                     <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
                       Architecting <br />
                       <span className="text-[#e040a0] italic font-serif font-normal">Resilient</span> <br />
                       Cloud Systems
                     </h1>
                     <p className="text-gray-400 max-w-md text-sm md:text-base font-medium leading-relaxed mt-6">
                       Computer Science graduate specializing in Cloud Technology and Information Security. Focused on the intersection of research and engineering.
                     </p>
                   </div>

                   <div className="flex flex-wrap gap-4 pt-4">
                      <button 
                        onClick={() => scrollTo('work')}
                        className="bg-[#e040a0] text-white px-10 py-4 rounded-full font-black text-xs flex items-center gap-3 shadow-lg shadow-pink-200 hover:scale-105 transition-transform group"
                      >
                        Explore My Work <ChevronRight size={16} />
                      </button>
                      <button 
                        onClick={() => scrollTo('contact')}
                        className="bg-[#7c52aa] text-white px-10 py-4 rounded-full font-black text-xs flex items-center gap-3 shadow-lg shadow-purple-200 hover:scale-105 transition-transform group"
                      >
                        Get In Touch <Mail size={16} />
                      </button>
                   </div>
                </div>
             </motion.div>

             <div className="space-y-8">
                {/* Stats Widget */}
                <div className="bg-[#ffd6ee] p-8 rounded-[40px] border border-pink-200 shadow-lg shadow-pink-100 relative overflow-hidden">
                   <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#e040a0] mb-6">
                      <Zap size={24} />
                   </div>
                   <h3 className="text-3xl font-black text-[#a02070]">100%</h3>
                   <p className="text-[#a02070] font-black text-xs mt-2 uppercase tracking-widest opacity-60">Security Driven</p>
                   <p className="text-[#a02070]/60 text-[10px] font-medium mt-4 leading-relaxed">
                     Every line of code is written with a focus on reliability and system integrity.
                   </p>
                </div>

                <div className="bg-[#c8eaff] p-8 rounded-[40px] border border-blue-200 shadow-lg shadow-blue-100">
                   <h3 className="text-3xl font-black text-[#005580]">10+</h3>
                   <p className="text-[#005580] font-black text-xs mt-2 uppercase tracking-widest opacity-60">Completed Repos</p>
                   <div className="mt-8 flex gap-2">
                      <div className="flex-grow h-2.5 bg-white/40 rounded-full overflow-hidden">
                        <motion.div initial={{width: 0}} whileInView={{width: '95%'}} className="h-full bg-[#0096cc] rounded-full" />
                      </div>
                      <span className="text-[10px] font-black text-[#0096cc]">95%</span>
                   </div>
                </div>
             </div>
          </section>

          <section id="about" className="grid lg:grid-cols-5 gap-8 pt-8">
             {/* LEFT: Editorial Profile Card */}
             <div className="lg:col-span-2 bg-white rounded-[48px] p-10 md:p-12 border border-gray-100 shadow-xl shadow-pink-50 flex flex-col items-center text-center space-y-6">
                <div className="relative">
                   <div className="absolute inset-0 bg-gradient-to-tr from-[#e040a0] via-[#7c52aa] to-[#0096cc] rounded-full blur-md opacity-20" />
                   <div className="w-48 h-48 rounded-full border-[6px] border-white shadow-2xl relative overflow-hidden bg-white">
                      <img 
                        src="/avatar_pixel.png" 
                        alt="Nirmiti Tamore" 
                        className="w-full h-full object-cover pixelated"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://api.dicebear.com/7.x/bottts-neutral/svg?seed=Nirmiti&backgroundColor=e040a0";
                        }}
                      />
                   </div>
                </div>
                
                <div className="space-y-4">
                   <h2 className="text-3xl font-black tracking-tight">Nirmiti</h2>
                   <p className="text-[10px] font-black text-[#e040a0] uppercase tracking-[0.2em]">Systems Research & Development</p>
                </div>

                <div className="flex flex-wrap justify-center gap-2">
                   {['SYSTEMS', 'SECURITY', 'CODE'].map(tag => (
                     <span key={tag} className="px-4 py-1.5 bg-pink-50 text-[#e040a0] text-[9px] font-black rounded-full border border-pink-100">
                       {tag}
                     </span>
                   ))}
                </div>

                <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-xs">
                  Crafting digital experiences where logic meets aesthetics. Specialized in distributed systems and robust terminal-driven architectures.
                </p>
             </div>

             {/* RIGHT: Candy Terminal Journey */}
             <div className="lg:col-span-3 bg-[#211520] rounded-[48px] p-10 border border-white/5 shadow-2xl relative overflow-hidden flex flex-col">
                <div className="flex items-center justify-between mb-10 border-b border-white/5 pb-4">
                   <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#28c941]" />
                   </div>
                   <p className="text-[9px] font-mono text-white/20 tracking-widest uppercase">nirmiti@terminal: ~/the-journey</p>
                </div>

                <div className="font-mono text-xs space-y-8 leading-relaxed overflow-y-auto">
                   <div className="space-y-6">
                      {/* 1. ABOUT */}
                      <div className="space-y-4">
                         <p className="text-[#e040a0] flex items-center gap-2">
                           <ChevronRight size={14} className="text-[#28c941]" /> 
                           <span className="text-[#7c52aa]">cat</span> about.txt
                         </p>
                         <p className="text-white/60 pl-6 leading-relaxed">
                           Computer Science graduate specializing in <span className="text-white">Cloud Technology and Information Security</span>. Working at the intersection of research + engineering—turning ideas into prototypes, stress-testing under real constraints, and documenting learnings clearly.
                         </p>
                      </div>

                      {/* 2. ACADEMIC */}
                      <div className="space-y-4">
                         <p className="text-[#e040a0] flex items-center gap-2">
                           <ChevronRight size={14} className="text-[#28c941]" /> 
                           <span className="text-[#7c52aa]">ls</span> academic/
                         </p>
                         <div className="pl-6 border-l-2 border-[#7c52aa]/30">
                           <p className="text-white/80 font-black">B.Tech — Cloud Technology & Info Security</p>
                           <p className="text-white/40 text-[10px]">Sandip University, Nashik (2020–2024)</p>
                         </div>
                      </div>

                      {/* 3. CORE FOCUS */}
                      <div className="space-y-4">
                         <p className="text-[#e040a0] flex items-center gap-2">
                           <ChevronRight size={14} className="text-[#28c941]" /> 
                           <span className="text-[#7c52aa]">cat</span> core_focus.md
                         </p>
                         <div className="pl-6 border-l-2 border-[#e040a0]/20 space-y-2 text-white/70">
                            <p><span className="text-[#0096cc]"># research_focus:</span> event-driven architecture, distributed systems, microservices, fault tolerance, cloud computing, system reliability</p>
                            <p><span className="text-[#0096cc]"># current_direction:</span> secure, reliable cloud-native systems, observability, and resilience patterns</p>
                         </div>
                      </div>
                   </div>

                   <p className="text-[#28c941] animate-pulse pl-6 pt-4">_</p>
                </div>
             </div>

             <div className="lg:col-span-5 grid lg:grid-cols-2 gap-8">
                {/* WORK EXPERIENCE */}
                <div className="bg-white rounded-[48px] p-10 md:p-14 border border-gray-100 shadow-xl shadow-pink-50">
                   <h3 className="text-xl font-black mb-10 flex items-center gap-3">
                      <Briefcase className="text-[#e040a0]" size={20} /> Work Experience
                   </h3>
                   <div className="space-y-8">
                      {[
                        { role: 'WordPress Developer', company: 'ASB Technologies', date: 'Feb 2025 – Aug 2025', desc: 'Theme customization, speed optimization, and SEO for scalable web solutions.' },
                        { role: 'Web Developer', company: 'The Trading Prophet', date: 'Nov 2021 – Jan 2025', desc: 'Responsive WordPress and Shopify websites, online ads, and technical support.' },
                        { role: 'Cyber Security Intern', company: 'Virtually Testing Foundation', date: 'Apr 2022 – Jul 2022', desc: 'Researched emerging threats and cybersecurity trends.' }
                      ].map((exp, i) => (
                        <div key={i} className="relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-pink-100">
                           <div className="absolute left-[-4px] top-[10px] w-2 h-2 rounded-full bg-[#e040a0]" />
                           <p className="text-[10px] font-bold text-[#e040a0] font-mono tracking-tight">{exp.date}</p>
                           <h4 className="text-lg font-black mt-1">{exp.role}</h4>
                           <p className="text-xs text-[#7c52aa] font-bold">{exp.company}</p>
                           <p className="text-xs text-gray-400 mt-2 leading-relaxed">{exp.desc}</p>
                        </div>
                      ))}
                   </div>
                </div>

                {/* SKILLS MATRIX */}
                <div className="bg-white rounded-[48px] p-10 md:p-14 border border-gray-100 shadow-xl shadow-pink-50">
                   <h3 className="text-xl font-black mb-12 flex items-center gap-3">
                      <Code2 className="text-[#e040a0]" size={20} /> Skills Matrix
                   </h3>
                   <div className="space-y-10">
                      {[
                        { name: 'Python, Django, PostgreSQL', val: 95, color: '#e040a0' },
                        { name: 'React, JS, Kotlin', val: 88, color: '#7c52aa' },
                        { name: 'AWS, Git, Docker', val: 92, color: '#0096cc' },
                        { name: 'WordPress, Shopify, Supabase', val: 90, color: '#e040a0' }
                      ].map(skill => (
                        <div key={skill.name} className="space-y-3">
                           <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-gray-400">
                             <span>{skill.name}</span>
                             <span className="text-[#2e1a28]">{skill.val}%</span>
                           </div>
                           <div className="h-2.5 bg-gray-50 rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.val}%` }}
                                transition={{ duration: 1.5 }}
                                className="h-full rounded-full"
                                style={{ backgroundColor: skill.color }}
                              />
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
             </div>

             {/* CERTIFICATIONS TERMINAL - FULL WIDTH LANDSCAPE */}
             <div className="lg:col-span-5 bg-[#211520] rounded-[48px] p-10 md:p-14 border border-white/5 shadow-2xl relative overflow-hidden">
                <div className="flex gap-1.5 mb-10">
                   <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                   <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                   <div className="w-2.5 h-2.5 rounded-full bg-[#28c941]" />
                </div>
                <div className="font-mono text-xs space-y-6 leading-relaxed">
                   <p className="text-[#e040a0] flex items-center gap-2"><MousePointer2 size={12} /> ls certifications/</p>
                   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 text-white/60">
                      {[
                        'Python Programming (Coursera)',
                        'Drone Hacking (EC-Council)',
                        'Open-Source Intelligence (Basel Institute)',
                        'Operationalizing MITRE ATT&CK (AttackIQ)',
                        'Cloud Foundations (Great Learning)',
                        'Introduction to Python (Infosys)',
                        'Python Data Structure (Coursera)',
                        'Accessing Web Data (Coursera)',
                        'Quantum Computing & Programming',
                        'Full Stack Dev (I.T. Vedant)'
                      ].map((cert, i) => (
                        <div key={i} className="flex items-center gap-3 group">
                           <Zap size={10} className="text-[#e040a0] group-hover:scale-125 transition-transform" />
                           <span>{cert}</span>
                         </div>
                      ))}
                   </div>
                   <p className="text-[#28c941] animate-pulse">_</p>
                </div>
             </div>
          </section>

          <section id="work" className="space-y-8">
             <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                   <h2 className="text-3xl font-black tracking-tight">Featured Projects</h2>
                   <p className="text-xs text-gray-400 font-bold mt-1 uppercase">A COLLECTION OF MY TECHNICAL VENTURES</p>
                </div>
                <div className="flex flex-wrap gap-2">
                   {['All', 'Web', 'Apps', 'E-commerce', 'Data'].map(f => (
                     <button 
                       key={f} 
                       onClick={() => setProjectFilter(f)}
                       className={`px-6 py-2 rounded-full text-[10px] font-black transition-all ${
                         projectFilter === f 
                         ? 'bg-[#e040a0] text-white shadow-lg shadow-pink-100 scale-105' 
                         : 'bg-white border border-gray-100 text-[#7c52aa] hover:bg-pink-50'
                       }`}
                     >
                       {f}
                     </button>
                   ))}
                </div>
             </div>

             <motion.div layout className="flex flex-wrap justify-center gap-6">
                <AnimatePresence mode="popLayout">
                {[
                  { title: 'SkillMesh', ident: 'SYS-202', tags: ['Django', 'Python'], category: 'Web', desc: 'Event-Driven Workflow Observation Platform for real-time observability.', color: '#e040a0', icon: <Zap />, link: 'https://github.com/Tamore/SkillMesh' },
                  { title: 'Agri-Predict', ident: 'ML-707', tags: ['Python', 'ML'], category: 'Data', desc: 'Machine Learning app to forecast crop prices with government data.', color: '#0096cc', icon: <BarChart3 />, link: 'https://github.com/Tamore/Agriculture-Commodity-Price-Prediction' },
                  { title: 'NomNom', ident: 'APP-404', tags: ['Kotlin', 'Gemini'], category: 'Apps', desc: 'Modern Android recipe discovery app with AI-assisted extraction.', color: '#7c52aa', icon: <Smartphone />, link: 'https://github.com/Tamore/NomNom' },
                  { title: 'Hash Social', ident: 'WEB-303', tags: ['Django', 'JS'], category: 'Web', desc: 'A robust social media platform for content creation and interaction.', color: '#e040a0', icon: <MessageSquare />, link: 'https://github.com/Tamore/hashapp' },
                  { title: 'Vault 6.9', ident: 'EC-606', tags: ['WordPress', 'Woo'], category: 'E-commerce', desc: 'Full-scale E-commerce platform with custom payment gateways.', color: '#0096cc', icon: <ShoppingBag />, link: 'https://vault69.in/' },
                  { title: 'GoPeach', ident: 'SH-101', tags: ['Shopify', 'Liquid'], category: 'E-commerce', desc: 'Optimized dropshipping storefront with conversion focus.', color: '#7c52aa', icon: <Zap />, link: 'https://gopeach.in/' },
                  { title: 'ASB Tech', ident: 'LP-909', tags: ['WordPress', 'UI'], category: 'Web', desc: 'Conversion landing page for university Online MBA program funnels.', color: '#7c52aa', icon: <LayoutDashboard />, link: 'https://asbtechnologies.com/' },
                  { title: 'Locks & Lustre', ident: 'WEB-101', tags: ['WordPress', 'UI'], category: 'Web', desc: 'Business showcase website for salon services with local optimization.', color: '#0096cc', icon: <Scissors />, link: 'https://locksandlustresalon.com/' },
                  { title: 'Dynamic Pages', ident: 'FE-202', tags: ['React', 'JS'], category: 'Web', desc: 'Frontend case study with interactive data visualizations.', color: '#e040a0', icon: <Code2 />, link: 'https://github.com/Tamore/Frontend-Casestudy' }
                ].filter(p => projectFilter === 'All' || p.category === projectFilter).map((repo, i) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={repo.title} 
                    className="group relative w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1.5rem)] h-full"
                  >
                     <div className="relative h-full bg-[#1a111a] border border-white/5 rounded-[32px] flex flex-col overflow-hidden shadow-2xl shadow-pink-900/20 group-hover:border-[#e040a0]/30 transition-all duration-500">
                        {/* Terminal Header */}
                        <div className="bg-black/40 px-6 py-3 flex items-center justify-between border-b border-white/5">
                           <div className="flex gap-1.5">
                              <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                              <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                              <div className="w-2 h-2 rounded-full bg-[#28c941]" />
                           </div>
                           <span className="text-[8px] font-mono text-white/20 tracking-[0.2em] uppercase">{repo.category}</span>
                        </div>

                        <div className="p-8 flex flex-col flex-grow">
                           <div className="flex items-start justify-between mb-6">
                              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-500">
                                 <div className="absolute inset-0 bg-gradient-to-tr opacity-20" style={{ backgroundImage: `linear-gradient(45deg, ${repo.color}, transparent)` }} />
                                 {React.cloneElement(repo.icon as React.ReactElement, { className: 'relative z-10', size: 24, style: { color: repo.color } })}
                              </div>
                              <div className="text-right">
                                 <p className="text-[8px] font-mono text-white/20 uppercase tracking-widest">PID_VAL</p>
                                 <p className="text-[10px] font-mono text-[#e040a0] font-black">{repo.ident}</p>
                              </div>
                           </div>
                           
                           <div className="space-y-4 flex-grow">
                              <h3 className="text-xl font-black text-white group-hover:text-[#e040a0] transition-colors tracking-tight">
                                {repo.title}
                              </h3>
                              <div className="space-y-2">
                                 <div className="flex gap-2">
                                    <span className="text-[#e040a0] font-mono text-[10px]">~/desc:</span>
                                    <p className="text-[11px] text-white/50 font-medium leading-relaxed font-mono">
                                      {repo.desc}
                                    </p>
                                 </div>
                              </div>
                           </div>
                           
                           <div className="mt-8 space-y-6">
                              <div className="flex flex-wrap gap-2">
                                {repo.tags.map(t => (
                                  <span key={t} className="text-[9px] font-mono text-[#7c52aa] bg-[#7c52aa]/10 px-2 py-0.5 rounded border border-[#7c52aa]/20">
                                    --{t.toLowerCase()}
                                  </span>
                                ))}
                              </div>
                              
                              <button 
                                onClick={() => window.open(repo.link, '_blank')}
                                className="w-full py-3.5 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center gap-3 group/btn hover:bg-[#e040a0] hover:border-[#e040a0] transition-all duration-300"
                              >
                                <span className="text-[10px] font-black text-white/60 group-hover/btn:text-white font-mono">run exec_{repo.title.toLowerCase().replace(' ', '_')}.bin</span>
                                <ExternalLink size={14} className="text-white/40 group-hover/btn:text-white" />
                              </button>
                           </div>
                        </div>
                     </div>
                  </motion.div>
                ))}
                </AnimatePresence>
             </motion.div>
          </section>

          {/* PUBLICATIONS */}
          <section id="publications" className="space-y-8">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#ffd6ee] rounded-2xl flex items-center justify-center text-[#e040a0]">
                   <BookOpen size={24} />
                </div>
                <h2 className="text-4xl font-black tracking-tight">Scholarly Archives</h2>
             </div>
             
             <div className="flex flex-wrap justify-center gap-6">
                 {[
                   { title: 'Agriculture Commodity Price Prediction', journal: 'IJIRMPS', year: '2024', link: 'https://www.ijirmps.org/papers/2024/1/230440.pdf' },
                   { title: 'Event-Driven Distributed Systems’ Security Concerns', journal: 'Zenodo', year: '2026', link: 'https://doi.org/10.5281/zenodo.19236759' },
                   { title: 'Distributed Platform Cloud-Native Microservice Design Principles', journal: 'Zenodo', year: '2026', link: 'https://doi.org/10.5281/zenodo.19236649' },
                   { title: 'A Conceptual Framework for Event-Driven Cloud-Native Platforms', journal: 'Zenodo', year: '2026', link: 'https://doi.org/10.5281/zenodo.19236402' },
                   { title: 'SkillMesh: Analyzing Event-Driven Workflows', journal: 'Zenodo', year: '2026', link: 'https://doi.org/10.5281/zenodo.20059940' }
                 ].map((pub, i) => (
                  <div key={i} className="bg-white p-8 rounded-[40px] border border-gray-50 shadow-lg shadow-gray-200/50 hover:border-[#e040a0] transition-all group hover:-translate-y-1 w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1.5rem)] flex flex-col">
                     <p className="text-[10px] font-black text-[#e040a0] font-mono mb-4">ZENODO_REF_0{i+1}</p>
                     <h3 className="text-xl font-black mb-6 leading-tight group-hover:text-[#e040a0] transition-colors">{pub.title}</h3>
                     <div className="flex justify-between items-center text-[10px] font-bold text-gray-400 mb-6">
                        <span>{pub.journal}</span>
                        <span className="text-[#7c52aa]">{pub.year}</span>
                     </div>
                     <button 
                       onClick={() => window.open(pub.link, '_blank')}
                       className="mt-auto w-full py-3 bg-[#fdf2f8] text-[#e040a0] rounded-2xl text-[10px] font-black hover:bg-[#e040a0] hover:text-white transition-all flex items-center justify-center gap-2"
                     >
                       Read Publication <FileText size={14} />
                     </button>
                  </div>
                ))}
             </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="bg-[#211520] rounded-[48px] p-16 text-center space-y-8 relative overflow-hidden border border-white/5">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#e040a030_0%,transparent_50%)]" />
             <div className="relative z-10 space-y-6">
                <h2 className="text-4xl md:text-5xl font-black text-white">Ready to collaborate?</h2>
                <p className="text-white/60 font-medium max-w-xl mx-auto">Currently open to research opportunities in distributed systems and cloud security.</p>
                <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
                   <button 
                     onClick={() => window.location.href = 'mailto:nirmititamore@gmail.com'}
                     className="bg-[#e040a0] text-white px-10 py-4 rounded-2xl font-black shadow-xl shadow-pink-900/20 hover:scale-105 transition-transform"
                   >
                      Let's Talk
                   </button>
                   <div className="flex gap-4">
                      <button 
                        onClick={() => window.open('https://github.com/Tamore', '_blank')}
                        className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#e040a0] hover:bg-white/10 transition-colors shadow-2xl"
                      >
                         <Github size={24} />
                      </button>
                      <button 
                        onClick={() => window.open('https://linkedin.com/in/nirmititamore', '_blank')}
                        className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#e040a0] hover:bg-white/10 transition-colors shadow-2xl"
                      >
                         <Linkedin size={24} />
                      </button>
                   </div>
                </div>
             </div>
          </section>

          {/* FOOTER - CENTERED */}
          <footer className="pt-10 border-t border-gray-100 flex flex-col items-center justify-center gap-4 text-center">
             <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">
               Copyright © 2026 Nirmiti Tamore. All Rights Reserved.
             </p>
             <div className="flex gap-8 text-[9px] font-black text-purple-200 uppercase tracking-widest">
                <span>PORTFOLIO_V2.4.0</span>
                <span>SYSTEM_SECURE</span>
             </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default App;
