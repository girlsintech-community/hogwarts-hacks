import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Sparkles,
  Users,
  Lightbulb,
  Rocket,
  MessageSquare,
  Presentation,
  Trophy,
  Heart,
  Clock,
  Award,
  Star,
  ChevronDown,
  Wand2,
  BookOpen,
  Menu,
  X,
} from "lucide-react";

import { MagicParticles } from "@/components/MagicParticles";
import { Countdown } from "@/components/Countdown";
import { BookPage } from "@/components/BookPage";
import { BrandMark } from "@/components/BrandMark";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import castleHero from "@/assets/castle-hero.jpg";
import houseCup from "@/assets/house-cup.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hogwartz Hacks — Where Magic Meets Innovation" },
      {
        name: "description",
        content:
          "A 4-hour virtual ideathon. Teams of 2. Open-canvas creativity. Four houses — Nova, Nyx, Luno, Astra — compete for House Cup glory.",
      },
      { property: "og:title", content: "Hogwartz Hacks — Where Magic Meets Innovation" },
      {
        property: "og:description",
        content: "Virtual ideathon. 4 hours. Teams of 2. House Cup glory awaits.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const NAV = [
  ["About", "#about"],
  ["Journey", "#journey"],
  ["Schedule", "#schedule"],
  ["House Cup", "#cup"],
  ["FAQ", "#faq"],
] as const;

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-gold/20 bg-midnight-deep/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-10">
        <a href="#top" className="flex items-center gap-3">
          <BrandMark className="h-11 w-11 drop-shadow-[0_0_12px_oklch(0.85_0.15_85/0.5)]" />
          <span className="sr-only">Hogwartz Hacks</span>
        </a>

        <div className="hidden items-center gap-8 font-serif text-sm uppercase tracking-[0.25em] text-foreground/80 md:flex">
          {NAV.map(([label, href]) => (
            <a key={href} href={href} className="transition hover:text-gold">
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button asChild size="sm" className="hidden font-serif tracking-wide sm:inline-flex">
            <a href="#register">Register</a>
          </Button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-md p-2 text-gold md:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-gold/20 bg-midnight-deep/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4 font-serif text-sm uppercase tracking-widest">
            {NAV.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded px-2 py-2 text-foreground/85 hover:bg-gold/10 hover:text-gold"
              >
                {label}
              </a>
            ))}
            <a
              href="#register"
              onClick={() => setOpen(false)}
              className="mt-2 rounded bg-gold px-3 py-2 text-center text-midnight-deep"
            >
              Register
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <img
          src={castleHero}
          alt="Mystical castle silhouette at night"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-deep/70 via-midnight-deep/75 to-midnight-deep" />
      </div>
      <MagicParticles count={50} />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-20 pt-12 text-center md:pt-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 font-serif text-sm uppercase tracking-[0.5em] text-gold-bright"
        >
          ⚡ A Hogwartz Virtual Summer School Event ⚡
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="font-display text-5xl font-bold leading-[1.05] text-gold-gradient sm:text-7xl md:text-8xl"
        >
          Hogwartz Hacks
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-3 font-script text-4xl text-gold-bright sm:text-5xl md:text-6xl"
        >
          Where Magic Meets Innovation
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mx-auto mt-8 max-w-2xl font-serif text-lg leading-relaxed text-foreground/85 sm:text-xl"
        >
          A 4-hour virtual ideathon where four houses unite, brainstorm
          groundbreaking ideas, and compete for{" "}
          <span className="italic text-gold">House Cup glory</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3 font-serif text-sm text-foreground/80 sm:gap-4 sm:text-base"
        >
          {[
            "Sat, 27 June",
            "Virtual",
            "4 Hours",
            "Teams of 2",
          ].map((label) => (
            <span
              key={label}
              className="magic-border rounded-full bg-midnight/40 px-4 py-2 backdrop-blur-sm"
            >
              {label}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button asChild size="lg" className="h-12 animate-glow px-8 font-serif text-base tracking-wide">
            <a href="#register">Register Now</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 border-gold/50 bg-transparent px-8 font-serif text-base tracking-wide text-gold hover:bg-gold/10 hover:text-gold-bright"
          >
            <a href="#about">Open the Book</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-14"
        >
          <p className="mb-4 font-serif text-xs uppercase tracking-[0.3em] text-muted-foreground">
            The gates open in
          </p>
          <Countdown />
        </motion.div>

        <a href="#about" className="mt-16 inline-block text-gold/60 transition hover:text-gold">
          <ChevronDown className="h-8 w-8 animate-bounce" />
        </a>
      </div>
    </section>
  );
}

function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-center font-display text-4xl font-bold leading-tight text-ink sm:text-5xl md:text-6xl">
      {children}
    </h2>
  );
}

