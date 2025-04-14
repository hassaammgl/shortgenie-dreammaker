
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  PlusCircle, 
  Library, 
  BarChart, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  UserCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import ThemeSwitcher from '@/components/ThemeSwitcher';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  const closeSidebar = () => {
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };
  
  const navigationItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <Home className="h-5 w-5" /> },
    { name: 'Create Short', path: '/create-short', icon: <PlusCircle className="h-5 w-5" /> },
    { name: 'My Videos', path: '/my-videos', icon: <Library className="h-5 w-5" /> },
    { name: 'Analytics', path: '/analytics', icon: <BarChart className="h-5 w-5" /> },
    { name: 'Settings', path: '/settings', icon: <Settings className="h-5 w-5" /> },
  ];
  
  return (
    <div className="min-h-screen bg-background flex">
      {/* Mobile sidebar backdrop */}
      {isSidebarOpen && isMobile && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm dark:bg-black/70"
          onClick={closeSidebar}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={`fixed md:static w-64 h-full z-50 md:z-auto bg-sidebar transition-all duration-300 flex flex-col border-r border-sidebar-border shadow-lg dark:shadow-md dark:shadow-black/20 dark:backdrop-blur-lg ${
          isSidebarOpen ? 'left-0' : '-left-64 md:left-0'
        }`}
      >
        <div className="p-4 border-b border-sidebar-border flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center" onClick={closeSidebar}>
            <div className="bg-genie-600 text-white rounded-lg w-8 h-8 flex items-center justify-center mr-2">
              <span className="font-bold">SG</span>
            </div>
            <span className="font-bold text-xl">ShortGenie</span>
          </Link>
          
          {isMobile && (
            <button onClick={toggleSidebar} className="md:hidden">
              <X className="h-5 w-5 text-muted-foreground" />
            </button>
          )}
        </div>
        
        <nav className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={closeSidebar}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                    : 'text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground'
                }`}
              >
                {item.icon}
                <span className="ml-3">{item.name}</span>
              </Link>
            ))}
          </div>
          
          <div className="mt-8">
            <h3 className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Subscription
            </h3>
            <div className="mt-2 bg-genie-50 dark:bg-genie-900/20 rounded-lg p-3 border border-genie-100 dark:border-genie-800/30 backdrop-blur-sm">
              <div className="flex justify-between items-center">
                <span className="font-medium">Creator Plan</span>
                <span className="text-xs bg-genie-100 dark:bg-genie-900/40 text-genie-700 dark:text-genie-300 px-2 py-0.5 rounded-full">Active</span>
              </div>
              <div className="mt-2 mb-3">
                <div className="text-sm text-muted-foreground">Videos this month</div>
                <div className="w-full bg-genie-100 dark:bg-genie-900/30 rounded-full h-2 mt-1">
                  <div className="bg-genie-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
                <div className="text-xs text-right mt-1 text-muted-foreground">11/25</div>
              </div>
              <Button className="w-full text-xs h-8 bg-genie-600 hover:bg-genie-700 text-white">
                Upgrade Plan
              </Button>
            </div>
          </div>
        </nav>
        
        <div className="p-4 border-t border-sidebar-border">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <UserCircle className="h-8 w-8 text-muted-foreground" />
            </div>
            <div className="ml-3">
              <div className="text-sm font-medium">Jane Smith</div>
              <div className="text-xs text-muted-foreground">jane@example.com</div>
            </div>
            <div className="ml-auto flex items-center space-x-2">
              <ThemeSwitcher />
              <button className="text-muted-foreground hover:text-destructive transition-colors">
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </aside>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile header */}
        <header className="bg-background border-b border-border p-4 md:hidden flex items-center justify-between sticky top-0 z-30">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleSidebar}
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <Link to="/dashboard" className="flex items-center">
            <div className="bg-genie-600 text-white rounded-lg w-8 h-8 flex items-center justify-center mr-2">
              <span className="font-bold">SG</span>
            </div>
            <span className="font-bold text-xl">ShortGenie</span>
          </Link>
          
          <div className="flex items-center space-x-2">
            <ThemeSwitcher />
            <UserCircle className="h-8 w-8 text-muted-foreground" />
          </div>
        </header>
        
        {/* Content */}
        <main className="flex-1 p-4 md:p-8 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
