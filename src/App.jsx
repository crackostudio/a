import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function App() {
  useEffect(() => {
    document.title = "Cracko Studio";
  }, []);

  return (
    <div className="bg-[#050505] text-white overflow-x-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-200px] left-1/2 w-[700px] h-[700px] -translate-x-1/2 bg-cyan-500/10 blur-[140px]" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-purple-500/10 blur-[160px]" />
      </div>

      {/* NAV */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/5">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-3 font-bold tracking-widest">
  <img
    src="src/assets/logo.png"
    alt="Cracko Studio"
    className="w-10 h-10 object-contain"
    style={{ width: "140px", margin: "30px" }}
  />
  <span>CRACKO</span>
</div>
<div className="bg-glow">
  <div className="glow-1" />
  <div className="glow-2" />
</div>
          <nav className="hidden md:flex gap-10 text-sm text-white/60">
            <a href="#">Work</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
          </nav>

          <button className="px-4 py-2 bg-white text-black text-sm font-semibold">
            Contact
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center text-center px-6">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fade}
          className="max-w-4xl"
        >
          <p className="text-cyan-400 tracking-[0.3em] text-xs uppercase mb-6">
            Creative Studio for Streamers
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-[1.05]">
            Design that makes
            <br />
            your stream feel
            <span className="text-cyan-400"> premium</span>
          </h1>

          <p className="text-white/50 mt-6 max-w-xl mx-auto text-lg">
            We craft overlays, branding and motion design for creators who want
            to stand out like esports production teams.
          </p>

          <button className="mt-10 px-6 py-3 bg-white text-black font-semibold hover:scale-105 transition">
            View Services <ArrowRight className="inline ml-2" size={16} />
          </button>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
          className="mb-16"
        >
          <p className="text-cyan-400 text-xs tracking-[0.3em] uppercase">
            What we do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Services built for creators
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Overlays",
            "Transitions",
            "Video Editing",
            "Branding",
            "Stream Packs",
            "Motion Design",
          ].map((s, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fade}
              className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <h3 className="text-xl font-semibold">{s}</h3>
              <p className="text-white/40 mt-2 text-sm">
                Premium design for streamers.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 text-center px-6 border-t border-white/5">
        <h2 className="text-4xl md:text-6xl font-bold">
          Ready to upgrade your stream?
        </h2>

        <p className="text-white/50 mt-4">
          Let’s build something that actually looks premium.
        </p>

        <button className="mt-10 px-6 py-3 bg-cyan-400 text-black font-semibold">
          Start a project
        </button>
      </section>

    </div>
  );
}
