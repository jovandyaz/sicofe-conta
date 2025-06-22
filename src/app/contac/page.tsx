"use client";
import "../purple-sparkle.css";
import "../scale-up-fade.css";
import { useState, useEffect } from "react";
import emailjs from 'emailjs-com';


export default function ContacPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    hearAbout: "",
    reason: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);





  const [bubbles, setBubbles] = useState<React.ReactNode[]>([]);
  useEffect(() => {
    const arr = [];
    const colors = [
      'rgba(161,140,209,0.25)',
      'rgba(248,194,235,0.18)',
      'rgba(138,197,252,0.15)',
      'rgba(250,208,196,0.13)',
    ];
    for (let i = 0; i < 18; i++) {
      const size = Math.random() * 48 + 32;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const blur = Math.random() * 16 + 8;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const duration = Math.random() * 8 + 8;
      arr.push(
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${left}%`,
            top: `${top}%`,
            width: size,
            height: size,
            background: color,
            borderRadius: '50%',
            filter: `blur(${blur}px)`,
            opacity: 0.7,
            pointerEvents: 'none',
            animation: `bubble-move ${duration}s ease-in-out infinite alternate`,
            zIndex: 0,
          }}
        />
      );
    }
    setBubbles(arr);
  }, []);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    switch (e.target.name) {
      case 'name':
        if (e.target.value && step === 1) setStep(2);
        break;
      case 'email':
        if (e.target.value && step === 2) setStep(3);
        break;
      case 'phone':
        if (e.target.value && step === 3) setStep(4);
        break;
      case 'hearAbout':
        if (e.target.value && step === 4) setStep(5);
        break;
      case 'reason':
        if (e.target.value && step === 5) setStep(6);
        break;
      case 'message':
        if (e.target.value && step === 6) setStep(7);
        break;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para enviar el formulario a gohan.03@outlook.com usando EmailJS
    try {
      await emailjs.send(
        'service_zncdaw9', // <-- Service ID real de EmailJS
        'template_t6jklkt', // <-- Pega aquí tu Template ID real de EmailJS
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          hear_about: form.hearAbout,
          reason: form.reason,
          message: form.message,
          to_email: 'gohan.03@outlook.com',
        },
        'mtsOnn_xRI0YUhIUL' // <-- Pega aquí tu Public Key real de EmailJS
      );
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error: any) {
      console.error('Error al enviar el mensaje:', error);
      alert('Error al enviar el mensaje: ' + (error && (error.text || error.message || JSON.stringify(error))));
    }
  };


  return (
    <div
      className="relative min-h-screen bg-gradient-to-b from-[#f7f7fd] to-[#f0f0f8] pt-24 dark:from-[#0f0f19] dark:to-[#16162a] flex flex-col items-center justify-center p-4 animate-contact-fade-in"
    >
      <div
        className="absolute inset-0 -z-20 bg-gradient-to-b from-[#f7f7fd] to-[#f0f0f8] dark:from-[#0f0f19] dark:to-[#16162a] overflow-hidden"
      >
        
        <div
          className="absolute inset-0 w-full h-full pointer-events-none select-none"
          style={{ zIndex: 1 }}
        >
          {bubbles}
        </div>
      </div>
      {!submitted && (
        <h1 className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--sicofe-purple)] to-[#8ec5fc] drop-shadow-lg">Contáctanos</h1>
      )}
      {submitted ? (
        <div className="w-full max-w-lg px-6 py-4 rounded-2xl shadow-2xl animate-scale-up-fade text-2xl font-extrabold text-[color:var(--sicofe-purple)] text-center relative overflow-hidden border border-[color:var(--sicofe-purple)] bg-white/90 dark:bg-[#18182f]/90 backdrop-blur-md">
          <span className="relative z-10">¡Gracias por contactarnos! Te responderemos pronto.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white/90 dark:bg-[#18182f]/90 rounded-2xl shadow-2xl p-10 space-y-6 backdrop-blur-md border border-[color:var(--sicofe-purple)] animate-fade-in">
          <div className={step >= 1 ? 'opacity-100 transition-all duration-500' : 'opacity-0 h-0 overflow-hidden'}>
            <label className="block text-base font-semibold mb-1 text-[color:var(--sicofe-purple)]" htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border-2 border-[color:var(--sicofe-purple)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--sicofe-purple)] dark:bg-[#23234a] transition"
              autoFocus
            />
          </div>
          {step >= 2 && (
            <div className="opacity-100 transition-all duration-500">
              <label className="block text-base font-semibold mb-1 text-[color:var(--sicofe-purple)]" htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border-2 border-[color:var(--sicofe-purple)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--sicofe-purple)] dark:bg-[#23234a] transition"
              />
            </div>
          )}
          {step >= 3 && (
            <div className="opacity-100 transition-all duration-500">
              <label className="block text-base font-semibold mb-1 text-[color:var(--sicofe-purple)]" htmlFor="phone">Teléfono</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border-2 border-[color:var(--sicofe-purple)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--sicofe-purple)] dark:bg-[#23234a] transition"
              />
            </div>
          )}
          {step >= 4 && (
            <div className="opacity-100 transition-all duration-500">
              <label className="block text-base font-semibold mb-1 text-[color:var(--sicofe-purple)]" htmlFor="hearAbout">¿Cómo supiste de nosotros? *</label>
              <select
                id="hearAbout"
                name="hearAbout"
                value={form.hearAbout}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border-2 border-[color:var(--sicofe-purple)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--sicofe-purple)] dark:bg-[#23234a] transition"
              >
                <option value="">Selecciona una opción</option>
                <option value="buscador">Buscador (Google, Bing, etc.)</option>
                <option value="redes">Redes sociales</option>
                <option value="recomendacion">Recomendación</option>
                <option value="otro">Otro</option>
              </select>
            </div>
          )}
          {step >= 5 && (
            <div className="opacity-100 transition-all duration-500">
              <label className="block text-base font-semibold mb-1 text-[color:var(--sicofe-purple)]" htmlFor="reason">¿En qué podemos ayudarte? *</label>
              <select
                id="reason"
                name="reason"
                value={form.reason}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border-2 border-[color:var(--sicofe-purple)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--sicofe-purple)] dark:bg-[#23234a] transition"
              >
                <option value="">Selecciona una opción</option>
                <option value="contabilidad">Contabilidad</option>
                <option value="impuestos">Impuestos</option>
                <option value="asesoria">Asesoría financiera</option>
                <option value="otro">Otro</option>
              </select>
            </div>
          )}
          {step >= 6 && (
            <div className="opacity-100 transition-all duration-500">
              <label className="block text-base font-semibold mb-1 text-[color:var(--sicofe-purple)]" htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 border-2 border-[color:var(--sicofe-purple)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--sicofe-purple)] dark:bg-[#23234a] transition"
              />
            </div>
          )}
          {step >= 6 && (
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[color:var(--sicofe-purple)] to-[#8ec5fc] text-white py-3 rounded-lg font-bold shadow-md hover:from-[#8ec5fc] hover:to-[color:var(--sicofe-purple)] transition-all duration-200 mt-4"
              disabled={Object.values(form).some(v => !v)}
            >
              Enviar
            </button>
          )}
        </form>
      )}
    </div>
  );
}
