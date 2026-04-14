import { motion } from "framer-motion";
import { Trophy, Palette, Newspaper, Gamepad2 } from "lucide-react";
import Layout from "@/components/Layout";

const items = [
  { icon: Trophy, label: "Sports and Athletics", desc: "Competitive and recreational sports that build teamwork, discipline, and physical fitness." },
  { icon: Palette, label: "Creative Arts and Music", desc: "Expression through visual arts, dance, drama, and musical instruments." },
  { icon: Newspaper, label: "Student Publications", desc: "In-house newspapers and magazines where students develop writing and editorial skills." },
  { icon: Gamepad2, label: "Interactive Learning Activities", desc: "Hands-on projects, science fairs, and educational games that make learning exciting." },
];

const coActivities = [
  {
    icon: Trophy,
    label: "Athletics",
    desc: "Our students are passionate about sports and athletics and have the freedom to choose the one they like and wish to take up. We also participate in inter-school, district, state and national level competitions.",
  },
  {
    icon: Newspaper,
    label: "In-house Publications",
    desc: "We have several writers who are encouraged to come up with creations that are regularly published in our in-house magazines. We host a book sale every 2 years to promote our writers and their work.",
  },
  {
    icon: Palette,
    label: "Performing Arts & Music",
    desc: "With professionals on board, we take pride in training our students in art forms like dance, drama, painting and more. We organize exhibitions, concerts and musical events to encourage our students to own their talent and flourish in those fields.",
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

const Activities = () => (
  <Layout>
    <section className="bg-primary/5">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold">
            Our <span className="text-sunshine">Activities</span>
          </h1>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Beyond the classroom — enriching experiences that develop well-rounded individuals.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-8">
        {items.map((a, i) => (
          <motion.div
            key={a.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex gap-5 bg-card p-8 rounded-2xl shadow-md border hover:shadow-xl transition-shadow"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-sunshine/20 text-sunshine shrink-0">
              <a.icon className="h-7 w-7" />
            </div>
            <div>
              <h3 className="text-lg font-heading font-bold mb-2">{a.label}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Co-curricular Activities */}
    <section className="bg-warm">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-center mb-12">
          Co-curricular <span className="text-primary">Activities</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {coActivities.map((activity, i) => (
            <motion.div
              key={activity.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="bg-card p-8 rounded-2xl shadow-md border hover:shadow-xl transition-all group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-5 group-hover:scale-110 transition-transform">
                <activity.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">{activity.label}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{activity.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Activities;
