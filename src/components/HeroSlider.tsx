import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-children.jpg";
import heroSlide2 from "@/assets/hero-slide2.jpg";
import heroSlide3 from "@/assets/hero-slide3.jpg";

const typingVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.3,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

const slides = [
  {
    type: "video" as const,
    src: "https://videos.pexels.com/video-files/8363029/8363029-uhd_2560_1440_25fps.mp4",
    heading: "Learning Begins",
    highlight: "With Us",
    description: "A supportive and inspiring environment for young minds to grow, learn, and thrive.",
  },
  {
    type: "image" as const,
    src: heroImg,
    heading: "Nurturing",
    highlight: "Young Minds",
    description: "Building strong academic foundations while developing confidence and creativity.",
  },
  {
    type: "image" as const,
    src: heroSlide2,
    heading: "Discover Your",
    highlight: "Potential",
    description: "We empower students to dream more, learn more, and become more every day.",
  },
];

const HeroSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative overflow-hidden">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((slide, i) => (
            <div key={i} className="min-w-0 shrink-0 grow-0 basis-full relative">
              <div className="relative h-[70vh] min-h-[400px] md:min-h-[500px]">
                {slide.type === "video" ? (
                  <video
                    src={slide.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={slide.src}
                    alt={`${slide.heading} ${slide.highlight}`}
                    className="w-full h-full object-cover"
                    width={1920}
                    height={1080}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
                <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-4">
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7 }}
                      className="max-w-2xl"
                    >
                      <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading font-extrabold text-background leading-tight">
                        {slide.heading}{" "}
                        {i === 0 ? (
                          <motion.span
                            className="text-sunshine inline-block"
                            variants={typingVariants}
                            initial="hidden"
                            animate="visible"
                          >
                            {slide.highlight.split("").map((char, idx) => (
                              <motion.span key={idx} variants={letterVariants}>
                                {char}
                              </motion.span>
                            ))}
                          </motion.span>
                        ) : (
                          <span className="text-sunshine">{slide.highlight}</span>
                        )}
                      </h1>
                      <p className="mt-4 text-sm sm:text-base md:text-lg text-background/80 max-w-lg leading-relaxed">
                        {slide.description}
                      </p>
                      <div className="mt-6 md:mt-8 flex flex-wrap gap-3 md:gap-4">
                        <Link to="/about">
                          <Button variant="sunshine" size="lg">Learn More</Button>
                        </Link>
                        <Link to="/contact">
                          <Button
                            variant="hero-outline"
                            size="lg"
                            className="border-background text-foreground hover:bg-background hover:text-foreground"
                          >
                            Enroll Now
                          </Button>
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === selectedIndex ? "bg-sunshine scale-125" : "bg-background/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