function FlourishDivider() {
  return (
    <div className="my-6 flex items-center justify-center gap-3 text-ink/50">
      <span className="h-px w-12 bg-ink/30 sm:w-20" />
      <span className="font-script text-2xl">✦</span>
      <span className="h-px w-12 bg-ink/30 sm:w-20" />
    </div>
  );
}

function About() {
  return (
    <BookPage id="about" chapter="Chapter I — The Invitation" pageNumber="i">
      <PageTitle>What is Hogwartz Hacks?</PageTitle>
      <FlourishDivider />
      <p className="mx-auto max-w-3xl text-center font-serif text-xl leading-relaxed sm:text-2xl">
        A fast-paced virtual ideathon designed to bring brilliant minds from four houses
        together. Teams of two collaborate across houses, dream up wildly original ideas,
        and present them to industry mentors and judges — no challenge tracks, no rails,
        only your imagination.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3 font-serif text-sm">
        {["No coding required", "Open canvas", "Creativity matters", "Industry mentors"].map(
          (t) => (
            <span
              key={t}
              className="rounded-full border border-ink/30 bg-ink/5 px-4 py-1.5 italic text-ink"
            >
              ✦ {t}
            </span>
          ),
        )}
      </div>
    </BookPage>
  );
}

const STEPS = [
  { icon: Users, title: "Team Formation", desc: "Form teams of two with members from different houses." },
  { icon: Lightbulb, title: "Spark an Idea", desc: "Choose any problem worth solving — the canvas is yours." },
  { icon: Rocket, title: "Ideation Sprint", desc: "Design a solution and prepare a sharp pitch deck." },
  { icon: MessageSquare, title: "Mentor Support", desc: "Get guidance from industry mentors throughout." },
  { icon: Presentation, title: "Final Presentation", desc: "Present your idea in five magical minutes." },
  { icon: Trophy, title: "House Cup Rewards", desc: "Earn points for your house and win the cup." },
];

function Journey() {
  return (
    <BookPage id="journey" chapter="Chapter II — The Journey" pageNumber="ii">
      <PageTitle>How It Unfolds</PageTitle>
      <FlourishDivider />
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-7 top-0 h-full w-px bg-ink/25 sm:left-1/2" />
        <div className="space-y-10">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            const left = i % 2 === 0;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: left ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col gap-4 sm:flex-row sm:items-center ${
                  left ? "" : "sm:flex-row-reverse"
                }`}
              >
                <div className="sm:w-1/2" />
                <div className="absolute left-7 z-10 -translate-x-1/2 sm:left-1/2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/40 bg-parchment text-ink shadow-md">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <div
                  className={`pl-16 sm:w-1/2 sm:pl-0 ${
                    left ? "sm:pr-12 sm:text-right" : "sm:pl-12"
                  }`}
                >
                  <p className="font-display text-xs uppercase tracking-widest text-ink/60">
                    Step {i + 1}
                  </p>
                  <h3 className="font-display text-xl font-semibold text-ink">{s.title}</h3>
                  <p className="mt-1 font-serif text-ink/75">{s.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </BookPage>
  );
}

const HOUSES = [
  { name: "Nova", title: "The Visionary", motto: "Code the future before it arrives.", image: houseNova.url, tone: "from-blue-500/20 to-blue-900/30" },
  { name: "Nyx", title: "The Enigma", motto: "Hack the paradox. Rule the code.", image: houseNyx.url, tone: "from-amber-700/20 to-amber-950/30" },
  { name: "Luno", title: "The Alchemist", motto: "Turn code into gold.", image: houseLuno.url, tone: "from-emerald-500/20 to-emerald-900/30" },
  { name: "Astra", title: "The Dreamer", motto: "Code clarity from chaos.", image: houseAstra.url, tone: "from-pink-500/20 to-fuchsia-900/30" },
];

function Houses() {
  return (
    <BookPage id="houses" chapter="Chapter III — The Four Houses" pageNumber="iii">
      <PageTitle>Choose Your House</PageTitle>
      <FlourishDivider />
      <p className="mx-auto mb-10 max-w-2xl text-center font-serif text-lg italic text-ink/75">
        Four houses. Four philosophies. One Cup.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {HOUSES.map((h, i) => (
          <motion.div
            key={h.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-xl border border-ink/30 bg-ink/5"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={h.image}
                alt={`House of ${h.name} — ${h.title}`}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${h.tone} mix-blend-multiply opacity-60`} />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="font-display text-xs uppercase tracking-[0.4em] text-white/80">
                House of
              </p>
              <h3 className="font-display text-3xl font-bold uppercase tracking-wider text-white sm:text-4xl">
                {h.name}
              </h3>
              <p className="mt-1 font-serif text-base text-white/90">{h.title}</p>
              <p className="mt-2 font-serif text-sm italic text-white/70">"{h.motto}"</p>
            </div>
          </motion.div>
        ))}
      </div>
    </BookPage>
  );
}

