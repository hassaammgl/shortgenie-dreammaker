
import { MessageSquare, Upload, Edit, Share2, BarChart, Zap } from 'lucide-react';

const features = [
  {
    icon: <MessageSquare className="h-10 w-10 text-genie-600" />,
    title: "Text-to-Video Generation",
    description: "Enter a text prompt and watch as our AI transforms your words into engaging short-form videos perfect for YouTube Shorts."
  },
  {
    icon: <Upload className="h-10 w-10 text-genie-600" />,
    title: "Image-to-Video Creation",
    description: "Upload your images and let our AI bring them to life with motion, effects, and transitions optimized for vertical viewing."
  },
  {
    icon: <Edit className="h-10 w-10 text-genie-600" />,
    title: "Easy Editing Tools",
    description: "Fine-tune your shorts with our intuitive editing tools. Trim clips, add background music, and adjust pacing with just a few clicks."
  },
  {
    icon: <Share2 className="h-10 w-10 text-genie-600" />,
    title: "One-Click Publishing",
    description: "Seamlessly share your finished shorts to YouTube or download them for posting on multiple platforms."
  },
  {
    icon: <BarChart className="h-10 w-10 text-genie-600" />,
    title: "Performance Analytics",
    description: "Track how your shorts perform with comprehensive analytics on views, engagement, and audience retention."
  },
  {
    icon: <Zap className="h-10 w-10 text-genie-600" />,
    title: "Lightning-Fast Generation",
    description: "Generate professional-quality shorts in seconds, not hours. Save time while creating more engaging content."
  }
];

const Features = () => {
  return (
    <div id="features" className="bg-secondary py-20 md:py-32 relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-background clip-path-slant"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">How ShortGenie Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered platform makes creating YouTube Shorts effortless, allowing you to focus on what matters—captivating your audience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="genie-card flex flex-col">
              <div className="mb-4 p-3 w-16 h-16 flex items-center justify-center rounded-lg bg-genie-50">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-flex items-center rounded-full bg-genie-50 px-4 py-1.5 text-sm font-medium text-genie-700 mb-6 border border-genie-200">
            <span>Powered by advanced AI & custom algorithms</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mt-6">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-genie-100 flex items-center justify-center">
                <span className="text-xl font-bold text-genie-700">1</span>
              </div>
              <div className="ml-4">
                <h4 className="font-medium">Enter Your Prompt</h4>
                <p className="text-sm text-muted-foreground">Text or image input</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-genie-100 flex items-center justify-center">
                <span className="text-xl font-bold text-genie-700">2</span>
              </div>
              <div className="ml-4">
                <h4 className="font-medium">AI Generation</h4>
                <p className="text-sm text-muted-foreground">Our models work their magic</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-genie-100 flex items-center justify-center">
                <span className="text-xl font-bold text-genie-700">3</span>
              </div>
              <div className="ml-4">
                <h4 className="font-medium">Preview & Edit</h4>
                <p className="text-sm text-muted-foreground">Make final adjustments</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-genie-100 flex items-center justify-center">
                <span className="text-xl font-bold text-genie-700">4</span>
              </div>
              <div className="ml-4">
                <h4 className="font-medium">Share & Analyze</h4>
                <p className="text-sm text-muted-foreground">Publish and track performance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
