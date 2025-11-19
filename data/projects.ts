export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Sleeply",
    description:
      "A modern sleep tracking app designed to monitor and improve your sleep quality.",
    technologies: [
      "/projects/next.svg",
      "/projects/ts.svg",
      "/projects/tailwind.svg",
      "/skills/shadcnui.png",
      "/skills/prisma.png",
      "/skills/neon.png",
      "/skills/better auth.png",
    ],
    image: "/projects/sleeply.png",
    liveUrl: "https://sleeply.vercel.app",
    githubUrl: "https://github.com/dharshan47/sleeply",
  },
  {
    id: "2",
    title: "User Table",
    description:
      "View and manage users easily in a searchable and paginated table.",
    technologies: [
      "/projects/next.svg",
      "/projects/ts.svg",
      "/projects/tailwind.svg",
      "/skills/shadcnui.png",
      "/skills/prisma.png",
      "/skills/neon.png",
      "/skills/better auth.png",
    ],
    image: "/projects/usertable.png",
    liveUrl: "https://usrtable.vercel.app",
    githubUrl: "https://github.com/dharshan47/user-table",
  },
  {
    id: "3",
    title: "VirtualR",
    description:
      "A modern web app for exploring virtual reality tools through an elegant, interactive interface.",

    technologies: [
      "/projects/react.svg",
      "/projects/ts.svg",
      "/projects/tailwind.svg",
      "/skills/shadcnui.png",
    ],
    image: "/projects/virtualr.png",
    liveUrl: "https://thevirtualr.vercel.app",
    githubUrl: "https://github.com/dharshan47/virtualr",
  },
  {
    id: "4",
    title: "Real Esate Co",
    description:
      "A real estate website for exploring properties with a clean, responsive design.",
    technologies: [
      "/projects/react.svg",
      "/projects/ts.svg",
      "/projects/tailwind.svg",
    ],
    image: "/projects/realestateco.png",
    liveUrl: "https://real-estateco.netlify.app",
    githubUrl: "https://github.com/dharshan47/real-estate-co",
  },
];