const SCHEDULE = [
  { title: "Opening Ceremony", time: "15 Minutes" },
  { title: "Team Formation", time: "15 Minutes" },
  { title: "Ideation Sprint", time: "2 Hours" },
  { title: "Pitch Deck Preparation", time: "30 Minutes" },
  { title: "Final Presentations", time: "1 Hour" },
  { title: "Awards Ceremony", time: "15 Minutes" },
];

function Schedule() {
  return (
    <BookPage id="schedule" chapter="Chapter IV — The Night Unfolds" pageNumber="iv">
      <PageTitle>Event Schedule</PageTitle>
      <FlourishDivider />
      <ol className="mx-auto max-w-2xl space-y-4">
        {SCHEDULE.map((s, i) => (
          <motion.li
            key={s.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="flex items-center gap-4 border-b border-ink/15 pb-4 last:border-0 last:pb-0"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink font-display text-sm text-gold">
              {i + 1}
            </div>
            <div className="flex flex-1 flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">{s.title}</h3>
              <span className="flex items-center gap-1.5 font-serif italic text-ink/70">
                <Clock className="h-4 w-4" /> {s.time}
              </span>
            </div>
          </motion.li>
        ))}
      </ol>
    </BookPage>
  );
}

const CRITERIA = [
  { label: "Problem Understanding", pct: 20 },
  { label: "Innovation", pct: 25 },
  { label: "Feasibility", pct: 20 },
  { label: "Impact", pct: 20 },
  { label: "Presentation", pct: 15 },
];

function Judging() {
  return (
    <BookPage id="judging" chapter="Chapter V — The Scorecard" pageNumber="v">
      <PageTitle>How the Magic is Measured</PageTitle>
      <FlourishDivider />
      <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
        {CRITERIA.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="rounded-lg border border-ink/25 bg-ink/5 p-5"
          >
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-base font-semibold text-ink sm:text-lg">
                {c.label}
              </h3>
              <span className="font-display text-2xl font-bold text-ink">{c.pct}%</span>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-ink/15">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${c.pct * 4}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: i * 0.06 }}
                className="h-full rounded-full bg-gradient-to-r from-amber-700 to-yellow-500"
              />
            </div>
          </motion.div>
        ))}
        <div className="flex items-center justify-center rounded-lg border border-ink/25 bg-gradient-to-br from-amber-300/30 to-transparent p-5">
          <div className="text-center">
            <p className="font-serif text-xs uppercase tracking-widest text-ink/70">Total</p>
            <p className="font-display text-4xl font-bold text-ink">100</p>
          </div>
        </div>
      </div>
    </BookPage>
  );
}

