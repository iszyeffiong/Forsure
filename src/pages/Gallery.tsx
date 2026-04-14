import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Layout from "@/components/Layout";

// Import all gallery images
import img1 from "@/assets/gallery/65.jpg";
import img2 from "@/assets/gallery/art work.jpg";
import img3 from "@/assets/gallery/art work2.jpg";
import img4 from "@/assets/gallery/class room.jpg";
import img5 from "@/assets/gallery/egg hunt.jpg";
import img6 from "@/assets/gallery/excursion to the airport.jpg";
import img7 from "@/assets/gallery/excursion to the airport1.jpg";
import img8 from "@/assets/gallery/excursion to the airport2.jpg";
import img9 from "@/assets/gallery/excursion.jpg";
import img10 from "@/assets/gallery/excursion2.jpg";
import img11 from "@/assets/gallery/excursion3.jpg";
import img12 from "@/assets/gallery/game day.jpg";
import img13 from "@/assets/gallery/lab room.jpg";

const galleryImages = [
  { src: img1, alt: "School activities", category: "Activities" },
  { src: img2, alt: "Art work showcase", category: "Arts" },
  { src: img3, alt: "Creative artwork", category: "Arts" },
  { src: img4, alt: "Classroom session", category: "Academics" },
  { src: img5, alt: "Egg hunt event", category: "Activities" },
  { src: img6, alt: "Excursion to airport", category: "Excursions" },
  { src: img7, alt: "Airport visit", category: "Excursions" },
  { src: img8, alt: "Airport excursion", category: "Excursions" },
  { src: img9, alt: "School excursion", category: "Excursions" },
  { src: img10, alt: "Field trip", category: "Excursions" },
  { src: img11, alt: "Excursion moment", category: "Excursions" },
  { src: img12, alt: "Game day event", category: "Activities" },
  { src: img13, alt: "Science lab", category: "Academics" },
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

  const categories = ["All", "Activities", "Arts", "Academics", "Excursions"];
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
              Explore moments of learning, growth, and joy at Forsure International Schools
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
