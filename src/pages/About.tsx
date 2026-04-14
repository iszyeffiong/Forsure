import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedCounter from "@/components/AnimatedCounter";
import AdmissionInquiry from "@/components/AdmissionInquiry";
import schoolImg from "@/assets/school-building.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const About = () => (
  <Layout>
    {/* Header */}
    <section className="bg-primary/5">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold">
            About <span className="text-primary">Us</span>
          </h1>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Forsure International Schools, Uyo
          </p>
        </motion.div>
      </div>
    </section>

    {/* Introduction */}
    <section className="container mx-auto px-4 py-16 md:py-24">
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
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold">Who We Are</h2>
          <p className="text-muted-foreground leading-relaxed">
            At Forsure International Schools, we offer supportive and inspirational environments for young enquiring minds to learn and grow with us. We provide quality education from Creche through Secondary levels. Our passion for learning means we achieve more than outstanding results. We strive to build confident and creative thinkers and aim at delivering an education that is truly relevant to their future.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We are a comprehensive learning institution focused on social-emotional development, early literacy, numeracy, and holistic child development. Our students walk out with the character and confidence to make their mark in the world, equipped with the knowledge and real-world skills that take them way ahead in the industry they may serve.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Admission Inquiry */}
    <AdmissionInquiry 
      title="Join Our Community"
      subtitle="Start your child's educational journey with Forsure International Schools today."
    />

    {/* Stats */}
    <section className="bg-primary">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { end: 10, suffix: "+", label: "Years in Operation" },
            { end: 60, suffix: "+", label: "Awards" },
            { end: 700, suffix: "+", label: "Happy Clients" },
            { end: 200, suffix: "+", label: "Active P.T.A Members" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <AnimatedCounter end={s.end} suffix={s.suffix} label={s.label} />
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Mission */}
    <section className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0}
        className="space-y-6 max-w-3xl"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-4">Mission Statement</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our mission at Forsure International Schools is to develop the unique abilities and potential of each child by offering enriched educational programs across all levels from Creche to Secondary. We strive for excellence through innovative, hands-on approaches that cultivate productive, caring, and intellectually curious global citizens prepared for the challenges of tomorrow.
          </p>
        </div>
      </motion.div>
    </section>

    {/* Core Values */}
    <section className="bg-section-alt">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="space-y-6 max-w-3xl"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground leading-relaxed">
              We have a culture that is modern, relevant, and inspires students to have a brighter future. We are determined in our approach to learning, are creative in our thinking, and bold in our ambitions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Philosophy */}
    <section className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0}
        className="space-y-6 max-w-3xl"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-4">Our Philosophy</h2>
          <p className="text-muted-foreground leading-relaxed">
            At Forsure International Schools, we follow a child-centered educational approach grounded in scientific observations and developmental psychology from early years through adolescence. We believe that every child is naturally curious and capable of initiating learning when placed in a supportive and thoughtfully prepared environment that nurtures both academic and social-emotional growth.
          </p>
        </div>
      </motion.div>
    </section>
  </Layout>
);

export default About;