const POINTS = [
  { place: "1st Place", points: 100 },
  { place: "2nd Place", points: 75 },
  { place: "3rd Place", points: 50 },
  { place: "Participation", points: 10 },
];

function HouseCup() {
  return (
    <BookPage id="cup" chapter="Chapter VI — The Glory" pageNumber="vi">
      <PageTitle>The House Cup</PageTitle>
      <FlourishDivider />
      <p className="mx-auto mb-10 max-w-2xl text-center font-serif text-lg italic text-ink/75">
        Earn points. Lift your house. Etch your name in magical history.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative mx-auto mb-12 flex max-w-md justify-center"
      >
        <div className="absolute inset-x-10 bottom-4 -z-10 h-40 rounded-full bg-cyan-400/20 blur-3xl" />
        <motion.img
          src={houseCup.url}
          alt="The Hogwartz Hacks House Cup"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="h-80 w-auto drop-shadow-[0_20px_40px_oklch(0.5_0.15_220/0.6)] sm:h-96"
        />
      </motion.div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {POINTS.map((p, i) => (
          <motion.div
            key={p.place}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-lg border border-ink/25 bg-ink/5 p-5 text-center"
          >
            <p className="font-display text-xs uppercase tracking-widest text-ink/70">
              {p.place}
            </p>
            <p className="mt-2 font-display text-4xl font-bold text-ink">{p.points}</p>
            <p className="mt-1 font-serif text-xs italic text-ink/60">House Points</p>
          </motion.div>
        ))}
      </div>
    </BookPage>
  );
}

const AWARDS = [
  { icon: Trophy, title: "Best Overall Idea" },
  { icon: Sparkles, title: "Most Innovative Solution" },
  { icon: Heart, title: "Best Social Impact Idea" },
  { icon: Presentation, title: "Best Presentation" },
  { icon: Star, title: "People's Choice Award" },
];

function Awards() {
  return (
    <BookPage id="awards" chapter="Chapter VII — The Spoils" pageNumber="vii">
      <PageTitle>Awards</PageTitle>
      <FlourishDivider />
      <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {AWARDS.map((a, i) => {
          const Icon = a.icon;
          return (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -4, rotate: -1 }}
              className="flex flex-col items-center rounded-xl border border-ink/30 bg-ink/5 p-6 text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-gold">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">{a.title}</h3>
              <Award className="mt-2 h-4 w-4 text-ink/40" />
            </motion.div>
          );
        })}
      </div>
    </BookPage>
  );
}

function Mentors() {
  return (
    <BookPage id="mentors" chapter="Chapter VIII — The Council" pageNumber="viii">
      <PageTitle>Mentors & Judges</PageTitle>
      <FlourishDivider />
      <div className="mx-auto max-w-2xl rounded-2xl border border-ink/30 bg-ink/5 p-10 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-gold">
          <Wand2 className="h-7 w-7" />
        </div>
        <h3 className="font-display text-2xl font-semibold text-ink">The Council Awaits</h3>
        <p className="mx-auto mt-3 max-w-xl font-serif text-ink/75">
          Our esteemed mentors and judges will be revealed soon. Register early and the owls
          will deliver the news straight to your inbox.
        </p>
      </div>
    </BookPage>
  );
}

