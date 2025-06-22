import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Home from "@/pages/home";
import SatelliteHacking from "@/pages/satellite-hacking";
import ReverseEngineering from "@/pages/reverse-engineering";
import Leaks from "@/pages/leaks";
import About from "@/pages/about";
import Donation from "@/pages/donation";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/satellite-hacking" component={SatelliteHacking} />
          <Route path="/reverse-engineering" component={ReverseEngineering} />
          <Route path="/leaks" component={Leaks} />
          <Route path="/about" component={About} />
          <Route path="/donation" component={Donation} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="northerntribe-theme">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
