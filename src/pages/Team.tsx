import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Facebook, Instagram, User } from "lucide-react";
import Layout from "@/components/Layout";

const staffImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23e5e7eb' width='200' height='200'/%3E%3Ccircle cx='100' cy='60' r='35' fill='%23d1d5db'/%3E%3Cpath d='M 60 120 Q 60 90 100 90 Q 140 90 140 120 L 140 180 Q 140 200 100 200 Q 60 200 60 180 Z' fill='%23d1d5db'/%3E%3C/svg%3E";

interface StaffMember {
  id: string;
  name: string;
  position: string;
  image: string;
  about: string;
  facebook: string;
  instagram: string;
  category: "Administrative" | "Class Teacher" | "Subject Teacher" | "General Staff";
}

const staffMembers: StaffMember[] = [
  // Administrative Staff
  {
    id: "admin1",
    name: "Mrs. Amina Hussein",
    position: "Principal",
    image: staffImage,
    about: "Dedicated educator with 15 years of experience in school administration and curriculum development.",
    facebook: "#",
    instagram: "#",
    category: "Administrative",
  },
  {
    id: "admin2",
    name: "Mr. Chukwu Okonkwo",
    position: "Vice Principal",
    image: staffImage,
    about: "Senior administrator focused on student welfare and academic excellence.",
    facebook: "#",
    instagram: "#",
    category: "Administrative",
  },
  {
    id: "admin3",
    name: "Mrs. Ngozi Ubah",
    position: "Academic Coordinator",
    image: staffImage,
    about: "Passionate about curriculum planning and teacher development.",
    facebook: "#",
    instagram: "#",
    category: "Administrative",
  },
  {
    id: "admin4",
    name: "Mr. David Edoh",
    position: "Operations Manager",
    image: staffImage,
    about: "Ensures smooth daily operations and maintenance of school facilities.",
    facebook: "#",
    instagram: "#",
    category: "Administrative",
  },
  {
    id: "admin5",
    name: "Mrs. Zainab Ali",
    position: "Admissions Officer",
    image: staffImage,
    about: "Welcomes new families and coordinates the admissions process.",
    facebook: "#",
    instagram: "#",
    category: "Administrative",
  },
  {
    id: "admin6",
    name: "Mr. Victor Osaze",
    position: "Finance Manager",
    image: staffImage,
    about: "Manages school finances and budgeting with meticulous attention to detail.",
    facebook: "#",
    instagram: "#",
    category: "Administrative",
  },
  {
    id: "admin7",
    name: "Mrs. Chioma Nwosu",
    position: "HR Coordinator",
    image: staffImage,
    about: "Oversees staff recruitment and professional development programs.",
    facebook: "#",
    instagram: "#",
    category: "Administrative",
  },
  {
    id: "admin8",
    name: "Mr. Sunday Eze",
    position: "ICT Manager",
    image: staffImage,
    about: "Manages school technology infrastructure and digital learning systems.",
    facebook: "#",
    instagram: "#",
    category: "Administrative",
  },

  // Class Teachers
  {
    id: "class1",
    name: "Mrs. Grace Kalu",
    position: "Class Teacher - Playclass A",
    image: staffImage,
    about: "Nurturing and caring educator specializing in early childhood development.",
    facebook: "#",
    instagram: "#",
    category: "Class Teacher",
  },
  {
    id: "class2",
    name: "Mr. Tunde Ajayi",
    position: "Class Teacher - Playclass B",
    image: staffImage,
    about: "Passionate about fostering creativity and social-emotional skills.",
    facebook: "#",
    instagram: "#",
    category: "Class Teacher",
  },
  {
    id: "class3",
    name: "Miss. Amara Edet",
    position: "Class Teacher - Primary 1A",
    image: staffImage,
    about: "Dedicated to building strong literacy and numeracy foundations.",
    facebook: "#",
    instagram: "#",
    category: "Class Teacher",
  },
  {
    id: "class4",
    name: "Mrs. Folashade Adewale",
    position: "Class Teacher - Primary 1B",
    image: staffImage,
    about: "Creating inclusive learning environment where every child thrives.",
    facebook: "#",
    instagram: "#",
    category: "Class Teacher",
  },

  // Subject Teachers
  {
    id: "subject1",
    name: "Mrs. Onyeka Okafor",
    position: "English Language Teacher",
    image: staffImage,
    about: "Enthusiastic educator fostering love for literature and communication skills.",
    facebook: "#",
    instagram: "#",
    category: "Subject Teacher",
  },
  {
    id: "subject2",
    name: "Mr. Emeka Ikegbu",
    position: "Mathematics Teacher",
    image: staffImage,
    about: "Making mathematics engaging and accessible for all learners.",
    facebook: "#",
    instagram: "#",
    category: "Subject Teacher",
  },
  {
    id: "subject3",
    name: "Mrs. Adebowale Jumoke",
    position: "Science Teacher",
    image: staffImage,
    about: "Inspiring scientific curiosity through hands-on experimentation.",
    facebook: "#",
    instagram: "#",
    category: "Subject Teacher",
  },
  {
    id: "subject4",
    name: "Mr. Kunle Oladipo",
    position: "Social Studies Teacher",
    image: staffImage,
    about: "Helping students understand society and culture through critical thinking.",
    facebook: "#",
    instagram: "#",
    category: "Subject Teacher",
  },
  {
    id: "subject5",
    name: "Mrs. Uche Okoro",
    position: "Creative Arts Teacher",
    image: staffImage,
    about: "Encouraging self-expression and creativity through visual arts.",
    facebook: "#",
    instagram: "#",
    category: "Subject Teacher",
  },
  {
    id: "subject6",
    name: "Mr. Jabari Mensah",
    position: "Music Teacher",
    image: staffImage,
    about: "Fostering musical talent and appreciation for performing arts.",
    facebook: "#",
    instagram: "#",
    category: "Subject Teacher",
  },
  {
    id: "subject7",
    name: "Mrs. Blessing Okonkwo",
    position: "Physical Education Teacher",
    image: staffImage,
    about: "Promoting health, fitness, and team-building through sports.",
    facebook: "#",
    instagram: "#",
    category: "Subject Teacher",
  },
  {
    id: "subject8",
    name: "Mr. Chinedu Akpan",
    position: "ICT Teacher",
    image: staffImage,
    about: "Equipping students with essential digital skills for the future.",
    facebook: "#",
    instagram: "#",
    category: "Subject Teacher",
  },

  // General Staff
  {
    id: "general1",
    name: "Mrs. Ama Asante",
    position: "School Nurse",
    image: staffImage,
    about: "Caring for the health and wellbeing of all students.",
    facebook: "#",
    instagram: "#",
    category: "General Staff",
  },
  {
    id: "general2",
    name: "Mr. Joseph Obi",
    position: "Head Gardener",
    image: staffImage,
    about: "Maintaining beautiful gardens and green spaces for learning.",
    facebook: "#",
    instagram: "#",
    category: "General Staff",
  },
  {
    id: "general3",
    name: "Mrs. Abigail Mensah",
    position: "Cafeteria Manager",
    image: staffImage,
    about: "Providing nutritious and delicious meals for our students.",
    facebook: "#",
    instagram: "#",
    category: "General Staff",
  },
  {
    id: "general4",
    name: "Mr. Samuel Opara",
    position: "Security Officer",
    image: staffImage,
    about: "Ensuring safe and secure environment for all.",
    facebook: "#",
    instagram: "#",
    category: "General Staff",
  },
  {
    id: "general5",
    name: "Mrs. Patience Musa",
    position: "School Secretary",
    image: staffImage,
    about: "Handling administrative tasks with professionalism and efficiency.",
    facebook: "#",
    instagram: "#",
    category: "General Staff",
  },
  {
    id: "general6",
    name: "Mr. Yusuf Adebayo",
    position: "Driver",
    image: staffImage,
    about: "Safely transporting students to and from school.",
    facebook: "#",
    instagram: "#",
    category: "General Staff",
  },
  {
    id: "general7",
    name: "Mrs. Zainab Hassan",
    position: "Cleaner",
    image: staffImage,
    about: "Maintaining clean and hygienic school premises.",
    facebook: "#",
    instagram: "#",
    category: "General Staff",
  },
  {
    id: "general8",
    name: "Mr. Kwesi Boateng",
    position: "Maintenance Staff",
    image: staffImage,
    about: "Ensuring all school facilities are well-maintained.",
    facebook: "#",
    instagram: "#",
    category: "General Staff",
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

const Team = () => {
  const [selectedStaff, setSelectedStaff] = useState<StaffMember | null>(null);

  const categories = ["Administrative", "Class Teacher", "Subject Teacher", "General Staff"];

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
              Our <span className="text-primary">Team</span>
            </h1>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Meet the dedicated educators and staff making Madonna International Schools special
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Sections */}
      {categories.map((category, sectionIdx) => {
        const categoryStaff = staffMembers.filter((s) => s.category === category);
        const isClassTeacher = category === "Class Teacher";

        return (
          <section key={category} className={sectionIdx % 2 === 0 ? "bg-background" : "bg-warm"}>
            <div className="container mx-auto px-4 py-16 md:py-24">
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-center mb-12">
                {category}
              </h2>

              <div
                className={`grid gap-6 grid-cols-2 md:grid-cols-4`}
              >
                {categoryStaff.map((staff, i) => (
                  <motion.div
                    key={staff.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={i}
                    className="cursor-pointer group"
                    onClick={() => setSelectedStaff(staff)}
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all">
                      <img
                        src={staff.image}
                        alt={staff.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <h3 className="font-heading font-bold text-white text-sm">{staff.name}</h3>
                        <p className="text-xs text-sunshine">{staff.position}</p>
                      </div>
                    </div>
                    <div className="mt-3 text-center">
                      <h3 className="font-heading font-bold text-sm line-clamp-2">{staff.name}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-1">{staff.position}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Staff Profile Modal */}
      <AnimatePresence>
        {selectedStaff && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedStaff(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-background rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
                {/* Image */}
                <div className="relative">
                  <img
                    src={selectedStaff.image}
                    alt={selectedStaff.name}
                    className="rounded-xl w-full h-auto object-cover"
                  />
                  <button
                    onClick={() => setSelectedStaff(null)}
                    className="absolute top-2 right-2 p-2 bg-white rounded-full hover:bg-gray-200 transition-colors shadow-lg"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center space-y-4">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-foreground">
                      {selectedStaff.name}
                    </h2>
                    <p className="text-sunshine text-lg font-heading font-bold">
                      {selectedStaff.position}
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {selectedStaff.about}
                  </p>

                  <div className="flex gap-3 pt-4">
                    {selectedStaff.facebook !== "#" && (
                      <a
                        href={selectedStaff.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="p-3 bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                    )}
                    {selectedStaff.instagram !== "#" && (
                      <a
                        href={selectedStaff.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="p-3 bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                    )}
                  </div>

                  <div className="text-sm text-muted-foreground pt-4 border-t">
                    <p>Click the social icons above to connect on social media</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Team;
