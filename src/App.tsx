import { useState, useEffect } from 'react';
import { TypingEffect } from './components/TypingEffect';
import { InteractiveChart } from './components/InteractiveChart';
import { MiniInsightsDashboard } from './components/MiniInsightsDashboard';
import { 
  Mail, Phone, MapPin, Github, Linkedin, ExternalLink, 
  Star, Palette, Zap, Code, TrendingUp, Briefcase, 
  Database, Cloud, BookOpen, Award, ChevronRight,
  Send 
} from 'lucide-react';

import profilePic from './profile.jpg';
// import qrProjectImg from './qr-project.jpg';
// import shopProjectImg from './ecommerce-project.jpg';

type Theme = 'cyber' | 'sunset' | 'synth';

interface ThemeConfig {
  hero: string;
  heroGradient: string;
  heroText: string;
  accent: string;
  accentLight: string;
  button: string;
  buttonHover: string;
  card: string;
  cardBorder: string;
  text: string;
  badge: string;
}

const themes: Record<Theme, ThemeConfig> = {
  cyber: {
    hero: 'bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900',
    heroGradient: 'from-blue-500 to-cyan-500',
    heroText: 'text-white',
    accent: 'text-cyan-400',
    accentLight: 'text-cyan-300',
    button: 'bg-cyan-500 hover:bg-cyan-400 text-slate-950',
    buttonHover: 'hover:shadow-lg hover:shadow-cyan-500/50',
    card: 'bg-slate-900 border-cyan-500/30',
    cardBorder: 'border-cyan-500/30',
    text: 'text-slate-100',
    badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50'
  },
  sunset: {
    hero: 'bg-gradient-to-br from-slate-900 via-amber-900 to-orange-900',
    heroGradient: 'from-orange-600 to-amber-500',
    heroText: 'text-white',
    accent: 'text-orange-500',
    accentLight: 'text-orange-400',
    button: 'bg-orange-500 hover:bg-orange-400 text-white',
    buttonHover: 'hover:shadow-lg hover:shadow-orange-500/50',
    card: 'bg-slate-900 border-orange-500/30',
    cardBorder: 'border-orange-500/30',
    text: 'text-slate-100',
    badge: 'bg-orange-500/20 text-orange-300 border-orange-500/50'
  },
  synth: {
    hero: 'bg-gradient-to-br from-purple-950 via-purple-900 to-pink-900',
    heroGradient: 'from-purple-500 to-pink-500',
    heroText: 'text-white',
    accent: 'text-pink-400',
    accentLight: 'text-pink-300',
    button: 'bg-pink-500 hover:bg-pink-400 text-white',
    buttonHover: 'hover:shadow-lg hover:shadow-pink-500/50',
    card: 'bg-slate-900 border-pink-500/30',
    cardBorder: 'border-pink-500/30',
    text: 'text-slate-100',
    badge: 'bg-pink-500/20 text-pink-300 border-pink-500/50'
  }
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<Theme>('cyber');
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const currentTheme = themes[theme];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'testimonials', 'playground', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('sent'), 1500);
  };

  const skills = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind'],
    backend: ['Python', 'Django', 'Node.js'],
    database: ['SQL', 'PostgreSQL', 'DBMS'],
    tools: ['GitHub', 'Git', 'Vercel', 'Cloud Computing'],
    concepts: ['OOP', 'Data Analytics', 'Computer Networks']
  };

  const projects = [
    {
      title: 'QR Attendance Management System',
      period: 'Jul 2023 - Jun 2024',
      type: 'Full-Stack Application',
      challenge: 'Manual attendance was slow and prone to proxy entries, lacking real-time verification.',
      solution: 'Architected a full-stack system using Django backend with JWT authentication and React frontend for dynamic QR generation.',
      impactStatement: 'Reduced processing time by 90% and improved accuracy to 99.8%. Published research in IJEM.',
      highlights: ['Integrated JWT authentication', 'Secure attendance logging', 'Real-time analytics dashboard'],
      tech: ['Python', 'Django', 'React', 'PostgreSQL'],
      impact: [{ label: 'Accuracy', value: 99 }, { label: 'Response Time', value: 98 }]
    },
    {
      title: 'E-Commerce Platform',
      period: 'Jul 2024 - Sep 2024',
      type: 'Frontend & UI/UX',
      challenge: 'Need for a modern, responsive e-commerce interface with fast cross-device load times.',
      solution: 'Built an Amazon-inspired UI with mobile-first design principles using modern web technologies.',
      impactStatement: 'Achieved 95+ mobile performance score and 92% page speed efficiency.',
      highlights: ['Mobile-first responsive design', 'Interactive product display', 'Optimized assets'],
      tech: ['HTML', 'CSS', 'JavaScript', 'React'],
      impact: [{ label: 'Mobile Score', value: 95 }, { label: 'Page Speed', value: 92 }]
    }
  ];

  const experience = [
    {
      category: 'Education',
      items: [
        { title: 'B.Tech, Information Technology', organization: 'ITM Gida Gorakhpur', period: '2020 - 2024', description: 'Comprehensive study of IT fundamentals, software development, and computer science principles.' }
      ]
    },
    {
      category: 'Certifications',
      items: [
        { title: 'SQL Certification Course', organization: 'Newton School', period: 'May 2025', description: 'Covered data querying, filtering, joins, and aggregations.' },
        { title: 'Data Analytics for Beginners', organization: 'Great Learning', period: 'Mar 2025', description: 'Covered Excel, basic statistics, and data interpretation.' }
      ]
    },
    {
      category: 'Leadership & Activities',
      items: [
        { title: 'Technical Events Lead', organization: 'College Annual Fest', period: '2023 - 2024', description: 'Led and managed 5+ technical events with over 1000 participants.' },
        { title: 'Discipline Volunteer', organization: 'Conference on Science and Technology', period: '2023', description: 'Coordinated 200+ participants from over 10 institutions.' }
      ]
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${theme === 'cyber' ? 'bg-slate-950' : 'bg-slate-50'}`}>
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex justify-between items-center">
          <div className={`text-2xl font-black tracking-tighter ${currentTheme.accent}`}>VM.</div>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex space-x-6">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className={`text-sm font-bold transition-all ${activeSection === item.toLowerCase() ? currentTheme.accent : 'text-slate-400 hover:text-slate-200'}`}>
                  {item}
                </button>
              ))}
            </div>
            <button onClick={() => setTheme(theme === 'cyber' ? 'sunset' : theme === 'sunset' ? 'synth' : 'cyber')} className={`p-2 rounded-full ${currentTheme.badge} hover:scale-110 transition-transform`} title="Switch Theme">
              <Palette size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className={`min-h-screen flex items-center justify-center ${currentTheme.hero} relative px-4 overflow-hidden`}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        <div className="text-center z-10 max-w-4xl mx-auto mt-16">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${currentTheme.badge} mb-8 backdrop-blur-sm`}>
            <Star size={14} className={currentTheme.accent} /> 
            <span className="text-xs font-bold uppercase tracking-widest text-slate-200">Fresh Graduate & Published Researcher</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight leading-tight">VIKAS<br/>MISHRA</h1>
          <div className="h-12 mb-6">
            <p className={`text-xl md:text-3xl font-bold ${currentTheme.accent}`}>
              <TypingEffect text="Data-Driven Full Stack Developer" speed={50} />
            </p>
          </div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Building scalable web applications with integrated analytical dashboards. Turning complex datasets into strategic, measurable business impacts.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => scrollToSection('contact')} className={`px-8 py-4 ${currentTheme.button} font-bold rounded-xl shadow-xl hover:scale-105 transition-all flex items-center gap-2`}>
              <Mail size={18} /> Get In Touch
            </button>
            <a href="/Vikas_Mishra_Resume.pdf" download className="px-8 py-4 border-2 border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center gap-2 backdrop-blur-sm">
              <BookOpen size={18} /> Download CV
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-32 ${theme === 'cyber' ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className={`absolute -inset-4 rounded-2xl bg-gradient-to-r ${currentTheme.heroGradient} opacity-20 group-hover:opacity-40 transition-opacity blur-lg`}></div>
            <img src={profilePic} alt="Vikas Mishra" className="relative rounded-2xl w-full h-[500px] object-cover shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700 border border-white/10" />
          </div>
          <div className="space-y-8">
            <h2 className={`text-5xl font-black tracking-tight ${theme === 'cyber' ? 'text-white' : 'text-slate-900'}`}>About Me</h2>
            <div className="space-y-6">
              <div>
                <h3 className={`text-xl font-bold mb-2 flex items-center gap-2 ${currentTheme.accent}`}><Zap size={20} /> Engineering Discipline</h3>
                <p className={`leading-relaxed ${theme === 'cyber' ? 'text-slate-300' : 'text-slate-600'}`}>Recent B.Tech graduate driven by rigorous problem-solving, continuous learning, and a commitment to deploying robust solutions.</p>
              </div>
              <div>
                <h3 className={`text-xl font-bold mb-2 flex items-center gap-2 ${currentTheme.accent}`}><Database size={20} /> Technical Expertise</h3>
                <p className={`leading-relaxed ${theme === 'cyber' ? 'text-slate-300' : 'text-slate-600'}`}>Hands-on experience in full-stack development using Python, Django, and modern web frameworks to automate processes and elevate UX.</p>
              </div>
              <div className={`p-6 rounded-xl border-l-4 ${currentTheme.cardBorder} ${theme === 'cyber' ? 'bg-slate-800' : 'bg-slate-50'}`}>
                <h3 className={`text-lg font-bold mb-2 ${theme === 'cyber' ? 'text-white' : 'text-slate-900'}`}>Career Vision</h3>
                <p className={`text-sm italic ${theme === 'cyber' ? 'text-slate-400' : 'text-slate-600'}`}>"Bridging the gap between innovation and measurable impact—whether in agile startups or rigorous structured organizations requiring high-reliability systems."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 ${theme === 'cyber' ? 'bg-slate-950' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className={`text-4xl font-black text-center mb-16 ${theme === 'cyber' ? 'text-white' : 'text-slate-900'}`}>Technical Arsenal</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className={`p-6 rounded-2xl border ${currentTheme.cardBorder} ${theme === 'cyber' ? 'bg-slate-900' : 'bg-white shadow-sm'} hover:-translate-y-1 transition-transform`}>
                <h3 className={`text-lg font-bold mb-4 capitalize flex items-center gap-2 ${theme === 'cyber' ? 'text-white' : 'text-slate-900'}`}>
                  <Code size={18} className={currentTheme.accent} /> {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <span key={skill} className={`px-3 py-1.5 rounded-md text-xs font-bold ${currentTheme.badge}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-32 ${theme === 'cyber' ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className={`text-4xl font-black text-center mb-16 ${theme === 'cyber' ? 'text-white' : 'text-slate-900'}`}>Experience & Education</h2>
          <div className="space-y-16">
            {experience.map((cat, i) => (
              <div key={i}>
                <h3 className={`text-2xl font-bold mb-8 flex items-center border-b pb-4 ${currentTheme.cardBorder} ${currentTheme.accent}`}>
                  <Award className="mr-3" size={24} /> {cat.category}
                </h3>
                <div className="space-y-6">
                  {cat.items.map((item, j) => (
                    <div key={j} className={`p-8 rounded-2xl border-l-4 ${currentTheme.cardBorder} ${theme === 'cyber' ? 'bg-slate-800/50' : 'bg-slate-50'}`}>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-4">
                        <div>
                          <h4 className={`text-xl font-bold ${theme === 'cyber' ? 'text-white' : 'text-slate-900'}`}>{item.title}</h4>
                          <p className={`font-bold mt-1 ${currentTheme.accent}`}>{item.organization}</p>
                        </div>
                        <span className={`text-xs font-bold px-4 py-2 rounded-full ${currentTheme.badge} whitespace-nowrap`}>{item.period}</span>
                      </div>
                      <p className={theme === 'cyber' ? 'text-slate-400' : 'text-slate-600'}>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-32 ${theme === 'cyber' ? 'bg-slate-950' : 'bg-slate-100'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className={`text-4xl font-black text-center mb-16 ${theme === 'cyber' ? 'text-white' : 'text-slate-900'}`}>Featured Work</h2>
          <div className="space-y-12">
            {projects.map((p, i) => (
              <div key={i} className={`group rounded-3xl overflow-hidden border ${currentTheme.cardBorder} ${theme === 'cyber' ? 'bg-slate-900' : 'bg-white shadow-xl'} grid lg:grid-cols-12 gap-0`}>
                <div className="lg:col-span-5 bg-slate-800 relative overflow-hidden min-h-[300px]">
                  {/* Replace this div with your actual image once imported */}
                  <div className={`absolute inset-0 flex items-center justify-center opacity-30 bg-gradient-to-br ${currentTheme.heroGradient} group-hover:scale-105 transition-transform duration-700`}>
                    <Code size={100} />
                  </div>
                </div>
                <div className="lg:col-span-7 p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-bold px-3 py-1 rounded-md ${currentTheme.badge}`}>{p.type}</span>
                    <span className="text-xs font-bold text-slate-500">{p.period}</span>
                  </div>
                  <h3 className={`text-3xl font-bold mb-6 ${theme === 'cyber' ? 'text-white' : 'text-slate-900'}`}>{p.title}</h3>
                  <div className="space-y-4 mb-8">
                    <div><span className={`font-bold text-sm ${currentTheme.accent}`}>Challenge:</span> <span className={theme === 'cyber' ? 'text-slate-300' : 'text-slate-600'}>{p.challenge}</span></div>
                    <div><span className={`font-bold text-sm ${currentTheme.accent}`}>Solution:</span> <span className={theme === 'cyber' ? 'text-slate-300' : 'text-slate-600'}>{p.solution}</span></div>
                    <div><span className={`font-bold text-sm ${currentTheme.accent}`}>Impact:</span> <span className={theme === 'cyber' ? 'text-white font-medium' : 'text-slate-900 font-medium'}>{p.impactStatement}</span></div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {p.tech.map(t => <span key={t} className={`px-3 py-1.5 rounded-md text-xs font-bold border ${currentTheme.cardBorder} ${theme === 'cyber' ? 'bg-slate-800 text-slate-300' : 'bg-slate-50 text-slate-700'}`}>{t}</span>)}
                  </div>
                  <InteractiveChart data={p.impact} title="Performance Metrics" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials & Playground Mini-Section */}
      <section id="testimonials" className={`py-20 border-y ${currentTheme.cardBorder} ${theme === 'cyber' ? 'bg-slate-900' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className={`text-3xl font-black mb-8 ${theme === 'cyber' ? 'text-white' : 'text-slate-900'}`}>Academic Recognition</h2>
            <div className={`p-8 rounded-2xl border ${currentTheme.cardBorder} ${theme === 'cyber' ? 'bg-slate-800' : 'bg-white shadow-sm'} relative`}>
              <div className="flex items-center gap-1 mb-4 text-yellow-500">
                <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
              </div>
              <p className={`italic mb-6 leading-relaxed ${theme === 'cyber' ? 'text-slate-300' : 'text-slate-700'}`}>
                "Vikas demonstrated exceptional technical skills while developing the QR Attendance System. His attention to detail and ability to translate complex requirements into functional solutions was impressive. His published research paper shows genuine academic rigor."
              </p>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white bg-gradient-to-br ${currentTheme.heroGradient}`}>PR</div>
                <div>
                  <p className={`font-bold ${theme === 'cyber' ? 'text-white' : 'text-slate-900'}`}>Prof. Rajesh Kumar</p>
                  <p className="text-xs text-slate-500">Academic Advisor, ITM</p>
                </div>
              </div>
            </div>
          </div>
          <div id="playground">
             <h2 className={`text-3xl font-black mb-8 flex items-center gap-3 ${theme === 'cyber' ? 'text-white' : 'text-slate-900'}`}>
               <TrendingUp className={currentTheme.accent} /> Live Data Demo
             </h2>
             <div className={`p-6 rounded-2xl border ${currentTheme.cardBorder} ${theme === 'cyber' ? 'bg-slate-800' : 'bg-white shadow-sm'}`}>
               <MiniInsightsDashboard theme={theme} />
             </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Level 10 Integrated Upgrade */}
      <section id="contact" className={`py-32 ${theme === 'cyber' ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className={`text-6xl font-black mb-8 tracking-tight ${theme === 'cyber' ? 'text-white' : 'text-slate-900'}`}>Let's<br/>Connect.</h2>
              <p className="text-slate-500 text-lg mb-12 max-w-md">Currently open to new opportunities. Whether you have a question about my research or want to discuss a project, my inbox is always open.</p>
              
              <div className="space-y-8 mb-12">
                <a href="mailto:kvm8726@gmail.com" className="flex items-center gap-6 group">
                  <div className={`p-5 rounded-2xl ${currentTheme.badge} group-hover:scale-110 transition-transform`}><Mail size={24} /></div>
                  <div><p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Email</p><p className={`text-lg font-bold ${theme === 'cyber' ? 'text-white' : 'text-slate-900'}`}>kvm8726@gmail.com</p></div>
                </a>
                <a href="tel:+918726721872" className="flex items-center gap-6 group">
                  <div className={`p-5 rounded-2xl ${currentTheme.badge} group-hover:scale-110 transition-transform`}><Phone size={24} /></div>
                  <div><p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Phone</p><p className={`text-lg font-bold ${theme === 'cyber' ? 'text-white' : 'text-slate-900'}`}>+91 8726721872</p></div>
                </a>
                <div className="flex items-center gap-6">
                  <div className={`p-5 rounded-2xl ${currentTheme.badge}`}><MapPin size={24} /></div>
                  <div><p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Location</p><p className={`text-lg font-bold ${theme === 'cyber' ? 'text-white' : 'text-slate-900'}`}>Gorakhpur, India</p></div>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="https://github.com/Vikasmishra0101" target="_blank" rel="noreferrer" className={`p-4 rounded-xl border ${currentTheme.cardBorder} hover:bg-white/5 transition-colors`}><Github className={theme === 'cyber' ? 'text-white' : 'text-slate-900'} /></a>
                <a href="https://linkedin.com/in/vikas-mishra01" target="_blank" rel="noreferrer" className={`p-4 rounded-xl border ${currentTheme.cardBorder} hover:bg-white/5 transition-colors`}><Linkedin className={theme === 'cyber' ? 'text-white' : 'text-slate-900'} /></a>
              </div>
            </div>

            <div className={`p-10 rounded-3xl border ${currentTheme.cardBorder} ${theme === 'cyber' ? 'bg-slate-900' : 'bg-slate-50 shadow-xl'}`}>
              {formStatus === 'sent' ? (
                <div className="text-center py-24">
                  <div className={`w-24 h-24 rounded-full ${currentTheme.badge} flex items-center justify-center mx-auto mb-8`}>
                    <Send size={32} className={currentTheme.accent} />
                  </div>
                  <h3 className={`text-3xl font-black mb-2 ${theme === 'cyber' ? 'text-white' : 'text-slate-900'}`}>Message Sent!</h3>
                  <p className="text-slate-500 text-lg">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-8">
                  <h3 className={`text-2xl font-black mb-6 ${theme === 'cyber' ? 'text-white' : 'text-slate-900'}`}>Send a Message</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Name</label>
                      <input required type="text" className={`w-full bg-transparent border-b-2 p-3 outline-none transition-colors ${theme === 'cyber' ? 'border-slate-700 text-white focus:border-cyan-400' : 'border-slate-300 text-slate-900 focus:border-blue-600'}`} placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email</label>
                      <input required type="email" className={`w-full bg-transparent border-b-2 p-3 outline-none transition-colors ${theme === 'cyber' ? 'border-slate-700 text-white focus:border-cyan-400' : 'border-slate-300 text-slate-900 focus:border-blue-600'}`} placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Message</label>
                    <textarea required rows={4} className={`w-full bg-transparent border-b-2 p-3 outline-none transition-colors resize-none ${theme === 'cyber' ? 'border-slate-700 text-white focus:border-cyan-400' : 'border-slate-300 text-slate-900 focus:border-blue-600'}`} placeholder="How can we collaborate?"></textarea>
                  </div>
                  <button type="submit" className={`w-full py-5 ${currentTheme.button} font-black tracking-wide rounded-xl flex items-center justify-center gap-3 group transition-all mt-4`}>
                    {formStatus === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm font-medium">© 2026 Vikas Mishra. Engineered with precision.</p>
          <div className="flex gap-8">
            {['Home', 'About', 'Projects'].map(item => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="text-xs font-bold text-slate-600 hover:text-white uppercase tracking-widest transition-colors">{item}</button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;