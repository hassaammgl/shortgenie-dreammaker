
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import CreateShortForm from '@/components/CreateShort/CreateShortForm';
import VideoPlayer from '@/components/VideoPreview/VideoPlayer';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Save, Share2, ArrowLeft, Music, Cog } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useVideoGeneration } from '@/api/generateVideo';

const CreateShort = () => {
  const [step, setStep] = useState<'create' | 'preview'>('create');
  const [videoData, setVideoData] = useState<{ videoUrl: string; thumbnailUrl: string } | null>(null);
  const [progress, setProgress] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [videoTitle, setVideoTitle] = useState('My Awesome Short');
  const [videoDescription, setVideoDescription] = useState('');
  const [videoTags, setVideoTags] = useState('');
  
  const navigate = useNavigate();
  const { toast } = useToast();
  const { generateVideoFromPrompt, generateVideoFromImage } = useVideoGeneration();
  
  const handleGenerate = async (data: { prompt?: string, image?: File }) => {
    setIsGenerating(true);
    setProgress(0);
    
    try {
      let result;
      
      if (data.prompt) {
        result = await generateVideoFromPrompt(data.prompt, (p) => setProgress(p));
        setVideoTitle(`AI Short: ${data.prompt.slice(0, 30)}${data.prompt.length > 30 ? '...' : ''}`);
      } else if (data.image) {
        result = await generateVideoFromImage(data.image, (p) => setProgress(p));
        setVideoTitle(`Image Short: ${data.image.name.split('.')[0]}`);
      } else {
        throw new Error('Either prompt or image is required');
      }
      
      setVideoData(result);
      setStep('preview');
    } catch (error) {
      console.error('Generation error:', error);
    } finally {
      setIsGenerating(false);
    }
  };
  
  const handleSave = async () => {
    toast({
      title: 'Short video saved',
      description: 'Your video has been saved to your library.',
    });
    
    // Redirect to dashboard
    navigate('/dashboard');
  };
  
  const handleShare = async () => {
    toast({
      title: 'Video share link copied',
      description: 'The link to your video has been copied to clipboard.',
    });
  };
  
  const handleBackToCreate = () => {
    setStep('create');
  };
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {step === 'create' ? (
          <>
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">Create New Short</h1>
              <Button variant="outline" onClick={() => navigate('/dashboard')}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </div>
            
            <CreateShortForm onGenerate={handleGenerate} isGenerating={isGenerating} />
            
            {isGenerating && (
              <div className="mt-8 bg-card border border-border rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">Generating your video</h3>
                  <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Analyzing prompt', 'Creating scenes', 'Rendering video', 'Finalizing'].map((step, index) => (
                    <div 
                      key={index} 
                      className={`rounded-lg border p-3 text-center text-sm ${
                        progress >= (index + 1) * 25 
                          ? 'border-genie-500 text-genie-700 bg-genie-50' 
                          : 'border-border text-muted-foreground'
                      }`}
                    >
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">Preview & Edit</h1>
              <Button variant="outline" onClick={handleBackToCreate}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Create
              </Button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Video Preview */}
              <div className="lg:col-span-2">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h2 className="text-lg font-semibold mb-4">Video Preview</h2>
                  
                  <div className="vertical-video-container mx-auto bg-black rounded-lg overflow-hidden">
                    {videoData && (
                      <VideoPlayer 
                        src={videoData.videoUrl} 
                        poster={videoData.thumbnailUrl}
                        autoPlay
                      />
                    )}
                  </div>
                </div>
              </div>
              
              {/* Edit Panel */}
              <div className="lg:col-span-1">
                <div className="bg-card border border-border rounded-lg">
                  <Tabs defaultValue="details">
                    <TabsList className="w-full grid grid-cols-3">
                      <TabsTrigger value="details">Details</TabsTrigger>
                      <TabsTrigger value="audio">Audio</TabsTrigger>
                      <TabsTrigger value="settings">Settings</TabsTrigger>
                    </TabsList>
                    
                    <div className="p-6">
                      <TabsContent value="details" className="mt-0 space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="title">Title</Label>
                          <Input
                            id="title"
                            value={videoTitle}
                            onChange={(e) => setVideoTitle(e.target.value)}
                            className="genie-input"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="description">Description</Label>
                          <Textarea
                            id="description"
                            placeholder="Describe your video..."
                            value={videoDescription}
                            onChange={(e) => setVideoDescription(e.target.value)}
                            className="genie-input h-24"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="tags">Tags (comma separated)</Label>
                          <Input
                            id="tags"
                            placeholder="e.g., nature, sunset, cinematic"
                            value={videoTags}
                            onChange={(e) => setVideoTags(e.target.value)}
                            className="genie-input"
                          />
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="audio" className="mt-0">
                        <div className="flex items-center justify-center h-48 text-center">
                          <div>
                            <Music className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                            <h3 className="font-medium mb-2">Add Background Music</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                              Choose from our library of royalty-free tracks
                            </p>
                            <Button className="genie-button-secondary">
                              Browse Music Library
                            </Button>
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="settings" className="mt-0">
                        <div className="flex items-center justify-center h-48 text-center">
                          <div>
                            <Cog className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                            <h3 className="font-medium mb-2">Advanced Settings</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                              Adjust quality, format, and other settings
                            </p>
                            <Button className="genie-button-secondary">
                              Open Settings
                            </Button>
                          </div>
                        </div>
                      </TabsContent>
                    </div>
                  </Tabs>
                </div>
                
                <div className="mt-6 flex gap-4">
                  <Button className="genie-button flex-1" onClick={handleSave}>
                    <Save className="h-4 w-4 mr-2" />
                    Save Video
                  </Button>
                  <Button className="genie-button-secondary flex-1" onClick={handleShare}>
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default CreateShort;
