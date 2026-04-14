import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Trophy, Newspaper, Music, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedCounter from "@/components/AnimatedCounter";
import HeroSlider from "@/components/HeroSlider";
import schoolImg from "@/assets/school-building.jpg";
import ictImg from "@/assets/ict.jpeg";
import ccaImg from "@/assets/Cultural & Creative Arts.jpeg";
import humanitiesImg from "@/assets/Humanities.jpeg";
import scienceImg from "@/assets/Science.jpeg";
import agriImg from "@/assets/Agricultural Science.jpeg";
import foodImg from "@/assets/Food and Nutrition.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const curriculum = [
  { image: ictImg, label: "ICT", description: "Equipping students with digital literacy and technology skills for the modern world." },
  { image: ccaImg, label: "Cultural & Creative Arts", description: "Fostering creativity and cultural appreciation through art, music, and performances." },
  { image: humanitiesImg, label: "Humanities", description: "Exploring history, languages, and social sciences to develop critical thinking." },
  { image: scienceImg, label: "Science", description: "Building scientific knowledge through hands-on experiments and practical learning." },
  { image: agriImg, label: "Agricultural Science", description: "Teaching sustainable farming and agricultural practices for environmental awareness." },
  { image: foodImg, label: "Food & Nutrition", description: "Developing culinary skills and nutritional knowledge for healthy living." },
];

const activities = [
  { icon: Trophy, label: "Athletics" },
  { icon: Newspaper, label: "In-house Publications" },
  { icon: Music, label: "Performing Arts & Music" },
];

const Index = () => (
  <Layout>
    <HeroSlider />

    {/* About Preview */}
    <section className="bg-warm">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <img
              src={schoolImg}
              alt="Madonna International School building"
              className="rounded-2xl shadow-xl"
              loading="lazy"
              width={1280}
              height={720}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="space-y-5"
          >
            <span className="text-sm font-bold text-primary uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground">
              Nurturing <span className="text-primary">Young Minds</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We are an early learning academy focused on social-emotional development, literacy, and numeracy. We raise confident and creative thinkers.
            </p>
            <Link to="/about">
              <Button variant="hero" className="mt-2 gap-2">
                Read More <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
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
            { end: 700, suffix: "+", label: "Happy Students" },
            { end: 200, suffix: "+", label: "Active PTA Members" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <AnimatedCounter end={s.end} suffix={s.suffix} label={s.label} />
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Quote */}
    <section className="bg-section-alt">
      <div className="container mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Quote className="h-10 w-10 text-sunshine mx-auto mb-4" />
          <blockquote className="text-xl md:text-2xl font-heading font-bold text-foreground max-w-3xl mx-auto italic leading-relaxed">
            "We aim at inspiring our students to dream more, learn more, do more, and become more."
          </blockquote>
        </motion.div>
      </div>
    </section>

    {/* Curriculum */}
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <span className="text-sm font-bold text-primary uppercase tracking-wider">What We Teach</span>
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold mt-2">
          Our <span className="text-primary">Curriculum</span>
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {curriculum.map((c, i) => (
          <motion.div
            key={c.label}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={i}
            className="bg-card p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow border text-center group overflow-hidden"
          >
            <div className="mb-4 overflow-hidden rounded-lg h-64 group-hover:scale-110 transition-transform duration-300">
              <img
                src={c.image}
                alt={c.label}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">{c.label}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{c.description}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Activities */}
    <section className="bg-warm">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <span className="text-sm font-bold text-primary uppercase tracking-wider">Beyond the Classroom</span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mt-2">
            Exciting <span className="text-sunshine">Activities</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {activities.map((a, i) => (
            <motion.div
              key={a.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="bg-card p-8 rounded-2xl shadow-md text-center hover:shadow-xl hover:-translate-y-1 transition-all border"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <a.icon className="h-8 w-8" />
              </div>
              <h3 className="font-heading font-bold text-lg">{a.label}</h3>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/activities">
            <Button variant="hero" size="lg" className="gap-2">
              View All Activities <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
