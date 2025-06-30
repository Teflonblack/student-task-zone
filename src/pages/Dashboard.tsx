
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bell, Plus, Wallet, Clock, Check, User } from "lucide-react";

const Dashboard = () => {
  const mockTasks = [
    { id: 1, title: "Print 20 pages in library", status: "active", price: "$5", time: "2 hours ago" },
    { id: 2, title: "Move boxes to dorm", status: "completed", price: "$15", time: "1 day ago" },
    { id: 3, title: "Buy groceries from campus store", status: "pending", price: "$8", time: "3 hours ago" }
  ];

  const mockChats = [
    { id: 1, name: "Sarah M.", message: "When can you help with printing?", time: "10 min ago", unread: true },
    { id: 2, name: "Mike K.", message: "Task completed! Thanks!", time: "1 hour ago", unread: false },
    { id: 3, name: "Emma L.", message: "Are you available this evening?", time: "2 hours ago", unread: true }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              Campus TaskHub
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Link to="/profile">
                <Avatar>
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John!</h1>
          <p className="text-gray-600">Here's what's happening with your tasks today.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Wallet Balance</p>
                  <p className="text-2xl font-bold text-green-600">$45.50</p>
                </div>
                <Wallet className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Tasks</p>
                  <p className="text-2xl font-bold text-blue-600">3</p>
                </div>
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Completed</p>
                  <p className="text-2xl font-bold text-purple-600">12</p>
                </div>
                <Check className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Rating</p>
                  <p className="text-2xl font-bold text-yellow-600">4.9</p>
                </div>
                <User className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tasks Section */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Your Tasks</h2>
              <Link to="/create-task">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  New Task
                </Button>
              </Link>
            </div>

            <div className="space-y-4">
              {mockTasks.map((task) => (
                <Card key={task.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900">{task.title}</h3>
                      <Badge 
                        variant={task.status === 'completed' ? 'default' : task.status === 'active' ? 'secondary' : 'outline'}
                        className={
                          task.status === 'completed' ? 'bg-green-100 text-green-800' :
                          task.status === 'active' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }
                      >
                        {task.status}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-600">
                      <span>{task.time}</span>
                      <span className="font-semibold text-green-600">{task.price}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6">
              <Link to="/tasks">
                <Button variant="outline" className="w-full">
                  View All Tasks
                </Button>
              </Link>
            </div>
          </div>

          {/* Recent Chats */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Recent Chats</h2>
              <Link to="/chat">
                <Button variant="ghost" size="sm">View All</Button>
              </Link>
            </div>

            <div className="space-y-4">
              {mockChats.map((chat) => (
                <Card key={chat.id} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <Avatar>
                        <AvatarFallback>{chat.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                          <p className="font-medium text-gray-900">{chat.name}</p>
                          <p className="text-xs text-gray-500">{chat.time}</p>
                        </div>
                        <p className="text-sm text-gray-600 truncate">{chat.message}</p>
                        {chat.unread && (
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-1"></div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
