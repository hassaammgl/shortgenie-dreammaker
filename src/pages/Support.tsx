
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { HelpCircle, Mail, Phone, MessageSquare, Search, ChevronDown, ChevronUp } from 'lucide-react';

const Support = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };
  
  const faqs = [
    {
      question: "How does the AI video generation work?",
      answer: "Our AI video generation technology uses advanced machine learning models that have been trained on millions of videos. When you input text or images, our system analyzes your content and creates a narrative structure, then generates appropriate visuals, transitions, and motion to create a compelling short-form video optimized for YouTube Shorts."
    },
    {
      question: "Can I edit the videos after they're generated?",
      answer: "Yes! After your video is generated, you can use our built-in editing tools to customize it. You can trim clips, add text overlays, change the background music, adjust the pacing, and apply visual effects. Our goal is to give you both the convenience of AI generation and the control of manual editing."
    },
    {
      question: "What video formats and resolutions are supported?",
      answer: "ShortGenie creates videos in vertical format (9:16 aspect ratio) optimized for YouTube Shorts, with resolutions up to 1080x1920 pixels (1080p). Videos can be exported in MP4 format, which is compatible with all major social media platforms."
    },
    {
      question: "How many videos can I create per month?",
      answer: "The number of videos you can create depends on your subscription plan. Our Starter plan includes 5 videos per month, Creator plan includes 25 videos, and our Professional plan offers unlimited video creation. Check our Pricing page for more details."
    },
    {
      question: "Do I own the rights to the videos I create?",
      answer: "Yes, you fully own all rights to the videos you create with ShortGenie. You're free to use them for commercial purposes, monetize them on YouTube, or share them across any platform. However, please note that if you use any premium stock content from our library, those assets remain subject to their respective licensing terms."
    },
    {
      question: "Can I directly publish to YouTube from ShortGenie?",
      answer: "Yes! ShortGenie offers direct integration with YouTube. After creating your video, you can authorize your YouTube account and publish directly to your channel as a Short, complete with title, description, and tags, all without leaving the platform."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover) as well as PayPal. All payments are processed securely through industry-standard payment processors with encryption."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 7-day free trial that gives you access to our Creator plan features, including up to 5 video creations. No credit card is required to start your trial. You can upgrade to a paid plan at any time during or after your trial."
    }
  ];
  
  const categories = [
    {
      title: "Getting Started",
      icon: <HelpCircle className="h-8 w-8 text-genie-600" />,
      description: "Learn the basics of ShortGenie and how to create your first video"
    },
    {
      title: "Account & Billing",
      icon: <Mail className="h-8 w-8 text-genie-600" />,
      description: "Manage your subscription, payment information, and account settings"
    },
    {
      title: "Video Creation",
      icon: <MessageSquare className="h-8 w-8 text-genie-600" />,
      description: "Tips and troubleshooting for the video creation process"
    },
    {
      title: "Publishing & Sharing",
      icon: <Phone className="h-8 w-8 text-genie-600" />,
      description: "Learn how to publish your videos to YouTube and other platforms"
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
              <Link to="/features" className="text-foreground hover:text-genie-600 transition-colors">Features</Link>
              <Link to="/pricing" className="text-foreground hover:text-genie-600 transition-colors">Pricing</Link>
              <Link to="/blog" className="text-foreground hover:text-genie-600 transition-colors">Blog</Link>
              <Link to="/support" className="text-genie-600 font-medium hover:text-genie-700 transition-colors">Support</Link>
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
      
      {/* Header */}
      <header className="py-12 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 gradient-text">How Can We Help You?</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Find answers to common questions or reach out to our support team.
            </p>
            
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                type="text"
                placeholder="Search for answers..."
                className="genie-input pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>
      
      {/* Help Categories */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Browse Help Topics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-card rounded-lg border border-border p-6 text-center hover:shadow-md transition-shadow">
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-genie-50 rounded-full mb-4">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                <Link to="#" className="text-genie-600 hover:text-genie-700 text-sm font-medium">
                  View articles →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-card rounded-lg border border-border overflow-hidden"
              >
                <button
                  className="w-full p-4 flex justify-between items-center text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>
                
                {openFaq === index && (
                  <div className="p-4 pt-0 border-t border-border">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Options */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Still Need Help?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card rounded-lg border border-border p-6 text-center">
              <Mail className="h-10 w-10 text-genie-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email Support</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get a response within 24 hours, 7 days a week.
              </p>
              <a 
                href="mailto:support@shortgenie.com" 
                className="text-genie-600 hover:text-genie-700 text-sm font-medium"
              >
                support@shortgenie.com
              </a>
            </div>
            
            <div className="bg-card rounded-lg border border-border p-6 text-center">
              <MessageSquare className="h-10 w-10 text-genie-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Available Monday-Friday, 9am-5pm EST.
              </p>
              <Button variant="outline" className="w-full">
                Start Chat
              </Button>
            </div>
            
            <div className="bg-card rounded-lg border border-border p-6 text-center">
              <Phone className="h-10 w-10 text-genie-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone Support</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Premium & Enterprise plans only.
              </p>
              <Button variant="outline" className="w-full">
                Request Callback
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-card rounded-xl p-8 border border-border">
            <h2 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h2>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input type="text" className="genie-input" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" className="genie-input" placeholder="your.email@example.com" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Subject</label>
                <input type="text" className="genie-input" placeholder="How can we help you?" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea 
                  className="genie-input min-h-[150px]" 
                  placeholder="Please describe your issue in detail..."
                ></textarea>
              </div>
              
              <div className="flex items-center">
                <input type="checkbox" id="priority" className="mr-2" />
                <label htmlFor="priority" className="text-sm">I'm an existing customer with an urgent issue</label>
              </div>
              
              <div className="pt-2">
                <Button className="genie-button w-full">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
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

export default Support;
