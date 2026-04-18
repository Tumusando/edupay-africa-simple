"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, X, Send, User, Headphones } from "lucide-react"

export function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "support",
      text: "Hello! Welcome to EduPay Africa Support. How can I help you today?",
      time: "Just now",
    },
  ])

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: "user",
        text: message,
        time: "Just now",
      }
      setMessages([...messages, newMessage])
      setMessage("")

      // Auto reply from support
      setTimeout(() => {
        const reply = {
          id: messages.length + 2,
          sender: "support",
          text: "Thank you for your message! Our support team will respond shortly. You can also reach us at tumukundesandrine50@gmail.com or +250780289347.",
          time: "Just now",
        }
        setMessages((prev) => [...prev, reply])
      }, 1500)
    }
  }

  return (
    <>
      {/* Chat Widget Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="fixed bottom-24 md:bottom-6 right-6 z-40 h-14 w-14 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 md:bottom-6 right-6 z-40 w-[calc(100vw-2rem)] md:w-96 shadow-2xl border-2">
          <CardHeader className="bg-gradient-to-r from-primary to-accent text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Headphones className="w-5 h-5" />
                </div>
                <div>
                  <CardTitle className="text-lg">EduPay Support</CardTitle>
                  <div className="flex items-center gap-1 text-xs">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span>Online now</span>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 text-white"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-4 space-y-4">
            {/* Messages Area */}
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-2 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      msg.sender === "user" ? "bg-primary" : "bg-accent"
                    }`}
                  >
                    {msg.sender === "user" ? (
                      <User className="w-4 h-4 text-white" />
                    ) : (
                      <Headphones className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <div className={`flex-1 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
                    <div
                      className={`inline-block max-w-[85%] rounded-lg p-3 ${
                        msg.sender === "user" ? "bg-primary text-white" : "bg-muted"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{msg.time}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Replies */}
            <div className="flex gap-2 flex-wrap">
              <Badge
                variant="outline"
                className="cursor-pointer hover:bg-primary hover:text-white transition-colors text-xs"
                onClick={() => setMessage("I need help with payments")}
              >
                Payment Help
              </Badge>
              <Badge
                variant="outline"
                className="cursor-pointer hover:bg-primary hover:text-white transition-colors text-xs"
                onClick={() => setMessage("How do I register?")}
              >
                Registration
              </Badge>
              <Badge
                variant="outline"
                className="cursor-pointer hover:bg-primary hover:text-white transition-colors text-xs"
                onClick={() => setMessage("Tell me about courses")}
              >
                Courses
              </Badge>
            </div>

            {/* Input Area */}
            <div className="flex gap-2">
              <Input
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                className="flex-1"
              />
              <Button size="icon" onClick={sendMessage} disabled={!message.trim()}>
                <Send className="w-4 h-4" />
              </Button>
            </div>

            {/* Contact Info */}
            <div className="bg-muted/50 rounded-lg p-3 space-y-1">
              <p className="text-xs font-medium">Direct Contact:</p>
              <p className="text-xs text-muted-foreground">Phone: +250780289347</p>
              <p className="text-xs text-muted-foreground break-all">Email: tumukundesandrine50@gmail.com</p>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}
