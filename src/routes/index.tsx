import { createFileRoute } from "@tanstack/react-router";
import {
  Award,
  BadgeCheck,
  BarChart3,
  Cloud,
  Code2,
  Github,
  Medal,
  Quote,
  Rocket,
  Star,
  Trophy,
  Users,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import logoAsset from "@/assets/softtech-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Softtech Solutions & Training | Pune" },
      {
        name: "description",
        content: "Practical technology training, project mentoring, and industry-ready learning in Pune.",
      },
      { property: "og:title", content: "Softtech Solutions & Training | Pune" },
      {
        property: "og:description",
        content: "Practical technology training, project mentoring, and industry-ready learning in Pune.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = [
  ["Home", "home"],
  ["Courses", "courses"],
  ["About Us", "about"],
  ["FAQs", "faqs"],
  ["Awards", "awards"],
  ["Contact", "contact"],
] as const;

const paths = [
  {
    title: "Full Stack Development",
    description: "Master modern web development through guided projects, frameworks, and deployment practice.",
    icon: Rocket,
    tone: "from-path-blue-start to-path-blue-end",
  },
  {
    title: "Data Analytics",
    description: "Turn raw information into clear decisions using spreadsheets, dashboards, and data storytelling.",
    icon: Star,
    tone: "from-path-cyan-start to-path-cyan-end",
  },
  {
    title: "Cloud & DevOps",
    description: "Build confidence with cloud infrastructure, automation, collaboration, and scalable delivery.",
    icon: Medal,
    tone: "from-path-orange-start to-path-orange-end",
  },
];

