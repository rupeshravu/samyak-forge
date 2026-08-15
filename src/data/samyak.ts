import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

export const images = { g1, g2, g3, g4, g5, g6 };

export const FEST_DATE = "2026-11-12T10:00:00+05:30";

export type Category =
  | "Technical"
  | "Cultural"
  | "Gaming"
  | "Creative"
  | "Workshops"
  | "Competitions";

export type FestEvent = {
  id: string;
  name: string;
  category: Category;
  date: string;
  venue: string;
  description: string;
  prize: string;
  teamSize: string;
  image: string;
};

export const events: FestEvent[] = [
  {
    id: "hackstorm",
    name: "Hackstorm 36",
    category: "Technical",
    date: "12 Nov · 10:00",
    venue: "Innovation Block",
    description: "A 36-hour build sprint where campus teams ship working products overnight.",
    prize: "₹2,00,000",
    teamSize: "2–4",
    image: g2,
  },
  {
    id: "nightbeats",
    name: "Night Beats",
    category: "Cultural",
    date: "12 Nov · 19:30",
    venue: "Main Amphitheatre",
    description: "Headline music night with a full production stage, lasers and live visuals.",
    prize: "Showcase",
    teamSize: "Open",
    image: g1,
  },
  {
    id: "valorant",
    name: "Arena Clash",
    category: "Gaming",
    date: "13 Nov · 11:00",
    venue: "Esports Dome",
    description: "LAN bracket across the biggest FPS and MOBA titles, streamed to the main screen.",
    prize: "₹1,20,000",
    teamSize: "5",
    image: g5,
  },
  {
    id: "runway",
    name: "Neon Runway",
    category: "Creative",
    date: "13 Nov · 18:00",
    venue: "Central Court",
    description: "Fashion and design showcase built around a futuristic light-and-smoke set.",
    prize: "₹80,000",
    teamSize: "6–10",
    image: g3,
  },
  {
    id: "aiworkshop",
    name: "Applied AI Lab",
    category: "Workshops",
    date: "13 Nov · 14:00",
    venue: "Seminar Hall A",
    description: "Hands-on session on shipping practical AI features, led by industry engineers.",
    prize: "Certified",
    teamSize: "Solo",
    image: g4,
  },
  {
    id: "robowars",
    name: "Robo Wars",
    category: "Competitions",
    date: "14 Nov · 12:00",
    venue: "Arena Pit",
    description: "Combat robotics inside the reinforced pit — heaviest hitters of the fest.",
    prize: "₹1,50,000",
    teamSize: "3–6",
    image: g2,
  },
  {
    id: "shortfilm",
    name: "Frame Rate",
    category: "Creative",
    date: "14 Nov · 16:00",
    venue: "Screening Room",
    description: "Short-film festival judged by working directors and cinematographers.",
    prize: "₹60,000",
    teamSize: "1–5",
    image: g6,
  },
  {
    id: "codesprint",
    name: "Code Sprint",
    category: "Technical",
    date: "14 Nov · 09:00",
    venue: "Lab Complex",
    description: "Three rounds of competitive programming with a live leaderboard wall.",
    prize: "₹90,000",
    teamSize: "1–3",
    image: g5,
  },
  {
    id: "dancewars",
    name: "Pulse Off",
    category: "Cultural",
    date: "14 Nov · 20:00",
    venue: "Main Amphitheatre",
    description: "Inter-college dance battle, crew versus crew, decided by the crowd meter.",
    prize: "₹1,00,000",
    teamSize: "8–16",
    image: g3,
  },
];

export const categories = [
  "All",
  "Technical",
  "Cultural",
  "Gaming",
  "Creative",
  "Workshops",
] as const;

export const stats = [
  { value: 100, suffix: "+", label: "Events" },
  { value: 10, suffix: "K+", label: "Participants" },
  { value: 50, suffix: "+", label: "Colleges" },
  { value: 3, suffix: " Days", label: "Non-stop" },
];

export const journey = [
  {
    title: "Concept",
    detail: "A student council sketch becomes a season-long production plan.",
  },
  { title: "Preparation", detail: "Sets, stages, sponsors and 400 volunteers align." },
  { title: "Events", detail: "Three days, six tracks, a hundred moments running at once." },
  { title: "Grand Celebration", detail: "Headline night, awards and the closing spectacle." },
  { title: "Closing", detail: "Lights fade, the campus resets, the next edition begins." },
];

export const teamGroups = [
  {
    title: "Core Team",
    members: [
      { name: "Aarav Menon", role: "Festival Convenor" },
      { name: "Ishita Rao", role: "Deputy Convenor" },
      { name: "Kabir Shah", role: "General Secretary" },
      { name: "Nandita Iyer", role: "Finance Head" },
    ],
  },
  {
    title: "Event Coordinators",
    members: [
      { name: "Rohan Das", role: "Technical Track" },
      { name: "Meera Krishnan", role: "Cultural Track" },
      { name: "Yash Patel", role: "Gaming Track" },
      { name: "Anaya Sen", role: "Workshops" },
    ],
  },
  {
    title: "Creative & Design",
    members: [
      { name: "Dev Anand", role: "Art Director" },
      { name: "Sara Qureshi", role: "Motion Design" },
      { name: "Neel Verma", role: "Stage Design" },
    ],
  },
  {
    title: "Technical Team",
    members: [
      { name: "Aditya Bose", role: "Web Lead" },
      { name: "Riya Kulkarni", role: "Systems" },
      { name: "Imran Sheikh", role: "AV & Lighting" },
    ],
  },
  {
    title: "Marketing",
    members: [
      { name: "Tanvi Joshi", role: "Brand Lead" },
      { name: "Arjun Nair", role: "Outreach" },
      { name: "Zoya Khan", role: "Social Media" },
    ],
  },
  {
    title: "Operations & Volunteers",
    members: [
      { name: "Vikram Reddy", role: "Logistics Head" },
      { name: "Pooja Mehta", role: "Hospitality" },
      { name: "Volunteer Corps", role: "400 strong" },
    ],
  },
];

export const sponsorTiers = [
  { tier: "Title Sponsor", names: ["Helix Industries"] },
  { tier: "Powered By", names: ["Nova Compute", "Vantage Energy"] },
  { tier: "Gold Sponsors", names: ["Orbit Labs", "Meridian Bank", "Kanso Motors"] },
  { tier: "Silver Sponsors", names: ["Studio Pale", "Cindr", "Bluewave", "Tessell"] },
  {
    tier: "Associate Partners",
    names: ["Northline", "Fable Foods", "Circuit Co", "Atlas Gear", "Peakform"],
  },
  { tier: "Media Partners", names: ["Campus Wire", "The Grid", "Frequency FM", "Loop Weekly"] },
];
