
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, User, Calendar, Wallet } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">Campus TaskHub</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/dashboard">
                <Button variant="ghost">Dashboard</Button>
              </Link>
              <Link to="/profile">
                <Button variant="outline">Profile</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your Campus, Your Community, Your Tasks
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Connect with fellow students to get help with everyday campus tasks or earn money by offering your services
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tasks">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                <Search className="mr-2 h-5 w-5" />
                Find Help
              </Button>
            </Link>
            <Link to="/create-task">
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                <User className="mr-2 h-5 w-5" />
                Offer Help
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Search className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Find Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Browse available tasks from fellow students in your campus community
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Calendar className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Get Connected</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Chat with task requesters and providers to coordinate and complete tasks
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Wallet className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Earn & Pay</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Secure payments through our platform wallet system for completed tasks
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Tasks Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Popular Task Categories
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Printing & Copying", emoji: "🖨️", color: "bg-blue-100 text-blue-800" },
              { name: "Moving & Delivery", emoji: "📦", color: "bg-green-100 text-green-800" },
              { name: "Food & Groceries", emoji: "🍕", color: "bg-orange-100 text-orange-800" },
              { name: "Tech Support", emoji: "💻", color: "bg-purple-100 text-purple-800" },
              { name: "Tutoring", emoji: "📚", color: "bg-pink-100 text-pink-800" },
              { name: "Cleaning", emoji: "🧹", color: "bg-teal-100 text-teal-800" },
              { name: "Event Help", emoji: "🎉", color: "bg-yellow-100 text-yellow-800" },
              { name: "Transportation", emoji: "🚗", color: "bg-red-100 text-red-800" }
            ].map((category) => (
              <Card key={category.name} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-2">{category.emoji}</div>
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${category.color}`}>
                    {category.name}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h4 className="text-2xl font-bold mb-4">Campus TaskHub</h4>
          <p className="text-gray-400">
            Connecting students, building community, one task at a time.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
