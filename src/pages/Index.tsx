import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Services from "@/components/Services";
import About from "@/components/About";
import ForWhom from "@/components/ForWhom";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Introduction />
        <Services />
        <About />
        <ForWhom />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
