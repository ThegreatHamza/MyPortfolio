const copy = {
  en: {
    nav: ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'],
    title: 'Civil Engineer',
    location: 'Djibouti',
    tagline: 'Curious, driven, and detail-oriented civil engineer delivering efficient and standards-compliant designs.',
    buttons: ['View Projects', 'Download CV', 'Contact Me'],
    aboutTitle: 'About Me',
    aboutText:
      'I am a Civil Engineer with hands-on experience in design, project development, and site management. I have contributed to more than 82 villa plan designs while coordinating teams and ensuring compliance with strict engineering standards. I am recognized for analytical thinking, practical solutions, and strong commitment to quality execution.',
    skillsTitle: 'Skills & Expertise',
    projectsTitle: 'Project Portfolio',
    expTitle: 'Experience Timeline',
    eduTitle: 'Education',
    certTitle: 'Certifications & Technical Training',
    contactTitle: 'Contact',
    form: ['Full Name', 'Email Address', 'Your Message', 'Send Message'],
    footer: 'Building resilient structures and sustainable communities in Djibouti.',
  },
  fr: {
    nav: ['À propos', 'Compétences', 'Projets', 'Expérience', 'Formation', 'Contact'],
    title: 'Ingénieur en Génie Civil',
    location: 'Djibouti',
    tagline: 'Curieux, motivé et rigoureux, je conçois des projets optimisés et conformes aux normes les plus exigeantes.',
    buttons: ['Voir les projets', 'Télécharger CV', 'Me contacter'],
    aboutTitle: 'À propos',
    aboutText:
      "Je suis ingénieur en génie civil avec une expérience concrète en conception, développement de projets et gestion de chantier. J'ai réalisé plus de 82 plans de villas tout en coordonnant les équipes et en respectant des normes techniques strictes. Je suis reconnu pour mon sens de l'analyse, ma réactivité et la qualité de mes livrables.",
    skillsTitle: 'Compétences & Expertise',
    projectsTitle: 'Portefeuille de projets',
    expTitle: 'Parcours professionnel',
    eduTitle: 'Formation',
    certTitle: 'Certifications & Formation Technique',
    contactTitle: 'Contact',
    form: ['Nom complet', 'Adresse e-mail', 'Votre message', 'Envoyer'],
    footer: 'Construire des structures durables et des communautés résilientes à Djibouti.',
  },
  ar: {
    nav: ['نبذة', 'المهارات', 'المشاريع', 'الخبرة', 'التعليم', 'التواصل'],
    title: 'مهندس مدني',
    location: 'جيبوتي',
    tagline: 'مهندس مدني فضولي وطموح ودقيق، أقدّم تصاميم فعّالة ومتوافقة مع أعلى المعايير.',
    buttons: ['عرض المشاريع', 'تحميل السيرة الذاتية', 'تواصل معي'],
    aboutTitle: 'نبذة عني',
    aboutText:
      'أنا مهندس مدني أمتلك خبرة عملية في التصميم وتطوير المشاريع وإدارة مواقع البناء. ساهمت في إعداد أكثر من 82 مخططًا لفلل سكنية مع تنسيق الفرق وضمان الالتزام بالمعايير الهندسية الصارمة. أتميز بالتفكير التحليلي والحلول العملية والالتزام بالجودة.',
    skillsTitle: 'المهارات والخبرات',
    projectsTitle: 'معرض المشاريع',
    expTitle: 'الخبرة المهنية',
    eduTitle: 'التعليم',
    certTitle: 'الشهادات والتدريب التقني',
    contactTitle: 'التواصل',
    form: ['الاسم الكامل', 'البريد الإلكتروني', 'رسالتك', 'إرسال'],
    footer: 'بناء هياكل مرنة ومجتمعات مستدامة في جيبوتي.',
  },
};

const skills = [
  ['Structural Engineering', 92],
  ['Construction Management', 88],
  ['AutoCAD, Robot, Arche, Covadis', 90],
  ['Project Planning', 87],
  ['Site Supervision', 85],
  ['Infrastructure Development', 83],
];

