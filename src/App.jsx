import { useMemo, useState } from 'react';
import {
  Building2,
  Calendar,
  Download,
  Globe,
  GraduationCap,
  Mail,
  MapPin,
  Moon,
  Phone,
  Sun,
  Wrench,
} from 'lucide-react';

const content = {
  en: {
    nav: ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'],
    title: 'Civil Engineer',
    location: 'Djibouti',
    tagline:
      'Curious, driven, and detail-oriented civil engineer delivering efficient and standards-compliant designs.',
    heroButtons: ['View Projects', 'Download CV', 'Contact Me'],
    aboutTitle: 'About Me',
    aboutText:
      'I am a Civil Engineer with hands-on experience in design, project development, and site management. I have contributed to more than 82 villa plan designs while coordinating teams and ensuring compliance with strict engineering standards. I am recognized for analytical thinking, practical solutions, and strong commitment to quality execution.',
    skillsTitle: 'Skills & Expertise',
    projectsTitle: 'Project Portfolio',
    expTitle: 'Experience Timeline',
    eduTitle: 'Education',
    certTitle: 'Certifications & Technical Training',
    contactTitle: 'Contact',
    form: {
      name: 'Full Name',
      email: 'Email Address',
      message: 'Your Message',
      send: 'Send Message',
    },
    footer: 'Building resilient structures and sustainable communities in Djibouti.',
  },
  fr: {
    nav: ['À propos', 'Compétences', 'Projets', 'Expérience', 'Formation', 'Contact'],
    title: 'Ingénieur en Génie Civil',
    location: 'Djibouti',
    tagline:
      'Curieux, motivé et rigoureux, je conçois des projets optimisés et conformes aux normes les plus exigeantes.',
    heroButtons: ['Voir les projets', 'Télécharger CV', 'Me contacter'],
    aboutTitle: 'À propos',
    aboutText:
      "Je suis ingénieur en génie civil avec une expérience concrète en conception, développement de projets et gestion de chantier. J'ai réalisé plus de 82 plans de villas tout en coordonnant les équipes et en respectant des normes techniques strictes. Je suis reconnu pour mon sens de l'analyse, ma réactivité et la qualité de mes livrables.",
    skillsTitle: 'Compétences & Expertise',
    projectsTitle: 'Portefeuille de projets',
    expTitle: "Parcours professionnel",
    eduTitle: 'Formation',
    certTitle: 'Certifications & Formation Technique',
    contactTitle: 'Contact',
    form: {
      name: 'Nom complet',
      email: 'Adresse e-mail',
      message: 'Votre message',
      send: 'Envoyer',
    },
    footer: 'Construire des structures durables et des communautés résilientes à Djibouti.',
  },
  ar: {
    nav: ['نبذة', 'المهارات', 'المشاريع', 'الخبرة', 'التعليم', 'التواصل'],
    title: 'مهندس مدني',
    location: 'جيبوتي',
    tagline: 'مهندس مدني فضولي وطموح ودقيق، أقدّم تصاميم فعّالة ومتوافقة مع أعلى المعايير.',
    heroButtons: ['عرض المشاريع', 'تحميل السيرة الذاتية', 'تواصل معي'],
    aboutTitle: 'نبذة عني',
    aboutText:
      'أنا مهندس مدني أمتلك خبرة عملية في التصميم وتطوير المشاريع وإدارة مواقع البناء. ساهمت في إعداد أكثر من 82 مخططًا لفلل سكنية مع تنسيق الفرق وضمان الالتزام بالمعايير الهندسية الصارمة. أتميز بالتفكير التحليلي والحلول العملية والالتزام بالجودة.',
    skillsTitle: 'المهارات والخبرات',
    projectsTitle: 'معرض المشاريع',
    expTitle: 'الخبرة المهنية',
    eduTitle: 'التعليم',
    certTitle: 'الشهادات والتدريب التقني',
    contactTitle: 'التواصل',
    form: {
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      message: 'رسالتك',
      send: 'إرسال',
    },
    footer: 'بناء هياكل مرنة ومجتمعات مستدامة في جيبوتي.',
  },
};

const skillData = [
  { label: 'Structural Engineering', level: 92 },
  { label: 'Construction Management', level: 88 },
  { label: 'AutoCAD, Robot, Arche, Covadis', level: 90 },
  { label: 'Project Planning', level: 87 },
  { label: 'Site Supervision', level: 85 },
  { label: 'Infrastructure Development', level: 83 },
];

const projects = [
  {
    title: 'Modern Villa Design Program',
    year: '2021-Present',
    desc: 'Designed and delivered 82+ villa plans for private clients with reinforced concrete detailing and optimized layouts.',
    tools: 'AutoCAD, Arche, Robot Structural Analysis',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'MENFOP Technical Education Program',
    year: '2021-Present',
    desc: 'Teaching civil engineering fundamentals and supervising practical learning projects for technical students in Djibouti.',
    tools: 'Technical Training, Curriculum Support, Site Practices',
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Afro Construction Urban Monument Project',
    year: '2019-2020',
    desc: 'Participated in project monitoring for the Gandhi statue construction in Djibouti through CIE group collaboration.',
    tools: 'Site Supervision, Stakeholder Coordination',
    image:
      'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Road Infrastructure Internship (ADR)',
    year: '2019',
    desc: 'Supported road project operations and developed practical understanding of transport infrastructure workflows.',
    tools: 'Covadis, Field Reporting',
    image:
      'https://images.unsplash.com/photo-1621460249480-5eb6dd8a4f77?auto=format&fit=crop&w=1400&q=80',
  },
];

