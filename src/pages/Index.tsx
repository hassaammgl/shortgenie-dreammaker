
import { Link } from 'react-router-dom';
import Hero from '@/components/LandingPage/Hero';
import Features from '@/components/LandingPage/Features';
import Pricing from '@/components/LandingPage/Pricing';
import Footer from '@/components/LandingPage/Footer';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-genie-600 text-white rounded-lg w-8 h-8 flex items-center justify-center mr-2">
                <span className="font-bold">SG</span>
              </div>
              <span className="font-bold text-xl">ShortGenie</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/features" className="text-foreground hover:text-genie-600 transition-colors">Features</Link>
              <Link to="/pricing" className="text-foreground hover:text-genie-600 transition-colors">Pricing</Link>
              <Link to="/blog" className="text-foreground hover:text-genie-600 transition-colors">Blog</Link>
              <Link to="/support" className="text-foreground hover:text-genie-600 transition-colors">Support</Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link to="/auth" className="text-foreground hover:text-genie-600 transition-colors">
                Log in
              </Link>
              <Link to="/auth">
                <Button className="genie-button">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
