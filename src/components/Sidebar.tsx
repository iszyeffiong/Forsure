import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, X, Menu, FileText, Search, Briefcase, Users } from "lucide-react";

const menuItems = [
  {
    icon: FileText,
    label: "2025/2026 Enrollment",
    href: "https://form.jotform.com/220862516457560",
  },
  {
    icon: Search,
    label: "Result Checker",
    href: "https://www.cloudnotte.com/result-checker",
  },
  {
    icon: Users,
    label: "School Information System",
    href: "https://cloudnotte.com/mic",
  },
  {
    icon: Briefcase,
    label: "Careers",
    href: "https://madonna.easy.jobs/7952-teacher",
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed left-4 top-20 z-40 p-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-all shadow-lg ${isOpen ? 'hidden' : 'block'}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Menu className="h-6 w-6" />
      </motion.button>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop - Only on mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 z-30 md:hidden"
            />

            {/* Sidebar Panel */}
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed left-0 top-16 w-64 bg-background border-r shadow-xl z-40 rounded-br-2xl h-auto"
            >
              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-bold text-lg text-primary">
                    Quick Links
                  </h3>
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-1 hover:bg-primary/10 rounded-lg transition-colors"
                  >
                    <X className="h-5 w-5 text-primary" />
                  </motion.button>
                </div>
                <div className="space-y-2">
                  {menuItems.map((item) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/5 text-foreground hover:bg-primary/10 transition-colors group"
                      whileHover={{ x: 5 }}
                    >
                      <item.icon className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium flex-1">{item.label}</span>
                      <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
