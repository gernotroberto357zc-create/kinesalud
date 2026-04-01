"use client";
import { motion } from "framer-motion";

const reviews = [
  {
    author: "Daniel",
    date: "Marzo 2026",
    content: "Buen profesional que se nota que le gusta su trabajo porque me ha ayudado a recuperarme de una ciática que antes no podía ni golpear un balón.",
    target: "Daniel Díaz",
    stars: 5
  },
  {
    author: "Beatriz M.",
    date: "Marzo 2026",
    content: "Magnífica profesional, llevo varias sesiones con ella y he mejorado mucho. Muy empática y te explica todo muy bien. Estoy súper cómoda.",
    target: "Edna Lizbeth Zárate",
    stars: 5
  },
  {
    author: "Julio de Jesus",
    date: "Marzo 2026",
    content: "Perfecta atención especializada. Toda una gozada. Ojalá que todas las personas tengan tal tratamiento.",
    target: "Edna Lizbeth Zárate",
    stars: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 bg-white" id="opiniones">
      <div className="text-center mb-16">
        <span className="text-[#14b8a6] font-bold text-xs uppercase tracking-widest mb-4 block">Experiencias Reales</span>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Valoración de 5 estrellas <br/> basada en 193 pacientes.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-8 rounded-[32px] bg-[#F5F5F7] border border-gray-100 flex flex-col justify-between"
          >
            <div>
              <div className="flex gap-1 mb-4 text-[#14b8a6] text-lg">
                {"★★★★★".split("").map((star, i) => <span key={i}>{star}</span>)}
              </div>
              <p className="text-slate-700 italic mb-6 leading-relaxed">"{review.content}"</p>
            </div>
            <div>
              <p className="font-bold text-slate-900">{review.author}</p>
              <p className="text-[#14b8a6] text-[10px] font-bold uppercase tracking-tighter mt-1">Tratado por {review.target}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};