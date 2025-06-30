
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

const TaskCreation = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    location: "",
    timeframe: "",
    urgency: "medium"
  });

  const categories = [
    { id: "printing", name: "Printing & Copying", emoji: "🖨️" },
    { id: "moving", name: "Moving & Delivery", emoji: "📦" },
    { id: "food", name: "Food & Groceries", emoji: "🍕" },
    { id: "tech", name: "Tech Support", emoji: "💻" },
    { id: "tutoring", name: "Tutoring", emoji: "📚" },
    { id: "cleaning", name: "Cleaning", emoji: "🧹" },
    { id: "event", name: "Event Help", emoji: "🎉" },
    { id: "transport", name: "Transportation", emoji: "🚗" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.title || !formData.description || !formData.category || !formData.price) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Task Created!",
      description: "Your task has been posted successfully.",
    });

    // Navigate to dashboard or task listing
    navigate("/dashboard");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create a New Task</h1>
          <p className="text-gray-600">Post a task and get help from fellow students in your campus community.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Task Details</CardTitle>
                  <CardDescription>Provide clear information about what you need help with</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="title">Task Title *</Label>
                    <Input
                      id="title"
                      placeholder="e.g., Help me print and bind my thesis"
                      value={formData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="description">Description *</Label>
                    <textarea
                      id="description"
                      placeholder="Provide detailed information about the task, what's involved, and any special requirements..."
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      className="mt-1 w-full min-h-[120px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      placeholder="e.g., Main Library, North Campus, Room 204"
                      value={formData.location}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="timeframe">When do you need this done?</Label>
                    <Input
                      id="timeframe"
                      placeholder="e.g., Today by 5 PM, This weekend, Next week"
                      value={formData.timeframe}
                      onChange={(e) => handleInputChange("timeframe", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Category *</CardTitle>
                  <CardDescription>Select the category that best fits your task</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {categories.map((category) => (
                      <div
                        key={category.id}
                        className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                          formData.category === category.id
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() => handleInputChange("category", category.id)}
                      >
                        <div className="text-center">
                          <div className="text-2xl mb-2">{category.emoji}</div>
                          <div className="text-sm font-medium">{category.name}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Payment & Priority</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="price">How much will you pay? *</Label>
                    <div className="relative mt-1">
                      <span className="absolute left-3 top-3 text-gray-500">$</span>
                      <Input
                        id="price"
                        type="number"
                        placeholder="15.00"
                        value={formData.price}
                        onChange={(e) => handleInputChange("price", e.target.value)}
                        className="pl-8"
                      />
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      Fair pricing helps attract more helpers
                    </p>
                  </div>

                  <div>
                    <Label>Priority Level</Label>
                    <RadioGroup
                      value={formData.urgency}
                      onValueChange={(value) => handleInputChange("urgency", value)}
                      className="mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="low" id="low" />
                        <Label htmlFor="low" className="text-sm">Low - Can wait a few days</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="medium" id="medium" />
                        <Label htmlFor="medium" className="text-sm">Medium - Needed soon</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="high" id="high" />
                        <Label htmlFor="high" className="text-sm">High - Urgent</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tips for Success</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Be specific about what you need</li>
                    <li>• Set a fair price for the work involved</li>
                    <li>• Include time constraints and location details</li>
                    <li>• Be available to answer questions quickly</li>
                  </ul>
                </CardContent>
              </Card>

              <div className="space-y-3">
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Post Task
                </Button>
                <Button type="button" variant="outline" className="w-full">
                  Save as Draft
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskCreation;
