import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface BiopageLayoutProps {
  children: ReactNode;
}

const BiopageLayout = ({ children }: BiopageLayoutProps) => {
  return (
    <div className="min-h-screen bg-biopage-dark text-white font-biopage">
      <header className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div>
          <span className="block text-xs text-white/40">
            Un servicio de Enrique Barroso
          </span>
          <span className="text-xl font-semibold tracking-tight">
            Biopage
          </span>
        </div>
        <Link
          to="/"
          className="text-sm text-white/60 hover:text-white transition-colors"
        >
          ← EB
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default BiopageLayout;
