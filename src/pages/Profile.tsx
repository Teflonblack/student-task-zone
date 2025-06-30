
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Calendar, Wallet, User, Check } from "lucide-react";

const Profile = () => {
  const completedTasks = [
    {
      id: 1,
      title: "Printed marketing flyers",
      type: "completed",
      price: "$8",
      date: "2 days ago",
      rating: 5,
      review: "Great job! Very reliable and fast service."
    },
    {
      id: 2,
      title: "Helped move dorm furniture",
      type: "completed",
      price: "$25",
      date: "5 days ago",
      rating: 5,
      review: "Super helpful and strong! Made moving so much easier."
    },
    {
      id: 3,
      title: "Tech support for laptop",
      type: "completed",
      price: "$15",
      date: "1 week ago",
      rating: 4,
      review: "Fixed the issue quickly. Very knowledgeable!"
    }
  ];

  const activeTasks = [
    {
      id: 1,
      title: "Print and bind thesis",
      type: "active",
      price: "$12",
      status: "In Progress",
      date: "Today"
    },
    {
      id: 2,
      title: "Grocery shopping help",
      type: "active",
      price: "$8",
      status: "Pending",
      date: "Tomorrow"
    }
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
              <Link to="/dashboard">
                <Button variant="ghost">Dashboard</Button>
              </Link>
              <Link to="/tasks">
                <Button variant="outline">Browse Tasks</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
              <Avatar className="w-24 h-24">
                <AvatarFallback className="text-2xl">JD</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">John Doe</h1>
                <p className="text-gray-600 mb-4">Computer Science Student • Junior Year</p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span className="font-semibold">4.9</span>
                    <span className="text-gray-600">(24 reviews)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="font-semibold">32</span>
                    <span className="text-gray-600">tasks completed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-blue-500" />
                    <span className="text-gray-600">Joined March 2024</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <Badge className="bg-blue-100 text-blue-800">Tech Support</Badge>
                  <Badge className="bg-green-100 text-green-800">Printing</Badge>
                  <Badge className="bg-purple-100 text-purple-800">Moving</Badge>
                  <Badge className="bg-orange-100 text-orange-800">Tutoring</Badge>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-green-50 p-4 rounded-lg">
                  <Wallet className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Wallet Balance</p>
                  <p className="text-2xl font-bold text-green-600">$45.50</p>
                </div>
                <Button className="mt-4 w-full">Edit Profile</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">32</div>
              <p className="text-gray-600">Tasks Completed</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">$284</div>
              <p className="text-gray-600">Total Earned</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">4.9</div>
              <p className="text-gray-600">Average Rating</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
              <p className="text-gray-600">Completion Rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Task History */}
        <Card>
          <CardHeader>
            <CardTitle>Task History</CardTitle>
            <CardDescription>Your recent task activity and performance</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="completed" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="completed">Completed Tasks</TabsTrigger>
                <TabsTrigger value="active">Active Tasks</TabsTrigger>
              </TabsList>
              
              <TabsContent value="completed" className="space-y-4">
                {completedTasks.map((task) => (
                  <Card key={task.id}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">{task.title}</h4>
                          <p className="text-sm text-gray-600 mb-2">{task.date}</p>
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < task.rating ? "text-yellow-500 fill-current" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-600">"{task.review}"</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-green-600">{task.price}</p>
                          <Badge className="bg-green-100 text-green-800 mt-1">Completed</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="active" className="space-y-4">
                {activeTasks.map((task) => (
                  <Card key={task.id}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">{task.title}</h4>
                          <p className="text-sm text-gray-600 mb-2">{task.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-blue-600">{task.price}</p>
                          <Badge 
                            className={`mt-1 ${
                              task.status === "In Progress" 
                                ? "bg-blue-100 text-blue-800" 
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {task.status}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