const projects = [
  ['Modern Villa Design Program', '2021-Present', 'Designed and delivered 82+ villa plans for private clients with reinforced concrete detailing and optimized layouts.', 'AutoCAD, Arche, Robot Structural Analysis', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80'],
  ['MENFOP Technical Education Program', '2021-Present', 'Teaching civil engineering fundamentals and supervising practical learning projects for technical students in Djibouti.', 'Technical Training, Curriculum Support, Site Practices', 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80'],
  ['Afro Construction Urban Monument Project', '2019-2020', 'Participated in project monitoring for the Gandhi statue construction in Djibouti through CIE group collaboration.', 'Site Supervision, Stakeholder Coordination', 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1400&q=80'],
  ['Road Infrastructure Internship (ADR)', '2019', 'Supported road project operations and developed practical understanding of transport infrastructure workflows.', 'Covadis, Field Reporting', 'https://images.unsplash.com/photo-1621460249480-5eb6dd8a4f77?auto=format&fit=crop&w=1400&q=80'],
];

const experience = [
  ['Independent Designer', 'Freelance', 'Sep 2021 - Present', 'Completed over 82 villa plan designs with end-to-end concept development.'],
  ['Civil Engineering Teacher', 'MENFOP (Djiboutian Ministry of Education)', 'Sep 2021 - Present', 'Deliver civil engineering courses and mentor students through applied structural and construction exercises.'],
  ['Project Coordinator', 'Bureau d’Étude Arkime', 'Oct 2020 - Aug 2022', 'Coordinated multidisciplinary design tasks and project schedules.'],
  ['Project Monitoring Assistant', 'Afro Construction', 'Sep 2019 - Oct 2020', 'Tracked execution of a landmark urban construction project in Djibouti.'],
  ['Road Project Intern', 'Agence Djiboutienne des Routes', 'May 2019 - Aug 2019', 'Learned road design principles and practical infrastructure planning.'],
];

const education = [
  'Diplôme d’Ingénieur Grade de Master en Génie Civil (Master Degree) — University of Djibouti (2017-2019)',
  'Bachelor of Engineering Science — University of Djibouti (2014-2017)',
  'General Baccalaureate (Series S) — Lycée de Balbala (2011-2014)',
];

const certs = ['AutoCAD drafting and detailing', 'Robot & Arche structural analysis tools', 'Covadis road design fundamentals', 'Technical report writing and QA/QC practices'];

let lang = 'en';

function render() {
  const t = copy[lang];
  document.documentElement.lang = lang;
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  langBtn.textContent = lang.toUpperCase();

  navLinks.innerHTML = t.nav.map((i, idx) => `<a href="#${['about','skills','projects','experience','education','contact'][idx]}">${i}</a>`).join('');
  titleText.textContent = t.title;
  locationText.textContent = t.location;
  taglineText.textContent = t.tagline;
  projectsBtn.textContent = t.buttons[0];
  downloadBtn.textContent = `⬇ ${t.buttons[1]}`;
  contactBtn.textContent = t.buttons[2];
  aboutTitle.textContent = t.aboutTitle;
  aboutText.textContent = t.aboutText;
  skillsTitle.textContent = t.skillsTitle;
  projectsTitle.textContent = t.projectsTitle;
  expTitle.textContent = t.expTitle;
  eduTitle.textContent = t.eduTitle;
  certTitle.textContent = t.certTitle;
  contactTitle.textContent = t.contactTitle;
  nameField.placeholder = t.form[0];
  emailField.placeholder = t.form[1];
  messageField.placeholder = t.form[2];
  sendBtn.textContent = t.form[3];
  footerText.textContent = t.footer;

  skillsGrid.innerHTML = skills
    .map(([label, level]) => `<article><header><span>${label}</span><strong>${level}%</strong></header><div class="progress"><div style="width:${level}%"></div></div></article>`)
    .join('');

  projectGrid.innerHTML = projects
    .map(
      ([title, year, desc, tools, image]) =>
        `<article><img src="${image}" alt="${title}" loading="lazy" /><div><h4>${title}</h4><p>${desc}</p><p class="meta">${tools}</p><span>📅 ${year}</span></div></article>`
    )
    .join('');

  timeline.innerHTML = experience
    .map(([role, company, duration, details]) => `<article><h4>${role}</h4><p class="meta">${company}</p><span>${duration}</span><p>${details}</p></article>`)
    .join('');

  educationList.innerHTML = education.map((item) => `<li>${item}</li>`).join('');
  certWrap.innerHTML = certs.map((item) => `<span>${item}</span>`).join('');
}

langBtn.addEventListener('click', () => {
  lang = lang === 'en' ? 'fr' : lang === 'fr' ? 'ar' : 'en';
  render();
});

modeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  modeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert(lang === 'ar' ? 'شكراً! تم إرسال رسالتك.' : lang === 'fr' ? 'Merci ! Votre message a été envoyé.' : 'Thanks! Your message has been sent.');
});

render();
