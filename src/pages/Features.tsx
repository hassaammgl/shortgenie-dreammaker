
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Upload, 
  Wand2, 
  PenLine, 
  Share2, 
  BarChart, 
  Zap, 
  Download,
  Sparkles
} from 'lucide-react';

const Features = () => {
  const mainFeatures = [
    {
      icon: <Wand2 className="h-12 w-12 text-genie-600" />,
      title: "Text-to-Video Generation",
      description: "Enter a text prompt and watch as our AI transforms your words into engaging short-form videos perfect for YouTube Shorts. Our algorithms understand context, tone, and style to create compelling content."
    },
    {
      icon: <Upload className="h-12 w-12 text-genie-600" />,
      title: "Image-to-Video Creation",
      description: "Upload your images and let our AI bring them to life with motion, effects, and transitions optimized for vertical viewing. Turn static assets into dynamic stories in just seconds."
    },
    {
      icon: <PenLine className="h-12 w-12 text-genie-600" />,
      title: "Professional Editing Suite",
      description: "Fine-tune your shorts with our intuitive editing tools. Trim clips, add background music, adjust pacing, and apply filters with just a few clicks. No professional video editing experience required."
    }
  ];
  
  const additionalFeatures = [
    {
      icon: <Code className="h-8 w-8 text-genie-600" />,
      title: "Custom Overlays",
      description: "Add your branding, subtitles, and custom effects to make your videos stand out."
    },
    {
      icon: <Share2 className="h-8 w-8 text-genie-600" />,
      title: "One-Click Publishing",
      description: "Seamlessly share your finished shorts to YouTube or download them for posting on multiple platforms."
    },
    {
      icon: <BarChart className="h-8 w-8 text-genie-600" />,
      title: "Performance Analytics",
      description: "Track how your shorts perform with comprehensive analytics on views, engagement, and audience retention."
    },
    {
      icon: <Zap className="h-8 w-8 text-genie-600" />,
      title: "Lightning-Fast Generation",
      description: "Generate professional-quality shorts in seconds, not hours. Save time while creating more engaging content."
    },
    {
      icon: <Download className="h-8 w-8 text-genie-600" />,
      title: "Batch Exports",
      description: "Create and export multiple shorts at once for your content calendar."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-genie-600" />,
      title: "Advanced Effects",
      description: "Access a library of transitions, animations, and visual effects to enhance your videos."
    }
  ];
  
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <div className="bg-genie-600 text-white rounded-lg w-8 h-8 flex items-center justify-center mr-2">
                  <span className="font-bold">SG</span>
                </div>
                <span className="font-bold text-xl">ShortGenie</span>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/features" className="text-genie-600 font-medium hover:text-genie-700 transition-colors">Features</Link>
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
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Powerful Features to Transform Your Content</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            ShortGenie gives you everything you need to create, edit, and share stunning YouTube Shorts without any video editing skills.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/auth">
              <Button className="genie-button" size="lg">
                Start Creating
              </Button>
            </Link>
            <Link to="/pricing">
              <Button className="genie-button-secondary" size="lg">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Main Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Core Capabilities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our powerful AI tools make video creation simple, fast, and accessible to everyone.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {mainFeatures.map((feature, index) => (
              <div key={index} className="genie-card flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-genie-50 rounded-2xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How ShortGenie Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Creating viral-worthy shorts has never been easier. Our streamlined process gets you from idea to published video in minutes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-genie-100 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-genie-700">1</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Input Your Ideas</h3>
              <p className="text-sm text-muted-foreground">Type your prompt or upload images that tell your story.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-genie-100 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-genie-700">2</span>
              </div>
              <h3 className="text-lg font-medium mb-2">AI Generation</h3>
              <p className="text-sm text-muted-foreground">Our AI creates a professional short form video based on your input.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-genie-100 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-genie-700">3</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Customize & Edit</h3>
              <p className="text-sm text-muted-foreground">Fine-tune your video with our easy-to-use editing tools.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-genie-100 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-genie-700">4</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Publish & Share</h3>
              <p className="text-sm text-muted-foreground">Export your short and publish it directly to your platforms.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">More Powerful Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the full suite of tools designed to make your content creation process seamless and effective.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="p-6 bg-card border border-border rounded-lg">
                <div className="flex items-start">
                  <div className="p-2 bg-genie-50 rounded-lg mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Content?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join thousands of creators who are already using ShortGenie to produce engaging Shorts that captivate their audience.
          </p>
          
          <Link to="/auth">
            <Button className="genie-button" size="lg">
              Try ShortGenie Free
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-secondary border-t border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <div className="bg-genie-600 text-white rounded-lg w-8 h-8 flex items-center justify-center mr-2">
                  <span className="font-bold">SG</span>
                </div>
                <span className="font-bold text-xl">ShortGenie</span>
              </div>
              <p className="text-muted-foreground mb-4">
                AI-powered YouTube Shorts creation platform. Turn your ideas into engaging videos in seconds.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Pages</h3>
              <ul className="space-y-3">
                <li><Link to="/features" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link></li>
                <li><Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</Link></li>
                <li><Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
                <li><Link to="/support" className="text-muted-foreground hover:text-foreground transition-colors">Support</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li><a href="mailto:support@shortgenie.com" className="text-muted-foreground hover:text-foreground transition-colors">support@shortgenie.com</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} ShortGenie. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Features;