const FAQS: [string, string][] = [
  ["Who can participate?", "Students from any college, school, or year are welcome to join Hogwartz Hacks."],
  ["Do I need coding experience?", "Not at all. Hogwartz Hacks is an ideathon — ideas, creativity, and problem-solving matter most."],
  ["Can I participate alone?", "Teams must have exactly 2 members. We'll help you find a partner during team formation if needed."],
  ["How will teams be formed?", "You can bring a teammate or be paired with a student from a different house at the event."],
  ["What should I submit?", "A 5-minute pitch deck presenting your idea, the problem, your solution, and its impact."],
  ["How are winners selected?", "Industry judges score every team on Problem Understanding, Innovation, Feasibility, Impact, and Presentation."],
  ["Can beginners join?", "Absolutely. Hogwartz Hacks is designed to welcome first-timers and seasoned innovators alike."],
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <BookPage id="faq" chapter="Chapter IX — The Oracle Speaks" pageNumber="ix">
      <PageTitle>Frequently Asked</PageTitle>
      <FlourishDivider />
      <div className="mx-auto max-w-2xl space-y-3">
        {FAQS.map(([q, a], i) => (
          <div key={q} className="overflow-hidden rounded-lg border border-ink/25 bg-ink/5">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-ink/10"
            >
              <span className="font-display text-base font-semibold text-ink sm:text-lg">{q}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-ink transition-transform ${
                  open === i ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ${
                open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-4 font-serif text-ink/80">{a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </BookPage>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block font-display text-xs uppercase tracking-widest text-ink/70"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-md border border-ink/30 bg-parchment/60 px-3 py-2.5 font-serif text-ink outline-none transition focus:border-ink"
      />
    </div>
  );
}

function Register() {
  const [submitted, setSubmitted] = useState(false);
  const [house, setHouse] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <BookPage id="register" chapter="Final Chapter — Accept Your Invitation" pageNumber="x">
      <PageTitle>Register Now</PageTitle>
      <FlourishDivider />
      {submitted ? (
        <div className="py-12 text-center">
          <Sparkles className="mx-auto h-16 w-16 text-ink" />
          <h3 className="mt-6 font-display text-3xl font-bold text-ink">Your Owl Has Flown!</h3>
          <p className="mt-3 font-serif text-lg text-ink/80">
            Your registration is noted in our enchanted ledger. Watch your inbox for further
            instructions from the Hogwartz council.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-5 text-ink">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full Name" name="name" required />
            <Field label="Email Address" name="email" type="email" required />
            <Field label="Phone Number" name="phone" type="tel" required />
            <Field label="College / School" name="college" required />
            <Field label="Current Year" name="year" required />
            <div>
              <label className="mb-1.5 block font-display text-xs uppercase tracking-widest text-ink/70">
                House
              </label>
              <select
                required
                value={house}
                onChange={(e) => setHouse(e.target.value)}
                className="w-full rounded-md border border-ink/30 bg-parchment/60 px-3 py-2.5 font-serif text-ink outline-none focus:border-ink"
              >
                <option value="">Choose your house…</option>
                <option>Nova</option>
                <option>Nyx</option>
                <option>Luno</option>
                <option>Astra</option>
                <option>Sort me later</option>
              </select>
            </div>
          </div>
          <Field label="Skills" name="skills" placeholder="e.g. Design, Storytelling, Research" />
          <Field label="LinkedIn Profile" name="linkedin" placeholder="https://linkedin.com/in/…" />

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block font-display text-xs uppercase tracking-widest text-ink/70">
                Have a Teammate?
              </label>
              <select className="w-full rounded-md border border-ink/30 bg-parchment/60 px-3 py-2.5 font-serif text-ink outline-none focus:border-ink">
                <option>No — pair me up</option>
                <option>Yes</option>
              </select>
            </div>
            <Field label="Teammate Details" name="teammate" placeholder="Name & email (if any)" />
          </div>

          <label className="flex items-start gap-3 font-serif text-sm italic text-ink">
            <input type="checkbox" required className="mt-1 h-4 w-4 accent-ink" />
            <span>
              I solemnly swear that I'm up to good magic — I consent to participate and to
              receive event updates by owl (and email).
            </span>
          </label>

          <Button type="submit" size="lg" className="h-12 w-full font-serif text-base tracking-wide">
            <Sparkles className="h-4 w-4" /> Send My Owl
          </Button>
        </form>
      )}
    </BookPage>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-gold/20 py-12">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <div className="flex items-center justify-center gap-3">
          <BrandMark className="h-10 w-10" />
        </div>
        <p className="mt-3 font-serif italic text-muted-foreground">
          Guiding minds. Inspiring futures.
        </p>
        <p className="mt-6 font-serif text-xs uppercase tracking-widest text-muted-foreground">
          © Hogwartz Virtual Summer School · A fan-made, original-art event
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-midnight-deep">
      <Navbar />
      <Hero />
      <About />
      <Journey />
      <Houses />
      <Schedule />
      <Judging />
      <HouseCup />
      <Awards />
      <Mentors />
      <FAQ />
      <Register />
      <Footer />
    </main>
  );
}
