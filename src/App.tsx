

const projects = [
  {
    title: "Coding Conf 2025 Ticket Generator",
    description: "A React web app that generates personalized tickets with avatar uploads and dynamic styling.",
    tech: ["React", "TailwindCSS", "File Upload"],
    link: "https://yourticketapp.example.com",
    github: "https://github.com/yourusername/ticket-generator"
  },
  {
    title: "Fellowship Hour Event Page",
    description: "Flutter web app for promoting a weekly faith-based gathering with prayer and study sessions.",
    tech: ["Flutter", "Dart", "Firebase"],
    link: "https://fellowshiphour.example.com",
    github: "https://github.com/yourusername/fellowship-hour"
  },
  {
    title: "Alaajo Landing Page",
    description: "A beautifully designed landing page for an organization using React and TailwindCSS.",
    tech: ["React", "TailwindCSS"],
    link: "https://alaajo.example.com",
    github: "https://github.com/yourusername/alaajo-landing"
  }
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white p-6">
      {/* Hero Section */}
      <section className="text-center py-20">
        <img
          src="https://via.placeholder.com/150"
          alt="Ayomide Akintomide"
          className="w-36 h-36 rounded-full mx-auto mb-6 border-4 border-purple-400 shadow-lg"
        />
        <h1 className="text-5xl md:text-6xl font-extrabold text-purple-700 dark:text-purple-400 mb-4">Ayomide Akintomide</h1>
        <p className="text-2xl text-blue-800 dark:text-blue-300 mb-6">React & Flutter Developer | Faith-Driven Technologist</p>
        <div className="flex justify-center gap-4">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:scale-105 transition-transform">Download Resume</button>
          <button className="bg-white border-2 border-purple-500 text-purple-700 px-6 py-2 rounded-full font-semibold hover:bg-purple-100 transition">View Projects</button>
        </div>
      </section>

      {/* About Me */}
      <section className="max-w-3xl mx-auto py-10 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-4">About Me</h2>
        <p className="text-lg">
          I’m a passionate frontend developer specializing in building fast, accessible, and responsive
          applications using React and Flutter. I believe in blending technology with purpose, and I’m committed
          to putting God first in everything I do.
        </p>
      </section>

      {/* Skills */}
      <section className="max-w-4xl mx-auto py-10">
        <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-purple-600 mb-2">React Stack</h3>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300">
              <li>React</li>
              <li>TailwindCSS</li>
              <li>TypeScript</li>
              <li>Framer Motion</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-purple-600 mb-2">Flutter Stack</h3>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300">
              <li>Flutter</li>
              <li>Dart</li>
              <li>Firebase</li>
              <li>Provider / Riverpod</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-5xl mx-auto py-10">
        <h2 className="text-3xl font-bold text-green-700 dark:text-green-400 mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-2">{project.title}</h3>
              <p className="mb-2 text-gray-800 dark:text-gray-300">{project.description}</p>
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
      <section className="max-w-xl mx-auto py-10 text-center bg-white dark:bg-gray-800 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">Contact Me</h2>
        <p className="text-lg text-gray-800 dark:text-gray-200">Email: ayomide@example.com</p>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Or reach me via my social platforms (to be added)</p>
      </section>
    </main>
  );
}
