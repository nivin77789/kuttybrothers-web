import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import About from "./components/About";
import Manufacturing from "./components/Manufacturing";
import IBRComponents from "./components/IBRComponents";
import Projects from "./components/Projects";
import OperationMaintenance from "./components/OperationMaintenance";
import ToolsForRent from "./components/ToolsForRent";
import Transports from "./components/Transports";
import Careers from "./components/Careers";
import Contact from "./components/Contact";

// New admin pages
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/saasland">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/ibr-components" element={<IBRComponents />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/operation-maintenance" element={<OperationMaintenance />} />
          <Route path="/tools-for-rent" element={<ToolsForRent />} />
          <Route path="/transports" element={<Transports />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />

          {/* Admin routes */}
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
