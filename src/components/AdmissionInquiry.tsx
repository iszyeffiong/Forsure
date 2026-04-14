import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import admissionImg from "@/assets/admission.jpg";

interface AdmissionInquiryProps {
  title?: string;
  subtitle?: string;
}

const AdmissionInquiry = ({ 
  title = "Admission Enrollment", 
  subtitle = "Interested in joining Forsure International Schools? We'd love to hear from you!" 
}: AdmissionInquiryProps) => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }
    toast({ title: "Inquiry sent!", description: "We'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  const whatsappMessage = "Hi, I'm interested in learning more about Forsure International Schools and admission options.";
  const whatsappLink = `https://wa.me/2349055357728?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="bg-warm">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <img
              src={admissionImg}
              alt="Admission Enrollment"
              className="rounded-2xl shadow-xl w-full max-w-sm object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-2">{title}</h2>
              <p className="text-muted-foreground text-lg">{subtitle}</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
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
                placeholder="Tell us about your inquiry..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="rounded-xl min-h-[100px]"
                maxLength={500}
              />
              <Button variant="hero" size="lg" type="submit" className="w-full gap-2">
                <Send className="h-4 w-4" /> Send Inquiry
              </Button>
            </form>

            {/* WhatsApp Button */}
            <div className="pt-2">
              <p className="text-sm text-muted-foreground mb-3 text-center">Or chat with us directly:</p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="w-full gap-2 border-2">
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </Button>
              </a>
            </div>

            {/* Contact Info */}
            <div className="bg-background/50 p-4 rounded-xl border">
              <p className="text-sm font-semibold mb-2">Quick Contact:</p>
              <p className="text-sm text-muted-foreground">
                📞 <a href="tel:07034865342" className="hover:text-primary">0703 486 5342</a> | 
                <a href="mailto:forsureinternationalschools@gmail.com" className="hover:text-primary"> forsureinternationalschools@gmail.com</a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionInquiry;
