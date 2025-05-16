import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Phone, MapPin, Mail, Check } from "lucide-react";
import { motion } from "framer-motion";
import logo from "/images/logo-group1vest.png";

// Fotos en /public/images/hermitage/
const images = [
  "/images/hermitage/exterior-1.jpg",
  "/images/hermitage/salon-1.jpg",
  "/images/hermitage/cocina-1.jpg",
  "/images/hermitage/bano-1.jpg",
  "/images/hermitage/dormitorio-1.jpg",
  "/images/hermitage/piscina-1.jpg"
];

const amenities = [
  "5 dormitorios con baños en-suite",
  "Piscina privada rodeada de jardines paisajísticos",
  "Cocina gourmet totalmente equipada",
  "Salón-comedor con chimenea decorativa y Smart TV",
  "Aire acondicionado en todas las estancias y sistema de seguridad integral",
  "Wi-Fi de alta velocidad y TV internacional",
  "Parking interior y exterior para hasta 6 vehículos"
];

export default function VillaErmitagePage() {
  return (
    <main className="font-sans text-gray-100 bg-black scroll-smooth">

      {/* ───── HERO ───── */}
      <section className="relative h-screen flex items-center justify-center">
        <img
          src="/images/agent-yanni.jpg"
          alt="Yanni Doulamis — Agente Inmobiliario"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90" />

        <img
          src={logo}
          alt="Group 1Vest"
          className="absolute top-6 left-6 w-32 md:w-40 drop-shadow-lg"
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center px-4"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-wider text-[#ECAB09] drop-shadow-lg mb-4">
            Yanni Doulamis
          </h1>
          <p className="text-3xl md:text-4xl font-semibold uppercase tracking-[0.35em]">
            Group <span className="text-[#ECAB09]">1</span>Vest
          </p>
        </motion.div>
      </section>

      {/* ───── OVERVIEW ───── */}
      <section id="villa" className="max-w-6xl mx-auto px-4 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-10 text-center"
        >
          VILLA ERMITAGE
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* texto */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg leading-relaxed"
          >
            <p>
              Situada en Cancelada (Estepona), a 5 min de las playas de
              Guadalmansa y El Saladillo, esta villa ofrece un oasis de confort
              y privacidad en plena Costa del Sol.
            </p>
            <ul className="space-y-2">
              {amenities.map((a) => (
                <li key={a} className="flex gap-2">
                  <Check className="w-5 h-5 flex-shrink-0 text-[#ECAB09] mt-1" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* galería */}
          <div className="grid grid-cols-2 gap-4">
            {images.map((src) => (
              <motion.img
                key={src}
                src={src}
                alt=""
                className="w-full h-48 md:h-56 object-cover rounded-2xl shadow-lg"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ───── MAPA ───── */}
      <section id="location" className="bg-[#1a1a1a] py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe
              title="Ubicación Villa Ermitage"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d764.4951160132237!2d-5.05610883506193!3d36.46869534900785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd732bfb40570bef%3A0xe468e471db9a8c42!2sVilla%20Ermitage!5e1!3m2!1sen!2ses!4v1747389138985!5m2!1sen!2ses"
              className="w-full h-80 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-semibold mb-6 flex items-center gap-3">
              <MapPin className="w-10 h-10 text-[#ECAB09]" />
              Cancelada · Estepona
            </h3>
            <p className="text-lg leading-relaxed">
              Lunymar Golf y Atalaya Golf a 10 min; Puerto Banús a 10 min; Marbella a 15 min.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ───── PRECIO ───── */}
      <section id="price" className="py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-3xl mb-4 uppercase tracking-widest text-gray-400">
            Precio de venta
          </p>
          <p className="text-6xl md:text-7xl font-bold text-[#ECAB09] mb-10">
            2.950.000 €
          </p>
          <Button size="lg" className="text-xl px-10 py-6" asChild>
            <a href="#contact">Solicitar visita privada</a>
          </Button>
        </motion.div>
      </section>

      {/* ───── CONTACTO ───── */}
      <section id="contact" className="bg-[#1a1a1a] py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <Card className="rounded-2xl shadow-xl p-8 bg-black text-gray-100">
            <CardContent className="space-y-6">
              <h3 className="text-4xl font-semibold text-center mb-6">
                Contáctame
              </h3>
              <div className="flex items-center gap-4 text-lg">
                <Phone className="w-6 h-6 text-[#ECAB09]" />
                <span>+34 674 55 05 81</span>
              </div>
              <div className="flex items-center gap-4 text-lg">
                <Mail className="w-6 h-6 text-[#ECAB09]" />
                <span>yanni@group1vest.com</span>
              </div>
              <Button size="lg" className="w-full mt-6" asChild>
                <a
                  href="https://wa.me/34674550581"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enviar WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </main>
  );
}
