import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Sparkles,
  Users,
  Lightbulb,
  Rocket,
  MessageSquare,
  Presentation,
  Trophy,
  Brain,
  GraduationCap,
  Heart,
  Leaf,
  Crown,
  Clock,
  Award,
  Star,
  ChevronDown,
  Wand2,
  Scroll,
} from "lucide-react";

import { MagicParticles } from "@/components/MagicParticles";
import { HouseCrest } from "@/components/HouseCrest";
import { Countdown } from "@/components/Countdown";
import { Button } from "@/components/ui/button";
import castleHero from "@/assets/castle-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hogwartz Hacks ⚡ Where Magic Meets Innovation" },
      {
        name: "description",
        content:
          "A 4-hour virtual ideathon. Teams of 2. Six magical challenge tracks. House Cup glory. Saturday, 27th September.",
      },
      { property: "og:title", content: "Hogwartz Hacks ⚡ Where Magic Meets Innovation" },
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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className="mx-auto mb-14 max-w-3xl text-center"
    >
      {eyebrow && (
        <p className="mb-3 font-serif text-sm uppercase tracking-[0.4em] text-gold">
          ✦ {eyebrow} ✦
        </p>
      )}
      <h2 className="font-display text-4xl font-bold leading-tight text-gold-gradient sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-5 max-w-2xl font-serif text-lg text-muted-foreground sm:text-xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden">
      {/* Castle backdrop */}
      <div className="absolute inset-0 -z-10">
        <img
          src={castleHero}
          alt="Mystical wizarding castle at night"
          width={1920}
          height={1280}
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-deep/60 via-midnight-deep/70 to-midnight-deep" />
      </div>

      <MagicParticles count={50} />

      {/* House banners floating sides */}
      <div className="pointer-events-none absolute left-4 top-32 hidden flex-col gap-6 lg:flex">
        {(["lion", "serpent"] as const).map((h, i) => (
          <motion.div
            key={h}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.2, duration: 0.8 }}
          >
            <HouseCrest house={h} className="h-20 w-20 animate-float" />
          </motion.div>
        ))}
      </div>
      <div className="pointer-events-none absolute right-4 top-32 hidden flex-col gap-6 lg:flex">
        {(["badger", "eagle"] as const).map((h, i) => (
          <motion.div
            key={h}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.2, duration: 0.8 }}
          >
            <HouseCrest house={h} className="h-20 w-20 animate-float" />
          </motion.div>
        ))}
      </div>

      <nav className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
        <div className="flex items-center gap-2 font-display text-xl font-bold tracking-wider text-gold">
          <Wand2 className="h-5 w-5" />
          HOGWARTZ HACKS
        </div>
        <div className="hidden gap-8 font-serif text-sm uppercase tracking-widest text-foreground/80 md:flex">
          <a href="#about" className="transition hover:text-gold">About</a>
          <a href="#tracks" className="transition hover:text-gold">Tracks</a>
          <a href="#schedule" className="transition hover:text-gold">Schedule</a>
          <a href="#faq" className="transition hover:text-gold">FAQ</a>
        </div>
        <Button asChild variant="default" size="sm" className="font-serif tracking-wide">
          <a href="#register">Register</a>
        </Button>
      </nav>

      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-20 pt-12 text-center md:pt-20">
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
          transition={{ delay: 0.4, duration: 0.9 }}
          className="font-display text-5xl font-bold leading-[1.05] text-gold-gradient sm:text-7xl md:text-8xl"
        >
          Hogwartz Hacks
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-4 font-script text-4xl text-gold-bright sm:text-5xl md:text-6xl"
        >
          Where Magic Meets Innovation
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mx-auto mt-8 max-w-2xl font-serif text-lg leading-relaxed text-foreground/85 sm:text-xl"
        >
          A 4-hour virtual ideathon where students from different houses unite,
          brainstorm groundbreaking ideas, and compete for{" "}
          <span className="italic text-gold">House Cup glory</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3 font-serif text-sm text-foreground/80 sm:gap-6 sm:text-base"
        >
          {[
            ["📅", "Sat, 27 Sept"],
            ["🌐", "Virtual"],
            ["⏳", "4 Hours"],
            ["👥", "Teams of 2"],
          ].map(([icon, label]) => (
            <span key={label} className="magic-border rounded-full bg-midnight/40 px-4 py-2 backdrop-blur-sm">
              {icon} {label}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button asChild size="lg" className="h-12 animate-glow px-8 font-serif text-base tracking-wide">
            <a href="#register">
              <Sparkles className="h-4 w-4" /> Register Now
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 border-gold/50 bg-transparent px-8 font-serif text-base tracking-wide text-gold hover:bg-gold/10 hover:text-gold-bright"
          >
            <a href="#tracks">View Challenges</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
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

function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <SectionHeading
        eyebrow="The Invitation"
        title="What is Hogwartz Hacks?"
        subtitle="A fast-paced virtual ideathon designed to bring together brilliant minds from different houses."
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="mx-auto max-w-4xl px-6"
      >
        <div className="parchment-card relative rounded-2xl px-8 py-10 sm:px-14 sm:py-14">
          <Scroll className="absolute -top-6 left-1/2 h-12 w-12 -translate-x-1/2 rounded-full bg-midnight-deep p-2 text-gold" />
          <p className="text-center font-serif text-xl leading-relaxed sm:text-2xl">
            Participants will form teams of two, collaborate with students from other houses,
            solve real-world challenges, build innovative solutions, and present their ideas to
            industry mentors and judges.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 font-serif text-sm">
            {["No coding required", "Creativity matters", "Innovation rewarded", "Problem-solving"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-ink/30 bg-ink/5 px-4 py-1.5 italic text-ink"
              >
                ✦ {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

const STEPS = [
  { icon: Users, title: "Team Formation", desc: "Participants form teams of two with members from different houses." },
  { icon: Lightbulb, title: "Challenge Selection", desc: "Choose from multiple innovation tracks." },
  { icon: Rocket, title: "Ideation Sprint", desc: "Work together to design a solution and prepare a pitch deck." },
  { icon: MessageSquare, title: "Mentor Support", desc: "Get guidance from mentors during the ideation period." },
  { icon: Presentation, title: "Final Presentation", desc: "Present your idea in 5 minutes." },
  { icon: Trophy, title: "House Cup Rewards", desc: "Earn points for your house and win exciting prizes." },
];

function HowItWorks() {
  return (
    <section className="relative py-24 sm:py-32">
      <SectionHeading eyebrow="The Journey" title="How It Works" />
      <div className="relative mx-auto max-w-5xl px-6">
        {/* center golden line */}
        <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent md:left-1/2 md:block" />
        <div className="space-y-12">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            const left = i % 2 === 0;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: left ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col gap-6 md:flex-row md:items-center ${left ? "" : "md:flex-row-reverse"}`}
              >
                <div className="md:w-1/2" />
                <div className="absolute left-8 z-10 -translate-x-1/2 md:left-1/2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 bg-midnight-deep text-gold shadow-magic">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <div className={`pl-20 md:w-1/2 md:pl-0 ${left ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <p className="mb-1 font-display text-xs uppercase tracking-widest text-gold">
                    Step {i + 1}
                  </p>
                  <h3 className="font-display text-2xl font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 font-serif text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const TRACKS = [
  { icon: Brain, title: "AI for Good", desc: "Harness artificial intelligence to solve humanity's greatest challenges." },
  { icon: GraduationCap, title: "Education & Learning", desc: "Reimagine how the world learns, teaches, and grows." },
  { icon: Heart, title: "Community Building", desc: "Spark connection, belonging, and collective action." },
  { icon: Leaf, title: "Sustainability & Climate", desc: "Design a kinder, greener future for our planet." },
  { icon: Crown, title: "Women in Technology", desc: "Champion equity, voice, and leadership in tech." },
  { icon: Sparkles, title: "Student Productivity", desc: "Tools and ideas to help students thrive and focus." },
];

function Tracks() {
  return (
    <section id="tracks" className="relative py-24 sm:py-32">
      <SectionHeading
        eyebrow="Choose Your Path"
        title="Challenge Tracks"
        subtitle="Six magical realms of innovation. Pick the one that calls to you."
      />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {TRACKS.map((t, i) => {
          const Icon = t.icon;
          return (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group magic-border relative overflow-hidden rounded-xl bg-card/60 p-7 backdrop-blur-sm transition-shadow hover:shadow-magic"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/10 blur-3xl transition group-hover:bg-gold/20" />
              <div className="relative">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-lg border border-gold/40 bg-gold/10 text-gold transition group-hover:scale-110">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">{t.title}</h3>
                <p className="mt-2 font-serif text-muted-foreground">{t.desc}</p>
                <p className="mt-4 font-display text-xs uppercase tracking-widest text-gold/60">
                  Track 0{i + 1}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
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
    <section id="schedule" className="relative py-24 sm:py-32">
      <SectionHeading eyebrow="The Night Unfolds" title="Event Schedule" subtitle="Four hours of pure magic." />
      <div className="mx-auto max-w-3xl px-6">
        <div className="parchment-card rounded-2xl p-8 sm:p-12">
          <ol className="space-y-5">
            {SCHEDULE.map((s, i) => (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-4 border-b border-ink/15 pb-5 last:border-0 last:pb-0"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-gold font-display text-sm">
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
        </div>
      </div>
    </section>
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
    <section className="relative py-24 sm:py-32">
      <SectionHeading eyebrow="The Scorecard" title="Judging Criteria" subtitle="How the magic is measured." />
      <div className="mx-auto grid max-w-5xl gap-5 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {CRITERIA.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="magic-border-glow rounded-xl bg-card/60 p-6 backdrop-blur-sm"
          >
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-lg font-semibold text-foreground">{c.label}</h3>
              <span className="font-display text-3xl font-bold text-gold-gradient">{c.pct}%</span>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-midnight">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${c.pct * 4}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: i * 0.08 }}
                className="h-full rounded-full bg-gradient-to-r from-gold to-gold-bright"
              />
            </div>
          </motion.div>
        ))}
        <div className="magic-border flex items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-transparent p-6">
          <div className="text-center">
            <p className="font-serif text-sm uppercase tracking-widest text-gold">Total Score</p>
            <p className="font-display text-5xl font-bold text-gold-gradient">100</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const POINTS = [
  { place: "1st Place", points: 100, color: "from-yellow-500/30" },
  { place: "2nd Place", points: 75, color: "from-slate-400/30" },
  { place: "3rd Place", points: 50, color: "from-amber-700/30" },
  { place: "Participation", points: 10, color: "from-gold/20" },
];

function HouseCup() {
  return (
    <section className="relative py-24 sm:py-32">
      <SectionHeading
        eyebrow="The Glory"
        title="The House Cup"
        subtitle="Earn points. Lift your house. Etch your name in magical history."
      />
      <div className="mx-auto max-w-6xl px-6">
        {/* Trophy hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 flex max-w-md flex-col items-center"
        >
          <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-b from-gold to-gold-bright/40 shadow-magic">
            <Trophy className="h-20 w-20 text-midnight-deep" strokeWidth={1.5} />
            <div className="absolute inset-0 animate-glow rounded-full" />
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map((p, i) => (
            <motion.div
              key={p.place}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`magic-border rounded-xl bg-gradient-to-b ${p.color} to-card/40 p-6 text-center backdrop-blur-sm`}
            >
              <p className="font-display text-sm uppercase tracking-widest text-gold">{p.place}</p>
              <p className="mt-3 font-display text-5xl font-bold text-gold-gradient">{p.points}</p>
              <p className="mt-1 font-serif text-sm text-muted-foreground">House Points</p>
            </motion.div>
          ))}
        </div>

        {/* House leaderboard preview */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {(["lion", "serpent", "badger", "eagle"] as const).map((h, i) => {
            const names = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
            return (
              <motion.div
                key={h}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="magic-border flex flex-col items-center rounded-xl bg-card/40 p-6 backdrop-blur-sm transition hover:shadow-magic"
              >
                <HouseCrest house={h} className="h-16 w-16" />
                <p className="mt-3 font-display text-lg font-semibold text-foreground">{names[i]}</p>
                <p className="mt-1 font-serif text-xs uppercase tracking-widest text-muted-foreground">
                  Awaiting champions
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
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
    <section className="relative py-24 sm:py-32">
      <SectionHeading eyebrow="The Spoils" title="Awards" subtitle="Five trophies. Endless glory." />
      <div className="mx-auto grid max-w-5xl gap-5 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {AWARDS.map((a, i) => {
          const Icon = a.icon;
          return (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6, rotate: -1 }}
              className="group parchment-card flex flex-col items-center rounded-2xl p-8 text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ink text-gold transition group-hover:scale-110">
                <Icon className="h-8 w-8" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">{a.title}</h3>
              <Award className="mt-3 h-5 w-5 text-ink/40" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function Mentors() {
  return (
    <section className="relative py-24 sm:py-32">
      <SectionHeading
        eyebrow="The Council"
        title="Mentors & Judges"
        subtitle="Wise voices from across the wizarding industry."
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl px-6"
      >
        <div className="magic-border-glow rounded-2xl bg-card/40 p-12 text-center backdrop-blur-sm">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 text-gold">
            <Wand2 className="h-8 w-8" />
          </div>
          <h3 className="font-display text-3xl font-semibold text-gold-gradient">
            The Council Awaits
          </h3>
          <p className="mx-auto mt-4 max-w-xl font-serif text-lg text-muted-foreground">
            Our esteemed mentors and judges will be revealed soon. Subscribe by registering early
            — owls will deliver the news straight to your inbox.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

const FAQS = [
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
    <section id="faq" className="relative py-24 sm:py-32">
      <SectionHeading eyebrow="The Oracle Speaks" title="Frequently Asked" />
      <div className="mx-auto max-w-3xl space-y-3 px-6">
        {FAQS.map(([q, a], i) => (
          <motion.div
            key={q}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="magic-border overflow-hidden rounded-xl bg-card/50 backdrop-blur-sm"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-gold/5"
            >
              <span className="font-display text-base font-semibold text-foreground sm:text-lg">{q}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-gold transition-transform ${open === i ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 font-serif text-muted-foreground">{a}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
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
    <section id="register" className="relative py-24 sm:py-32">
      <SectionHeading
        eyebrow="Accept Your Invitation"
        title="Register Now"
        subtitle="The owl is waiting. Claim your seat at Hogwartz Hacks."
      />
      <div className="mx-auto max-w-3xl px-6">
        <div className="parchment-card rounded-2xl p-8 sm:p-12">
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
            <form onSubmit={handleSubmit} className="space-y-5 text-ink">
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
                    <option>Gryffindor</option>
                    <option>Slytherin</option>
                    <option>Hufflepuff</option>
                    <option>Ravenclaw</option>
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
                  <select
                    className="w-full rounded-md border border-ink/30 bg-parchment/60 px-3 py-2.5 font-serif text-ink outline-none focus:border-ink"
                  >
                    <option>No — pair me up</option>
                    <option>Yes</option>
                  </select>
                </div>
                <Field label="Teammate Details" name="teammate" placeholder="Name & email (if any)" />
              </div>

              <div>
                <label className="mb-1.5 block font-display text-xs uppercase tracking-widest text-ink/70">
                  Preferred Challenge Track
                </label>
                <select
                  required
                  className="w-full rounded-md border border-ink/30 bg-parchment/60 px-3 py-2.5 font-serif text-ink outline-none focus:border-ink"
                >
                  <option value="">Pick your magical realm…</option>
                  {TRACKS.map((t) => (
                    <option key={t.title}>{t.title}</option>
                  ))}
                </select>
              </div>

              <label className="flex items-start gap-3 font-serif text-sm italic text-ink">
                <input type="checkbox" required className="mt-1 h-4 w-4 accent-ink" />
                <span>
                  I solemnly swear that I'm up to good magic — I consent to participate and to
                  receive event updates by owl (and email).
                </span>
              </label>

              <Button
                type="submit"
                size="lg"
                className="h-12 w-full font-serif text-base tracking-wide"
              >
                <Sparkles className="h-4 w-4" /> Send My Owl
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
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

function Footer() {
  return (
    <footer className="relative border-t border-gold/20 py-12">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <div className="flex items-center justify-center gap-2 font-display text-lg font-bold tracking-wider text-gold">
          <Wand2 className="h-5 w-5" />
          HOGWARTZ HACKS
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
      <Hero />
      <About />
      <HowItWorks />
      <Tracks />
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
