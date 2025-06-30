
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, Filter, Clock, User, Plus } from "lucide-react";

const TaskListing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Tasks" },
    { id: "printing", name: "Printing" },
    { id: "moving", name: "Moving" },
    { id: "food", name: "Food & Groceries" },
    { id: "tech", name: "Tech Support" },
    { id: "tutoring", name: "Tutoring" },
    { id: "cleaning", name: "Cleaning" }
  ];

  const mockTasks = [
    {
      id: 1,
      title: "Print and bind 50 page thesis",
      description: "Need help printing and binding my thesis at the library. Will provide PDF file.",
      category: "printing",
      price: "$12",
      location: "Main Library",
      timePosted: "2 hours ago",
      requester: "Sarah M.",
      rating: 4.8,
      urgency: "medium"
    },
    {
      id: 2,
      title: "Help move furniture to new dorm",
      description: "Moving to a new dorm room and need help carrying boxes and furniture. Should take about 2 hours.",
      category: "moving",
      price: "$25",
      location: "North Campus",
      timePosted: "4 hours ago",
      requester: "Mike K.",
      rating: 4.9,
      urgency: "high"
    },
    {
      id: 3,
      title: "Buy groceries from campus store",
      description: "Need someone to pick up groceries from the campus store. List will be provided.",
      category: "food",
      price: "$8",
      location: "Campus Store",
      timePosted: "1 hour ago",
      requester: "Emma L.",
      rating: 4.7,
      urgency: "low"
    },
    {
      id: 4,
      title: "Fix laptop WiFi connection issue",
      description: "Laptop won't connect to campus WiFi. Need tech-savvy student to help troubleshoot.",
      category: "tech",
      price: "$15",
      location: "East Dorm",
      timePosted: "6 hours ago",
      requester: "Alex T.",
      rating: 4.6,
      urgency: "medium"
    },
    {
      id: 5,
      title: "Math tutoring for calculus exam",
      description: "Need help preparing for calculus midterm. Looking for someone with strong math background.",
      category: "tutoring",
      price: "$20/hour",
      location: "Study Hall",
      timePosted: "8 hours ago",
      requester: "Lisa P.",
      rating: 4.9,
      urgency: "high"
    }
  ];

  const filteredTasks = mockTasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || task.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              <Link to="/create-task">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Post Task
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Available Tasks</h1>
          <p className="text-gray-600">Find tasks that match your skills and earn money helping fellow students.</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search tasks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "bg-blue-600 text-white" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Task Grid */}
        <div className="grid gap-6">
          {filteredTasks.map((task) => (
            <Card key={task.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg mb-2">{task.title}</CardTitle>
                    <CardDescription className="text-base">{task.description}</CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600 mb-1">{task.price}</div>
                    <Badge 
                      variant="outline"
                      className={
                        task.urgency === 'high' ? 'border-red-200 text-red-700 bg-red-50' :
                        task.urgency === 'medium' ? 'border-yellow-200 text-yellow-700 bg-yellow-50' :
                        'border-green-200 text-green-700 bg-green-50'
                      }
                    >
                      {task.urgency} priority
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Avatar className="h-6 w-6 mr-2">
                        <AvatarFallback className="text-xs">
                          {task.requester.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <span>{task.requester}</span>
                      <span className="ml-1">★ {task.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{task.timePosted}</span>
                    </div>
                    <div className="flex items-center">
                      <span>📍 {task.location}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTasks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No tasks found matching your criteria.</p>
            <p className="text-gray-400 mt-2">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskListing;
