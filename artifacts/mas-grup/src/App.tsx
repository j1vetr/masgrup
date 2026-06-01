import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import HomePage from "@/pages/HomePage";
import HakkimizdaPage from "@/pages/HakkimizdaPage";
import HizmetlerimizPage from "@/pages/HizmetlerimizPage";
import AkademiPage from "@/pages/AkademiPage";
import KurumsalPage from "@/pages/KurumsalPage";
import IletisimPage from "@/pages/IletisimPage";

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/hakkimizda" component={HakkimizdaPage} />
          <Route path="/hizmetlerimiz" component={HizmetlerimizPage} />
          <Route path="/akademi" component={AkademiPage} />
          <Route path="/kurumsal" component={KurumsalPage} />
          <Route path="/iletisim" component={IletisimPage} />
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
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
