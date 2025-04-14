
import { useState } from 'react';
import { Check, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const plans = [
  {
    name: "Starter",
    price: 9.99,
    description: "Perfect for beginners and casual content creators",
    features: [
      "5 AI-generated shorts per month",
      "720p video quality",
      "Basic editing tools",
      "Text-to-video generation",
      "Standard support",
    ],
    limit: "5 videos/month",
    recommended: false,
    buttonText: "Get Started",
  },
  {
    name: "Creator",
    price: 24.99,
    description: "Ideal for active content creators and influencers",
    features: [
      "25 AI-generated shorts per month",
      "1080p video quality",
      "Advanced editing tools",
      "Text & image-to-video generation",
      "Background music library",
      "Priority support",
    ],
    limit: "25 videos/month",
    recommended: true,
    buttonText: "Most Popular",
  },
  {
    name: "Professional",
    price: 49.99,
    description: "For businesses and professional content creators",
    features: [
      "Unlimited AI-generated shorts",
      "4K video quality",
      "All editing tools & effects",
      "Custom brand overlays",
      "Analytics dashboard",
      "API access",
      "24/7 priority support",
    ],
    limit: "Unlimited",
    recommended: false,
    buttonText: "Go Pro",
  }
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  
  return (
    <div id="pricing" className="bg-background py-20 md:py-32 relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-secondary clip-path-slant"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Choose Your Plan</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select the perfect plan for your content creation needs. All plans include our core AI video generation technology.
          </p>
          
          <div className="flex items-center justify-center mt-8">
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-xl overflow-hidden ${
                plan.recommended 
                  ? 'border-2 border-genie-500 shadow-lg shadow-genie-100' 
                  : 'border border-border shadow-md'
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-0 right-0 bg-genie-500 text-white text-center py-1 text-sm font-medium">
                  Recommended
                </div>
              )}
              
              <div className={`p-6 ${plan.recommended ? 'pt-8' : ''}`}>
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">
                    ${billingCycle === 'yearly' ? (plan.price * 0.8).toFixed(2) : plan.price}
                  </span>
                  <span className="text-muted-foreground">
                    /month
                  </span>
                </div>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                
                <Link to="/auth">
                  <Button 
                    className={`w-full ${
                      plan.recommended 
                        ? 'genie-button' 
                        : 'bg-secondary text-foreground hover:bg-secondary/80'
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </Link>
                
                <div className="border-t border-border mt-6 pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-genie-100 flex items-center justify-center mr-2">
                      <span className="text-xs font-bold text-genie-700">{plan.limit.split(' ')[0]}</span>
                    </div>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="flex items-center">
                            <span className="text-sm font-medium">Monthly limit</span>
                            <HelpCircle className="h-3.5 w-3.5 ml-1 text-muted-foreground" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-xs">{plan.limit}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-genie-500 mr-2 shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Need a custom plan for your business?</p>
          <Button className="genie-button-secondary">Contact Sales</Button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