const experience = [
  {
    role: 'Independent Designer',
    company: 'Freelance',
    duration: 'Sep 2021 - Present',
    details: 'Completed over 82 villa plan designs with end-to-end concept development.',
  },
  {
    role: 'Civil Engineering Teacher',
    company: 'MENFOP (Djiboutian Ministry of Education)',
    duration: 'Sep 2021 - Present',
    details: 'Deliver civil engineering courses and mentor students through applied structural and construction exercises.',
  },
  {
    role: 'Project Coordinator',
    company: 'Bureau d’Étude Arkime',
    duration: 'Oct 2020 - Aug 2022',
    details: 'Coordinated multidisciplinary design tasks and project schedules.',
  },
  {
    role: 'Project Monitoring Assistant',
    company: 'Afro Construction',
    duration: 'Sep 2019 - Oct 2020',
    details: 'Tracked execution of a landmark urban construction project in Djibouti.',
  },
  {
    role: 'Road Project Intern',
    company: 'Agence Djiboutienne des Routes',
    duration: 'May 2019 - Aug 2019',
    details: 'Learned road design principles and practical infrastructure planning.',
  },
];

const education = [
  'Diplôme d’Ingénieur Grade de Master en Génie Civil (Master Degree) — University of Djibouti (2017-2019)',
  'Bachelor of Engineering Science — University of Djibouti (2014-2017)',
  'General Baccalaureate (Series S) — Lycée de Balbala (2011-2014)',
];

const certifications = [
  'AutoCAD drafting and detailing',
  'Robot & Arche structural analysis tools',
  'Covadis road design fundamentals',
  'Technical report writing and QA/QC practices',
];

function App() {
  const [lang, setLang] = useState('en');
  const [dark, setDark] = useState(false);

  const t = useMemo(() => content[lang], [lang]);
  const isArabic = lang === 'ar';

  return (
    <div className={`app ${dark ? 'dark' : ''}`} dir={isArabic ? 'rtl' : 'ltr'}>
      <header className="topbar">
        <div className="brand">
          <Building2 size={18} /> HAMZA MOHAMED MAHAMOUD
        </div>
        <nav>
          {t.nav.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>
              {item}
            </a>
          ))}
        </nav>
        <div className="controls">
          <button onClick={() => setLang(lang === 'en' ? 'fr' : lang === 'fr' ? 'ar' : 'en')}>
            <Globe size={16} /> {lang.toUpperCase()}
          </button>
          <button onClick={() => setDark(!dark)}>{dark ? <Sun size={16} /> : <Moon size={16} />}</button>
        </div>
      </header>

      <section className="hero" id="about">
        <div className="overlay">
          <h1>HAMZA MOHAMED MAHAMOUD</h1>
          <h2>{t.title}</h2>
          <p>
            <MapPin size={16} /> {t.location}
          </p>
          <p className="tagline">{t.tagline}</p>
          <div className="hero-btns">
            <a href="#projects">{t.heroButtons[0]}</a>
            <a href="/Hamza_Mohamed_CV.txt" download>
              <Download size={16} /> {t.heroButtons[1]}
            </a>
            <a href="#contact">{t.heroButtons[2]}</a>
          </div>
        </div>
      </section>

      <main>
        <section id="about" className="card">
          <h3>{t.aboutTitle}</h3>
          <div className="about-grid">
            <img
              src="/floor-plan.svg"
              alt="Architectural floor plan drawing"
            />
            <div>
              <p>{t.aboutText}</p>
              <div className="mini-facts">
                <span>
                  <GraduationCap size={15} /> Master Degree in Civil Engineering
                </span>
                <span>
                  <Wrench size={15} /> 82+ Villa Plans
                </span>
                <span>
                  <MapPin size={15} /> Djibouti City Infrastructure Exposure
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="card">
          <h3>{t.skillsTitle}</h3>
          <div className="skills-grid">
            {skillData.map((skill) => (
              <article key={skill.label}>
                <header>
                  <span>{skill.label}</span>
                  <strong>{skill.level}%</strong>
                </header>
                <div className="progress">
                  <div style={{ width: `${skill.level}%` }} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="card">
          <h3>{t.projectsTitle}</h3>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title}>
                <img src={project.image} alt={project.title} loading="lazy" />
                <div>
                  <h4>{project.title}</h4>
                  <p>{project.desc}</p>
                  <p className="meta">{project.tools}</p>
                  <span>
                    <Calendar size={14} /> {project.year}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="card">
          <h3>{t.expTitle}</h3>
          <div className="timeline">
            {experience.map((job) => (
              <article key={`${job.company}-${job.duration}`}>
                <h4>{job.role}</h4>
                <p className="meta">{job.company}</p>
                <span>{job.duration}</span>
                <p>{job.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="card split">
          <div>
            <h3>{t.eduTitle}</h3>
            <ul>
              {education.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>{t.certTitle}</h3>
            <div className="badge-wrap">
              {certifications.map((cert) => (
                <span key={cert}>{cert}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="card">
          <h3>{t.contactTitle}</h3>
          <div className="contact-grid">
            <div>
              <p>
                <Mail size={16} /> hamzamohamedmoud@gmail.com
              </p>
              <p>
                <Phone size={16} /> +253 77 23 07 24
              </p>
              <p>
                <MapPin size={16} /> Balbala, Djibouti
              </p>
              <p>
                <Globe size={16} /> linkedin.com/in/hamza-mohamed-civil
              </p>
              <iframe
                title="Djibouti map"
                src="https://www.google.com/maps?q=Djibouti&output=embed"
                loading="lazy"
              />
            </div>
            <form>
              <input type="text" placeholder={t.form.name} />
              <input type="email" placeholder={t.form.email} />
              <textarea rows="5" placeholder={t.form.message} />
              <button type="submit">{t.form.send}</button>
            </form>
          </div>
        </section>
      </main>

      <footer>{t.footer}</footer>
    </div>
  );
}

export default App;
