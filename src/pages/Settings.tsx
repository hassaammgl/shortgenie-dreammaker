
import { useState } from 'react';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { 
  User, 
  CreditCard, 
  Bell, 
  Shield, 
  Youtube, 
  Globe, 
  Instagram,
  Twitter,
  Facebook,
  Upload
} from 'lucide-react';

const Settings = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Profile updated",
        description: "Your profile information has been updated successfully."
      });
    }, 1000);
  };
  
  const handleConnect = (platform: string) => {
    toast({
      title: `Connect to ${platform}`,
      description: `You'll be redirected to authorize ShortGenie with your ${platform} account.`
    });
  };
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Settings</h1>
        </div>
        
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="glass-panel p-1">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Profile</span>
            </TabsTrigger>
            <TabsTrigger value="billing" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              <span className="hidden sm:inline">Billing</span>
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              <span className="hidden sm:inline">Notifications</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span className="hidden sm:inline">Security</span>
            </TabsTrigger>
            <TabsTrigger value="integrations" className="flex items-center gap-2">
              <Youtube className="h-4 w-4" />
              <span className="hidden sm:inline">Integrations</span>
            </TabsTrigger>
          </TabsList>
          
          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>
                  Update your account profile information and settings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSaveProfile} className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="space-y-2 flex-1">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" defaultValue="Jane Smith" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" defaultValue="jane@example.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <textarea 
                      id="bio" 
                      className="w-full min-h-24 rounded-md border border-input bg-transparent px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Tell us a bit about yourself"
                      defaultValue="Creator and social media enthusiast. I make short videos that engage and inspire."
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <Button type="submit" className="genie-button" disabled={isSubmitting}>
                      {isSubmitting ? "Saving..." : "Save Profile"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Profile Picture</CardTitle>
                <CardDescription>
                  Upload a profile picture to personalize your account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="relative w-24 h-24 rounded-full bg-muted flex items-center justify-center overflow-hidden border-2 border-border">
                    <User className="h-12 w-12 text-muted-foreground" />
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div className="text-sm text-muted-foreground">
                      Upload a picture in JPG, PNG, or GIF format. Maximum file size is 5MB.
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <Button type="button" className="genie-button" size="sm">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Picture
                      </Button>
                      <Button type="button" variant="outline" size="sm">
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Billing Tab */}
          <TabsContent value="billing" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Subscription Plan</CardTitle>
                <CardDescription>
                  Manage your subscription and billing information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-genie-50 dark:bg-genie-900/20 rounded-lg p-4 border border-genie-100 dark:border-genie-800/30 backdrop-blur-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-lg">Creator Plan</h3>
                      <p className="text-muted-foreground text-sm">$24.99 / month</p>
                    </div>
                    <span className="bg-genie-100 dark:bg-genie-900/40 text-genie-700 dark:text-genie-300 px-2 py-1 rounded-full text-xs font-medium">
                      Active
                    </span>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>25 videos per month</span>
                      <span className="font-medium">11 used</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>2GB storage</span>
                      <span className="font-medium">0.25GB used</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>AI content generation</span>
                      <span className="font-medium">Unlimited</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 space-x-2">
                    <Button>Upgrade Plan</Button>
                    <Button variant="outline">Cancel Subscription</Button>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Payment Method</h3>
                  <div className="flex items-center p-3 border rounded-lg">
                    <div className="bg-black text-white w-10 h-6 rounded flex items-center justify-center mr-3">
                      <span className="text-xs font-bold">VISA</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium">•••• •••• •••• 4242</div>
                      <div className="text-xs text-muted-foreground">Expires 12/25</div>
                    </div>
                    <Button variant="ghost" size="sm" className="ml-auto">
                      Change
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Billing History</h3>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="grid grid-cols-3 gap-4 p-3 bg-muted/50 font-medium text-sm">
                      <div>Date</div>
                      <div>Amount</div>
                      <div>Status</div>
                    </div>
                    <div className="divide-y">
                      <div className="grid grid-cols-3 gap-4 p-3 text-sm">
                        <div>Apr 1, 2025</div>
                        <div>$24.99</div>
                        <div className="text-green-600">Paid</div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 p-3 text-sm">
                        <div>Mar 1, 2025</div>
                        <div>$24.99</div>
                        <div className="text-green-600">Paid</div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 p-3 text-sm">
                        <div>Feb 1, 2025</div>
                        <div>$24.99</div>
                        <div className="text-green-600">Paid</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>
                  Control what notifications you receive
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-3">Email Notifications</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="email-new-videos" className="cursor-pointer flex-1">
                          New video processing completed
                        </Label>
                        <Switch id="email-new-videos" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="email-comments" className="cursor-pointer flex-1">
                          Comments on your videos
                        </Label>
                        <Switch id="email-comments" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="email-analytics" className="cursor-pointer flex-1">
                          Weekly analytics report
                        </Label>
                        <Switch id="email-analytics" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="email-marketing" className="cursor-pointer flex-1">
                          Marketing and promotional emails
                        </Label>
                        <Switch id="email-marketing" />
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="font-medium mb-3">In-App Notifications</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="app-video-views" className="cursor-pointer flex-1">
                          Video view milestones
                        </Label>
                        <Switch id="app-video-views" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="app-comments" className="cursor-pointer flex-1">
                          New comments
                        </Label>
                        <Switch id="app-comments" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="app-follows" className="cursor-pointer flex-1">
                          New followers
                        </Label>
                        <Switch id="app-follows" defaultChecked />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button className="genie-button">
                      Save Preferences
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Security Tab */}
          <TabsContent value="security" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Account Security</CardTitle>
                <CardDescription>
                  Manage your password and account security settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Change Password</h3>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                    <Button className="genie-button">
                      Update Password
                    </Button>
                  </form>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-medium mb-3">Two-Factor Authentication</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Enable 2FA</div>
                        <div className="text-sm text-muted-foreground">Secure your account with two-factor authentication</div>
                      </div>
                      <Switch id="enable-2fa" />
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-medium mb-3">Connected Sessions</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Current Session</div>
                          <div className="text-sm text-muted-foreground">Chrome on Windows • Los Angeles, CA</div>
                        </div>
                        <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          Active Now
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="text-destructive">
                      Log Out All Other Sessions
                    </Button>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-medium mb-3 text-destructive">Danger Zone</h3>
                  <Button variant="destructive">
                    Delete Account
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Integrations Tab */}
          <TabsContent value="integrations" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Connected Platforms</CardTitle>
                <CardDescription>
                  Connect your social media accounts to publish your shorts directly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center p-4 border rounded-lg justify-between">
                    <div className="flex items-center">
                      <div className="bg-red-100 p-2 rounded-lg mr-4">
                        <Youtube className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">YouTube</h3>
                        <p className="text-sm text-muted-foreground">Publish shorts directly to your YouTube channel</p>
                      </div>
                    </div>
                    <Button onClick={() => handleConnect('YouTube')}>
                      Connect
                    </Button>
                  </div>
                  
                  <div className="flex items-center p-4 border rounded-lg justify-between">
                    <div className="flex items-center">
                      <div className="bg-pink-100 p-2 rounded-lg mr-4">
                        <Instagram className="h-6 w-6 text-pink-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Instagram</h3>
                        <p className="text-sm text-muted-foreground">Share reels to your Instagram account</p>
                      </div>
                    </div>
                    <Button onClick={() => handleConnect('Instagram')}>
                      Connect
                    </Button>
                  </div>
                  
                  <div className="flex items-center p-4 border rounded-lg justify-between">
                    <div className="flex items-center">
                      <div className="bg-sky-100 p-2 rounded-lg mr-4">
                        <Twitter className="h-6 w-6 text-sky-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Twitter</h3>
                        <p className="text-sm text-muted-foreground">Post videos to your Twitter timeline</p>
                      </div>
                    </div>
                    <Button onClick={() => handleConnect('Twitter')}>
                      Connect
                    </Button>
                  </div>
                  
                  <div className="flex items-center p-4 border rounded-lg justify-between">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-2 rounded-lg mr-4">
                        <Facebook className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Facebook</h3>
                        <p className="text-sm text-muted-foreground">Share videos to your Facebook profile or page</p>
                      </div>
                    </div>
                    <Button onClick={() => handleConnect('Facebook')}>
                      Connect
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>API Access</CardTitle>
                <CardDescription>
                  Generate API keys to integrate with our platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="api-key">API Key</Label>
                    <div className="flex">
                      <Input id="api-key" value="••••••••••••••••••••••••••••••" readOnly className="rounded-r-none" />
                      <Button className="rounded-l-none">
                        Show
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      This key provides full access to your account via API. Keep it secure.
                    </p>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button>
                      Generate New Key
                    </Button>
                    <Button variant="destructive">
                      Revoke All Keys
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
