
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Sparkles, Video, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative overflow-hidden bg-background pb-20 pt-16 md:pb-32 md:pt-24">
      {/* Background gradient orbs */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-genie-200 opacity-20 blur-3xl"></div>
      <div className="absolute top-1/2 -left-48 h-96 w-96 rounded-full bg-genie-300 opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center rounded-full bg-genie-50 px-3 py-1 text-sm font-medium text-genie-700 mb-6 border border-genie-200">
            <Sparkles className="mr-1 h-3.5 w-3.5" />
            <span>AI-Powered YouTube Shorts Creation</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl gradient-text">
            Turn Ideas Into Engaging YouTube Shorts in Seconds
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            ShortGenie uses advanced AI to transform your text prompts or images into 
            professional, eye-catching YouTube Shorts that captivate your audience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link to="/auth">
              <Button 
                className="genie-button text-base"
                size="lg"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Start Creating
                <ArrowRight className={`ml-2 h-4 w-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
              </Button>
            </Link>
            <Link to="#features">
              <Button className="genie-button-secondary text-base" size="lg">
                See How It Works
              </Button>
            </Link>
          </div>
          
          {/* Preview Image */}
          <div className="relative max-w-5xl w-full">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border border-genie-100 animate-float">
              <div className="aspect-video bg-genie-900/10 w-full relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="vertical-video-container w-[320px] bg-gradient-to-b from-genie-900 to-genie-700 rounded-lg overflow-hidden shadow-inner flex items-center justify-center">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9')] bg-cover bg-center mix-blend-overlay"></div>
                    <div className="z-10 text-center p-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                        <Video className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">Your AI Short</h3>
                      <p className="text-white/80 text-sm">Generated in seconds</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 h-64 w-64 rounded-full bg-genie-100 opacity-50 blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 h-64 w-64 rounded-full bg-genie-200 opacity-50 blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
