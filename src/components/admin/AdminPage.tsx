import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Plus, Send, Calendar, MessageCircle, Save, BarChart3, Users, Eye, Clock } from 'lucide-react';

export const AdminPage = () => {
  const [quoteForm, setQuoteForm] = useState({
    text: '',
    author: '',
    reflection: ''
  });
  
  const [eventForm, setEventForm] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
    type: 'meditation'
  });

  const { toast } = useToast();

  // Dummy analytics data
  const analyticsData = {
    totalUsers: 1247,
    activeUsers: 892,
    pageViews: {
      quotes: 3456,
      videos: 2789,
      calendar: 1234,
      gurudev: 876
    },
    currentlyOnline: 34,
    recentUsers: [
      { name: "Sarah M.", location: "California", lastActive: "2 minutes ago", page: "Quotes" },
      { name: "Rahul P.", location: "New York", lastActive: "5 minutes ago", page: "Videos" },
      { name: "Maria L.", location: "Texas", lastActive: "8 minutes ago", page: "Calendar" },
      { name: "David K.", location: "Florida", lastActive: "12 minutes ago", page: "Gurudev" },
      { name: "Priya S.", location: "California", lastActive: "15 minutes ago", page: "Quotes" }
    ]
  };

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Quote Published",
      description: "The quote has been added to the daily feed and will be sent as a push notification."
    });
    
    setQuoteForm({ text: '', author: '', reflection: '' });
  };

  const handleEventSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Event Created",
      description: "The event has been added to the calendar and users will be notified."
    });
    
    setEventForm({
      title: '',
      date: '',
      time: '',
      location: '',
      description: '',
      type: 'meditation'
    });
  };

  const sendPushNotification = async () => {
    // Simulate push notification
    await new Promise(resolve => setTimeout(resolve, 500));
    
    toast({
      title: "Notification Sent",
      description: "Push notification sent to all users with today's quote."
    });
  };

  return (
    <div className="min-h-screen bg-gradient-peace pb-20">
      <div className="px-4 py-6">
        <div className="text-center mb-6">
          <h1 className="spiritual-heading text-primary mb-2">Admin Panel</h1>
          <p className="text-muted-foreground">Manage quotes, events, and notifications</p>
        </div>

        <Tabs defaultValue="quotes" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="quotes" className="flex items-center space-x-2">
              <MessageCircle className="w-4 h-4" />
              <span>Quotes</span>
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Events</span>
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center space-x-2">
              <Send className="w-4 h-4" />
              <span>Notify</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center space-x-2">
              <BarChart3 className="w-4 h-4" />
              <span>Analytics</span>
            </TabsTrigger>
          </TabsList>

          {/* Quotes Management */}
          <TabsContent value="quotes">
            <Card className="divine-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Plus className="w-5 h-5" />
                  <span>Add New Quote</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleQuoteSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="quote-text">Quote Text</Label>
                    <Textarea
                      id="quote-text"
                      placeholder="Enter the inspirational quote..."
                      value={quoteForm.text}
                      onChange={(e) => setQuoteForm(prev => ({ ...prev, text: e.target.value }))}
                      className="min-h-24 resize-none"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="quote-author">Author</Label>
                    <Input
                      id="quote-author"
                      placeholder="e.g., Gurudev, Buddha, Rumi..."
                      value={quoteForm.author}
                      onChange={(e) => setQuoteForm(prev => ({ ...prev, author: e.target.value }))}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="quote-reflection">Reflection Question (Optional)</Label>
                    <Input
                      id="quote-reflection"
                      placeholder="A question to help users reflect on the quote..."
                      value={quoteForm.reflection}
                      onChange={(e) => setQuoteForm(prev => ({ ...prev, reflection: e.target.value }))}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full sacred-transition">
                    <Save className="w-4 h-4 mr-2" />
                    Publish Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Events Management */}
          <TabsContent value="events">
            <Card className="divine-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Plus className="w-5 h-5" />
                  <span>Create New Event</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleEventSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="event-title">Event Title</Label>
                    <Input
                      id="event-title"
                      placeholder="e.g., Morning Meditation, Vedanta Talk..."
                      value={eventForm.title}
                      onChange={(e) => setEventForm(prev => ({ ...prev, title: e.target.value }))}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="event-date">Date</Label>
                      <Input
                        id="event-date"
                        type="date"
                        value={eventForm.date}
                        onChange={(e) => setEventForm(prev => ({ ...prev, date: e.target.value }))}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="event-time">Time</Label>
                      <Input
                        id="event-time"
                        type="time"
                        value={eventForm.time}
                        onChange={(e) => setEventForm(prev => ({ ...prev, time: e.target.value }))}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="event-location">Location</Label>
                    <Input
                      id="event-location"
                      placeholder="e.g., Main Hall, Online, Community Center..."
                      value={eventForm.location}
                      onChange={(e) => setEventForm(prev => ({ ...prev, location: e.target.value }))}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="event-type">Event Type</Label>
                    <select 
                      id="event-type"
                      value={eventForm.type}
                      onChange={(e) => setEventForm(prev => ({ ...prev, type: e.target.value }))}
                      className="w-full p-2 border border-border rounded-md bg-background"
                    >
                      <option value="meditation">Meditation</option>
                      <option value="teaching">Teaching</option>
                      <option value="celebration">Celebration</option>
                      <option value="retreat">Retreat</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="event-description">Description</Label>
                    <Textarea
                      id="event-description"
                      placeholder="Describe the event, what participants can expect..."
                      value={eventForm.description}
                      onChange={(e) => setEventForm(prev => ({ ...prev, description: e.target.value }))}
                      className="min-h-24 resize-none"
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full sacred-transition">
                    <Save className="w-4 h-4 mr-2" />
                    Create Event
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications */}
          <TabsContent value="notifications">
            <div className="space-y-4">
              <Card className="divine-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Send className="w-5 h-5" />
                    <span>Send Push Notification</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Send today's quote as a push notification to all app users.
                  </p>
                  <Button 
                    onClick={sendPushNotification}
                    className="w-full sacred-transition"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Daily Quote Notification
                  </Button>
                </CardContent>
              </Card>

              <Card className="peaceful-shadow">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span>Quote published: "The mind is everything..."</span>
                      <span className="text-muted-foreground">2 hours ago</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span>Event created: New Moon Meditation</span>
                      <span className="text-muted-foreground">1 day ago</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span>Push notification sent to 1,247 users</span>
                      <span className="text-muted-foreground">2 days ago</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics">
            <div className="space-y-4">
              {/* Stats Overview */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="divine-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Total Users</p>
                        <p className="text-2xl font-bold text-primary">{analyticsData.totalUsers.toLocaleString()}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="divine-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Eye className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Currently Online</p>
                        <p className="text-2xl font-bold text-primary">{analyticsData.currentlyOnline}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Page Views */}
              <Card className="divine-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="w-5 h-5" />
                    <span>Page Views (Last 7 Days)</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {Object.entries(analyticsData.pageViews).map(([page, views]) => (
                      <div key={page} className="flex justify-between items-center">
                        <span className="capitalize font-medium">{page}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 bg-muted rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full" 
                              style={{ width: `${(views / Math.max(...Object.values(analyticsData.pageViews))) * 100}%` }}
                            />
                          </div>
                          <span className="text-sm font-mono min-w-[3rem] text-right">{views.toLocaleString()}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Users */}
              <Card className="divine-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-5 h-5" />
                    <span>Recent User Activity</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {analyticsData.recentUsers.map((user, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-muted-foreground">{user.location} • {user.page}</p>
                        </div>
                        <span className="text-xs text-muted-foreground">{user.lastActive}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Live Activity */}
              <Card className="peaceful-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span>Live Activity</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span>Active users in last 5 minutes</span>
                      <span className="font-mono text-primary">{analyticsData.activeUsers}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Most popular page right now</span>
                      <span className="font-medium">Quotes</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Average session duration</span>
                      <span className="font-mono">4m 32s</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};