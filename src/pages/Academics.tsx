import { motion } from "framer-motion";
import { Baby, Sun, BookOpen, GraduationCap, School } from "lucide-react";
import Layout from "@/components/Layout";

const sections = [
  { icon: Baby, label: "Playclass", desc: "Early play-based learning for toddlers, building social skills through fun." },
  { icon: Sun, label: "Daycare", desc: "A safe, loving environment with structured activities for the youngest learners." },
  { icon: BookOpen, label: "Pre-Nursery", desc: "Introduction to letters, numbers, and creative expression." },
  { icon: GraduationCap, label: "Nursery", desc: "Building reading, writing, and critical thinking foundations." },
  { icon: School, label: "Primary", desc: "Comprehensive curriculum preparing students for academic excellence." },
];

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
  </Layout>
);

export default Academics;
