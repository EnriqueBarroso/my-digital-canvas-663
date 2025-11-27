import { Outlet } from "react-router-dom";
// Asumo que crearás estos componentes pronto o ya los tienes en Index
// import Navbar from "./Navbar"; 
// import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Navbar />  <-- Aquí irá tu menú fijo */}
      
      <main className="flex-grow">
        <Outlet /> {/* Aquí se renderiza Index o NotFound dinámicamente */}
      </main>

      {/* <Footer /> <-- Aquí irá tu pie de página */}
    </div>
  );
};

export default Layout;