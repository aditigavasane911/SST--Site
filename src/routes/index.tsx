import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  ChevronDown,
  Code2,
  GraduationCap,
  Menu,
  Phone,
  Play,
  Quote,
  Rocket,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import studentsImage from "@/assets/softtech-students.jpg";
import fullstackImage from "@/assets/course-fullstack.jpg";
import dataImage from "@/assets/course-data.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Softtech Solutions & Training | Pune" },
      { name: "description", content: "Career-focused software development and data training with practical projects and expert mentorship in Pune." },
      { property: "og:title", content: "Softtech Solutions & Training | Pune" },
      { property: "og:description", content: "Build job-ready technology skills through practical, mentor-led programs." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const courses = [
  { label: "Development", title: "Full Stack Web Development", text: "Master frontend, backend, databases and deployment through production-grade projects.", duration: "6 months", projects: "8 projects", image: fullstackImage },
  { label: "Data", title: "Data Analytics & Business Intelligence", text: "Turn raw data into meaningful decisions with Python, SQL, Power BI and real case studies.", duration: "4 months", projects: "6 projects", image: dataImage },
];

const faqs = [
  ["Who can join Softtech programs?", "Our programs are built for students, graduates, career switchers and working professionals. We begin with fundamentals and progress toward real-world delivery."],
  ["Are the classes practical or theory-based?", "Every course is project-led. You learn the concepts, apply them in guided labs and build portfolio work that demonstrates your ability."],
  ["Do you provide placement preparation?", "Yes. Learners receive portfolio reviews, mock interviews, résumé guidance and focused preparation for technical hiring rounds."],
  ["Can I attend a demo session first?", "Absolutely. Request a call and our team will help you choose a suitable program and reserve a demo session."],
] as const;

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [sent, setSent] = useState(false);

  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <div id="home" className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-6 lg:px-10">
          <a href="#home" className="flex items-center gap-3" aria-label="Softtech home">
            <span className="grid size-9 place-items-center rounded-md bg-primary text-primary-foreground"><Code2 className="size-5" /></span>
            <span className="font-display text-lg font-semibold leading-none">Softtech<br/><span className="text-xs font-medium text-muted-foreground">Solutions &amp; Training</span></span>
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-1 rounded-lg border border-border bg-card p-1 text-sm text-muted-foreground lg:flex">
            {[['Home','home'],['Courses','courses'],['Why us','about'],['FAQs','faqs']].map(([label,id]) => <a key={id} href={`#${id}`} className="rounded-md px-5 py-2.5 transition-colors hover:bg-secondary hover:text-foreground">{label}</a>)}
          </nav>
          <div className="hidden items-center gap-5 lg:flex">
            <button type="button" onClick={() => scrollTo('contact')} className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/15 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"><Phone className="size-3.5" /> Request Call</button>
            <a href="#contact" className="text-sm text-muted-foreground transition hover:text-foreground">Contact</a>
          </div>
          <button type="button" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)} className="grid size-10 place-items-center rounded-md border border-border lg:hidden">{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="grid border-t border-border bg-card p-4 lg:hidden">{[['Home','home'],['Courses','courses'],['Why us','about'],['FAQs','faqs'],['Contact','contact']].map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="border-b border-border px-3 py-4 text-sm">{label}</a>)}</nav>}
      </header>

      <main>
        <section className="hero-grid relative flex min-h-[760px] items-center border-b border-border pt-28">
          <div className="hero-glow absolute inset-0" />
          <div className="relative mx-auto w-full max-w-[1200px] px-6 py-20 text-center">
            <p className="animate-rise text-sm font-semibold uppercase text-primary">Learn. Build. Get Hired.</p>
            <h1 className="animate-rise-delay mx-auto mt-6 max-w-[1050px] font-display text-[clamp(3rem,6.4vw,6rem)] font-medium leading-[1.03]">
              Become the tech professional <span className="text-outline">companies want</span> to hire.
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">Join a focused community of learners building practical skills for real-world technology careers.</p>
            <div className="mt-7 flex items-center justify-center gap-3 text-sm text-muted-foreground">
              <div className="flex -space-x-2">{["P","R","N","A"].map((letter,index)=><span key={letter} className={`grid size-9 place-items-center rounded-full border-2 border-background bg-avatar-${index+1} text-xs font-bold text-foreground`}>{letter}</span>)}</div>
              <span><strong className="text-primary">1,200+</strong> learners growing with Softtech</span>
            </div>
            <button type="button" onClick={() => scrollTo('courses')} className="group mx-auto mt-9 inline-flex h-14 items-center gap-2 rounded-lg bg-primary px-8 font-bold text-primary-foreground transition hover:-translate-y-1 hover:bg-primary/90">Start your journey <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></button>
          </div>
        </section>

        <section className="relative border-b border-border py-16">
          <div className="mx-auto grid max-w-[1100px] overflow-hidden rounded-lg border border-border bg-card md:grid-cols-[1fr_1fr_2.2fr]">
            <div className="border-b border-border p-7 md:border-b-0 md:border-r"><p className="font-display text-4xl text-primary">200+</p><p className="mt-2 text-sm text-muted-foreground">Projects completed</p></div>
            <div className="border-b border-border p-7 md:border-b-0 md:border-r"><p className="font-display text-4xl text-primary">48+</p><p className="mt-2 text-sm text-muted-foreground">Career modules</p></div>
            <div className="relative min-h-64 overflow-hidden p-8 md:min-h-0">
              <img src={studentsImage} alt="Softtech students collaborating around laptops" width={1536} height={1024} className="absolute inset-0 size-full object-cover opacity-60" />
              <div className="absolute inset-0 bg-stat-overlay" />
              <div className="relative flex h-full flex-col justify-between"><h2 className="max-w-xs font-display text-4xl leading-tight">Start learning.<br/>Keep building.</h2><button type="button" aria-label="Play learner story" className="mt-8 grid size-12 place-items-center rounded-full bg-foreground text-background"><Play className="ml-0.5 size-4 fill-current" /></button></div>
            </div>
          </div>
        </section>

        <section id="courses" className="scroll-mt-24 py-24">
          <div className="mx-auto max-w-[1200px] px-6">
            <p className="section-kicker"><Sparkles className="size-4" /> Career-focused programs</p>
            <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <h2 className="max-w-3xl font-display text-5xl leading-[1.08] md:text-7xl">Courses built to turn ambition into ability.</h2>
              <p className="max-w-sm text-muted-foreground">Structured learning, mentor feedback and the kind of project experience that makes a portfolio stand out.</p>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {courses.map((course,index)=><article key={course.title} className="group overflow-hidden rounded-lg border border-border bg-card transition duration-500 hover:-translate-y-2 hover:border-primary/60">
                <div className="relative aspect-[16/10] overflow-hidden"><img src={course.image} alt={course.title} width={1280} height={854} loading="lazy" className="size-full object-cover transition duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-course-overlay"/><span className="absolute left-5 top-5 rounded-full border border-foreground/20 bg-background/70 px-3 py-1.5 text-xs backdrop-blur">{course.label}</span></div>
                <div className="p-6 md:p-8"><h3 className="font-display text-3xl">{course.title}</h3><p className="mt-4 leading-7 text-muted-foreground">{course.text}</p><div className="mt-7 flex items-center justify-between border-t border-border pt-5 text-sm"><span>{course.duration} · {course.projects}</span><span className="grid size-10 place-items-center rounded-full bg-secondary text-primary transition group-hover:bg-primary group-hover:text-primary-foreground"><ArrowRight className="size-4"/></span></div></div>
              </article>)}
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 border-y border-border bg-card py-24">
          <div className="mx-auto grid max-w-[1200px] gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div><p className="section-kicker"><BadgeCheck className="size-4"/> The Softtech difference</p><h2 className="mt-6 font-display text-5xl leading-tight md:text-6xl">We don&apos;t just teach tools. We build professionals.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">Our learning environment combines clear instruction, deliberate practice and honest feedback—so every learner understands how real teams solve real problems.</p></div>
            <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
              {[[Code2,"Build by doing","Every module ends in practical, reviewable work."],[Users,"Learn with mentors","Get guidance from people who understand delivery."],[BarChart3,"Track real progress","Measure growth through projects, not attendance."],[Rocket,"Prepare to launch","Practice interviews, portfolios and career storytelling."]].map(([Icon,title,text])=>{const FeatureIcon=Icon as typeof Code2;return <div key={title as string} className="bg-background p-7"><FeatureIcon className="size-7 text-primary"/><h3 className="mt-8 font-display text-2xl">{title as string}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text as string}</p></div>})}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-[1200px] px-6 text-center"><p className="section-kicker justify-center"><GraduationCap className="size-4"/> Learner stories</p><h2 className="mx-auto mt-6 max-w-4xl font-display text-5xl md:text-7xl">Built with mentors.<br/><span className="text-primary">Proven by learners.</span></h2>
            <div className="mt-14 grid gap-5 text-left md:grid-cols-3">{[["The projects gave me a clear structure and the confidence to speak about my work in interviews.","Priya Kulkarni","Full Stack Learner"],["I finally understood how data work connects to real business decisions—not just charts and formulas.","Rohan Deshmukh","Data Analytics Learner"],["Softtech&apos;s feedback helped me stop copying tutorials and start thinking like a developer.","Neha Shah","Web Development Learner"]].map(([quote,name,role],index)=><article key={name} className={`rounded-lg border p-7 ${index===1?'border-primary bg-primary text-primary-foreground':'border-border bg-card'}`}><Quote className="size-7 opacity-70"/><p className="mt-10 text-lg leading-8">{quote}</p><div className="mt-8 border-t border-current/15 pt-5"><p className="font-semibold">{name}</p><p className={`mt-1 text-sm ${index===1?'opacity-70':'text-muted-foreground'}`}>{role}</p></div></article>)}</div>
          </div>
        </section>

        <section id="faqs" className="scroll-mt-24 border-t border-border bg-card py-24">
          <div className="mx-auto grid max-w-[1100px] gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="section-kicker">Questions, answered</p><h2 className="mt-6 font-display text-5xl">Everything you need to know.</h2><p className="mt-5 text-muted-foreground">Still unsure? Request a call and we&apos;ll help you choose the right next step.</p></div><div>{faqs.map(([question,answer],index)=><div key={question} className="border-b border-border"><button type="button" onClick={()=>setOpenFaq(openFaq===index?-1:index)} aria-expanded={openFaq===index} className="flex w-full items-center justify-between gap-5 py-6 text-left font-display text-xl"><span>{question}</span><ChevronDown className={`size-5 shrink-0 transition ${openFaq===index?'rotate-180 text-primary':''}`}/></button>{openFaq===index&&<p className="max-w-2xl pb-7 leading-7 text-muted-foreground">{answer}</p>}</div>)}</div></div>
        </section>

        <section id="contact" className="scroll-mt-24 bg-primary py-20 text-primary-foreground">
          <div className="mx-auto grid max-w-[1100px] gap-12 px-6 lg:grid-cols-2 lg:items-center"><div><p className="text-sm font-semibold uppercase">Your next chapter starts here</p><h2 className="mt-5 font-display text-5xl leading-tight md:text-6xl">Ready to build skills that matter?</h2><p className="mt-5 max-w-lg text-lg opacity-80">Tell us what you want to learn. Our team will call you to recommend the right path.</p><div className="mt-8 grid gap-3 text-sm">{["Free program consultation","Personalized learning roadmap","No-pressure demo session"].map(item=><span key={item} className="flex items-center gap-3"><span className="grid size-6 place-items-center rounded-full bg-primary-foreground text-primary"><Check className="size-3.5"/></span>{item}</span>)}</div></div>
            <form onSubmit={submitEnquiry} className="rounded-lg bg-background p-6 text-foreground shadow-2xl md:p-8"><div className="grid gap-4"><label className="grid gap-2 text-sm"><span>Name</span><input required placeholder="Your full name" className="h-12 rounded-md border border-input bg-card px-4 outline-none focus:border-primary"/></label><label className="grid gap-2 text-sm"><span>Phone number</span><input required type="tel" placeholder="+91 98765 43210" className="h-12 rounded-md border border-input bg-card px-4 outline-none focus:border-primary"/></label><label className="grid gap-2 text-sm"><span>I&apos;m interested in</span><select className="h-12 rounded-md border border-input bg-card px-4 outline-none focus:border-primary"><option>Full Stack Development</option><option>Data Analytics</option><option>Corporate Training</option></select></label><button type="submit" className="mt-2 flex h-13 items-center justify-center gap-2 rounded-md bg-primary font-bold text-primary-foreground">{sent ? <><Check className="size-4"/> Request received</> : <>Request a call <ArrowRight className="size-4"/></>}</button></div></form>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background py-10"><div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-8 px-6 md:flex-row md:items-end"><div><div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-md bg-primary text-primary-foreground"><Code2 className="size-5"/></span><span className="font-display text-xl">Softtech Solutions &amp; Training</span></div><p className="mt-4 max-w-md text-sm text-muted-foreground">Practical technology education for ambitious learners in Pune and beyond.</p></div><div className="text-sm text-muted-foreground md:text-right"><p>Pune, Maharashtra · info@softtechsolutions.in</p><p className="mt-3">© 2026 Softtech Solutions &amp; Training</p></div></div></footer>
    </div>
  );
}