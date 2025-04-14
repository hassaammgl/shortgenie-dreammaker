
// Mock User model
// In a real application, this would be a MongoDB schema using Mongoose

export interface User {
  id: string;
  name: string;
  email: string;
  password: string; // In real app, this would be hashed
  profileImage?: string;
  role: 'user' | 'admin';
  subscriptionPlan: 'free' | 'starter' | 'creator' | 'professional';
  usageThisMonth: {
    videosCreated: number;
    videosLimit: number;
    storageUsed: number;
    storageLimit: number;
  };
  paymentStatus: 'active' | 'past_due' | 'canceled' | 'none';
  createdAt: Date;
  updatedAt: Date;
}

// Mock data and functions to simulate a database

const mockUsers: User[] = [
  {
    id: '1',
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: 'password123', // Would be hashed in real app
    profileImage: 'https://source.unsplash.com/random/100x100/?portrait',
    role: 'user',
    subscriptionPlan: 'creator',
    usageThisMonth: {
      videosCreated: 11,
      videosLimit: 25,
      storageUsed: 250 * 1024 * 1024, // 250MB
      storageLimit: 2 * 1024 * 1024 * 1024, // 2GB
    },
    paymentStatus: 'active',
    createdAt: new Date('2023-01-15'),
    updatedAt: new Date('2023-04-10'),
  },
  {
    id: '2',
    name: 'Admin User',
    email: 'admin@shortgenie.com',
    password: 'admin123', // Would be hashed in real app
    role: 'admin',
    subscriptionPlan: 'professional',
    usageThisMonth: {
      videosCreated: 5,
      videosLimit: Infinity,
      storageUsed: 1 * 1024 * 1024 * 1024, // 1GB
      storageLimit: 10 * 1024 * 1024 * 1024, // 10GB
    },
    paymentStatus: 'active',
    createdAt: new Date('2022-12-01'),
    updatedAt: new Date('2023-04-05'),
  },
];

// Mock User functions

export const findUserByEmail = async (email: string): Promise<User | null> => {
  const user = mockUsers.find(u => u.email === email);
  return user || null;
};

export const findUserById = async (id: string): Promise<User | null> => {
  const user = mockUsers.find(u => u.id === id);
  return user || null;
};

export const createUser = async (userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User> => {
  const newUser: User = {
    ...userData,
    id: (mockUsers.length + 1).toString(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  
  mockUsers.push(newUser);
  return newUser;
};

export const updateUser = async (id: string, updates: Partial<Omit<User, 'id' | 'createdAt'>>): Promise<User | null> => {
  const userIndex = mockUsers.findIndex(u => u.id === id);
  if (userIndex === -1) return null;
  
  mockUsers[userIndex] = {
    ...mockUsers[userIndex],
    ...updates,
    updatedAt: new Date(),
  };
  
  return mockUsers[userIndex];
};

export const deleteUser = async (id: string): Promise<boolean> => {
  const userIndex = mockUsers.findIndex(u => u.id === id);
  if (userIndex === -1) return false;
  
  mockUsers.splice(userIndex, 1);
  return true;
};

export const checkUserSubscriptionStatus = async (userId: string): Promise<{
  isActive: boolean;
  plan: User['subscriptionPlan'];
  usagePercentage: number;
  daysRemaining: number;
}> => {
  const user = await findUserById(userId);
  if (!user) throw new Error('User not found');
  
  const isActive = user.paymentStatus === 'active';
  const usagePercentage = user.usageThisMonth.videosCreated / user.usageThisMonth.videosLimit * 100;
  
  // Calculate days remaining in the current billing cycle (mocked)
  const now = new Date();
  const nextBillingDate = new Date(now);
  nextBillingDate.setMonth(nextBillingDate.getMonth() + 1);
  nextBillingDate.setDate(15); // Assuming billing date is on the 15th
  
  const daysRemaining = Math.ceil((nextBillingDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  
  return {
    isActive,
    plan: user.subscriptionPlan,
    usagePercentage: isFinite(usagePercentage) ? usagePercentage : 0,
    daysRemaining,
  };
};