const faqs = [
  ["Who are these courses for?", "Our programs are designed for students, career switchers, and working professionals who want industry-relevant skills."],
  ["Do you provide project support?", "Yes. Learners receive practical guidance, reviews, and mentoring throughout their projects."],
  ["Can corporate teams enrol?", "Yes. We offer focused training programs tailored to the needs of corporate teams."],
] as const;

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function Index() {
  const [openFaq, setOpenFaq] = useState(0);
  const [sent, setSent] = useState(false);

  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <div id="home" className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex h-[156px] max-w-[1382px] items-center justify-between px-[58px] max-lg:h-24 max-lg:px-6">
          <a href="#home" aria-label="Softtech home" className="shrink-0">
            <img src={logoAsset.url} alt="Softtech Solutions & Training" className="h-[118px] w-[195px] object-contain max-lg:h-20 max-lg:w-32" />
          </a>
          <nav aria-label="Main navigation" className="flex items-center gap-8 text-[18px] font-semibold max-lg:hidden">
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} className="transition-colors hover:text-primary">{label}</a>
            ))}
          </nav>
          <button type="button" onClick={() => scrollTo("contact")} className="rounded-xl bg-primary px-6 py-[14px] text-[18px] font-bold text-primary-foreground transition-colors hover:bg-primary/90">
            Enquire Now
          </button>
        </div>
      </header>

      <main>
        <section className="bg-hero-surface">
          <div className="mx-auto grid min-h-[430px] max-w-[1382px] grid-cols-[1.45fr_0.8fr] items-center gap-16 px-[58px] py-14 max-lg:grid-cols-1 max-lg:px-6">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-primary">Pune&apos;s technology learning partner</p>
              <h1 className="max-w-3xl text-[56px] font-bold leading-[1.12] text-heading max-lg:text-4xl">Build the skills that move your career forward.</h1>
              <p className="mt-6 max-w-3xl text-[20px] leading-8 text-muted-foreground">Industry-focused training, practical projects, and technology solutions that help learners and teams thrive in a fast-changing digital world.</p>
              <div className="mt-7 flex gap-4">
                <button type="button" onClick={() => scrollTo("contact")} className="rounded-xl bg-primary px-7 py-4 text-[18px] font-bold text-primary-foreground hover:bg-primary/90">Enquire Now</button>
                <button type="button" onClick={() => scrollTo("about")} className="rounded-xl border border-primary bg-background px-7 py-4 text-[18px] font-bold text-primary hover:bg-secondary">Learn More</button>
              </div>
            </div>
            <form onSubmit={submitEnquiry} className="rounded-[22px] border border-border bg-background p-8 shadow-form">
              <h2 className="text-2xl font-bold text-heading">Start your learning journey</h2>
              <p className="mt-1 text-muted-foreground">Tell us what you&apos;re looking for.</p>
              <div className="mt-5 grid gap-3">
                <input required aria-label="Your name" placeholder="Your name" className="h-14 rounded-xl border border-input px-4 outline-none focus:border-primary" />
                <input required type="email" aria-label="Email address" placeholder="Email address" className="h-14 rounded-xl border border-input px-4 outline-none focus:border-primary" />
                <input required type="tel" aria-label="Phone number" placeholder="Phone number" className="h-14 rounded-xl border border-input px-4 outline-none focus:border-primary" />
                <select aria-label="Enquiry type" className="h-14 rounded-xl border border-input bg-background px-4 outline-none focus:border-primary">
                  <option>Course enquiry</option><option>Corporate training</option><option>Project support</option>
                </select>
                <textarea aria-label="Message" placeholder="How can we help?" className="h-28 resize-none rounded-xl border border-input p-4 outline-none focus:border-primary" />
                <button type="submit" className="h-14 rounded-xl bg-primary text-[18px] font-bold text-primary-foreground hover:bg-primary/90">{sent ? "Enquiry Sent" : "Send Enquiry"}</button>
              </div>
            </form>
          </div>
        </section>

        <section aria-label="Training statistics" className="bg-background">
          <div className="mx-auto grid max-w-[1382px] grid-cols-4 px-[58px] max-md:grid-cols-2 max-md:px-6">
            {[[Users,"1200+","Students trained","text-primary"],[Star,"48+","Course categories","text-heading"],[Rocket,"150+","Learners mentored","text-primary"],[Trophy,"200+","Projects completed","text-brand-orange"]].map(([Icon,value,label,color], index) => {
              const StatIcon = Icon as typeof Users;
              return <div key={label as string} className={`flex min-h-40 flex-col items-center justify-center ${index ? "border-l border-border" : ""}`}><StatIcon className={`mb-2 size-8 ${color}`} /><strong className="text-4xl text-heading">{value as string}</strong><span className="mt-1 text-muted-foreground">{label as string}</span></div>;
            })}
          </div>
        </section>

        <section id="about" className="scroll-mt-36 bg-section py-8 text-center">
          <div className="mx-auto max-w-[1382px] px-[58px] py-8 max-md:px-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Our story</p>
            <h2 className="mt-7 text-[42px] font-bold text-heading">Learning that&apos;s built for the real world.</h2>
            <p className="mx-auto mt-7 max-w-2xl text-[20px] leading-8 text-muted-foreground">Softtech Solutions &amp; Training brings practical learning and dependable technology expertise together. For over two years, we&apos;ve helped aspiring professionals turn curiosity into career confidence.</p>
            <div className="mt-9 grid grid-cols-3 gap-5 max-md:grid-cols-1">
              {[[Rocket,"Industry-ready","text-primary"],[Users,"Mentor-led","text-path-cyan-end"],[Medal,"Project-based","text-brand-orange"]].map(([Icon,label,color]) => { const ItemIcon = Icon as typeof Rocket; return <div key={label as string} className="flex h-28 flex-col items-center justify-center rounded-2xl border border-border bg-background"><ItemIcon className={`size-7 ${color}`} /><strong className="mt-3 text-xl text-heading">{label as string}</strong></div>; })}
            </div>
          </div>
        </section>

        <section id="courses" className="scroll-mt-36 py-14">
          <div className="mx-auto max-w-[1382px] px-[58px] max-md:px-6">
            <p className="text-center text-xs font-bold uppercase tracking-[0.16em] text-primary">Learn with confidence</p>
            <h2 className="mt-7 text-center text-[42px] font-bold text-heading">Popular learning paths</h2>
            <div className="mt-9 grid grid-cols-3 gap-7 max-md:grid-cols-1">
              {paths.map(({ title, description, icon: Icon, tone }) => <article key={title} className="rounded-[20px] border border-border bg-background p-5 shadow-card"><div className={`flex h-40 items-center justify-center rounded-2xl bg-gradient-to-br ${tone}`}><Icon className="size-12 text-primary-foreground" /></div><h3 className="mt-5 text-2xl font-bold text-heading">{title}</h3><p className="mt-4 text-[18px] leading-7 text-muted-foreground">{description}</p></article>)}
            </div>
            <button type="button" className="mx-auto mt-8 block text-lg font-bold text-heading">See more courses →</button>
          </div>
        </section>

        <section className="bg-section py-12 text-center">
          <h2 className="text-3xl font-bold text-heading">Technology stack</h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-9 text-muted-foreground">
            <Code2 className="size-8" /><span className="text-2xl font-bold">JS</span><span className="text-2xl font-bold">TS</span><BarChart3 className="size-8" /><Cloud className="size-8" /><Github className="size-8" />
          </div>
        </section>

        <section className="py-14">
          <div className="mx-auto max-w-[1382px] px-[58px] max-md:px-6">
            <h2 className="text-center text-[42px] font-bold text-heading">Why learners choose Softtech</h2>
            <div className="mt-9 grid grid-cols-3 gap-6 max-md:grid-cols-1">
              {[[Rocket,"Industry-focused training","Focused learning paths designed around the skills employers expect today."],[Users,"Experienced mentors","Learn directly from supportive mentors who connect theory to real delivery."],[Medal,"Project-based learning","Build a portfolio of practical work while strengthening career-ready confidence."]].map(([Icon,title,text]) => { const ItemIcon=Icon as typeof Rocket; return <div key={title as string} className="p-5"><ItemIcon className="size-7 text-primary"/><h3 className="mt-4 text-xl font-bold text-heading">{title as string}</h3><p className="mt-3 leading-7 text-muted-foreground">{text as string}</p></div>})}
            </div>
          </div>
        </section>

        <section id="faqs" className="scroll-mt-36 py-14">
          <div className="mx-auto max-w-[1006px] px-6">
            <h2 className="text-center text-[42px] font-bold text-heading">Frequently asked questions</h2>
            <div className="mt-8 grid gap-3">
              {faqs.map(([question, answer], index) => <div key={question} className="rounded-2xl border border-border bg-background"><button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index} className="flex w-full items-center justify-between p-6 text-left text-xl font-bold text-heading"><span>{question}</span><span className="text-3xl font-normal text-primary">{openFaq === index ? "−" : "+"}</span></button>{openFaq === index && <p className="px-6 pb-6 text-[17px] leading-7 text-muted-foreground">{answer}</p>}</div>)}
            </div>
          </div>
        </section>

        <section id="awards" className="scroll-mt-36 bg-section py-20 text-center">
          <h2 className="text-[42px] font-bold text-heading">Awards &amp; recognition</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {[[Medal,"Quality training","text-brand-orange"],[Trophy,"Career impact","text-primary"],[Star,"Trusted partner","text-path-cyan-end"]].map(([Icon,label,color]) => { const AwardIcon=Icon as typeof Medal; return <div key={label as string} className="flex h-32 w-48 flex-col items-center justify-center rounded-[20px] border border-border bg-background"><AwardIcon className={`size-12 ${color}`}/><strong className="mt-2 text-heading">{label as string}</strong></div>})}
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-[1382px] px-[58px] max-md:px-6">
            <h2 className="text-center text-[42px] font-bold text-heading">What our learners say</h2>
            <div className="mt-9 grid grid-cols-3 gap-6 max-md:grid-cols-1">
              {[["The mentoring and hands-on assignments gave me the confidence to transition into a technology career.","Priya Kulkarni","Full Stack Learner"],["The course structure was clear, practical, and thoughtfully tailored to the work I wanted to do.","Rohan Deshmukh","Data Analytics Learner"],["Softtech made complex tools feel approachable and helped me build a stronger, more focused portfolio.","Neha Shah","Cloud & DevOps Learner"]].map(([quote,name,role],index)=><article key={name} className="rounded-[20px] border border-border p-7"><Quote className={`size-7 ${index === 2 ? "text-brand-orange" : "text-primary"}`} /><p className="mt-5 text-[20px] leading-8 text-muted-foreground">{quote}</p><h3 className="mt-4 text-xl font-bold text-heading">{name}</h3><p className="mt-2 text-primary">{role}</p></article>)}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="scroll-mt-36 bg-footer text-footer-foreground">
        <div className="mx-auto grid max-w-[1382px] grid-cols-[1.35fr_0.7fr_1fr] gap-20 px-[58px] pb-8 pt-20 max-md:grid-cols-1 max-md:px-6">
          <div><h2 className="text-xl font-bold">SOFTTECH SOLUTIONS &amp; TRAINING</h2><p className="mt-4">Pune, Maharashtra, India</p><p className="mt-3">+91 98765 43210</p><p className="mt-3">info@softtechsolutions.in</p></div>
          <div><h2 className="text-xl font-bold">Quick links</h2><p className="mt-4 leading-7">Home&nbsp; · &nbsp;Courses&nbsp; · &nbsp;About Us&nbsp; ·<br/>FAQs&nbsp; · &nbsp;Awards&nbsp; · &nbsp;Contact</p></div>
          <div><h2 className="text-xl font-bold">Stay in the loop</h2><p className="mt-4">Get course updates and practical technology insights.</p><input aria-label="Newsletter email" type="email" placeholder="Your email address" className="mt-4 h-14 w-full rounded-xl bg-background px-4 text-foreground outline-none"/><button type="button" className="mt-3 h-14 w-full rounded-xl bg-primary font-bold text-primary-foreground">Subscribe</button></div>
        </div>
        <p className="pb-6 text-center text-sm text-footer-muted">© 2025 Softtech Solutions &amp; Training, Pune. All rights reserved.</p>
      </footer>
    </div>
  );
}