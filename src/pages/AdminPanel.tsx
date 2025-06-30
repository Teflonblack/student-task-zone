
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Users, AlertTriangle, DollarSign, TrendingUp, Search, Ban, CheckCircle } from "lucide-react";

const AdminPanel = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const stats = [
    { label: "Total Users", value: "1,247", icon: Users, color: "text-blue-600" },
    { label: "Active Tasks", value: "89", icon: TrendingUp, color: "text-green-600" },
    { label: "Total Revenue", value: "$5,432", icon: DollarSign, color: "text-purple-600" },
    { label: "Reported Issues", value: "12", icon: AlertTriangle, color: "text-red-600" }
  ];

  const recentUsers = [
    { id: 1, name: "Sarah Johnson", email: "sarah.j@university.edu", joined: "2 days ago", status: "active", tasksCompleted: 5 },
    { id: 2, name: "Mike Chen", email: "mike.chen@university.edu", joined: "1 week ago", status: "active", tasksCompleted: 12 },
    { id: 3, name: "Emma Davis", email: "emma.d@university.edu", joined: "3 days ago", status: "pending", tasksCompleted: 0 },
    { id: 4, name: "Alex Rodriguez", email: "alex.r@university.edu", joined: "5 days ago", status: "suspended", tasksCompleted: 8 }
  ];

  const reportedTasks = [
    {
      id: 1,
      title: "Inappropriate task description",
      reporter: "Jane Smith",
      reported: "Alex T.",
      task: "Help with moving",
      reason: "Inappropriate content",
      status: "pending",
      date: "2 hours ago"
    },
    {
      id: 2,
      title: "Payment dispute",
      reporter: "Mike L.",
      reported: "Sarah K.",
      task: "Printing services",
      reason: "Payment not received",
      status: "investigating",
      date: "1 day ago"
    },
    {
      id: 3,
      title: "No-show for scheduled task",
      reporter: "Emma P.",
      reported: "Tom W.",
      task: "Tech support",
      reason: "Provider didn't show up",
      status: "resolved",
      date: "3 days ago"
    }
  ];

  const platformMetrics = [
    { label: "Daily Active Users", value: "342", change: "+12%", positive: true },
    { label: "Tasks Created Today", value: "28", change: "+8%", positive: true },
    { label: "Completion Rate", value: "94%", change: "-2%", positive: false },
    { label: "Average Task Value", value: "$14.50", change: "+5%", positive: true }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              Campus TaskHub Admin
            </Link>
            <div className="flex items-center space-x-4">
              <Badge className="bg-red-100 text-red-800">Admin Access</Badge>
              <Avatar>
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Monitor platform activity and manage user interactions</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Platform Metrics */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Platform Metrics</CardTitle>
            <CardDescription>Key performance indicators for today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {platformMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <p className="text-sm text-gray-600">{metric.label}</p>
                  <p className="text-xl font-bold text-gray-900">{metric.value}</p>
                  <p className={`text-sm ${metric.positive ? 'text-green-600' : 'text-red-600'}`}>
                    {metric.change}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main Content Tabs */}
        <Tabs defaultValue="users" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="users">User Management</TabsTrigger>
            <TabsTrigger value="reports">Reported Issues</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>Manage registered users and their account status</CardDescription>
                  </div>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search users..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-64"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentUsers.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-gray-900">{user.name}</p>
                          <p className="text-sm text-gray-600">{user.email}</p>
                          <p className="text-xs text-gray-500">Joined {user.joined} • {user.tasksCompleted} tasks completed</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={
                          user.status === 'active' ? 'bg-green-100 text-green-800' :
                          user.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }>
                          {user.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          View Profile
                        </Button>
                        {user.status === 'suspended' ? (
                          <Button variant="outline" size="sm" className="text-green-600">
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Reinstate
                          </Button>
                        ) : (
                          <Button variant="outline" size="sm" className="text-red-600">
                            <Ban className="h-4 w-4 mr-1" />
                            Suspend
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Reported Issues</CardTitle>
                <CardDescription>Review and resolve user reports and disputes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reportedTasks.map((report) => (
                    <div key={report.id} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold text-gray-900">{report.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            Task: "{report.task}" • Reported by {report.reporter}
                          </p>
                          <p className="text-sm text-gray-600">
                            Against: {report.reported} • Reason: {report.reason}
                          </p>
                        </div>
                        <div className="text-right">
                          <Badge className={
                            report.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            report.status === 'investigating' ? 'bg-blue-100 text-blue-800' :
                            'bg-green-100 text-green-800'
                          }>
                            {report.status}
                          </Badge>
                          <p className="text-xs text-gray-500 mt-1">{report.date}</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">View Details</Button>
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Take Action</Button>
                        <Button size="sm" variant="outline" className="text-red-600">
                          Dismiss
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>User Growth</CardTitle>
                  <CardDescription>Monthly user registration trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-gray-500">
                    <p>Chart placeholder - User growth over time</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Task Categories</CardTitle>
                  <CardDescription>Most popular task types</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: "Printing & Copying", count: 45, percentage: 32 },
                      { name: "Moving & Delivery", count: 38, percentage: 27 },
                      { name: "Food & Groceries", count: 25, percentage: 18 },
                      { name: "Tech Support", count: 20, percentage: 14 },
                      { name: "Other", count: 12, percentage: 9 }
                    ].map((category, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">{category.name}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${category.percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium">{category.count}</span>
                        </div>
                      </div>
                    ))}
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

export default AdminPanel;
