
import { useState, useEffect } from 'react';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Clock, 
  Share2, 
  ThumbsUp,
  MessageSquare, 
  Eye
} from 'lucide-react';
import { 
  Area, 
  AreaChart, 
  Bar, 
  BarChart, 
  CartesianGrid, 
  Legend, 
  Line, 
  LineChart, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis 
} from 'recharts';

const Analytics = () => {
  const [dateRange, setDateRange] = useState('30d');
  
  // Sample data for charts
  const viewsData = [
    { date: '01/04', views: 120 },
    { date: '02/04', views: 140 },
    { date: '03/04', views: 180 },
    { date: '04/04', views: 250 },
    { date: '05/04', views: 310 },
    { date: '06/04', views: 290 },
    { date: '07/04', views: 350 },
    { date: '08/04', views: 400 },
    { date: '09/04', views: 420 },
    { date: '10/04', views: 500 },
    { date: '11/04', views: 650 },
    { date: '12/04', views: 700 },
    { date: '13/04', views: 800 },
    { date: '14/04', views: 950 },
  ];
  
  const engagementData = [
    { name: 'Video 1', likes: 45, comments: 12, shares: 23 },
    { name: 'Video 2', likes: 55, comments: 15, shares: 30 },
    { name: 'Video 3', likes: 20, comments: 5, shares: 10 },
    { name: 'Video 4', likes: 80, comments: 25, shares: 45 },
  ];
  
  const topVideosData = [
    { id: '1', title: 'Sunset at the Beach', views: 1250, engagement: 22.5 },
    { id: '2', title: 'Urban Timelapse', views: 876, engagement: 18.7 },
    { id: '3', title: 'Coffee Art Close-up', views: 540, engagement: 15.3 },
    { id: '4', title: 'Mountain Sunrise', views: 320, engagement: 12.1 },
  ];
  
  const audienceData = [
    { age: '13-17', male: 5, female: 8, other: 2 },
    { age: '18-24', male: 25, female: 30, other: 10 },
    { age: '25-34', male: 38, female: 42, other: 15 },
    { age: '35-44', male: 20, female: 18, other: 8 },
    { age: '45-54', male: 12, female: 10, other: 5 },
    { age: '55+', male: 8, female: 7, other: 3 },
  ];
  
  // Define the stats cards with their data
  const statsCards = [
    { 
      title: 'Total Views', 
      value: '5.2K', 
      icon: <Eye className="h-5 w-5 text-blue-500" />,
      trend: { value: 12.5, isPositive: true },
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    { 
      title: 'Watch Time', 
      value: '160hrs', 
      icon: <Clock className="h-5 w-5 text-purple-500" />,
      trend: { value: 8.3, isPositive: true },
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    { 
      title: 'Engagement', 
      value: '22.4%', 
      icon: <ThumbsUp className="h-5 w-5 text-green-500" />,
      trend: { value: 3.7, isPositive: true },
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    { 
      title: 'Audience', 
      value: '1.8K', 
      icon: <Users className="h-5 w-5 text-orange-500" />,
      trend: { value: 15.2, isPositive: true },
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    },
  ];
  
  // Stats Card Component
  const StatsCard = ({ title, value, icon, trend, bgColor }: any) => (
    <Card className="glass-card">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
            <h3 className="text-2xl font-semibold">{value}</h3>
            
            {trend && (
              <div className="flex items-center mt-2">
                <span className={`text-xs font-medium ${trend.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                  {trend.isPositive ? '+' : '-'}{trend.value}%
                </span>
                <span className="text-xs text-muted-foreground ml-1">vs. last period</span>
              </div>
            )}
          </div>
          
          <div className={`p-2 rounded-lg ${bgColor}`}>
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Analytics</h1>
          
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select date range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="year">Last year</SelectItem>
              <SelectItem value="all">All time</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {statsCards.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>
        
        {/* Main Analytics Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="glass-panel p-1">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="audience">Audience</TabsTrigger>
            <TabsTrigger value="engagement">Engagement</TabsTrigger>
          </TabsList>
          
          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Views Trend</CardTitle>
                <CardDescription>Total video views over time</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={viewsData}>
                    <defs>
                      <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#7c4dff" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#7c4dff" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted/30" />
                    <XAxis dataKey="date" className="text-xs text-muted-foreground" />
                    <YAxis className="text-xs text-muted-foreground" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'var(--background)',  
                        borderColor: 'var(--border)', 
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                      }} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="views" 
                      stroke="#7c4dff" 
                      fillOpacity={1} 
                      fill="url(#colorViews)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Top Performing Videos</CardTitle>
                  <CardDescription>Videos with the highest number of views</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topVideosData.map((video) => (
                      <div key={video.id} className="flex items-center p-3 border rounded-lg">
                        <div className="flex-1">
                          <div className="font-medium truncate">{video.title}</div>
                          <div className="flex text-sm text-muted-foreground space-x-3 mt-1">
                            <div className="flex items-center">
                              <Eye className="h-3.5 w-3.5 mr-1" />
                              {video.views}
                            </div>
                            <div className="flex items-center">
                              <TrendingUp className="h-3.5 w-3.5 mr-1" />
                              {video.engagement}% engagement
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Engagement Metrics</CardTitle>
                  <CardDescription>Likes, comments and shares per video</CardDescription>
                </CardHeader>
                <CardContent className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={engagementData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted/30" />
                      <XAxis dataKey="name" className="text-xs text-muted-foreground" />
                      <YAxis className="text-xs text-muted-foreground" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'var(--background)',  
                          borderColor: 'var(--border)', 
                          borderRadius: '8px',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                        }} 
                      />
                      <Legend />
                      <Bar dataKey="likes" fill="#7c4dff" name="Likes" />
                      <Bar dataKey="comments" fill="#4fc3f7" name="Comments" />
                      <Bar dataKey="shares" fill="#4caf50" name="Shares" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Content Tab */}
          <TabsContent value="content" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Content Performance</CardTitle>
                <CardDescription>
                  Analyze how your videos are performing over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  View detailed analytics for each of your videos, including views, engagement rates, and audience retention.
                </p>
                <div className="grid gap-4">
                  {topVideosData.map((video) => (
                    <div key={video.id} className="p-4 border rounded-lg">
                      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                        <div className="w-full md:w-32 aspect-[9/16] bg-muted rounded-md flex-shrink-0"></div>
                        <div className="flex-1">
                          <h3 className="font-medium">{video.title}</h3>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
                            <div>
                              <div className="text-sm text-muted-foreground">Views</div>
                              <div className="font-medium">{video.views}</div>
                            </div>
                            <div>
                              <div className="text-sm text-muted-foreground">Engagement</div>
                              <div className="font-medium">{video.engagement}%</div>
                            </div>
                            <div>
                              <div className="text-sm text-muted-foreground">Avg. Watch Time</div>
                              <div className="font-medium">1:42</div>
                            </div>
                            <div>
                              <div className="text-sm text-muted-foreground">CTR</div>
                              <div className="font-medium">4.8%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Audience Tab */}
          <TabsContent value="audience" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Audience Demographics</CardTitle>
                <CardDescription>
                  Understand who is watching your content
                </CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={audienceData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted/30" />
                    <XAxis dataKey="age" className="text-xs text-muted-foreground" />
                    <YAxis className="text-xs text-muted-foreground" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'var(--background)',  
                        borderColor: 'var(--border)', 
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                      }} 
                    />
                    <Legend />
                    <Bar dataKey="male" fill="#4fc3f7" name="Male" />
                    <Bar dataKey="female" fill="#f06292" name="Female" />
                    <Bar dataKey="other" fill="#7c4dff" name="Other" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Geographic Distribution</CardTitle>
                  <CardDescription>Top countries where your audience is located</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-6 h-4 bg-blue-100 border border-blue-300 rounded mr-2"></div>
                        <span>United States</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">42%</span>
                        <div className="w-24 bg-secondary rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '42%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-6 h-4 bg-red-100 border border-red-300 rounded mr-2"></div>
                        <span>India</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">18%</span>
                        <div className="w-24 bg-secondary rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '18%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-6 h-4 bg-yellow-100 border border-yellow-300 rounded mr-2"></div>
                        <span>United Kingdom</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">12%</span>
                        <div className="w-24 bg-secondary rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '12%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-6 h-4 bg-green-100 border border-green-300 rounded mr-2"></div>
                        <span>Canada</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">8%</span>
                        <div className="w-24 bg-secondary rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '8%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-6 h-4 bg-gray-100 border border-gray-300 rounded mr-2"></div>
                        <span>Others</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">20%</span>
                        <div className="w-24 bg-secondary rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Traffic Sources</CardTitle>
                  <CardDescription>How viewers are finding your content</CardDescription>
                </CardHeader>
                <CardContent className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={[
                      { source: 'YouTube Search', value: 35 },
                      { source: 'Suggested Videos', value: 25 },
                      { source: 'External', value: 20 },
                      { source: 'Browse Features', value: 15 },
                      { source: 'Direct', value: 5 },
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted/30" />
                      <XAxis dataKey="source" className="text-xs text-muted-foreground" />
                      <YAxis className="text-xs text-muted-foreground" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'var(--background)',  
                          borderColor: 'var(--border)', 
                          borderRadius: '8px',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                        }} 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#7c4dff" 
                        strokeWidth={2} 
                        dot={{ r: 4 }} 
                        activeDot={{ r: 6 }} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Engagement Tab */}
          <TabsContent value="engagement" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="glass-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Likes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <ThumbsUp className="h-5 w-5 text-genie-600 mr-2" />
                    <span className="text-3xl font-bold">1.2K</span>
                    <span className="ml-2 text-xs text-green-500 flex items-center">
                      +8.5%
                      <TrendingUp className="h-3 w-3 ml-0.5" />
                    </span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Comments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <MessageSquare className="h-5 w-5 text-blue-500 mr-2" />
                    <span className="text-3xl font-bold">420</span>
                    <span className="ml-2 text-xs text-green-500 flex items-center">
                      +12.3%
                      <TrendingUp className="h-3 w-3 ml-0.5" />
                    </span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Shares</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <Share2 className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-3xl font-bold">350</span>
                    <span className="ml-2 text-xs text-green-500 flex items-center">
                      +15.7%
                      <TrendingUp className="h-3 w-3 ml-0.5" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Engagement Ratio</CardTitle>
                <CardDescription>
                  Likes, comments, and shares compared to views
                </CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={topVideosData.map(video => ({
                      name: video.title,
                      likeRatio: (video.views * 0.05).toFixed(1),
                      commentRatio: (video.views * 0.02).toFixed(1),
                      shareRatio: (video.views * 0.03).toFixed(1),
                    }))}
                  >
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted/30" />
                    <XAxis dataKey="name" className="text-xs text-muted-foreground" />
                    <YAxis className="text-xs text-muted-foreground" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'var(--background)',  
                        borderColor: 'var(--border)', 
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                      }} 
                    />
                    <Legend />
                    <Bar dataKey="likeRatio" name="Like Ratio %" fill="#7c4dff" />
                    <Bar dataKey="commentRatio" name="Comment Ratio %" fill="#4fc3f7" />
                    <Bar dataKey="shareRatio" name="Share Ratio %" fill="#4caf50" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