export const otherProjects: Project[] = [
  {
    id: "1",
    title: "Color Picker",
    description:
      "Interactive tool to pick and preview colors instantly using a color input field.",
    technologies: [
      "/projects/react.svg",
      "/projects/ts.svg",
      "/projects/tailwind.svg",
    ],
    image: "/projects/colorpik.png",
    liveUrl: "https://colorpik.netlify.app/",
    githubUrl: "https://github.com/dharshan47",
  },
  {
    id: "2",
    title: "Background Generator",
    description:
      "Custom gradient background generator with live preview and smooth color transitions.",
    technologies: [
      "/projects/react.svg",
      "/projects/ts.svg",
      "/projects/tailwind.svg",
    ],
    image: "/projects/backgroundgenerator.png",
    liveUrl: "https://bg-gradientgenerator.netlify.app",
    githubUrl: "https://github.com/dharshan47/background-generator",
  },
  {
    id: "3",
    title: "QR Code Generator",
    description: "App that generates QR codes instantly from any text or URL.",
    technologies: [
      "/projects/react.svg",
      "/projects/ts.svg",
      "/projects/tailwind.svg",
    ],
    image: "/projects/qr-codegeneratr.png",
    liveUrl: "https://qr-codegeneratr.netlify.app",
    githubUrl: "https://github.com/dharshan47/qr-code-generator",
  },
  {
    id: "4",
    title: "Delay Message",
    description:
      "Fun app that lets users send messages with a custom delay timer.",
    technologies: [
      "/projects/react.svg",
      "/projects/ts.svg",
      "/projects/tailwind.svg",
      "/skills/shadcnui.png",
    ],
    image: "/projects/delaymessage.png",
    liveUrl: "https://delaymessage.netlify.app",
    githubUrl: "https://github.com/dharshan47/delay-message",
  },
  {
    id: "5",
    title: "Mood Mail",
    description:
      "Interactive web app that sends personalized messages based on user mood.",
    technologies: [
      "/projects/react.svg",
      "/projects/ts.svg",
      "/projects/tailwind.svg",
      "/skills/shadcnui.png",
    ],
    image: "/projects/moodmail.png",
    liveUrl: "https://mood-mail.netlify.app",
    githubUrl: "https://github.com/dharshan47/mood-mail",
  },
  {
    id: "6",
    title: "Time Tracker",
    description:
      "Track your time and visualize productivity with interactive charts.",
    technologies: [
      "/projects/react.svg",
      "/projects/ts.svg",
      "/projects/tailwind.svg",
      "/skills/shadcnui.png",
    ],
    image: "/projects/timetracker.png",
    liveUrl: "https://timetrackor.netlify.app",
    githubUrl: "https://github.com/dharshan47/time-tracker",
  },
  {
    id: "7",
    title: "Gif Quest",
    description:
      "Fun GIF search app that lets you explore and discover trending GIFs instantly.",

    technologies: [
      "/projects/react.svg",
      "/projects/ts.svg",
      "/projects/tailwind.svg",
      "/skills/tanstack.png",
    ],
    image: "/projects/gifquest.png",
    liveUrl: "https://gif-quest.netlify.app",
    githubUrl: "https://github.com/dharshan47/gif-quest",
  },
  {
    id: "8",
    title: "Note Nest",
    description:
      "Simple and secure note-taking app to organize and store your thoughts effortlessly.",
    technologies: [
      "/projects/react.svg",
      "/projects/ts.svg",
      "/projects/tailwind.svg",
      "/skills/shadcnui.png",
      "/skills/firebase.png",
    ],
    image: "/projects/notenest.png",
    liveUrl: "https://nest-note.netlify.app",
    githubUrl: "https://github.com/dharshan47/note-nest",
  },
  {
    id: "9",
    title: "AiLander",
    description:
      "Generate modern and responsive landing pages instantly using AI.",
    technologies: [
      "/projects/react.svg",
      "/projects/ts.svg",
      "/projects/tailwind.svg",
    ],
    image: "/projects/ailander.png",
    liveUrl: "https://ailander.netlify.app",
    githubUrl: "https://github.com/dharshan47/ai-landing-page-generator",
  },
  {
    id: "10",
    title: "Background Remover",
    description: "A fast and simple tool to erase image backgrounds instantly.",
    technologies: [
      "/projects/react.svg",
      "/projects/ts.svg",
      "/projects/tailwind.svg",
    ],
    image: "/projects/bgremover.png",
    liveUrl: "https://ngremovr.netlify.app",
    githubUrl: "https://github.com/dharshan47/background-remover",
  },
  {
    id: "11",
    title: "Text Summarizer",
    description:
      "Summarize lengthy text into short, meaningful insights with AI.",
    technologies: [
      "/projects/react.svg",
      "/projects/ts.svg",
      "/projects/tailwind.svg",
    ],
    image: "/projects/textsummarizer.png",
    liveUrl: "https://textsummariser.netlify.app",
    githubUrl: "https://github.com/dharshan47/ai-text-summarizer",
  },
  {
    id: "12",
    title: "Text2Speech",
    description:
      "Instantly convert your text into natural-sounding speech with AI.",
    technologies: [
      "/projects/react.svg",
      "/projects/ts.svg",
      "/projects/tailwind.svg",
    ],
    image: "/projects/txt2speech.png",
    liveUrl: "https://txt2speak.netlify.app",
    githubUrl: "https://github.com/dharshan47/ai-text2speak",
  },
  {
    id: "13",
    title: "Travel Co",
    description:
      "Travel website that inspires users to discover destinations and plan memorable journeys.",
    technologies: [
      "/projects/react.svg",
      "/projects/ts.svg",
      "/projects/tailwind.svg",
    ],
    image: "/projects/travelco.png",
    liveUrl: "https://travel-coo.netlify.app",
    githubUrl: "https://github.com/dharshan47/travel-co",
  },
];
