import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Zap,
  Film,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/* NAV */
const Nav = () => (
  <header className="fixed top-0 w-full glass z-50">
    <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
      <h1 className="font-bold tracking-widest">CRACKO</h1>

      <nav className="hidden md:flex gap-8 text-sm text-gray-300">
        <a href="#servicios">Servicios</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <button className="px-4 py-2 bg-cyan-400 text-black font-bold text-sm">
        Contactar
      </button>
    </div>
  </header>
);

/* HERO */
const Hero = () => (
  <section className="min-h-screen flex items-center justify-center text-center px-6 relative">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.15),transparent_60%)]" />

    <motion.div initial="hidden" animate="show" variants={fade}>
      <h1 className="text-6xl md:text-8xl font-black leading-none">
        Diseño <span className="neon">pro</span>
        <br />
        para streamers
      </h1>

      <p className="text-gray-400 mt-6 max-w-xl mx-auto">
        Overlays, branding y edición para creadores que quieren destacar
        como un equipo profesional.
      </p>

      <button className="mt-8 px-6 py-3 bg-cyan-400 text-black font-bold">
        Ver servicios <ArrowRight className="inline ml-2" size={18} />
      </button>
    </motion.div>
  </section>
);

/* SERVICIOS */
const Services = () => {
  const items = [
    { icon: Layers, title: "Overlays" },
    { icon: Zap, title: "Transiciones" },
    { icon: Film, title: "Edición" },
    { icon: Sparkles, title: "Branding" },
  ];

  return (
    <section id="servicios" className="section">
      <h2 className="text-4xl font-bold mb-12">Servicios</h2>

      <div className="grid md:grid-cols-4 gap-6">
        {items.map((i, idx) => (
          <div key={idx} className="card p-6">
            <i.icon className="text-cyan-400 mb-4" />
            <h3 className="font-bold text-lg">{i.title}</h3>
            <p className="text-gray-400 text-sm mt-2">
              Diseño premium para creadores.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

/* PORTFOLIO */
const Portfolio = () => (
  <section id="portfolio" className="section">
    <h2 className="text-4xl font-bold mb-12">Portfolio</h2>

    <div className="grid md:grid-cols-3 gap-4">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className="h-60 card bg-gradient-to-br from-cyan-500/10 to-purple-500/10"
        />
      ))}
    </div>
  </section>
);

/* APP */
export default function App() {
  useEffect(() => {
    document.title = "Cracko Studio";
  }, []);

  return (
    <div className="bg-[#050505] text-white">
      <Nav />
      <Hero />
      <Services />
      <Portfolio />
    </div>
  );
}