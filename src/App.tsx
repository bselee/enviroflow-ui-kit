import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";
import ControllersPage from "./pages/ControllersPage";
import AutomationsPage from "./pages/AutomationsPage";
import WorkflowBuilderPage from "./pages/WorkflowBuilderPage";
import SettingsPage from "./pages/SettingsPage";
import LogoGallery from "./pages/LogoGallery";
import AppLayout from "./components/layout/AppLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          
          {/* Protected routes with AppLayout */}
          <Route path="/dashboard" element={<AppLayout><DashboardPage /></AppLayout>} />
          <Route path="/controllers" element={<AppLayout><ControllersPage /></AppLayout>} />
          <Route path="/automations" element={<AppLayout><AutomationsPage /></AppLayout>} />
          <Route path="/automations/builder" element={<AppLayout><WorkflowBuilderPage /></AppLayout>} />
          <Route path="/automations/builder/:id" element={<AppLayout><WorkflowBuilderPage /></AppLayout>} />
          <Route path="/settings" element={<AppLayout><SettingsPage /></AppLayout>} />
          <Route path="/logos" element={<LogoGallery />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
