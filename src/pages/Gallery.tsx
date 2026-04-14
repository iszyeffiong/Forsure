import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-children.jpg";
import schoolImg from "@/assets/school-building.jpg";
import heroSlide2 from "@/assets/hero-slide2.jpg";

const galleryImages = [
  { src: heroImg, alt: "Students learning", category: "Students" },
  { src: schoolImg, alt: "School building", category: "Environment" },
  { src: heroSlide2, alt: "School activities", category: "Activities" },
  { src: heroImg, alt: "Classroom session", category: "Students" },
  { src: schoolImg, alt: "School grounds", category: "Environment" },
  { src: heroSlide2, alt: "School event", category: "Activities" },
  { src: heroImg, alt: "Student engagement", category: "Students" },
  { src: schoolImg, alt: "School infrastructure", category: "Environment" },
  { src: heroSlide2, alt: "Cultural activities", category: "Activities" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Students", "Environment", "Activities"];
  const filteredImages =
    filter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary/5">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold">
              Our <span className="text-primary">Gallery</span>
            </h1>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Explore moments of learning, growth, and joy at Madonna International Schools
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === cat
                  ? "bg-primary text-white shadow-lg"
                  : "bg-muted text-foreground hover:bg-primary/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="group cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow"
              onClick={() => setSelectedImage(img.src)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative max-w-4xl w-full"
          >
            <img
              src={selectedImage}
              alt="Gallery"
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-gray-200 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </Layout>
  );
};

export default Gallery;
