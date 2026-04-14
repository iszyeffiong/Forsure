import { motion } from "framer-motion";
import { Baby, Sun, BookOpen, GraduationCap, School, Code, Palette, Globe, Beaker, Calculator } from "lucide-react";
import Layout from "@/components/Layout";

const sections = [
  { icon: Baby, label: "Playclass", desc: "Early play-based learning for toddlers, building social skills through fun." },
  { icon: Sun, label: "Daycare", desc: "A safe, loving environment with structured activities for the youngest learners." },
  { icon: BookOpen, label: "Pre-Nursery", desc: "Introduction to letters, numbers, and creative expression." },
  { icon: GraduationCap, label: "Nursery", desc: "Building reading, writing, and critical thinking foundations." },
  { icon: School, label: "Primary", desc: "Comprehensive curriculum preparing students for academic excellence." },
];

const subjects = [
  {
    icon: Code,
    label: "Computer Science",
    desc: "Hands-on experience with the latest programming languages and technology. We have trained IT professionals who work closely with our students so they are prepared for the real world.",
  },
  {
    icon: Palette,
    label: "Fine Arts",
    desc: "Giving wings to the artists who'd like to take it up as a career or just a hobby. Our students are trained by professionals who help them develop, learn and polish their skills while at school.",
  },
  {
    icon: Globe,
    label: "Humanities",
    desc: "The study of ancient and modern languages, philosophy, history, and more. We take pride in offering top humanity courses from a dedicated and trained staff.",
  },
  {
    icon: Beaker,
    label: "Science",
    desc: "The study encourages scientific reasoning, discoveries and inventions. Great teachers and well-equipped laboratories help students explore, discover and experiment new things under the best supervision.",
  },
  {
    icon: Calculator,
    label: "Mathematics",
    desc: "Understanding the game of numbers and logic to solve real world problems. Learn mathematics from scholars and university toppers who not only make it interesting, but also fun to learn.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Academics = () => (
  <Layout>
    <section className="bg-primary/5">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold">
            Our <span className="text-primary">Academics</span>
          </h1>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            We offer a broad and balanced curriculum designed to prepare students for social and academic success.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Class Levels */}
    <section className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card p-8 rounded-2xl shadow-md border hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-5">
              <s.icon className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-heading font-bold mb-2">{s.label}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Curriculum Overview */}
    <section className="bg-warm">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="space-y-6 max-w-4xl mx-auto"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-4">Our Curriculum Overview</h2>
            <h3 className="text-xl font-heading font-bold text-primary mb-4">A Commitment to Excellence</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Champion School aims at offering all our students a broad and balanced curriculum that provides rewarding and stimulating activities to prepare them for the best social and cultural life.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether it is our books or hands-on training, we make sure each student gets personal attention to cope up and flourish in every subject for better scores and a brighter future.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Subjects */}
    <section className="container mx-auto px-4 py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-center mb-12">
        Our <span className="text-primary">Subjects</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {subjects.map((subject, i) => (
          <motion.div
            key={subject.label}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={i}
            className="bg-card p-8 rounded-2xl shadow-md border hover:shadow-xl transition-all group"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-5 group-hover:scale-110 transition-transform">
              <subject.icon className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-heading font-bold mb-3">{subject.label}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{subject.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Academics;
