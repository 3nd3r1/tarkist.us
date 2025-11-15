// ============================================================================
// Authentication & User Profile Types
// ============================================================================

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  avatarColor: string;
  joinedDate: string;
  plan: 'free' | 'pro' | 'enterprise';
  preferences: UserPreferences;
  stats: UserStats;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  defaultReportSize: 'small' | 'medium' | 'full' | 'enterprise';
  emailNotifications: boolean;
  weeklyDigest: boolean;
  autoSaveSearches: boolean;
  compactMode: boolean;
}

export interface UserStats {
  assessmentsViewed: number;
  reportsGenerated: number;
  favoritesCount: number;
  comparisonsRun: number;
  accountAge: number; // days
}

export interface SavedAssessment {
  id: string;
  assessmentId: string;
  productName: string;
  productVendor: string;
  savedAt: string;
  notes?: string;
  tags: string[];
  category?: string;
}

export interface UserNote {
  id: string;
  assessmentId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  color?: string;
}

export interface Comparison {
  id: string;
  name: string;
  assessmentIds: string[];
  createdAt: string;
  description?: string;
}

export interface SearchHistory {
  id: string;
  query: string;
  timestamp: string;
  resultsCount: number;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => void;
  updatePreferences: (preferences: Partial<UserPreferences>) => void;
  
  // User-specific features
  savedAssessments: SavedAssessment[];
  saveAssessment: (assessmentId: string, productName: string, productVendor: string) => void;
  unsaveAssessment: (id: string) => void;
  
  userNotes: UserNote[];
  addNote: (assessmentId: string, content: string) => void;
  updateNote: (id: string, content: string) => void;
  deleteNote: (id: string) => void;
  
  comparisons: Comparison[];
  saveComparison: (name: string, assessmentIds: string[], description?: string) => void;
  deleteComparison: (id: string) => void;
  
  searchHistory: SearchHistory[];
  addToSearchHistory: (query: string, resultsCount: number) => void;
  clearSearchHistory: () => void;
}
