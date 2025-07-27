import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Background image with overlay */}
      <div 
        className="fixed inset-0 opacity-5"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <Navigation />
      <HeroSection />
      
      {/* Placeholder for your React component */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Your React component will go here */}
          <div className="text-center text-muted-foreground">
            <p>Your React component insertion point</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
