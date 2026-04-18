"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DollarSign,
  Users,
  FileText,
  Calendar,
  Download,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Search,
  Filter,
} from "lucide-react"

export function PayrollSystem() {
  const [activeTab, setActiveTab] = useState("overview")

  // Sample staff data
  const staffMembers = [
    {
      id: 1,
      name: "Dr. Sarah Mukandori",
      role: "Headteacher",
      salary: 450,
      status: "Active",
      lastPaid: "2026-01-01",
      attendance: "100%",
    },
    {
      id: 2,
      name: "John Nkurunziza",
      role: "Math Teacher",
      salary: 280,
      status: "Active",
      lastPaid: "2026-01-01",
      attendance: "98%",
    },
    {
      id: 3,
      name: "Grace Uwase",
      role: "Science Teacher",
      salary: 280,
      status: "Active",
      lastPaid: "2026-01-01",
      attendance: "100%",
    },
    {
      id: 4,
      name: "David Okello",
      role: "ICT Coordinator",
      salary: 320,
      status: "Active",
      lastPaid: "2026-01-01",
      attendance: "96%",
    },
    {
      id: 5,
      name: "Maria Kamau",
      role: "Librarian",
      salary: 200,
      status: "Active",
      lastPaid: "2026-01-01",
      attendance: "100%",
    },
    {
      id: 6,
      name: "Emmanuel Mutesi",
      role: "Security Guard",
      salary: 150,
      status: "Active",
      lastPaid: "2026-01-01",
      attendance: "100%",
    },
  ]

  const payrollHistory = [
    { month: "January 2026", totalPaid: 1680, staff: 6, status: "Completed" },
    { month: "December 2025", totalPaid: 1680, staff: 6, status: "Completed" },
    { month: "November 2025", totalPaid: 1620, staff: 6, status: "Completed" },
    { month: "October 2025", totalPaid: 1620, staff: 6, status: "Completed" },
  ]

  const totalMonthly = staffMembers.reduce((sum, staff) => sum + staff.salary, 0)

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Payroll Management System</h1>
          <p className="text-muted-foreground">Manage staff salaries and payments using Pi on GCV</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 h-auto">
            <TabsTrigger value="overview" className="flex-col gap-1 py-2">
              <TrendingUp className="w-4 h-4" />
              <span className="text-xs">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="staff" className="flex-col gap-1 py-2">
              <Users className="w-4 h-4" />
              <span className="text-xs">Staff</span>
            </TabsTrigger>
            <TabsTrigger value="process" className="flex-col gap-1 py-2">
              <DollarSign className="w-4 h-4" />
              <span className="text-xs">Process</span>
            </TabsTrigger>
            <TabsTrigger value="history" className="flex-col gap-1 py-2">
              <FileText className="w-4 h-4" />
              <span className="text-xs">History</span>
            </TabsTrigger>
            <TabsTrigger value="reports" className="flex-col gap-1 py-2">
              <Download className="w-4 h-4" />
              <span className="text-xs">Reports</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Monthly Payroll</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-primary" />
                    <span className="text-2xl font-bold">π{totalMonthly}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Paid in Pi on GCV</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Active Staff</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-2xl font-bold">{staffMembers.length}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">All employees</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Next Payment</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-2xl font-bold">Feb 1</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Payment due date</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <div className="flex-1">
                    <p className="font-medium text-sm">January 2026 Payroll Completed</p>
                    <p className="text-xs text-muted-foreground">π{totalMonthly} paid to 6 staff members</p>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    Paid
                  </Badge>
                </div>

                <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <div className="flex-1">
                    <p className="font-medium text-sm">February 2026 Payroll Scheduled</p>
                    <p className="text-xs text-muted-foreground">Processing on February 1, 2026</p>
                  </div>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    Upcoming
                  </Badge>
                </div>

                <div className="flex items-center gap-3 p-3 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-yellow-600" />
                  <div className="flex-1">
                    <p className="font-medium text-sm">Bonus Payment Reminder</p>
                    <p className="text-xs text-muted-foreground">Q1 performance bonuses due in March</p>
                  </div>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
                    Reminder
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="staff" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Staff Members</CardTitle>
                  <Button size="sm">
                    <Users className="w-4 h-4 mr-2" />
                    Add Staff
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Search staff..." className="pl-9" />
                  </div>
                  <Button variant="outline" size="icon">
                    <Filter className="w-4 h-4" />
                  </Button>
                </div>

                <div className="space-y-2">
                  {staffMembers.map((staff) => (
                    <Card key={staff.id} className="bg-muted/50">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h4 className="font-semibold">{staff.name}</h4>
                            <p className="text-sm text-muted-foreground">{staff.role}</p>
                            <div className="flex gap-4 mt-2 text-xs">
                              <span className="flex items-center gap-1">
                                <DollarSign className="w-3 h-3" />π{staff.salary}/month
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {staff.attendance} attendance
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge variant="secondary" className="bg-green-100 text-green-700">
                              {staff.status}
                            </Badge>
                            <p className="text-xs text-muted-foreground mt-1">Last paid: {staff.lastPaid}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="process" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Process Payroll</CardTitle>
                <p className="text-sm text-muted-foreground">Pay all staff salaries for the current month</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Payment Month</Label>
                      <Input type="month" defaultValue="2026-02" />
                    </div>
                    <div className="space-y-2">
                      <Label>Payment Date</Label>
                      <Input type="date" defaultValue="2026-02-01" />
                    </div>
                  </div>

                  <div className="p-4 bg-muted rounded-lg space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Total Staff:</span>
                      <span className="font-semibold">{staffMembers.length}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Base Salaries:</span>
                      <span className="font-semibold">π{totalMonthly}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Bonuses:</span>
                      <span className="font-semibold">π0</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Deductions:</span>
                      <span className="font-semibold">π0</span>
                    </div>
                    <div className="h-px bg-border my-2" />
                    <div className="flex justify-between font-bold">
                      <span>Total Payment:</span>
                      <span className="text-primary text-lg">π{totalMonthly}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Payment Notes (Optional)</Label>
                    <Input placeholder="Add notes for this payroll cycle..." />
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full" size="lg">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Process Payment with Pi on GCV
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    All staff will receive their salary via Pi cryptocurrency on GCV network
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Payroll History</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {payrollHistory.map((record, idx) => (
                  <Card key={idx} className="bg-muted/50">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold">{record.month}</h4>
                          <p className="text-sm text-muted-foreground">{record.staff} staff members</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-primary">π{record.totalPaid}</p>
                          <Badge variant="secondary" className="bg-green-100 text-green-700 mt-1">
                            {record.status}
                          </Badge>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full mt-3 bg-transparent">
                        <Download className="w-3 h-3 mr-2" />
                        View Payslips
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Download Reports</CardTitle>
                <p className="text-sm text-muted-foreground">Generate and download payroll reports</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="h-auto flex-col py-4 gap-2 bg-transparent">
                    <FileText className="w-6 h-6" />
                    <span className="text-sm">Monthly Summary</span>
                  </Button>
                  <Button variant="outline" className="h-auto flex-col py-4 gap-2 bg-transparent">
                    <Download className="w-6 h-6" />
                    <span className="text-sm">Annual Report</span>
                  </Button>
                  <Button variant="outline" className="h-auto flex-col py-4 gap-2 bg-transparent">
                    <Users className="w-6 h-6" />
                    <span className="text-sm">Staff Directory</span>
                  </Button>
                  <Button variant="outline" className="h-auto flex-col py-4 gap-2 bg-transparent">
                    <TrendingUp className="w-6 h-6" />
                    <span className="text-sm">Tax Summary</span>
                  </Button>
                </div>

                <Card className="bg-muted/50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">Generate Custom Report</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <Label>Date Range</Label>
                      <div className="grid grid-cols-2 gap-2">
                        <Input type="date" defaultValue="2026-01-01" />
                        <Input type="date" defaultValue="2026-01-31" />
                      </div>
                    </div>
                    <Button className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Generate Report
                    </Button>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
