
import type { BlogPost, Experience } from './types';

export const PERSONAL_INFO = {
  name: "Jitendra Prajapat",
  role: "Professor | AI/ML Researcher | Cybersecurity Expert | PhD Scholar",
  summary: {
      intro: "I'm Jitendra Prajapat — the professor who refuses to be boring.",
      byDay: "By day: I'm guiding BCA, BTech, MCA, MBA students to build, break, and rebuild technology that actually matters.",
      byNight: "By night: I'm researching AI for Tuberculosis Diagnosis — because code should save lives, not just crunch numbers.",
      inBetween: "In between: I'm motivating young minds, securing cyberspace, writing poetry, and tending to the soil back home."
  },
  strengths: [
      { title: "AI/ML for Impact", description: "Research that connects healthcare & data science for early TB detection." },
      { title: "Curriculum that Works", description: "Industry-ready courses integrating Python ML pipelines, cybersecurity drills, and cloud workflows." },
      { title: "Cyber Awareness", description: "Certified Ethical Hacker, building a generation of security-first engineers." },
      { title: "Inspiration on Stage", description: "From lecture halls to conferences, my sessions spark action." },
      { title: "Rooted Innovation", description: "Farmer & social worker — because tech should serve people first." }
  ]
};

export const EXPERIENCE_TIMELINE: Experience[] = [
  {
    role: "Program Coordinator & Assistant Professor",
    company: "ImaginXP",
    period: "August 2023 - Present",
    description: "Serving in a dual capacity, combining academic excellence with administrative oversight. Leading curriculum enhancement to integrate AI, UX, and product innovation, and mentoring multidisciplinary student teams."
  },
  {
    role: "Assistant Professor",
    company: "Jaipur National University",
    period: "August 2023 - Present",
    description: "Delivering industry-aligned Computer Science education. Designed and delivered BCA & BTech modules in AI/ML, Python, and cybersecurity. Guided 15+ final-year projects."
  },
  {
    role: "Assistant Professor",
    company: "JECRC University",
    period: "September 2022 - October 2023",
    description: "Enriched management education by embedding technology literacy into MBA and BBA curricula. Introduced modules on data analytics and AI in business, increasing internship-to-job conversion rates by 15%."
  },
    {
    role: "Managing Director",
    company: "Aquantrix Private Limited",
    period: "June 2021 - August 2023",
    description: "Led a social-impact enterprise using technology for sustainable water management. Designed AI- and IoT-enabled water monitoring solutions and scaled them to over 200+ households."
  },
   {
    role: "Information Technology Operations Manager",
    company: "Activant Solutions Pvt Ltd",
    period: "April 2021 - October 2022",
    description: "Directed IT infrastructure operations to ensure system reliability and security. Implemented infrastructure upgrades improving operational efficiency by 25% and established testing frameworks reducing bugs by 40%."
  },
   {
    role: "Senior Manager Information System",
    company: "Shri Hariram Hospital & Research Center",
    period: "June 2014 - March 2021",
    description: "Managed the complete IT ecosystem for the healthcare organization. Designed and implemented hospital-wide network security protocols and maintained 24/7 uptime for mission-critical systems."
  },
];

export const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "The Future of AI in Tuberculosis Diagnosis",
    content: "Exploring how deep learning models can analyze chest X-rays with greater accuracy than ever before, potentially saving millions of lives in underserved communities. This research is at the core of my work.",
    tag: 'Free',
    date: "October 26, 2023"
  },
  {
    id: 2,
    title: "Cybersecurity First Principles for Students",
    content: "A back-to-basics guide for students entering the world of cybersecurity. We cover the fundamental concepts that every aspiring security professional must know, from threat modeling to encryption.",
    tag: 'Free',
    date: "November 5, 2023"
  },
  {
    id: 3,
    title: "AI Research Previews: My Upcoming Papers",
    content: "An exclusive look into my current research pipeline. This post discusses preliminary findings and novel approaches in unsupervised learning for anomaly detection. Your feedback is welcome!",
    tag: 'Exclusive',
    date: "November 15, 2023"
  },
    {
    id: 4,
    title: "Top 5 Ethical Hacking Tools and Techniques",
    content: "This members-only guide breaks down the essential tools used by ethical hackers. From Nmap for network scanning to Metasploit for penetration testing, we cover the what, why, and how for each.",
    tag: 'Exclusive',
    date: "November 28, 2023"
  },
   {
    id: 5,
    title: "Tech Meets Soil: How Technology is Revolutionizing Farming",
    content: "My personal passion project. This post explores how IoT sensors, drone imagery, and predictive analytics are creating a new era of precision agriculture, boosting yields and promoting sustainability.",
    tag: 'Free',
    date: "December 10, 2023"
  }
];
