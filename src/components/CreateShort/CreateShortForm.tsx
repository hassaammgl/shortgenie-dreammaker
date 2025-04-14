
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessageSquare, Upload } from 'lucide-react';
import PromptInput from './PromptInput';
import ImageUploader from './ImageUploader';
import { useToast } from '@/hooks/use-toast';

interface CreateShortFormProps {
  onGenerate: (data: { prompt?: string, image?: File }) => Promise<void>;
  isGenerating: boolean;
}

const CreateShortForm = ({ onGenerate, isGenerating }: CreateShortFormProps) => {
  const [promptMethod, setPromptMethod] = useState<'text' | 'image'>('text');
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (promptMethod === 'text' && !prompt.trim()) {
        toast({
          title: 'Please enter a prompt',
          description: 'A text prompt is required to generate a video.',
          variant: 'destructive'
        });
        return;
      }
      
      if (promptMethod === 'image' && !image) {
        toast({
          title: 'Please upload an image',
          description: 'An image is required to generate a video.',
          variant: 'destructive'
        });
        return;
      }
      
      if (promptMethod === 'text') {
        await onGenerate({ prompt });
      } else {
        await onGenerate({ image: image! });
      }
    } catch (error) {
      toast({
        title: 'Generation failed',
        description: 'There was an error generating your video. Please try again.',
        variant: 'destructive'
      });
      console.error(error);
    }
  };
  
  const handlePromptChange = (value: string) => {
    setPrompt(value);
  };
  
  const handleImageUpload = (file: File) => {
    setImage(file);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Create a New Short</h2>
        
        <Tabs
          defaultValue="text"
          value={promptMethod}
          onValueChange={(v) => setPromptMethod(v as 'text' | 'image')}
          className="w-full"
        >
          <TabsList className="grid grid-cols-2 mb-6">
            <TabsTrigger value="text" className="flex items-center">
              <MessageSquare className="h-4 w-4 mr-2" />
              Text to Video
            </TabsTrigger>
            <TabsTrigger value="image" className="flex items-center">
              <Upload className="h-4 w-4 mr-2" />
              Image to Video
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="text" className="mt-0">
            <PromptInput
              value={prompt}
              onChange={handlePromptChange}
              placeholder="Describe the short video you want to create..."
            />
          </TabsContent>
          
          <TabsContent value="image" className="mt-0">
            <ImageUploader onUpload={handleImageUpload} />
          </TabsContent>
        </Tabs>
        
        <div className="mt-6 pt-6 border-t border-border">
          <div className="flex justify-between items-center">
            <div className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Tip:</span> For best results, be specific about what you want to see in your video.
            </div>
            
            <Button 
              type="submit" 
              className="genie-button"
              disabled={isGenerating}
            >
              {isGenerating ? 'Generating...' : 'Generate Short'}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateShortForm;
