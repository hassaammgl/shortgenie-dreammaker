
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import VideoCard from '@/components/Dashboard/VideoCard';
import { Button } from '@/components/ui/button';
import { PlusCircle, Film, BarChart3, TrendingUp, Users, Clock } from 'lucide-react';
import { findVideosByUserId } from '@/models/Video';
import { useToast } from '@/hooks/use-toast';
import { Video } from '@/models/Video';

// Define stats card data
interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  bgColor?: string;
}

const Dashboard = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  
  // Mock user ID for demo
  const userId = '1';
  
  // Stats cards data
  const statsCards: StatsCardProps[] = [
    {
      title: 'Total Videos',
      value: 16,
      icon: <Film className="text-genie-600 h-5 w-5" />,
      trend: {
        value: 12,
        isPositive: true,
      },
    },
    {
      title: 'Total Views',
      value: '5.2K',
      icon: <BarChart3 className="text-blue-500 h-5 w-5" />,
      trend: {
        value: 8,
        isPositive: true,
      },
    },
    {
      title: 'Trending',
      value: 3,
      icon: <TrendingUp className="text-orange-500 h-5 w-5" />,
      trend: {
        value: 50,
        isPositive: true,
      },
    },
    {
      title: 'Storage Used',
      value: '250MB',
      icon: <Clock className="text-purple-500 h-5 w-5" />,
      trend: {
        value: 10,
        isPositive: false,
      },
    },
  ];
  
  useEffect(() => {
    const fetchVideos = async () => {
      setIsLoading(true);
      try {
        const fetchedVideos = await findVideosByUserId(userId);
        setVideos(fetchedVideos);
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
  
  const handleDeleteVideo = async (id: string) => {
    toast({
      title: 'Video deleted',
      description: 'The video has been successfully deleted.',
    });
    
    // Update UI immediately
    setVideos(videos.filter(video => video.id !== id));
  };
  
  const StatsCard = ({ title, value, icon, trend, bgColor }: StatsCardProps) => (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
          <h3 className="text-2xl font-semibold">{value}</h3>
          
          {trend && (
            <div className="flex items-center mt-2">
              <span className={`text-xs font-medium ${trend.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                {trend.isPositive ? '+' : '-'}{trend.value}%
              </span>
              <span className="text-xs text-muted-foreground ml-1">vs. last month</span>
            </div>
          )}
        </div>
        
        <div className={`p-2 rounded-lg ${bgColor || 'bg-genie-50'}`}>
          {icon}
        </div>
      </div>
    </div>
  );
  
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          
          <Link to="/create-short">
            <Button className="genie-button">
              <PlusCircle className="h-4 w-4 mr-2" />
              Create New Short
            </Button>
          </Link>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {statsCards.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>
        
        {/* Recent Videos */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Recent Videos</h2>
            <Link to="/my-videos" className="text-genie-600 text-sm hover:underline">
              View all
            </Link>
          </div>
          
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
          ) : videos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {videos.map((video) => (
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
            <div className="bg-muted/30 border border-border rounded-lg p-8 text-center">
              <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-4">
                <Film className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-2">No videos yet</h3>
              <p className="text-muted-foreground mb-6">
                Get started by creating your first AI-generated short video.
              </p>
              <Link to="/create-short">
                <Button className="genie-button">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Create New Short
                </Button>
              </Link>
            </div>
          )}
        </div>
        
        {/* Usage Information */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold">Current Plan</h2>
              <p className="text-muted-foreground text-sm">Creator Plan • $24.99/month</p>
            </div>
            <Button variant="outline">Upgrade Plan</Button>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Videos Used</span>
                <span className="text-sm">11/25</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-genie-600 h-2 rounded-full" style={{ width: '44%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Storage Used</span>
                <span className="text-sm">250MB/2GB</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-genie-600 h-2 rounded-full" style={{ width: '12.5%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
