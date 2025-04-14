
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, Calendar, User, Tag, ArrowRight } from 'lucide-react';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const featuredPost = {
    id: '1',
    title: 'How AI is Revolutionizing YouTube Shorts Creation',
    excerpt: 'Discover how artificial intelligence is making it easier than ever to create engaging short-form video content for YouTube.',
    date: 'April 10, 2025',
    author: 'Sarah Johnson',
    category: 'AI Technology',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',
    readTime: '5 min read'
  };
  
  const posts = [
    {
      id: '2',
      title: '10 Tips for Creating Viral YouTube Shorts',
      excerpt: 'Learn the secrets to creating short-form videos that consistently go viral and attract new subscribers.',
      date: 'April 5, 2025',
      author: 'Mike Peters',
      category: 'Content Strategy',
      imageUrl: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387',
      readTime: '4 min read'
    },
    {
      id: '3',
      title: 'Understanding YouTube Shorts Algorithm in 2025',
      excerpt: 'A deep dive into how the YouTube Shorts algorithm works and how to optimize your content for maximum reach.',
      date: 'March 28, 2025',
      author: 'Lisa Chen',
      category: 'SEO',
      imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
      readTime: '7 min read'
    },
    {
      id: '4',
      title: 'From Text to Video: The Future of Content Creation',
      excerpt: 'How text-to-video AI technology is changing the landscape of content creation for creators and businesses.',
      date: 'March 15, 2025',
      author: 'David Wilson',
      category: 'AI Technology',
      imageUrl: 'https://images.unsplash.com/photo-1489875347897-49f64b51c1f8',
      readTime: '6 min read'
    },
    {
      id: '5',
      title: 'How to Build a Consistent Brand Voice in Short Videos',
      excerpt: 'Strategies for maintaining consistent brand messaging and voice across your YouTube Shorts content.',
      date: 'March 8, 2025',
      author: 'Emma Rodriguez',
      category: 'Branding',
      imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3',
      readTime: '5 min read'
    },
    {
      id: '6',
      title: 'Monetization Strategies for YouTube Shorts Creators',
      excerpt: 'Explore the various ways content creators can monetize their YouTube Shorts beyond the Shorts Fund.',
      date: 'February 25, 2025',
      author: 'James Lee',
      category: 'Monetization',
      imageUrl: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d',
      readTime: '8 min read'
    }
  ];
  
  const categories = [
    'AI Technology', 
    'Content Strategy', 
    'SEO', 
    'Branding', 
    'Monetization', 
    'Video Editing', 
    'Growth Hacking'
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
              <Link to="/blog" className="text-genie-600 font-medium hover:text-genie-700 transition-colors">Blog</Link>
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
            <h1 className="text-4xl font-bold mb-4 gradient-text">ShortGenie Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Insights, tips, and the latest news about AI video creation and YouTube Shorts
            </p>
            
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                className="genie-input pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>
      
      {/* Featured Post */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
          
          <div className="bg-card rounded-xl overflow-hidden shadow-md border border-border">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={featuredPost.imageUrl} 
                  alt={featuredPost.title} 
                  className="h-64 md:h-full w-full object-cover"
                />
              </div>
              <div className="p-6 md:w-1/2 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <Tag className="h-4 w-4 text-genie-600 mr-2" />
                  <span className="text-sm text-muted-foreground">{featuredPost.category}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{featuredPost.title}</h3>
                <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-4">{featuredPost.author}</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-4">{featuredPost.date}</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Link to={`/blog/${featuredPost.id}`}>
                  <Button className="genie-button">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Recent Posts */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Recent Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-card rounded-xl overflow-hidden shadow-md border border-border flex flex-col h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center mb-3">
                    <Tag className="h-4 w-4 text-genie-600 mr-2" />
                    <span className="text-sm text-muted-foreground">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <Link to={`/blog/${post.id}`} className="text-genie-600 font-medium hover:text-genie-700 flex items-center">
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>
      
      {/* Categories */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Browse by Category</h2>
          
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Link to={`/blog/category/${category.toLowerCase().replace(' ', '-')}`} key={category}>
                <Button variant="outline" className="rounded-full">
                  {category}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-xl p-8 border border-border max-w-3xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-3">Subscribe to Our Newsletter</h3>
              <p className="text-muted-foreground mb-6">
                Get the latest tips, tutorials, and updates on AI video creation delivered to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="genie-input flex-grow"
                />
                <Button className="genie-button">
                  Subscribe
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from ShortGenie.
              </p>
            </div>
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

export default Blog;
