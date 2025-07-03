import image from "./assets/IMG_20220612_121844.jpg";

const projects = [
  {
    title: "Coding Conf 2025 Ticket Generator",
    description:
      "A React web app that generates personalized tickets with avatar uploads and dynamic styling.",
    tech: ["React", "TailwindCSS", "File Upload"],
    link: "https://yourticketapp.example.com",
    github: "https://github.com/yourusername/ticket-generator",
  },
  {
    title: "Fellowship Hour Event Page",
    description:
      "Flutter web app for promoting a weekly faith-based gathering with prayer and study sessions.",
    tech: ["Flutter", "Dart", "Firebase"],
    link: "https://fellowshiphour.example.com",
    github: "https://github.com/yourusername/fellowship-hour",
  },
  {
    title: "AFG Landing Page",
    description:
      "A beautifully designed landing page for an organization using React and TailwindCSS.",
    tech: ["React", "TailwindCSS"],
    link: "https://afg-xe54.vercel.app/",
    github: "https://github.com/Tomide223/AFG",
  },
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white p-6 font-sans">
      {/* Hero Section */}
      <section className="text-center py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-300 via-purple-200 to-blue-300 opacity-20 blur-3xl"></div>
        <img
          src={image}
          alt="Ayomide Akintomide"
          className="w-36 h-36 rounded-full mx-auto mb-6 border-4 border-purple-400 shadow-lg"
        />
        <h1 className="text-5xl md:text-6xl font-extrabold text-purple-700 dark:text-purple-400 mb-4">
          Ayomide Akintomide
        </h1>
        <p className="text-2xl text-blue-800 dark:text-blue-300 mb-6">
          React & Flutter Developer | Faith-Driven Technologist
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:scale-105 transition-transform">
            Download Resume
          </button>
          <button className="bg-white border-2 border-purple-500 text-purple-700 px-6 py-2 rounded-full font-semibold hover:bg-purple-100 transition">
            View Projects
          </button>
        </div>
      </section>

      {/* About Me */}
      <section className="max-w-4xl mx-auto py-16 px-6 bg-white dark:bg-gray-800 rounded-3xl shadow-xl text-center">
        <h2 className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-6">
          About Me
        </h2>
        <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
          I’m a passionate frontend developer who crafts clean, interactive user
          interfaces using React and Flutter. With a solid grounding in faith
          and a commitment to excellence, I approach every project as an
          opportunity to build with purpose and impact lives through code.
        </p>
      </section>

      {/* Skills */}
      <section className="max-w-5xl mx-auto py-16">
        <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-10 text-center">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-purple-600 mb-4">
              React Ecosystem
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>React & Next.js</li>
              <li>TailwindCSS</li>
              <li>TypeScript</li>
              <li>Framer Motion</li>
              <li>Redux / Zustand</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-purple-600 mb-4">
              Flutter Development
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>Flutter & Dart</li>
              <li>Firebase Integration</li>
              <li>Provider / Riverpod</li>
              <li>Flutter Web & Desktop</li>
              <li>REST APIs & JSON</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto py-16">
        <h2 className="text-3xl font-bold text-green-700 dark:text-green-400 mb-12 text-center">
          Highlighted Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-2">
                {project.title}
              </h3>
              <p className="mb-2 text-gray-800 dark:text-gray-300">
                {project.description}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Tech: {project.tech.join(", ")}
              </p>
              <div className="flex gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-xl mx-auto py-16 text-center bg-white dark:bg-gray-800 rounded-3xl shadow-md">
        <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-6">
          Let’s Connect
        </h2>
        <p className="text-lg text-gray-800 dark:text-gray-200 mb-2">
          Email:{" "}
          <a
            href="mailto:akintomideayomide88@example.com"
            className="text-blue-600 hover:underline"
          >
            akintomideayomide88@example.com
          </a>
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          You can also reach me on LinkedIn via Akintomide Ayomidee
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          You can also reach me on GitHub via {" "}
          <a
            href="https://github.com/Tomide223"
            className="text-blue-600 hover:underline"
          >
            https://github.com/Tomide223
          </a>
        </p>
      </section>
    </main>
  );
}
