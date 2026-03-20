export const metadata = {
  title: 'Operaciones y Servicios - LUBRISOLUCIONES',
  description: 'Nuestros servicios en lubricación industrial, mantenimiento predictivo y asesoría técnica.',
};

const servicios = [
  {
    title: 'Lubricación industrial',
    iconName: 'precision_manufacturing',
    colorClass: 'text-primary',
    bgClass: 'bg-primary/10',
    description: 'Intervención de precisión y aplicación de bases de alto rendimiento para garantizar operatividad bajo los escenarios más críticos.',
  },
  {
    title: 'Mantenimiento predictivo',
    iconName: 'monitoring',
    colorClass: 'text-secondary',
    bgClass: 'bg-secondary/10',
    description: 'Análisis fluidodinámico y diagnóstico biosférico de la maquinaria, estableciendo rutinas que anulan las fallas y el downtime.',
  },
  {
    title: 'Asesoría técnica integral',
    iconName: 'psychology',
    colorClass: 'text-primary',
    bgClass: 'bg-primary/10',
    description: 'Desarrollo de matrices tribológicas adaptadas para la selección, uso óptimo y disposición de lubricantes.',
  },
  {
    title: 'Logística de Ecosistemas',
    iconName: 'local_shipping',
    colorClass: 'text-secondary',
    bgClass: 'bg-secondary/10',
    description: 'Redes de distribución de alta capilaridad y bioseguridad a nivel nacional para abastecimiento industrial ininterrumpido.',
  },
];

export default function ServiciosPage() {
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary/30 selection:text-primary">
      {/* Small Hero */}
      <section className="bg-black text-white py-32 px-6 relative overflow-hidden border-b border-white/5 pt-40">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-surface to-primary-container/30 opacity-80 mix-blend-overlay"></div>
        </div>
        
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <span className="inline-block py-1 px-4 rounded-full bg-surface text-secondary text-sm font-bold tracking-widest mb-6 font-label uppercase border border-white/10">
            Marco de Intervención
          </span>
          <h1 className="text-5xl md:text-7xl font-black font-headline tracking-tighter mb-6">
            Nuestras Operaciones
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto font-medium leading-relaxed">
            Soluciones paramétricas diseñadas para potenciar la confiabilidad y blindar la bio-integridad de los entornos industriales.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      </section>

      {/* Services Grid (Bento Style adapted) */}
      <section className="py-32 bg-surface">
        <div className="container mx-auto px-6 lg:px-8 max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {servicios.map((servicio, index) => (
              <div
                key={index}
                className="bg-surface-variant rounded-3xl p-12 shadow-2xl border border-white/5 hover:ring-2 hover:ring-primary/50 transition-all duration-300 group flex flex-col h-full relative overflow-hidden"
              >
                <div className={`absolute -right-10 -bottom-10 w-48 h-48 rounded-full blur-3xl opacity-20 group-hover:opacity-50 transition-opacity ${servicio.bgClass.replace('/10', '')}`} />
                
                <div className="relative z-10 flex-grow">
                  <div className={`transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 w-fit mb-8 ${servicio.bgClass} p-4 rounded-2xl border border-white/10`}>
                    <span className={`material-symbols-outlined text-5xl ${servicio.colorClass}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                      {servicio.iconName}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold font-headline text-white mb-4 tracking-tight">{servicio.title}</h3>
                  <p className="text-on-surface-variant text-lg leading-relaxed text-balance">
                    {servicio.description}
                  </p>
                </div>
                
                <div className="relative z-10 mt-12 pt-6 border-t border-white/5">
                   <button className={`${servicio.colorClass} font-bold flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest text-sm`}>
                      Explorar Documentación <span className="material-symbols-outlined">trending_flat</span>
                   </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
