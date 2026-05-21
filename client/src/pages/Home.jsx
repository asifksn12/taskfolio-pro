import Navbar from "../components/Navbar";
import Popup from "../components/Popup";

function Home() {
  return (
    <div className="min-h-screen text-white overflow-hidden">

      {/* Popup */}
      <Popup />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>

          <p className="text-cyan-400 uppercase tracking-[4px] mb-5">
            Full Stack Software Developer
          </p>

          <h1 className="text-6xl md:text-7xl font-bold leading-tight">

            We will be build the
            <span className="gradient-text"> Web, App, Software </span>

            
            <span className="gradient-text"> As You want or Thinking</span>

          </h1>

          <p className="mt-8 text-gray-300 text-xl leading-9">

            My Self ASIF.its a portfolio and task management platform
            built using React, Node.js, Express and MongoDB
            with modern UI/UX design. +91 7300099943

          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <button className="neon-btn px-8 py-4 rounded-2xl font-semibold">
              Explore Project
            </button>

            <button className="border border-cyan-500 px-8 py-4 rounded-2xl hover:bg-cyan-500/10 transition duration-300">
              Live Demo
            </button>

          </div>

        </div>

        {/* Right Card */}
        <div className="glass rounded-[30px] p-10 relative overflow-hidden">

          <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/20 blur-3xl rounded-full"></div>

          <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full"></div>

          <h2 className="text-4xl font-bold gradient-text mb-10">
            Platform Features
          </h2>

          <div className="space-y-6 text-lg text-gray-300">

            <div className="glass rounded-2xl px-6 py-5 flex items-center gap-4">
              <span className="text-3xl">🚀</span>
              <p>Modern Authentication System</p>
            </div>

            <div className="glass rounded-2xl px-6 py-5 flex items-center gap-4">
              <span className="text-3xl">📁</span>
              <p>Portfolio Dashboard UI</p>
            </div>

            <div className="glass rounded-2xl px-6 py-5 flex items-center gap-4">
              <span className="text-3xl">✅</span>
              <p>Task Management CRUD APIs</p>
            </div>

            <div className="glass rounded-2xl px-6 py-5 flex items-center gap-4">
              <span className="text-3xl">⚡</span>
              <p>MongoDB Database Integration</p>
            </div>

            <div className="glass rounded-2xl px-6 py-5 flex items-center gap-4">
              <span className="text-3xl">🎨</span>
              <p>Premium Responsive Design</p>
            </div>

          </div>

        </div>

      </section>

      {/* Skills Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="text-center mb-16">

          <p className="text-cyan-400 uppercase tracking-[4px]">
            Technologies
          </p>

          <h2 className="text-5xl font-bold mt-4 gradient-text">
            Skills & Stack
          </h2>

        </div>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">

          <div className="glass rounded-3xl p-8 text-center hover:scale-105 transition duration-300">
            <h3 className="text-3xl mb-4">⚛️</h3>
            <p className="text-xl font-semibold">React JS</p>
          </div>

          <div className="glass rounded-3xl p-8 text-center hover:scale-105 transition duration-300">
            <h3 className="text-3xl mb-4">🟢</h3>
            <p className="text-xl font-semibold">Node JS</p>
          </div>

          <div className="glass rounded-3xl p-8 text-center hover:scale-105 transition duration-300">
            <h3 className="text-3xl mb-4">🍃</h3>
            <p className="text-xl font-semibold">MongoDB</p>
          </div>

          <div className="glass rounded-3xl p-8 text-center hover:scale-105 transition duration-300">
            <h3 className="text-3xl mb-4">🎨</h3>
            <p className="text-xl font-semibold">Tailwind CSS</p>
          </div>

        </div>

      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="glass rounded-[35px] p-12 text-center">

          <p className="text-cyan-400 uppercase tracking-[4px] mb-4">
            About Me
          </p>

          <h2 className="text-5xl font-bold gradient-text mb-8">
            ASIF From LKO INDIA
          </h2>

          <p className="text-gray-300 text-xl leading-10 max-w-4xl mx-auto">

            Passionate Full Stack Software Developer focused on building
            premium modern websites, apps, software with beautiful UI/UX,
            responsive layouts and powerful backend systems
            using MERN Stack technologies.

          </p>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-20">

        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <h2 className="text-2xl font-bold gradient-text">
            ASIF • NeoSkill Portfolio
          </h2>

          <p className="text-gray-400">
            © 2026 All Rights Reserved
          </p>

        </div>

      </footer>

    </div>
  );
}

export default Home;