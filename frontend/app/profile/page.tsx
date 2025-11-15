"use client"

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { useRouter, useSearchParams } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar } from '@/components/auth/avatar';
import {
  User,
  Heart,
  FileText,
  TrendingUp,
  Settings,
  Crown,
  Calendar,
  Clock,
  Tag,
  Trash2,
  Edit2,
  ArrowRight,
  Shield,
  Award,
  Target,
  Zap,
  Download,
  Mail,
  Bell,
  Monitor,
  Save,
  X
} from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

export default function ProfilePage() {
  const { user, isAuthenticated, updateProfile, updatePreferences, savedAssessments, unsaveAssessment, searchHistory, clearSearchHistory } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultTab = searchParams?.get('tab') || 'overview';
  
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState('');

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    if (user) {
      setEditedName(user.name);
    }
  }, [user]);

  if (!user) {
    return null;
  }

  const handleSaveProfile = () => {
    if (editedName.trim()) {
      updateProfile({ name: editedName });
      setIsEditing(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return 'Today';
    if (diffInDays === 1) return 'Yesterday';
    if (diffInDays < 7) return `${diffInDays} days ago`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
    return `${Math.floor(diffInDays / 30)} months ago`;
  };

  const planInfo = {
    free: {
      name: 'Free',
      color: 'bg-muted text-muted-foreground',
      features: ['Up to 10 saved assessments', 'Basic comparisons', 'Standard reports']
    },
    pro: {
      name: 'Pro',
      color: 'bg-primary text-primary-foreground',
      features: ['Unlimited saved assessments', 'Advanced comparisons', 'Custom reports', 'Priority support']
    },
    enterprise: {
      name: 'Enterprise',
      color: 'bg-purple-500 text-white',
      features: ['Everything in Pro', 'Team collaboration', 'API access', 'Custom integrations', 'Dedicated support']
    }
  };

  const currentPlan = planInfo[user.plan];

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="mb-8">
        <Card className="p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <Avatar user={user} size="xl" />
            
            <div className="flex-1 space-y-3">
              {isEditing ? (
                <div className="flex items-center gap-2">
                  <Input
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                    className="max-w-xs"
                  />
                  <Button size="sm" onClick={handleSaveProfile}>
                    <Save className="h-4 w-4 mr-1" />
                    Save
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => {
                    setIsEditing(false);
                    setEditedName(user.name);
                  }}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <h1 className="text-3xl font-bold">{user.name}</h1>
                  <Button size="sm" variant="ghost" onClick={() => setIsEditing(true)}>
                    <Edit2 className="h-4 w-4" />
                  </Button>
                </div>
              )}
              
              <p className="text-muted-foreground">{user.email}</p>
              
              <div className="flex flex-wrap items-center gap-3">
                <Badge className={currentPlan.color}>
                  {user.plan === 'pro' && <Crown className="h-3 w-3 mr-1" />}
                  {currentPlan.name}
                </Badge>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Joined {formatDate(user.joinedDate)}</span>
                </div>
              </div>
            </div>

            {user.plan === 'free' && (
              <Link href="/pricing">
                <Button>
                  <Crown className="h-4 w-4 mr-2" />
                  Upgrade to Pro
                </Button>
              </Link>
            )}
          </div>

          {/* Stats Grid */}
          <Separator className="my-6" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center p-4 rounded-lg bg-muted/50">
              <Shield className="h-6 w-6 mb-2 text-primary" />
              <span className="text-2xl font-bold">{user.stats.assessmentsViewed}</span>
              <span className="text-sm text-muted-foreground">Assessments Viewed</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-muted/50">
              <Heart className="h-6 w-6 mb-2 text-red-500" />
              <span className="text-2xl font-bold">{user.stats.favoritesCount}</span>
              <span className="text-sm text-muted-foreground">Saved</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-muted/50">
              <FileText className="h-6 w-6 mb-2 text-blue-500" />
              <span className="text-2xl font-bold">{user.stats.reportsGenerated}</span>
              <span className="text-sm text-muted-foreground">Reports</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-muted/50">
              <TrendingUp className="h-6 w-6 mb-2 text-green-500" />
              <span className="text-2xl font-bold">{user.stats.comparisonsRun}</span>
              <span className="text-sm text-muted-foreground">Comparisons</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-5 lg:w-auto">
          <TabsTrigger value="overview">
            <Target className="h-4 w-4 mr-2" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="saved">
            <Heart className="h-4 w-4 mr-2" />
            Saved
          </TabsTrigger>
          <TabsTrigger value="reports">
            <FileText className="h-4 w-4 mr-2" />
            Reports
          </TabsTrigger>
          <TabsTrigger value="activity">
            <TrendingUp className="h-4 w-4 mr-2" />
            Activity
          </TabsTrigger>
          <TabsTrigger value="settings">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Your Plan
              </h3>
              <div className="space-y-4">
                <div className={`px-4 py-2 rounded-lg ${currentPlan.color} inline-block`}>
                  {currentPlan.name} Plan
                </div>
                <ul className="space-y-2">
                  {currentPlan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Zap className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {user.plan !== 'enterprise' && (
                  <Link href="/pricing">
                    <Button variant="outline" className="w-full mt-4">
                      Upgrade Plan
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                )}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Recent Activity
              </h3>
              <div className="space-y-3">
                {searchHistory.slice(0, 5).map((search) => (
                  <div key={search.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{search.query}</p>
                      <p className="text-sm text-muted-foreground">
                        {search.resultsCount} results • {formatTimeAgo(search.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}
                {searchHistory.length === 0 && (
                  <p className="text-muted-foreground text-center py-8">
                    No recent activity
                  </p>
                )}
              </div>
            </Card>
          </div>
        </TabsContent>

        {/* Saved Assessments Tab */}
        <TabsContent value="saved" className="space-y-4">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Saved Assessments ({savedAssessments.length})</h3>
            </div>
            
            {savedAssessments.length === 0 ? (
              <div className="text-center py-12">
                <Heart className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold mb-2">No saved assessments yet</h3>
                <p className="text-muted-foreground mb-4">
                  Start exploring applications and save your favorites
                </p>
                <Link href="/applications">
                  <Button>
                    Browse Applications
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="grid gap-4">
                {savedAssessments.map((saved) => (
                  <Card key={saved.id} className="p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <Link href={`/assess/${saved.assessmentId}`}>
                          <h4 className="font-semibold text-lg hover:text-primary transition-colors">
                            {saved.productName}
                          </h4>
                        </Link>
                        <p className="text-sm text-muted-foreground mb-2">{saved.productVendor}</p>
                        
                        {saved.notes && (
                          <p className="text-sm mb-2 p-2 rounded bg-muted/50 italic">
                            "{saved.notes}"
                          </p>
                        )}
                        
                        <div className="flex flex-wrap items-center gap-2 mt-2">
                          {saved.category && (
                            <Badge variant="outline">{saved.category}</Badge>
                          )}
                          {saved.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              <Tag className="h-3 w-3 mr-1" />
                              {tag}
                            </Badge>
                          ))}
                          <span className="text-xs text-muted-foreground ml-auto">
                            Saved {formatTimeAgo(saved.savedAt)}
                          </span>
                        </div>
                      </div>
                      
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => unsaveAssessment(saved.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </Card>
        </TabsContent>

        {/* Reports Tab */}
        <TabsContent value="reports">
          <Card className="p-6">
            <div className="text-center py-12">
              <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">Report History Coming Soon</h3>
              <p className="text-muted-foreground mb-4">
                View and download your generated reports
              </p>
              <Link href="/applications">
                <Button>
                  Generate New Report
                  <Download className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </Card>
        </TabsContent>

        {/* Activity Tab */}
        <TabsContent value="activity">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Search History ({searchHistory.length})</h3>
              {searchHistory.length > 0 && (
                <Button variant="outline" size="sm" onClick={clearSearchHistory}>
                  <Trash2 className="h-4 w-4 mr-2" />
                  Clear History
                </Button>
              )}
            </div>
            
            {searchHistory.length === 0 ? (
              <div className="text-center py-12">
                <TrendingUp className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold mb-2">No activity yet</h3>
                <p className="text-muted-foreground">
                  Your search history will appear here
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {searchHistory.map((search) => (
                  <div key={search.id} className="flex items-center justify-between p-4 rounded-lg border">
                    <div>
                      <p className="font-medium">{search.query}</p>
                      <p className="text-sm text-muted-foreground">
                        {search.resultsCount} results found
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {formatTimeAgo(search.timestamp)}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </Card>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Settings className="h-5 w-5 text-primary" />
              Preferences
            </h3>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <h4 className="font-medium flex items-center gap-2">
                  <Bell className="h-4 w-4" />
                  Notifications
                </h4>
                <div className="space-y-2 pl-6">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={user.preferences.emailNotifications}
                      onChange={(e) => updatePreferences({ emailNotifications: e.target.checked })}
                      className="rounded"
                    />
                    <span className="text-sm">Email notifications</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={user.preferences.weeklyDigest}
                      onChange={(e) => updatePreferences({ weeklyDigest: e.target.checked })}
                      className="rounded"
                    />
                    <span className="text-sm">Weekly digest</span>
                  </label>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <h4 className="font-medium flex items-center gap-2">
                  <Monitor className="h-4 w-4" />
                  Display
                </h4>
                <div className="space-y-2 pl-6">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={user.preferences.compactMode}
                      onChange={(e) => updatePreferences({ compactMode: e.target.checked })}
                      className="rounded"
                    />
                    <span className="text-sm">Compact mode</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={user.preferences.autoSaveSearches}
                      onChange={(e) => updatePreferences({ autoSaveSearches: e.target.checked })}
                      className="rounded"
                    />
                    <span className="text-sm">Auto-save search history</span>
                  </label>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <h4 className="font-medium flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Reports
                </h4>
                <div className="pl-6">
                  <label className="flex flex-col gap-2">
                    <span className="text-sm">Default report size</span>
                    <select
                      value={user.preferences.defaultReportSize}
                      onChange={(e) => updatePreferences({ defaultReportSize: e.target.value as any })}
                      className="max-w-xs p-2 rounded-md border bg-background"
                    >
                      <option value="small">Small (2 min read)</option>
                      <option value="medium">Medium (5 min read)</option>
                      <option value="full">Full (10 min read)</option>
                      <option value="enterprise">Enterprise (15+ min read)</option>
                    </select>
                  </label>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
