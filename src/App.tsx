import { useState, useEffect } from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code,
  Smartphone,
  Cpu,
  Zap,
  ExternalLink,
  // Download,
  Menu,
  X,
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    {
      category: "Web Development",
      icon: <Code className="w-8 h-8" />,
      technologies: [
        "React",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      category: "Mobile Development",
      icon: <Smartphone className="w-8 h-8" />,
      technologies: [
        "Flutter",
        "Dart",
        "Mobile UI/UX",
        "Cross-platform Development",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      category: "Embedded Systems",
      icon: <Cpu className="w-8 h-8" />,
      technologies: [
        "C/C++",
        "Arduino",
        "Raspberry Pi",
        "IoT",
        "Microcontrollers",
      ],
      color: "from-purple-500 to-violet-500",
    },
    {
      category: "PCB Design",
      icon: <Zap className="w-8 h-8" />,
      technologies: ["KiCad", "Circuit Design", "Hardware Testing"],
      color: "from-orange-500 to-red-500",
    },
  ];

  const projects = [
    {
      title: "Smart Dual traffic light",
      description:
        "Complete IoT solution with custom PCB design, embedded firmware for automated Traffic control.",
      technologies: [, "C++", "PCB Design", "IoT"],
      category: "Hardware",
      image: "🏠",
      link: "https://www.tinkercad.com/things/k9NJElqFut8-dual-traffic-light?sharecode=8SFkZ8YoZ04bjC9KBW984uiPeEEetq4BGG5R4mVk11Q",
    },
    {
      title: "Home alarm system",
      description:
        "Simple alarm system with custom PCB for movement detection within a restricted area.",
      technologies: [, "C++", "PCB Design", "IoT"],
      category: "Hardware",
      image: "🏠",
      link: "https://www.tinkercad.com/things/eLewSxQPeZO-home-alarm-system?sharecode=dZnAMlFkhhsbygbNlEP-yLWENWN9MQoYM2V7jTOA0ME",
    },
    {
      title: "AFG Landing Page",
      description:
        "A beautifully designed landing page for an organization using React and TailwindCSS.",
      technologies: ["React", "TailwindCSS"],
      link: "https://afg-xe54.vercel.app/",
      category: "Webpage",
      image: "❤️",
      // github: "https://github.com/Tomide223/AFG",
    },
    {
      title: "Industrial Control System",
      description:
        "Robust embedded system for industrial automation with real-time monitoring and Flutter-based operator interface.",
      technologies: ["Embedded Systems", "Flutter", "Real-time OS"],
      category: "Industrial",
      image: "🏭",
      link: "#",
    },
    {
      title: "E-commerce Mobile App",
      description:
        "Cross-platform mobile application built with Flutter, featuring modern UI and seamless shopping experience.",
      technologies: ["Flutter", "Dart", "Firebase", "API Integration"],
      category: "Mobile App",
      image: "🛒",
      link: "#",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize transition-colors ${
                      activeSection === item
                        ? "text-blue-400"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left px-4 py-2 capitalize text-gray-300 hover:text-white hover:bg-gray-800 rounded"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div
          className={`text-center z-10 max-w-4xl mx-auto px-4 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ayomide Akintomide
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Bridging Hardware & Software | React • Flutter • Embedded Systems •
            PCB Design
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/Tomide223/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="akintomideayomide88@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-8 h-8" />
            </a>
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce"
          >
            <ChevronDown className="w-8 h-8 text-blue-400" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6">
                I'm a passionate Computer Engineer with expertise spanning from
                low-level hardware design to modern web and mobile applications.
                My unique combination of skills allows me to create
                comprehensive solutions that bridge the gap between hardware and
                software.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                With experience in PCB design, embedded systems programming, and
                frontend development, I bring a holistic approach to engineering
                challenges. Whether it's designing custom circuits, developing
                IoT solutions, or building user-friendly mobile apps, I thrive
                on creating innovative solutions.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                {" "}
                I’m a passionate frontend developer who crafts clean,
                interactive user interfaces using React and Flutter. With a
                solid grounding in faith and a commitment to excellence, I
                approach every project as an opportunity to build with purpose
                and impact lives through code.
              </p>
              <div className="flex items-center space-x-4 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>Lagos, Nigeria</span>
              </div>
              <button className="mt-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:scale-105 transition-transform">
                Download Resume
              </button>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                Quick Facts
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Experience</span>
                  <span className="text-blue-400">3 Years</span>
                </div>
                <div className="flex justify-between">
                  <span>Projects Completed</span>
                  <span className="text-blue-400">5+</span>
                </div>
                <div className="flex justify-between">
                  <span>Specialization</span>
                  <span className="text-blue-400">Frontend dev + Hardware</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-gray-800 p-6 rounded-lg h-full border border-gray-700 hover:border-gray-600">
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 text-white`}
                  >
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">
                    {skill.category}
                  </h3>
                  <div className="space-y-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-block bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-gray-600 transition-colors group"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{project.image}</span>
                    <span className="text-sm text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Project <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">
                Let's Collaborate
              </h3>
              <p className="text-gray-300 mb-8">
                I'm always interested in discussing new opportunities,
                innovative projects, or potential collaborations. Whether you
                need hardware design, embedded programming, or frontend
                development, let's connect!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <span className="text-gray-300">
                    akintomideayomide88@gmail.com
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <span className="text-gray-300">+234 905 942 8815</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-blue-400" />
                  <span className="text-gray-300">Lagos, Nigeria</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  onClick={() => alert("Message sent! (Demo only)")}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-colors font-medium"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2025 Ayomide Akintomide Portfolio. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com/Tomide223/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
// import image from "./assets/IMG_20220612_121844.jpg";

// const projects = [
//   {
//     title: "Coding Conf 2025 Ticket Generator",
//     description:
//       "A React web app that generates personalized tickets with avatar uploads and dynamic styling.",
//     tech: ["React", "TailwindCSS", "File Upload"],
//     link: "https://yourticketapp.example.com",
//     github: "https://github.com/yourusername/ticket-generator",
//   },
//   {
//     title: "Fellowship Hour Event Page",
//     description:
//       "Flutter web app for promoting a weekly faith-based gathering with prayer and study sessions.",
//     tech: ["Flutter", "Dart", "Firebase"],
//     link: "https://fellowshiphour.example.com",
//     github: "https://github.com/yourusername/fellowship-hour",
//   },
// {
//   title: "AFG Landing Page",
//   description:
//     "A beautifully designed landing page for an organization using React and TailwindCSS.",
//   tech: ["React", "TailwindCSS"],
//   link: "https://afg-xe54.vercel.app/",
//   github: "https://github.com/Tomide223/AFG",
// },
// ];

// export default function Portfolio() {
//   return (
//     <main className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white p-6 font-sans">
//       {/* Hero Section */}
//       <section className="text-center py-20 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-tr from-pink-300 via-purple-200 to-blue-300 opacity-20 blur-3xl"></div>
//         <img
//           src={image}
//           alt="Ayomide Akintomide"
//           className="w-36 h-36 rounded-full mx-auto mb-6 border-4 border-purple-400 shadow-lg"
//         />
//         <h1 className="text-5xl md:text-6xl font-extrabold text-purple-700 dark:text-purple-400 mb-4">
//           Ayomide Akintomide
//         </h1>
//         <p className="text-2xl text-blue-800 dark:text-blue-300 mb-6">
//           React & Flutter Developer | Faith-Driven Engineer
//         </p>
//         <div className="flex justify-center gap-4">
//  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:scale-105 transition-transform">
//     Download Resume
//   </button>
//           <button className="bg-white border-2 border-purple-500 text-purple-700 px-6 py-2 rounded-full font-semibold hover:bg-purple-100 transition">
//             View Projects
//           </button>
//         </div>
//       </section>

//       {/* About Me */}
//       <section className="max-w-4xl mx-auto py-16 px-6 bg-white dark:bg-gray-800 rounded-3xl shadow-xl text-center">
//         <h2 className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-6">
//           About Me
//         </h2>
//         <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
// I’m a passionate frontend developer who crafts clean, interactive user
// interfaces using React and Flutter. With a solid grounding in faith
// and a commitment to excellence, I approach every project as an
// opportunity to build with purpose and impact lives through code.
//         </p>
//       </section>

//       {/* Skills */}
//       <section className="max-w-5xl mx-auto py-16">
//         <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-10 text-center">
//           Technical Skills
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
//             <h3 className="text-xl font-bold text-purple-600 mb-4">
//               React Ecosystem
//             </h3>
//             <ul className="space-y-2 text-gray-700 dark:text-gray-300">
//               <li>React & Next.js</li>
//               <li>TailwindCSS</li>
//               <li>TypeScript</li>
//               <li>Framer Motion</li>
//               <li>Redux / Zustand</li>
//             </ul>
//           </div>
//           <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
//             <h3 className="text-xl font-bold text-purple-600 mb-4">
//               Flutter Development
//             </h3>
//             <ul className="space-y-2 text-gray-700 dark:text-gray-300">
//               <li>Flutter & Dart</li>
//               <li>Firebase Integration</li>
//               <li>Provider / Riverpod</li>
//               <li>Flutter Web & Desktop</li>
//               <li>REST APIs & JSON</li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* Projects */}
//       <section className="max-w-6xl mx-auto py-16">
//         <h2 className="text-3xl font-bold text-green-700 dark:text-green-400 mb-12 text-center">
//           Highlighted Projects
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
//             >
//               <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-2">
//                 {project.title}
//               </h3>
//               <p className="mb-2 text-gray-800 dark:text-gray-300">
//                 {project.description}
//               </p>
//               <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
//                 Tech: {project.tech.join(", ")}
//               </p>
//               <div className="flex gap-4">
//                 <a
//                   href={project.link}
//                   target="_blank"
//                   className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
//                 >
//                   Live Demo
//                 </a>
//                 <a
//                   href={project.github}
//                   target="_blank"
//                   className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
//                 >
//                   GitHub
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Contact */}
//       <section className="max-w-xl mx-auto py-16 text-center bg-white dark:bg-gray-800 rounded-3xl shadow-md">
//         <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-6">
//           Let’s Connect
//         </h2>
//         <p className="text-lg text-gray-800 dark:text-gray-200 mb-2">
//           Email:{" "}
//           <a
//             href="mailto:akintomideayomide88@example.com"
//             className="text-blue-600 hover:underline"
//           >
//             akintomideayomide88@example.com
//           </a>
//         </p>
//         <p className="text-gray-600 dark:text-gray-400">
//           You can also reach me on LinkedIn via Akintomide Ayomidee
//         </p>
//         <p className="text-gray-600 dark:text-gray-400">
//           You can also reach me on GitHub via {" "}
//           <a
//             href="https://github.com/Tomide223"
//             className="text-blue-600 hover:underline"
//           >
//             https://github.com/Tomide223
//           </a>
//         </p>
//       </section>
//     </main>
//   );
// }
