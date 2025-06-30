
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, Send, Plus } from "lucide-react";

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [message, setMessage] = useState("");

  const chats = [
    {
      id: 1,
      name: "Sarah M.",
      avatar: "SM",
      task: "Print thesis documents",
      lastMessage: "When can you help with printing?",
      time: "10 min ago",
      unread: 2,
      online: true
    },
    {
      id: 2,
      name: "Mike K.",
      avatar: "MK",
      task: "Moving boxes",
      lastMessage: "Task completed! Thanks!",
      time: "1 hour ago",
      unread: 0,
      online: false
    },
    {
      id: 3,
      name: "Emma L.",
      avatar: "EL",
      task: "Grocery shopping",
      lastMessage: "Are you available this evening?",
      time: "2 hours ago",
      unread: 1,
      online: true
    },
    {
      id: 4,
      name: "Alex T.",
      avatar: "AT",
      task: "Tech support",
      lastMessage: "Perfect, see you at 3 PM",
      time: "1 day ago",
      unread: 0,
      online: false
    }
  ];

  const messages = [
    {
      id: 1,
      sender: "Sarah M.",
      content: "Hi! I saw you're available to help with printing tasks.",
      time: "2:30 PM",
      isMe: false
    },
    {
      id: 2,
      sender: "Me",
      content: "Yes, I can definitely help! What do you need printed?",
      time: "2:32 PM",
      isMe: true
    },
    {
      id: 3,
      sender: "Sarah M.",
      content: "I need to print and bind my 50-page thesis. The library binding service is closed today.",
      time: "2:33 PM",
      isMe: false
    },
    {
      id: 4,
      sender: "Me",
      content: "No problem! I can print it at the 24-hour computer lab and get it bound at the campus copy center. When do you need it?",
      time: "2:35 PM",
      isMe: true
    },
    {
      id: 5,
      sender: "Sarah M.",
      content: "That would be amazing! I need it by tomorrow morning for my advisor meeting. When can you help with printing?",
      time: "2:37 PM",
      isMe: false
    }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Sending message:", message);
      setMessage("");
    }
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-12 gap-6 h-[calc(100vh-12rem)]">
          {/* Chat List */}
          <div className="lg:col-span-4 bg-white rounded-lg shadow-sm border">
            <div className="p-4 border-b">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900">Messages</h2>
                <Button size="sm" variant="outline">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input placeholder="Search conversations..." className="pl-10" />
              </div>
            </div>

            <div className="overflow-y-auto">
              {chats.map((chat) => (
                <div
                  key={chat.id}
                  className={`p-4 border-b cursor-pointer transition-colors ${
                    selectedChat === chat.id ? "bg-blue-50 border-blue-200" : "hover:bg-gray-50"
                  }`}
                  onClick={() => setSelectedChat(chat.id)}
                >
                  <div className="flex items-start space-x-3">
                    <div className="relative">
                      <Avatar>
                        <AvatarFallback>{chat.avatar}</AvatarFallback>
                      </Avatar>
                      {chat.online && (
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center">
                        <p className="font-medium text-gray-900">{chat.name}</p>
                        <p className="text-xs text-gray-500">{chat.time}</p>
                      </div>
                      <p className="text-sm text-blue-600 mb-1">{chat.task}</p>
                      <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                    </div>
                    {chat.unread > 0 && (
                      <Badge className="bg-blue-600 text-white text-xs">
                        {chat.unread}
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Messages */}
          <div className="lg:col-span-8 bg-white rounded-lg shadow-sm border flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium text-gray-900">Sarah M.</h3>
                  <p className="text-sm text-gray-600">Print thesis documents</p>
                </div>
                <div className="ml-auto">
                  <Badge className="bg-green-100 text-green-800">Active Task</Badge>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.isMe ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    msg.isMe 
                      ? "bg-blue-600 text-white" 
                      : "bg-gray-100 text-gray-900"
                  }`}>
                    <p className="text-sm">{msg.content}</p>
                    <p className={`text-xs mt-1 ${msg.isMe ? "text-blue-100" : "text-gray-500"}`}>
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} className="bg-blue-600 hover:bg-blue-700">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
