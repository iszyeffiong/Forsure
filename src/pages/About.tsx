import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import schoolImg from "@/assets/school-building.jpg";
import AnimatedCounter from "@/components/AnimatedCounter";

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
            Madonna International Schools Asaba
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
            We, at Madonna International School offer supportive and inspirational environments for young enquiring minds to learn and grow with us. Our passion for learning means we achieve more than outstanding results. We strive to build confident and creative thinkers and aim at delivering an education that is truly relevant to their future.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We are an early learning academy focused on social-emotional development and early literacy and numeracy. Our students walk out with the character and confidence to make their mark in the world, equipped with the knowledge and real-world skills that take them way ahead in the industry they may serve.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Community & Leadership */}
    <section className="bg-warm">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <img
              src="/Late Prof. B.I.C. Ijomah- Founder.jpg"
              alt="Late Prof. B.I.C. Ijomah - Founder"
              className="rounded-2xl shadow-xl w-full max-w-sm object-cover"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold">Our Community</h2>
            <p className="text-muted-foreground leading-relaxed">
              We strive to be committed to the students we are privileged to serve, in our alumni association, our dedicated, talented faculty and staff. We also take pride in having the most active and helpful group of partners, visionary parents, well-wishers, alumni and friends.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-lg font-heading text-foreground">
              "Everyday at Madonna International School is like a blessing with the active students and talented staff members around."
            </blockquote>
            <div className="pt-4">
              <p className="text-lg font-heading font-bold text-primary">Late Prof. B.I.C. Ijomah</p>
              <p className="text-muted-foreground">Founder</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

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
            Our mission at Madonna International Schools is to develop the unique abilities and potential of each child by offering an enriched educational program. We strive for excellence through a hands-on approach. Rich traditions rooted in our innovative curriculum grow productive, caring, and intellectually curious citizens.
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
            We, at Madonna International School, follow a child-centered educational approach. We make sure that it is based on scientific observations from birth to adulthood. We believe that a child is naturally curious and is capable of initiating learning in a supportive and thoughtfully prepared environment.
          </p>
        </div>
      </motion.div>
    </section>
  </Layout>
);

export default About;
