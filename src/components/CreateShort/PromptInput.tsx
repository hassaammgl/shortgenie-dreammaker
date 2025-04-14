
import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Wand2, RefreshCw } from 'lucide-react';

interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const promptExamples = [
  "A serene sunset over a tropical beach with palm trees swaying in the breeze",
  "A fast-paced urban timelapse showing a day in the life of a busy city",
  "A close-up of hands creating pottery on a spinning wheel",
  "An inspiring montage of athletes training for competition",
  "A calming nature walkthrough of a misty forest at dawn"
];

const PromptInput = ({ value, onChange, placeholder }: PromptInputProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  
  const generateRandomPrompt = () => {
    setIsGenerating(true);
    
    // Simulate loading
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * promptExamples.length);
      onChange(promptExamples[randomIndex]);
      setIsGenerating(false);
    }, 800);
  };
  
  return (
    <div className="space-y-4">
      <div className="relative">
        <Textarea
          placeholder={placeholder || "Describe your video..."}
          className="h-32 resize-none genie-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        
        <div className="absolute right-3 bottom-3">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={generateRandomPrompt}
            disabled={isGenerating}
            className="h-8 text-muted-foreground"
          >
            {isGenerating ? (
              <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <Wand2 className="h-4 w-4 mr-2" />
            )}
            {isGenerating ? 'Generating...' : 'Inspire me'}
          </Button>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2">
        <span className="text-sm text-muted-foreground">Popular:</span>
        {['Cinematic', 'Nature', 'Urban', 'Timelapse', 'Slow motion'].map((tag) => (
          <Button
            key={tag}
            type="button"
            variant="outline"
            size="sm"
            className="h-7 text-xs"
            onClick={() => onChange(value ? `${value}, ${tag.toLowerCase()}` : tag)}
          >
            {tag}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default PromptInput;
