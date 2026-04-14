import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import schoolImg from "@/assets/school-building.jpg";

const values = [
  "Strong academic foundations",
  "Confidence and creativity",
  "Social-emotional development",
  "Real-world skills",
  "Literacy and numeracy",
  "Safe and nurturing environment",
];

const About = () => (
  <Layout>
    <section className="bg-primary/5">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold">
            About <span className="text-primary">Us</span>
          </h1>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Discover what makes Madonna International Schools a special place for every child.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src={schoolImg}
          alt="School campus"
          className="rounded-2xl shadow-xl"
          loading="lazy"
          width={1280}
          height={720}
        />
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <h2 className="text-3xl font-heading font-extrabold">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            Madonna International School provides a nurturing and inspiring environment for children. We focus on building strong academic foundations while developing confidence, creativity, and real-world skills.
          </p>
          <div className="grid gap-3 mt-6">
            {values.map((v) => (
              <div key={v} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                <span className="font-medium">{v}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default About;
