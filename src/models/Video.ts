
// Mock Video model
// In a real application, this would be a MongoDB schema using Mongoose

export interface Video {
  id: string;
  userId: string;
  title: string;
  description?: string;
  prompt?: string;
  sourceImageUrl?: string;
  videoUrl: string;
  thumbnailUrl: string;
  duration: number; // in seconds
  status: 'draft' | 'processing' | 'published';
  visibility: 'public' | 'unlisted' | 'private';
  tags: string[];
  cloudinaryPublicId?: string;
  youtubeVideoId?: string;
  stats: {
    views: number;
    likes: number;
    shares: number;
    comments: number;
  };
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
}

// Mock data and functions to simulate a database

const mockVideos: Video[] = [
  {
    id: '1',
    userId: '1',
    title: 'Sunset at the Beach',
    description: 'A beautiful sunset view at a tropical beach with palm trees.',
    prompt: 'A cinematic view of sunset at a tropical beach with palm trees silhouettes, golden hour, waves gently crashing on the shore',
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    thumbnailUrl: 'https://source.unsplash.com/random/1080x1920/?sunset,beach',
    duration: 15,
    status: 'published',
    visibility: 'public',
    tags: ['nature', 'sunset', 'beach', 'relaxing'],
    cloudinaryPublicId: 'videos/user1/sunset-beach',
    youtubeVideoId: 'abc123',
    stats: {
      views: 1250,
      likes: 85,
      shares: 12,
      comments: 7,
    },
    createdAt: new Date('2023-04-15T10:30:00Z'),
    updatedAt: new Date('2023-04-15T11:15:00Z'),
    publishedAt: new Date('2023-04-15T11:30:00Z'),
  },
  {
    id: '2',
    userId: '1',
    title: 'Urban Timelapse',
    description: 'A fast-paced timelapse of a busy city street.',
    prompt: 'Create a timelapse of a busy urban street with cars, pedestrians, and city lights at dusk turning to night',
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    thumbnailUrl: 'https://source.unsplash.com/random/1080x1920/?city,night',
    duration: 20,
    status: 'published',
    visibility: 'public',
    tags: ['city', 'urban', 'timelapse', 'night'],
    cloudinaryPublicId: 'videos/user1/urban-timelapse',
    youtubeVideoId: 'def456',
    stats: {
      views: 876,
      likes: 42,
      shares: 8,
      comments: 3,
    },
    createdAt: new Date('2023-04-10T14:20:00Z'),
    updatedAt: new Date('2023-04-10T15:00:00Z'),
    publishedAt: new Date('2023-04-10T15:10:00Z'),
  },
  {
    id: '3',
    userId: '1',
    title: 'Coffee Art Close-up',
    description: 'A detailed close-up of latte art being created.',
    prompt: 'Close-up shot of barista creating latte art, pouring milk into espresso in slow motion',
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    thumbnailUrl: 'https://source.unsplash.com/random/1080x1920/?coffee,latte',
    duration: 18,
    status: 'draft',
    visibility: 'private',
    tags: ['coffee', 'latte', 'art', 'slow-motion'],
    cloudinaryPublicId: 'videos/user1/coffee-art',
    stats: {
      views: 0,
      likes: 0,
      shares: 0,
      comments: 0,
    },
    createdAt: new Date('2023-04-18T09:45:00Z'),
    updatedAt: new Date('2023-04-18T09:45:00Z'),
  },
  {
    id: '4',
    userId: '1',
    title: 'Mountain Sunrise',
    description: 'A breathtaking view of sunrise over mountain peaks.',
    sourceImageUrl: 'https://source.unsplash.com/random/1080x1920/?mountains,sunrise',
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    thumbnailUrl: 'https://source.unsplash.com/random/1080x1920/?mountains,sunrise',
    duration: 12,
    status: 'processing',
    visibility: 'unlisted',
    tags: ['nature', 'mountains', 'sunrise', 'peaceful'],
    cloudinaryPublicId: 'videos/user1/mountain-sunrise',
    stats: {
      views: 0,
      likes: 0,
      shares: 0,
      comments: 0,
    },
    createdAt: new Date('2023-04-20T06:30:00Z'),
    updatedAt: new Date('2023-04-20T06:30:00Z'),
  },
];

// Mock Video functions

export const findVideoById = async (id: string): Promise<Video | null> => {
  const video = mockVideos.find(v => v.id === id);
  return video || null;
};

export const findVideosByUserId = async (userId: string): Promise<Video[]> => {
  return mockVideos.filter(v => v.userId === userId);
};

export const createVideo = async (videoData: Omit<Video, 'id' | 'stats' | 'createdAt' | 'updatedAt'>): Promise<Video> => {
  const newVideo: Video = {
    ...videoData,
    id: (mockVideos.length + 1).toString(),
    stats: {
      views: 0,
      likes: 0,
      shares: 0,
      comments: 0,
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  
  mockVideos.push(newVideo);
  return newVideo;
};

export const updateVideo = async (id: string, updates: Partial<Omit<Video, 'id' | 'createdAt'>>): Promise<Video | null> => {
  const videoIndex = mockVideos.findIndex(v => v.id === id);
  if (videoIndex === -1) return null;
  
  mockVideos[videoIndex] = {
    ...mockVideos[videoIndex],
    ...updates,
    updatedAt: new Date(),
  };
  
  return mockVideos[videoIndex];
};

export const deleteVideo = async (id: string): Promise<boolean> => {
  const videoIndex = mockVideos.findIndex(v => v.id === id);
  if (videoIndex === -1) return false;
  
  mockVideos.splice(videoIndex, 1);
  return true;
};

export const publishVideo = async (id: string): Promise<Video | null> => {
  const videoIndex = mockVideos.findIndex(v => v.id === id);
  if (videoIndex === -1) return null;
  
  mockVideos[videoIndex] = {
    ...mockVideos[videoIndex],
    status: 'published',
    publishedAt: new Date(),
    updatedAt: new Date(),
  };
  
  return mockVideos[videoIndex];
};

export const getVideoStats = async (videoId: string): Promise<Video['stats'] | null> => {
  const video = await findVideoById(videoId);
  return video ? video.stats : null;
};

export const incrementVideoViews = async (videoId: string): Promise<boolean> => {
  const videoIndex = mockVideos.findIndex(v => v.id === videoId);
  if (videoIndex === -1) return false;
  
  mockVideos[videoIndex].stats.views += 1;
  return true;
};
