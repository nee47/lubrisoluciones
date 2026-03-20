import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-primary/30 bg-background font-body text-sm uppercase tracking-widest mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-16 mx-auto">
        <div className="space-y-6">
          <div className="text-xl font-bold text-primary">LUBRISOLUCIONES</div>
          <p className="text-primary-on-container/50 normal-case tracking-normal text-on-surface-variant max-w-xs leading-relaxed">
            IMPULSANDO LA INNOVACIÓN BIO-DIGITAL A TRAVÉS DE LA MATRIZ
            ENERGÉTICA GLOBAL E INDUSTRIAL.
          </p>
        </div>

        <div>
          <h5 className="text-primary font-bold mb-8">Navegación</h5>
          <ul className="space-y-4">
            <li>
              <Link
                className="text-on-surface-variant hover:text-secondary transition-colors   inline-block"
                href="/"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                className="text-on-surface-variant hover:text-secondary transition-colors   inline-block"
                href="/productos"
              >
                Productos
              </Link>
            </li>
            <li>
              <Link
                className="text-on-surface-variant hover:text-secondary transition-colors   inline-block"
                href="/servicios"
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                className="text-on-surface-variant hover:text-secondary transition-colors   inline-block"
                href="/acerca"
              >
                Acerca
              </Link>
            </li>
            <li>
              <Link
                className="text-on-surface-variant hover:text-secondary transition-colors   inline-block"
                href="/terminos"
              >
                Términos y condiciones
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-primary font-bold mb-8">Contacto</h5>
          <p className="text-on-surface-variant normal-case tracking-normal mb-6 leading-relaxed">
            Jr Bulgaria 335, Los Olivos, Lima, Perú
          </p>
          <p className="text-on-surface-variant normal-case tracking-normal mb-6 leading-relaxed">
            +51 961 484 883
          </p>

          <div className="flex gap-4">
            <span className="material-symbols-outlined text-primary cursor-pointer hover:text-secondary transition-colors">
              phone
            </span>

            <span className="material-symbols-outlined text-primary cursor-pointer hover:text-secondary transition-colors">
              alternate_email
            </span>
          </div>
        </div>
      </div>

      <div className="px-12 py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 max-w-screen-2xl mx-auto w-full">
        <div className="text-on-surface-variant font-bold text-[10px] tracking-[0.2em]">
          © {new Date().getFullYear()} LUBRISOLUCIONES. TODOS LOS DERECHOS
          RESERVADOS.
        </div>
        <div className="flex gap-8">
          <span className="text-white/20 font-bold text-[10px] tracking-[0.2em]">
            <a
              href="https://devmotec.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Desarrollado por DevMotec
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
