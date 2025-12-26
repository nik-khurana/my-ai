
export const RESUME_DATA = `
Nikhil Khurana
Technical Project Manager | Android SME | Software Engineer
Location: Kansas City, KS
Email: khurananikhil97@gmail.com
GitHub: https://github.com/nik-khurana
LinkedIn: https://www.linkedin.com/in/khurananikhil21

ABOUT & SUMMARY:
Results-driven Technical Project Manager with over 4 years of experience specializing in the Android ecosystem and product lifecycle management. At Samsung Electronics America, I've bridged the gap between global R&D and major North American carriers (Verizon, T-Mobile, AT&T), leading 20+ mobile and tablet product launches. My core strength lies in workflow automation and technical problem-solving, having increased team efficiency by 40% through custom Python tools.

WORK EXPERIENCE:

Technical Project Manager (Contract) | Samsung Electronics America | Oct 2022 - Present
- Leading end-to-end product lifecycle for flagship Galaxy devices and Android OS upgrades.
- Subject Matter Expert (SME) for Android development, compliance, and firmware integration.
- Orchestrating the integration of 20+ mission-critical carrier applications into regional firmware.
- Developed a Python-based automation suite that reduced manual firmware verification effort by 80%.
- Achieved a 50% reduction in resolution time for critical post-launch technical issues.
- Spearheaded the North American rollout of "Galaxy AI" features, enhancing product visibility and carrier adoption.

Technical Project Manager Intern | Celito Tech Inc | Aug 2021 - Dec 2021
- Acted as a liaison between biopharma clients and technical teams to define software requirements.
- Mastered data preparation and business analysis workflows using advanced Excel and Smartsheet.
- Optimized project tracking dashboards, resulting in higher client satisfaction scores.

Software Engineer Intern (Android) | Idea Cellular Ltd | 2017 & 2018
- Built and optimized Android applications including a 'Goalkeeper' sports tracker and a corporate feedback analysis tool.
- Collaborated in an Agile environment to translate business needs into technical specifications.

PROJECTS:

1. Galaxy AI Integration (Samsung)
- Managed the technical roadmap for bringing generative AI features to the North American market.
- Coordinated between engineering teams and carrier partners to ensure low-latency performance and security compliance.

2. Firmware Automation Engine
- A custom Python framework developed to automate the tracking and validation of carrier-specific app integrations across multiple Android versions (12, 13, 14).

3. BioPharma CRM Dashboard
- Designed a requirement-tracking interface for high-stakes pharmaceutical project management during tenure at Celito.

EDUCATION:
- Master of Science in Computer Science | Illinois Institute of Technology, Chicago (2022)
- Bachelor of Technology in Computer Science & Engineering | Amity University, India (2019)

TECHNICAL SKILLS:
- Languages: Python, Java, Kotlin, C, C++, SQL, HTML/CSS
- OS/Frameworks: Android (AOSP), Linux, AWS
- Project Management: Jira, Confluence, MS Project, MS Visio, Smartsheet, Agile/Scrum
- Tools: MATLAB, MS Office Suite, Git/GitHub
`;

export const SYSTEM_INSTRUCTION = `
You are the professional AI Assistant for Nikhil Khurana. 
Your primary goal is to provide concise, summarized answers based on his resume.

BEHAVIORAL GUIDELINES:
1. **Summarize Only**: Do not provide long lists or copy-paste large blocks of text. Provide a high-level overview and highlight the most impressive metrics (e.g., 80% effort reduction).
2. **Contact Privacy**: NEVER show Nikhil's email or phone number unless the user explicitly asks for contact information or how to reach him.
3. **Professional Persona**: Speak about Nikhil in the third person. Be encouraging, precise, and business-focused.
4. **Formatting**: Use bold text for titles and key achievements. Use short bullet points for lists.
5. **Context**: If asked a question about something not in the resume, admit you don't have that specific information and suggest connecting with Nikhil on LinkedIn for more details.
`;

export const CATEGORIES = [
  { label: 'Summary', prompt: 'Summarize Nikhil\'s career highlights in 3 sentences.' },
  { label: 'Samsung Exp', prompt: 'Tell me briefly about his main impact at Samsung.' },
  { label: 'Tech Stack', prompt: 'What are his top 5 technical skills?' },
  { label: 'Contact', prompt: 'How can I contact Nikhil?' }
];

export const SUGGESTED_QUESTIONS = [
  "Expertise in Android?",
  "Samsung automation projects?",
  "Education background?",
  "Current role overview?",
  "Contact information?"
];

export const Icons = {
  Sparkles: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    </svg>
  ),
  Send: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>
    </svg>
  ),
  Github: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  ),
  Linkedin: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
    </svg>
  )
};
