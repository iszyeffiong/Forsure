import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent!", description: "We'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <section className="bg-primary/5">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="mt-4 text-muted-foreground text-lg">
              We'd love to hear from you. Reach out with any questions or to schedule a visit.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
            <h2 className="text-2xl font-heading font-bold">Contact Information</h2>
            <div className="space-y-6">
              {[
                { icon: MapPin, label: "Address", value: "# 1 MADONNA COLLEGE WAY BEHIND N.T.A ASABA, DELTA STATE" },
                { icon: Phone, label: "Phone", value: "+2348038785226 +2348033362933" },
                { icon: Mail, label: "Email", value: "admin@micasaba.com.ng" },
              ].map((c) => (
                <div key={c.label} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-sm">{c.label}</div>
                    <div className="text-muted-foreground text-sm">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-card p-8 rounded-2xl shadow-lg border space-y-5"
          >
            <h2 className="text-2xl font-heading font-bold">Send a Message</h2>
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="rounded-xl"
              maxLength={100}
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="rounded-xl"
              maxLength={255}
            />
            <Textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="rounded-xl min-h-[120px]"
              maxLength={1000}
            />
            <Button variant="hero" size="lg" type="submit" className="w-full gap-2">
              <Send className="h-4 w-4" /> Send Message
            </Button>
          </motion.form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
