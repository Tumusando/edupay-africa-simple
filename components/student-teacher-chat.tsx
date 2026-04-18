"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  MessageSquare,
  Send,
  Paperclip,
  Video,
  Phone,
  Users,
  Search,
  MoreVertical,
  ImageIcon,
  Smile,
  Check,
  CheckCheck,
} from "lucide-react"

const conversations = [
  {
    id: 1,
    name: "Prof. Jean Mukiza",
    role: "Mathematics Teacher",
    subject: "Advanced Algebra",
    country: "Rwanda",
    lastMessage: "Great work on the assignment!",
    time: "2m ago",
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: "Dr. Amina Hassan",
    role: "Physics Instructor",
    subject: "Quantum Mechanics",
    country: "Kenya",
    lastMessage: "Tomorrow's class is at 10 AM",
    time: "1h ago",
    unread: 0,
    online: true,
  },
  {
    id: 3,
    name: "Mr. David Omondi",
    role: "Coding Instructor",
    subject: "Web Development",
    country: "Uganda",
    lastMessage: "Check the new project files",
    time: "3h ago",
    unread: 1,
    online: false,
  },
]

const groupChats = [
  {
    id: 1,
    name: "Mathematics Study Group",
    members: 24,
    lastMessage: "Can someone explain question 5?",
    time: "5m ago",
    unread: 5,
  },
  {
    id: 2,
    name: "Web3 Developers East Africa",
    members: 156,
    lastMessage: "New blockchain tutorial posted",
    time: "30m ago",
    unread: 12,
  },
  {
    id: 3,
    name: "Physics Class 2026",
    members: 18,
    lastMessage: "Exam schedule released",
    time: "2h ago",
    unread: 0,
  },
]

const messages = [
  { id: 1, sender: "teacher", text: "Hello! How can I help you today?", time: "10:30 AM", read: true },
  {
    id: 2,
    sender: "me",
    text: "I have a question about the quadratic equation assignment",
    time: "10:32 AM",
    read: true,
  },
  {
    id: 3,
    sender: "teacher",
    text: "Which question are you stuck on?",
    time: "10:33 AM",
    read: true,
  },
  { id: 4, sender: "me", text: "Question 7 - I don't understand the discriminant part", time: "10:35 AM", read: true },
  {
    id: 5,
    sender: "teacher",
    text: "The discriminant tells us how many solutions the equation has. Let me share a diagram...",
    time: "10:37 AM",
    read: true,
  },
  { id: 6, sender: "teacher", text: "Great work on the assignment!", time: "10:45 AM", read: false },
]

export function StudentTeacherChat() {
  const [activeTab, setActiveTab] = useState("direct")
  const [selectedConversation, setSelectedConversation] = useState(conversations[0])
  const [messageText, setMessageText] = useState("")

  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Student-Teacher Chat</h1>
        <p className="text-muted-foreground">Connect with teachers and classmates across East Africa</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="direct">Direct Messages</TabsTrigger>
          <TabsTrigger value="groups">Study Groups</TabsTrigger>
          <TabsTrigger value="teachers">Find Teachers</TabsTrigger>
        </TabsList>

        <TabsContent value="direct" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-[600px]">
            {/* Conversations List */}
            <Card className="lg:col-span-1 overflow-hidden flex flex-col">
              <CardHeader className="pb-3 border-b">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input placeholder="Search conversations..." className="pl-9" />
                </div>
              </CardHeader>
              <CardContent className="p-0 flex-1 overflow-y-auto">
                {conversations.map((conv) => (
                  <div
                    key={conv.id}
                    className={`p-4 border-b cursor-pointer hover:bg-muted/50 transition-colors ${
                      selectedConversation.id === conv.id ? "bg-muted" : ""
                    }`}
                    onClick={() => setSelectedConversation(conv)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative">
                        <Avatar>
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {conv.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        {conv.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-sm truncate">{conv.name}</p>
                            <p className="text-xs text-muted-foreground truncate">{conv.subject}</p>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <span className="text-xs text-muted-foreground whitespace-nowrap">{conv.time}</span>
                            {conv.unread > 0 && (
                              <Badge variant="default" className="h-5 min-w-[20px] px-1.5 text-xs">
                                {conv.unread}
                              </Badge>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground truncate mt-1">{conv.lastMessage}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Chat Window */}
            <Card className="lg:col-span-2 overflow-hidden flex flex-col">
              <CardHeader className="pb-3 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {selectedConversation.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{selectedConversation.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {selectedConversation.role} • {selectedConversation.country}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Video className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[70%] rounded-lg p-3 ${
                        msg.sender === "me" ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <div className="flex items-center justify-end gap-1 mt-1">
                        <span
                          className={`text-xs ${
                            msg.sender === "me" ? "text-primary-foreground/70" : "text-muted-foreground"
                          }`}
                        >
                          {msg.time}
                        </span>
                        {msg.sender === "me" &&
                          (msg.read ? (
                            <CheckCheck className="w-3 h-3 text-primary-foreground/70" />
                          ) : (
                            <Check className="w-3 h-3 text-primary-foreground/70" />
                          ))}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>

              <div className="border-t p-4">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Paperclip className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <ImageIcon className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Smile className="w-5 h-5" />
                  </Button>
                  <Input
                    placeholder="Type a message..."
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    className="flex-1"
                  />
                  <Button size="icon">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="groups" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Study Groups
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {groupChats.map((group) => (
                <div
                  key={group.id}
                  className="p-4 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-sm">{group.name}</h3>
                          {group.unread > 0 && (
                            <Badge variant="default" className="h-5 min-w-[20px] px-1.5 text-xs">
                              {group.unread}
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mb-1">{group.members} members</p>
                        <p className="text-sm text-muted-foreground truncate">{group.lastMessage}</p>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{group.time}</span>
                  </div>
                </div>
              ))}
              <Button className="w-full">
                <Users className="w-4 h-4 mr-2" />
                Create New Study Group
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="teachers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Find Teachers</CardTitle>
              <div className="relative mt-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Search by subject, name, or country..." className="pl-9" />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {conversations.map((teacher) => (
                <div key={teacher.id} className="p-4 border rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <Avatar className="w-16 h-16">
                        <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                          {teacher.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      {teacher.online && (
                        <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-background"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{teacher.name}</h3>
                      <p className="text-sm text-muted-foreground">{teacher.role}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="secondary">{teacher.subject}</Badge>
                        <Badge variant="outline">{teacher.country}</Badge>
                      </div>
                    </div>
                    <Button size="sm">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Message
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
