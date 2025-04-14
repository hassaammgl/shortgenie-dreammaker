
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, X, HelpCircle } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  
  const plans = [
    {
      name: "Starter",
      description: "Perfect for beginners and casual content creators",
      monthlyPrice: 9.99,
      yearlyPrice: 99.99,
      features: [
        { included: true, text: "5 AI-generated shorts per month" },
        { included: true, text: "720p video quality" },
        { included: true, text: "Basic editing tools" },
        { included: true, text: "Text-to-video generation" },
        { included: false, text: "Image-to-video generation" },
        { included: false, text: "Background music library" },
        { included: false, text: "Custom brand overlays" },
        { included: false, text: "Analytics dashboard" },
        { included: true, text: "Standard support" },
        { included: false, text: "Priority support" },
      ],
      ctaText: "Get Started",
      popular: false
    },
    {
      name: "Creator",
      description: "Ideal for active content creators and influencers",
      monthlyPrice: 24.99,
      yearlyPrice: 239.99,
      features: [
        { included: true, text: "25 AI-generated shorts per month" },
        { included: true, text: "1080p video quality" },
        { included: true, text: "Advanced editing tools" },
        { included: true, text: "Text-to-video generation" },
        { included: true, text: "Image-to-video generation" },
        { included: true, text: "Background music library" },
        { included: false, text: "Custom brand overlays" },
        { included: true, text: "Basic analytics dashboard" },
        { included: false, text: "API access" },
        { included: true, text: "Priority support" },
      ],
      ctaText: "Most Popular",
      popular: true
    },
    {
      name: "Professional",
      description: "For businesses and professional content creators",
      monthlyPrice: 49.99,
      yearlyPrice: 479.99,
      features: [
        { included: true, text: "Unlimited AI-generated shorts" },
        { included: true, text: "4K video quality" },
        { included: true, text: "All editing tools & effects" },
        { included: true, text: "Text-to-video generation" },
        { included: true, text: "Image-to-video generation" },
        { included: true, text: "Background music library" },
        { included: true, text: "Custom brand overlays" },
        { included: true, text: "Advanced analytics dashboard" },
        { included: true, text: "API access" },
        { included: true, text: "24/7 priority support" },
      ],
      ctaText: "Go Pro",
      popular: false
    }
  ];
  
  const faqs = [
    {
      question: "Can I change plans later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new pricing will take effect immediately. If you downgrade, the new pricing will take effect at the end of your current billing cycle."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, we offer a 7-day free trial on all plans. No credit card required to start your trial. You can upgrade to a paid plan at any time during or after your trial."
    },
    {
      question: "What happens if I use all my monthly videos?",
      answer: "Once you've used all your monthly video credits, you can purchase additional videos as needed or wait until your credits refresh at the start of your next billing cycle."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. Your account will remain active until the end of your current billing period."
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
              <Link to="/pricing" className="text-genie-600 font-medium hover:text-genie-700 transition-colors">Pricing</Link>
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
      
      {/* Header */}
      <header className="py-12 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 gradient-text">Choose Your Plan</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Select the perfect plan for your content creation needs. All plans include our core AI video generation technology.
            </p>
            
            <div className="flex items-center justify-center">
              <div className="bg-secondary rounded-full p-1 inline-flex">
                <button
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    billingCycle === 'monthly' 
                      ? 'bg-white text-genie-700 shadow-sm' 
                      : 'text-muted-foreground'
                  }`}
                  onClick={() => setBillingCycle('monthly')}
                >
                  Monthly
                </button>
                <button
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors flex items-center ${
                    billingCycle === 'yearly' 
                      ? 'bg-white text-genie-700 shadow-sm' 
                      : 'text-muted-foreground'
                  }`}
                  onClick={() => setBillingCycle('yearly')}
                >
                  Yearly
                  <span className="ml-2 bg-genie-100 text-genie-700 text-xs px-2 py-0.5 rounded-full">
                    Save 20%
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Pricing Cards */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative bg-card rounded-xl border ${
                  plan.popular 
                    ? 'border-2 border-genie-500 shadow-lg' 
                    : 'border-border shadow'
                } overflow-hidden`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-genie-500 text-white text-center py-1 text-sm font-medium">
                    Popular Choice
                  </div>
                )}
                
                <div className={`p-6 ${plan.popular ? 'pt-8' : ''}`}>
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-end">
                      <span className="text-3xl font-bold">
                        ${billingCycle === 'yearly' ? plan.yearlyPrice / 12 : plan.monthlyPrice}
                      </span>
                      <span className="text-muted-foreground ml-1">
                        /month
                      </span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <div className="text-sm text-muted-foreground mt-1">
                        Billed as ${plan.yearlyPrice.toFixed(2)} per year
                      </div>
                    )}
                  </div>
                  
                  <Link to="/auth">
                    <Button 
                      className={`w-full ${plan.popular ? 'genie-button' : 'bg-secondary hover:bg-secondary/80'}`}
                    >
                      {plan.ctaText}
                    </Button>
                  </Link>
                  
                  <div className="mt-6 space-y-3">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-genie-500 mr-2 shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground mr-2 shrink-0" />
                        )}
                        <span className={feature.included ? 'text-foreground' : 'text-muted-foreground'}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Compare Features */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Compare All Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find the perfect plan for your content creation needs
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto bg-card rounded-lg overflow-hidden shadow">
              <thead>
                <tr className="bg-secondary border-b border-border">
                  <th className="px-6 py-4 text-left">Feature</th>
                  <th className="px-6 py-4 text-center">Starter</th>
                  <th className="px-6 py-4 text-center">Creator</th>
                  <th className="px-6 py-4 text-center">Professional</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-6 py-4">Monthly videos</td>
                  <td className="px-6 py-4 text-center">5</td>
                  <td className="px-6 py-4 text-center">25</td>
                  <td className="px-6 py-4 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-6 py-4">Video quality</td>
                  <td className="px-6 py-4 text-center">720p</td>
                  <td className="px-6 py-4 text-center">1080p</td>
                  <td className="px-6 py-4 text-center">Up to 4K</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-6 py-4">Video length</td>
                  <td className="px-6 py-4 text-center">Up to 30 seconds</td>
                  <td className="px-6 py-4 text-center">Up to 60 seconds</td>
                  <td className="px-6 py-4 text-center">Up to 3 minutes</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-6 py-4">Text-to-video</td>
                  <td className="px-6 py-4 text-center">
                    <Check className="h-5 w-5 text-genie-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="h-5 w-5 text-genie-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="h-5 w-5 text-genie-500 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-6 py-4">Image-to-video</td>
                  <td className="px-6 py-4 text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="h-5 w-5 text-genie-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="h-5 w-5 text-genie-500 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-6 py-4">YouTube direct publishing</td>
                  <td className="px-6 py-4 text-center">
                    <Check className="h-5 w-5 text-genie-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="h-5 w-5 text-genie-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="h-5 w-5 text-genie-500 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-6 py-4">Analytics</td>
                  <td className="px-6 py-4 text-center">Basic</td>
                  <td className="px-6 py-4 text-center">Advanced</td>
                  <td className="px-6 py-4 text-center">Enterprise</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">API Access</td>
                  <td className="px-6 py-4 text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="h-5 w-5 text-genie-500 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get answers to the most common questions about our pricing plans
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card rounded-lg border border-border p-6">
                <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Enterprise */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-xl border border-border p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 md:pr-8 mb-6 md:mb-0">
                <h2 className="text-2xl font-bold mb-4">Need a Custom Enterprise Solution?</h2>
                <p className="text-muted-foreground mb-4">
                  For teams and businesses with specific requirements, we offer customized enterprise plans with dedicated support, custom integrations, and volume pricing.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-genie-500 mr-2" />
                    <span>Dedicated account manager</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-genie-500 mr-2" />
                    <span>Custom video branding options</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-genie-500 mr-2" />
                    <span>Advanced team collaboration tools</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-genie-500 mr-2" />
                    <span>API & integration services</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3">
                <Button className="genie-button w-full mb-3">
                  Contact Sales
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Or email us at <a href="mailto:sales@shortgenie.com" className="text-genie-600 hover:underline">sales@shortgenie.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of content creators who are already using ShortGenie
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-card rounded-lg border border-border p-6">
              <p className="mb-4 text-muted-foreground">
                "ShortGenie has completely transformed my content creation process. I can now create engaging YouTube Shorts in minutes instead of hours. The AI understands exactly what I'm looking for."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-genie-100 rounded-full flex items-center justify-center mr-3">
                  <span className="font-medium text-genie-700">AJ</span>
                </div>
                <div>
                  <div className="font-medium">Alex Johnson</div>
                  <div className="text-sm text-muted-foreground">Travel Vlogger</div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg border border-border p-6">
              <p className="mb-4 text-muted-foreground">
                "As a small business owner, I don't have time to learn video editing. ShortGenie helps me create professional-looking Shorts to showcase our products. It's been a game-changer."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-genie-100 rounded-full flex items-center justify-center mr-3">
                  <span className="font-medium text-genie-700">ML</span>
                </div>
                <div>
                  <div className="font-medium">Maria Lopez</div>
                  <div className="text-sm text-muted-foreground">Boutique Owner</div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg border border-border p-6">
              <p className="mb-4 text-muted-foreground">
                "The Creator plan gives me everything I need to maintain a consistent posting schedule. The analytics help me understand what content performs best, and the AI keeps getting better."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-genie-100 rounded-full flex items-center justify-center mr-3">
                  <span className="font-medium text-genie-700">RK</span>
                </div>
                <div>
                  <div className="font-medium">Ryan Kim</div>
                  <div className="text-sm text-muted-foreground">Fitness Influencer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-12 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Content?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Start creating engaging YouTube Shorts today. Choose the plan that's right for you.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/auth">
              <Button className="genie-button" size="lg">
                Get Started for Free
              </Button>
            </Link>
            <Link to="/support">
              <Button variant="outline" size="lg">
                Talk to Sales
              </Button>
            </Link>
          </div>
          
          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required • 7-day free trial • Cancel anytime
          </p>
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

export default Pricing;
