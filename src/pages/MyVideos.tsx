
import { useState, useEffect } from 'react';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import VideoCard from '@/components/Dashboard/VideoCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlusCircle, Search, Filter, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { findVideosByUserId } from '@/models/Video';
import { Video } from '@/models/Video';
import { useIsMobile } from '@/hooks/use-mobile';

const MyVideos = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [filteredVideos, setFilteredVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  // Mock user ID for demo
  const userId = '1';
  
  useEffect(() => {
    const fetchVideos = async () => {
      setIsLoading(true);
      try {
        const fetchedVideos = await findVideosByUserId(userId);
        setVideos(fetchedVideos);
        setFilteredVideos(fetchedVideos);
      } catch (error) {
        console.error('Error fetching videos:', error);
        toast({
          title: 'Error',
          description: 'Failed to load videos. Please try again.',
          variant: 'destructive',
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchVideos();
  }, [toast, userId]);
  
  useEffect(() => {
    // Filter videos based on search term and status filter
    let result = videos;
    
    if (searchTerm) {
      result = result.filter(video => 
        video.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        (video.description && video.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    if (statusFilter !== 'all') {
      result = result.filter(video => video.status === statusFilter);
    }
    
    setFilteredVideos(result);
  }, [searchTerm, statusFilter, videos]);
  
  const handleDeleteVideo = async (id: string) => {
    toast({
      title: 'Video deleted',
      description: 'The video has been successfully deleted.',
    });
    
    // Update UI immediately
    setVideos(videos.filter(video => video.id !== id));
    setFilteredVideos(filteredVideos.filter(video => video.id !== id));
  };
  
  // Filter drawer component for mobile
  const MobileFilterDrawer = () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <SlidersHorizontal className="h-4 w-4" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="px-4 py-6">
          <h3 className="text-lg font-medium mb-4">Filter Videos</h3>
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="all" onClick={() => setStatusFilter('all')}>All</TabsTrigger>
            <TabsTrigger value="published" onClick={() => setStatusFilter('published')}>Published</TabsTrigger>
            <TabsTrigger value="draft" onClick={() => setStatusFilter('draft')}>Drafts</TabsTrigger>
          </TabsList>
          <Button variant="default" className="w-full mt-4" onClick={() => setStatusFilter('all')}>
            Reset Filters
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">My Videos</h1>
          
          <Link to="/create-short">
            <Button className="genie-button">
              <PlusCircle className="h-4 w-4 mr-2" />
              Create New Short
            </Button>
          </Link>
        </div>
        
        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search videos by title or description..."
              className="pl-9 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {isMobile ? (
            <MobileFilterDrawer />
          ) : (
            <Tabs defaultValue="all" className="w-auto">
              <TabsList>
                <TabsTrigger value="all" onClick={() => setStatusFilter('all')}>All</TabsTrigger>
                <TabsTrigger value="published" onClick={() => setStatusFilter('published')}>Published</TabsTrigger>
                <TabsTrigger value="draft" onClick={() => setStatusFilter('draft')}>Drafts</TabsTrigger>
                <TabsTrigger value="processing" onClick={() => setStatusFilter('processing')}>Processing</TabsTrigger>
              </TabsList>
            </Tabs>
          )}
        </div>
        
        {/* Videos Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-card animate-pulse rounded-lg overflow-hidden">
                <div className="aspect-[9/16] bg-muted"></div>
                <div className="p-4">
                  <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-muted rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVideos.map((video) => (
              <VideoCard 
                key={video.id} 
                video={{
                  id: video.id,
                  title: video.title,
                  thumbnailUrl: video.thumbnailUrl,
                  duration: `${Math.floor(video.duration / 60)}:${(video.duration % 60).toString().padStart(2, '0')}`,
                  createdAt: video.createdAt.toISOString(),
                  views: video.stats.views,
                  status: video.status,
                }}
                onDelete={handleDeleteVideo}
              />
            ))}
          </div>
        ) : (
          <div className="glass-card p-8 text-center">
            <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-4">
              <Filter className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium mb-2">No videos found</h3>
            <p className="text-muted-foreground mb-6">
              {searchTerm || statusFilter !== 'all' 
                ? "Try adjusting your search or filters"
                : "Get started by creating your first AI-generated short video"}
            </p>
            {!searchTerm && statusFilter === 'all' && (
              <Link to="/create-short">
                <Button className="genie-button">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Create New Short
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default MyVideos;
