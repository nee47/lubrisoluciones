"use client";

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      nombre: formData.get("nombre"),
      empresa: formData.get("empresa"),
      email: formData.get("email"),
      telefono: formData.get("telefono"),
      mensaje: formData.get("mensaje"),
    };
    console.log("Formulario enviado:", data);
    alert(
      "Mensaje enviado. Revisa la consola para los detalles operacionales.",
    );
    e.currentTarget.reset();
  };

  return (
    <div>
      <h2 className="text-4xl font-black font-headline text-white mb-2 tracking-tight">
        Datos de Contacto
      </h2>
      <p className="text-on-surface-variant mb-10 text-lg">
        Canal seguro para evaluación de proyectos.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              htmlFor="nombre"
              className="text-xs font-bold font-label uppercase text-primary tracking-widest"
            >
              Nombre
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              required
              className="w-full px-5 py-4 bg-surface-variant/80 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-white placeholder-on-surface-variant/30 font-medium"
              placeholder="Escriba aquí"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="empresa"
              className="text-xs font-bold font-label uppercase text-primary tracking-widest"
            >
              Empresa
            </label>
            <input
              id="empresa"
              name="empresa"
              type="text"
              className="w-full px-5 py-4 bg-surface-variant/80 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-white placeholder-on-surface-variant/30 font-medium"
              placeholder="Su compañía"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-xs font-bold font-label uppercase text-primary tracking-widest"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-5 py-4 bg-surface-variant/80 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-white placeholder-on-surface-variant/30 font-medium"
              placeholder="nombre@dominio.com"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="telefono"
              className="text-xs font-bold font-label uppercase text-primary tracking-widest"
            >
              Teléfono
            </label>
            <input
              id="telefono"
              name="telefono"
              type="tel"
              className="w-full px-5 py-4 bg-surface-variant/80 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-white placeholder-on-surface-variant/30 font-medium"
              placeholder="+51"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label
            htmlFor="mensaje"
            className="text-xs font-bold font-label uppercase text-primary tracking-widest"
          >
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={5}
            required
            className="w-full px-5 py-4 bg-surface-variant/80 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-white placeholder-on-surface-variant/30 font-medium resize-none"
            placeholder="Especifique rangos de temperatura, fricción, ambiente operativo..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-5 mt-4 bg-primary text-white font-black uppercase tracking-widest rounded-xl text-sm hover:scale-[1.02] shadow-xl shadow-primary/20 transition-all duration-300 focus:outline-none border border-primary-dim"
        >
          Transmitir Telemetría
        </button>
      </form>
    </div>
  );
}
