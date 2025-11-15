"use client"

// ============================================================================
// Authentication Context Provider
// Manages user authentication state and user-specific features
// ============================================================================

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
  User,
  AuthContextType,
  SavedAssessment,
  UserNote,
  Comparison,
  SearchHistory,
  UserPreferences
} from './auth-types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock demo user
const DEMO_USER: User = {
  id: 'demo-user-1',
  email: 'demo@securityassessor.app',
  name: 'Alex Johnson',
  avatarColor: '#6366f1',
  joinedDate: '2024-09-15T00:00:00Z',
  plan: 'pro',
  preferences: {
    theme: 'system',
    defaultReportSize: 'medium',
    emailNotifications: true,
    weeklyDigest: true,
    autoSaveSearches: true,
    compactMode: false,
  },
  stats: {
    assessmentsViewed: 47,
    reportsGenerated: 12,
    favoritesCount: 8,
    comparisonsRun: 5,
    accountAge: 61,
  }
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [savedAssessments, setSavedAssessments] = useState<SavedAssessment[]>([]);
  const [userNotes, setUserNotes] = useState<UserNote[]>([]);
  const [comparisons, setComparisons] = useState<Comparison[]>([]);
  const [searchHistory, setSearchHistory] = useState<SearchHistory[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load user data from localStorage on mount
  useEffect(() => {
    const loadUserData = () => {
      try {
        const storedUser = localStorage.getItem('user');
        const storedSaved = localStorage.getItem('savedAssessments');
        const storedNotes = localStorage.getItem('userNotes');
        const storedComparisons = localStorage.getItem('comparisons');
        const storedHistory = localStorage.getItem('searchHistory');

        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
        if (storedSaved) {
          setSavedAssessments(JSON.parse(storedSaved));
        }
        if (storedNotes) {
          setUserNotes(JSON.parse(storedNotes));
        }
        if (storedComparisons) {
          setComparisons(JSON.parse(storedComparisons));
        }
        if (storedHistory) {
          setSearchHistory(JSON.parse(storedHistory));
        }
      } catch (error) {
        console.error('Error loading user data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUserData();
  }, []);

  // Save user data to localStorage whenever it changes
  useEffect(() => {
    if (!isLoading && user) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }, [user, isLoading]);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('savedAssessments', JSON.stringify(savedAssessments));
    }
  }, [savedAssessments, isLoading]);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('userNotes', JSON.stringify(userNotes));
    }
  }, [userNotes, isLoading]);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('comparisons', JSON.stringify(comparisons));
    }
  }, [comparisons, isLoading]);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    }
  }, [searchHistory, isLoading]);

  const login = async (email: string, password: string) => {
    // Mock login - in real app, would call API
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // For demo, accept any email/password
    const newUser: User = {
      ...DEMO_USER,
      email,
      id: `user-${Date.now()}`,
    };
    
    setUser(newUser);
    
    // Initialize some demo data for new users
    if (savedAssessments.length === 0) {
      setSavedAssessments([
        {
          id: 'saved-1',
          assessmentId: 'slack-001',
          productName: 'Slack',
          productVendor: 'Salesforce',
          savedAt: new Date().toISOString(),
          notes: 'Great for team communication, but review AI features carefully',
          tags: ['collaboration', 'enterprise'],
          category: 'Team Tools'
        },
        {
          id: 'saved-2',
          assessmentId: 'github-001',
          productName: 'GitHub',
          productVendor: 'Microsoft',
          savedAt: new Date(Date.now() - 86400000).toISOString(),
          tags: ['development', 'must-have'],
          category: 'Developer Tools'
        }
      ]);
    }
  };

  const signup = async (email: string, password: string, name: string) => {
    // Mock signup
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const avatarColors = ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#06b6d4'];
    const randomColor = avatarColors[Math.floor(Math.random() * avatarColors.length)];
    
    const newUser: User = {
      id: `user-${Date.now()}`,
      email,
      name,
      avatarColor: randomColor,
      joinedDate: new Date().toISOString(),
      plan: 'free',
      preferences: {
        theme: 'system',
        defaultReportSize: 'medium',
        emailNotifications: true,
        weeklyDigest: false,
        autoSaveSearches: true,
        compactMode: false,
      },
      stats: {
        assessmentsViewed: 0,
        reportsGenerated: 0,
        favoritesCount: 0,
        comparisonsRun: 0,
        accountAge: 0,
      }
    };
    
    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
    // Optionally clear user data on logout
    // setSavedAssessments([]);
    // setUserNotes([]);
    // setComparisons([]);
    // setSearchHistory([]);
    localStorage.removeItem('user');
  };

  const updateProfile = (updates: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...updates });
    }
  };

  const updatePreferences = (preferences: Partial<UserPreferences>) => {
    if (user) {
      setUser({
        ...user,
        preferences: { ...user.preferences, ...preferences }
      });
    }
  };

  const saveAssessment = (assessmentId: string, productName: string, productVendor: string) => {
    const newSaved: SavedAssessment = {
      id: `saved-${Date.now()}`,
      assessmentId,
      productName,
      productVendor,
      savedAt: new Date().toISOString(),
      tags: [],
    };
    
    setSavedAssessments(prev => [newSaved, ...prev]);
    
    if (user) {
      setUser({
        ...user,
        stats: { ...user.stats, favoritesCount: user.stats.favoritesCount + 1 }
      });
    }
  };

  const unsaveAssessment = (id: string) => {
    setSavedAssessments(prev => prev.filter(s => s.id !== id));
    
    if (user) {
      setUser({
        ...user,
        stats: { ...user.stats, favoritesCount: Math.max(0, user.stats.favoritesCount - 1) }
      });
    }
  };

  const addNote = (assessmentId: string, content: string) => {
    const newNote: UserNote = {
      id: `note-${Date.now()}`,
      assessmentId,
      content,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    setUserNotes(prev => [newNote, ...prev]);
  };

  const updateNote = (id: string, content: string) => {
    setUserNotes(prev =>
      prev.map(note =>
        note.id === id
          ? { ...note, content, updatedAt: new Date().toISOString() }
          : note
      )
    );
  };

  const deleteNote = (id: string) => {
    setUserNotes(prev => prev.filter(n => n.id !== id));
  };

  const saveComparison = (name: string, assessmentIds: string[], description?: string) => {
    const newComparison: Comparison = {
      id: `comp-${Date.now()}`,
      name,
      assessmentIds,
      createdAt: new Date().toISOString(),
      description,
    };
    
    setComparisons(prev => [newComparison, ...prev]);
    
    if (user) {
      setUser({
        ...user,
        stats: { ...user.stats, comparisonsRun: user.stats.comparisonsRun + 1 }
      });
    }
  };

  const deleteComparison = (id: string) => {
    setComparisons(prev => prev.filter(c => c.id !== id));
  };

  const addToSearchHistory = (query: string, resultsCount: number) => {
    if (!user || !user.preferences.autoSaveSearches) return;
    
    const newSearch: SearchHistory = {
      id: `search-${Date.now()}`,
      query,
      timestamp: new Date().toISOString(),
      resultsCount,
    };
    
    setSearchHistory(prev => [newSearch, ...prev.slice(0, 49)]); // Keep last 50
  };

  const clearSearchHistory = () => {
    setSearchHistory([]);
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    login,
    signup,
    logout,
    updateProfile,
    updatePreferences,
    savedAssessments,
    saveAssessment,
    unsaveAssessment,
    userNotes,
    addNote,
    updateNote,
    deleteNote,
    comparisons,
    saveComparison,
    deleteComparison,
    searchHistory,
    addToSearchHistory,
    clearSearchHistory,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
