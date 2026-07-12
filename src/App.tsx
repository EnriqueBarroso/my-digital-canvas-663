import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "./components/ui/theme-provider";
import Layout from "./components/ui/Layout";
import { ScrollToTop } from "./components/scroll-to-top";
import { lazy, Suspense } from "react";

// Lazy load de páginas — solo se descargan cuando se navega a ellas
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Servicios = lazy(() => import("./pages/Servicios"));
const ServiciosEspana = lazy(() => import("./pages/servicios/Espana"));
const ServiciosCuba = lazy(() => import("./pages/servicios/Cuba"));
const Demo = lazy(() => import("./pages/Demo"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Fallback minimal mientras carga el chunk
// Redirect legado: /cuba (enlaces de campaña ya en circulación) -> /servicios/cuba,
// preservando el hash (ej. #planes) si venía en el enlace original.
const CubaRedirect = () => {
  const { hash } = useLocation();
  return <Navigate to={`/servicios/cuba${hash}`} replace />;
};

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Index />} />
                <Route path="/sobre-mi" element={<About />} />
                <Route path="/proyecto/:slug" element={<ProjectDetail />} />
                <Route path="*" element={<NotFound />} />
              </Route>
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/servicios/espana" element={<ServiciosEspana />} />
              <Route path="/servicios/cuba" element={<ServiciosCuba />} />
              <Route path="/cuba" element={<CubaRedirect />} />
              <Route path="/demo" element={<Demo />} />
            </Routes>
          </Suspense>
          <ScrollToTop />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;