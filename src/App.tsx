import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ui/theme-provider";
import Layout from "./components/ui/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ScrollToTop } from "./components/scroll-to-top";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme"> {/* <--- Tema por defecto Dark */}
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Rutas con Layout (Navbar/Footer visible) */}
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            {/* Si quisieras una ruta SIN navbar (ej: login), la pondrías aquí fuera */}
          </Routes>
          
          <ScrollToTop />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
