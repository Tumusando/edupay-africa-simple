"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Wallet,
  FileText,
  Download,
  CheckCircle,
  Clock,
  CreditCard,
  ArrowLeft,
  Receipt,
  History,
  Plus,
  Smartphone,
  Building2,
  ArrowRightLeft,
} from "lucide-react"

const EDUPAY_PI_WALLET = "GAU5S5ADLJG6EEA6PBTU4NNSMSIZMOGZ5YCOBVOJ54JVGATZ23LZY7FT"

export function FeeManagement() {
  const [view, setView] = useState<"dashboard" | "pay" | "history" | "details" | "ramp">("dashboard")
  const [amount, setAmount] = useState("")
  const [studentId, setStudentId] = useState("")
  const [paymentType, setPaymentType] = useState("tuition")
  const [selectedPayment, setSelectedPayment] = useState<any>(null)
  const [paymentMethod, setPaymentMethod] = useState<"pi" | "mobile" | "bank">("pi")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [mobileProvider, setMobileProvider] = useState("mtn")
  const [bankAccount, setBankAccount] = useState("")
  const [bankName, setBankName] = useState("bank_of_kigali")

  // Sample data
  const balance = 450000
  const recentPayments = [
    {
      id: 1,
      date: "2024-01-10",
      type: "Tuition Fee",
      amount: 150000,
      status: "completed",
      receipt: "#RW001",
      studentId: "STU12345",
      piAmount: "π47.75",
      gcvHash: "0x7a8f9c...3d2e1b",
      paymentMethod: "Pi on GCV",
    },
    {
      id: 2,
      date: "2024-01-05",
      type: "Library Fee",
      amount: 25000,
      status: "completed",
      receipt: "#RW002",
      studentId: "STU12345",
      piAmount: "π7.96",
      gcvHash: "0x4b6d8e...9f3c2a",
      paymentMethod: "Pi on GCV",
    },
    {
      id: 3,
      date: "2023-12-20",
      type: "Lab Fee",
      amount: 50000,
      status: "completed",
      receipt: "#RW003",
      studentId: "STU12345",
      piAmount: "π15.92",
      gcvHash: "0x2c5f7a...8e1d4b",
      paymentMethod: "Pi on GCV",
    },
  ]

  const upcomingPayments = [
    { type: "Tuition Fee", dueDate: "2024-02-15", amount: 150000 },
    { type: "Exam Fee", dueDate: "2024-03-01", amount: 35000 },
  ]

  const handlePayment = () => {
    if (!amount || !studentId) return

    const piAmount = (Number.parseFloat(amount) / 3141.59).toFixed(2)
    let paymentDetails = ""

    if (paymentMethod === "pi") {
      paymentDetails = `Direct Pi Payment to:\n${EDUPAY_PI_WALLET}\n\nAmount: π${piAmount}`
    } else if (paymentMethod === "mobile") {
      paymentDetails = `Mobile Money Payment:\nProvider: ${mobileProvider.toUpperCase()}\nPhone: ${phoneNumber}\n\nThis will be converted to π${piAmount} Pi and sent to EduPay Africa wallet.`
    } else if (paymentMethod === "bank") {
      paymentDetails = `Bank Transfer:\nBank: ${bankName.replace(/_/g, " ").toUpperCase()}\nAccount: ${bankAccount}\n\nThis will be converted to π${piAmount} Pi and sent to EduPay Africa wallet.`
    }

    alert(
      `Processing payment:\n\nAmount: ${Number.parseFloat(amount).toLocaleString()} RWF (π${piAmount})\nStudent ID: ${studentId}\nPayment Type: ${paymentType}\n\n${paymentDetails}\n\nPayment will be processed via Pi Network on GCV blockchain.`,
    )

    setView("dashboard")
    setAmount("")
    setStudentId("")
    setPhoneNumber("")
    setBankAccount("")
  }

  const downloadReceipt = (payment: any) => {
    const receiptContent = `
==========================================
      EDUPAY AFRICA - PAYMENT RECEIPT
==========================================

Receipt Number: ${payment.receipt}
Date: ${payment.date}
Status: ${payment.status.toUpperCase()}

------------------------------------------
STUDENT INFORMATION
------------------------------------------
Student ID: ${payment.studentId}

------------------------------------------
PAYMENT DETAILS
------------------------------------------
Payment Type: ${payment.type}
Amount (RWF): ${payment.amount.toLocaleString()} RWF
Amount (Pi): ${payment.piAmount}
Payment Method: ${payment.paymentMethod}

------------------------------------------
BLOCKCHAIN VERIFICATION
------------------------------------------
GCV Transaction Hash: ${payment.gcvHash}

------------------------------------------
This receipt is blockchain-verified on
Pi Network GCV. Visit edupayafrica.com
to verify authenticity.

Thank you for using EduPay Africa!
==========================================
    `

    try {
      const blob = new Blob([receiptContent], { type: "text/plain" })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `EduPay-Receipt-${payment.receipt}-${payment.date}.txt`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)

      // Show success message
      alert(`Receipt ${payment.receipt} downloaded successfully!`)
    } catch (error) {
      alert("Download failed. Please try again.")
    }
  }

  const viewDetails = (payment: any) => {
    setSelectedPayment(payment)
    setView("details")
  }

  if (view === "dashboard") {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Wallet className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Fee Management</h1>
            <p className="text-sm text-muted-foreground">Manage all education payments</p>
          </div>
        </div>

        {/* Balance Card */}
        <Card className="mb-6 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
          <CardHeader>
            <CardTitle className="text-lg">Outstanding Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between">
              <div>
                <div className="text-4xl font-bold text-primary">{balance.toLocaleString()} RWF</div>
                <p className="text-sm text-muted-foreground mt-1">Total fees due</p>
              </div>
              <Button onClick={() => setView("pay")} size="lg" className="gap-2">
                <Plus className="w-4 h-4" />
                Pay Now
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <Button
            variant="outline"
            className="h-auto py-4 flex-col gap-2 bg-transparent"
            onClick={() => setView("pay")}
          >
            <CreditCard className="w-5 h-5 text-primary" />
            <span className="font-medium">Make Payment</span>
          </Button>
          <Button
            variant="outline"
            className="h-auto py-4 flex-col gap-2 bg-transparent"
            onClick={() => setView("history")}
          >
            <History className="w-5 h-5 text-primary" />
            <span className="font-medium">Payment History</span>
          </Button>
          <Button
            variant="outline"
            className="h-auto py-4 flex-col gap-2 bg-transparent"
            onClick={() => recentPayments.length > 0 && downloadReceipt(recentPayments[0])}
          >
            <Download className="w-5 h-5 text-primary" />
            <span className="font-medium">Download Receipt</span>
          </Button>
        </div>

        {/* Upcoming Payments */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Upcoming Payments
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {upcomingPayments.map((payment, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium">{payment.type}</p>
                  <p className="text-sm text-muted-foreground">Due: {payment.dueDate}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">{payment.amount.toLocaleString()} RWF</p>
                  <Badge variant="outline" className="text-xs mt-1">
                    Pay with Pi
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Payments */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Receipt className="w-5 h-5 text-primary" />
              Recent Payments
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentPayments.map((payment) => (
              <div key={payment.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium">{payment.type}</p>
                    <p className="text-sm text-muted-foreground">{payment.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">{payment.amount.toLocaleString()} RWF</p>
                  <Button variant="ghost" size="sm" className="h-auto p-0 text-xs text-primary">
                    View Receipt {payment.receipt}
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    )
  }

  if (view === "pay") {
    return (
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Button variant="ghost" onClick={() => setView("dashboard")} className="mb-4 gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Button>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <CreditCard className="w-6 h-6 text-primary" />
              Make a Payment
            </CardTitle>
            <p className="text-sm text-muted-foreground">Pay your education fees with Pi on GCV</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="studentId">Student ID</Label>
              <Input
                id="studentId"
                placeholder="Enter student ID"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="paymentType">Payment Type</Label>
              <select
                id="paymentType"
                value={paymentType}
                onChange={(e) => setPaymentType(e.target.value)}
                className="w-full p-2 border rounded-md bg-background"
              >
                <option value="tuition">Tuition Fee</option>
                <option value="exam">Exam Fee</option>
                <option value="library">Library Fee</option>
                <option value="lab">Lab Fee</option>
                <option value="sports">Sports Fee</option>
                <option value="transport">Transport Fee</option>
                <option value="meal">Meal Plan</option>
                <option value="accommodation">Accommodation</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount">Amount (RWF)</Label>
              <Input
                id="amount"
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              {amount && (
                <p className="text-sm text-muted-foreground">
                  ≈ π{(Number.parseFloat(amount) / 3141.59).toFixed(2)} on GCV
                </p>
              )}
            </div>

            <div className="space-y-3">
              <Label>Payment Method</Label>
              <div className="grid grid-cols-1 gap-3">
                {/* Direct Pi Payment */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod("pi")}
                  className={`p-4 border-2 rounded-lg text-left transition-all ${
                    paymentMethod === "pi" ? "border-primary bg-primary/5" : "border-muted hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Wallet className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Pay with Pi Directly</p>
                      <p className="text-xs text-muted-foreground">Send Pi cryptocurrency</p>
                    </div>
                    {paymentMethod === "pi" && <CheckCircle className="w-5 h-5 text-primary" />}
                  </div>
                </button>

                {/* Mobile Money */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod("mobile")}
                  className={`p-4 border-2 rounded-lg text-left transition-all ${
                    paymentMethod === "mobile" ? "border-primary bg-primary/5" : "border-muted hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Smartphone className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Mobile Money (On-Ramp)</p>
                      <p className="text-xs text-muted-foreground">MTN, Airtel - Auto converts to Pi</p>
                    </div>
                    {paymentMethod === "mobile" && <CheckCircle className="w-5 h-5 text-primary" />}
                  </div>
                </button>

                {/* Bank Transfer */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod("bank")}
                  className={`p-4 border-2 rounded-lg text-left transition-all ${
                    paymentMethod === "bank" ? "border-primary bg-primary/5" : "border-muted hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Bank Transfer (On-Ramp)</p>
                      <p className="text-xs text-muted-foreground">Local banks - Auto converts to Pi</p>
                    </div>
                    {paymentMethod === "bank" && <CheckCircle className="w-5 h-5 text-primary" />}
                  </div>
                </button>
              </div>
            </div>

            {paymentMethod === "mobile" && (
              <div className="space-y-4 p-4 bg-muted/30 rounded-lg border">
                <div className="flex items-center gap-2 text-sm text-primary">
                  <ArrowRightLeft className="w-4 h-4" />
                  <span className="font-medium">On-Ramp: Local Currency → Pi</span>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mobileProvider">Mobile Money Provider</Label>
                  <select
                    id="mobileProvider"
                    value={mobileProvider}
                    onChange={(e) => setMobileProvider(e.target.value)}
                    className="w-full p-2 border rounded-md bg-background"
                  >
                    <option value="mtn">MTN Mobile Money</option>
                    <option value="airtel">Airtel Money</option>
                    <option value="mpesa">M-Pesa (Kenya)</option>
                    <option value="tigopesa">Tigo Pesa (Tanzania)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input
                    id="phoneNumber"
                    placeholder="+250 7XX XXX XXX"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  Your payment will be converted to Pi and sent to EduPay Africa wallet automatically.
                </p>
              </div>
            )}

            {paymentMethod === "bank" && (
              <div className="space-y-4 p-4 bg-muted/30 rounded-lg border">
                <div className="flex items-center gap-2 text-sm text-primary">
                  <ArrowRightLeft className="w-4 h-4" />
                  <span className="font-medium">On-Ramp: Bank Transfer → Pi</span>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bankName">Select Bank</Label>
                  <select
                    id="bankName"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                    className="w-full p-2 border rounded-md bg-background"
                  >
                    <option value="bank_of_kigali">Bank of Kigali (Rwanda)</option>
                    <option value="equity_bank">Equity Bank (East Africa)</option>
                    <option value="kcb">KCB Bank (Kenya)</option>
                    <option value="crdb">CRDB Bank (Tanzania)</option>
                    <option value="stanbic">Stanbic Bank (Uganda)</option>
                    <option value="bpr">BPR Bank (Rwanda)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bankAccount">Account Number</Label>
                  <Input
                    id="bankAccount"
                    placeholder="Enter your account number"
                    value={bankAccount}
                    onChange={(e) => setBankAccount(e.target.value)}
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  Your bank transfer will be converted to Pi and sent to EduPay Africa wallet automatically.
                </p>
              </div>
            )}

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Wallet className="w-5 h-5 text-primary" />
                <p className="font-medium">EduPay Africa Pi Wallet</p>
              </div>
              <p className="text-xs font-mono break-all text-muted-foreground mb-2">{EDUPAY_PI_WALLET}</p>
              <p className="text-xs text-muted-foreground">
                All payments are converted to Pi and sent to this verified EduPay Africa wallet on GCV blockchain.
              </p>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={handlePayment}
                className="flex-1"
                size="lg"
                disabled={
                  !amount ||
                  !studentId ||
                  (paymentMethod === "mobile" && !phoneNumber) ||
                  (paymentMethod === "bank" && !bankAccount)
                }
              >
                <Wallet className="w-4 h-4 mr-2" />
                Pay {amount ? `${Number.parseFloat(amount).toLocaleString()} RWF` : ""}{" "}
                {paymentMethod === "pi" ? "with Pi" : "(Convert to Pi)"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (view === "history") {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button variant="ghost" onClick={() => setView("dashboard")} className="mb-4 gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Button>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <History className="w-6 h-6 text-primary" />
              Payment History
            </CardTitle>
            <p className="text-sm text-muted-foreground">All your education fee payments</p>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentPayments.map((payment) => (
              <div key={payment.id} className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <div>
                      <p className="font-bold text-lg">{payment.type}</p>
                      <p className="text-sm text-muted-foreground">{payment.date}</p>
                    </div>
                  </div>
                  <Badge variant="secondary">Completed</Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 bg-muted/50 rounded-lg p-3">
                  <div>
                    <p className="text-xs text-muted-foreground">Amount Paid</p>
                    <p className="font-bold text-lg">{payment.amount.toLocaleString()} RWF</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Receipt Number</p>
                    <p className="font-bold text-lg">{payment.receipt}</p>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-transparent"
                    onClick={() => downloadReceipt(payment)}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Receipt
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-transparent"
                    onClick={() => viewDetails(payment)}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    )
  }

  if (view === "details" && selectedPayment) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Button variant="ghost" onClick={() => setView("history")} className="mb-4 gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Payment History
        </Button>

        <Card>
          <CardHeader className="border-b">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl">Payment Details</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">Receipt {selectedPayment.receipt}</p>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                <CheckCircle className="w-3 h-3 mr-1" />
                Completed
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Payment Type</p>
                <p className="font-bold text-lg">{selectedPayment.type}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Date</p>
                <p className="font-bold text-lg">{selectedPayment.date}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Student ID</p>
                <p className="font-bold text-lg">{selectedPayment.studentId}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Receipt Number</p>
                <p className="font-bold text-lg">{selectedPayment.receipt}</p>
              </div>
            </div>

            <div className="border-t pt-6">
              <p className="text-sm text-muted-foreground mb-3">Payment Amount</p>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Amount (RWF)</span>
                  <span className="text-2xl font-bold text-primary">{selectedPayment.amount.toLocaleString()} RWF</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Amount (Pi)</span>
                  <span className="text-xl font-bold text-primary">{selectedPayment.piAmount}</span>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <p className="text-sm text-muted-foreground mb-3">Blockchain Verification</p>
              <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-sm text-muted-foreground">Payment Method</span>
                  <Badge variant="secondary">{selectedPayment.paymentMethod}</Badge>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-sm text-muted-foreground">GCV Transaction Hash</span>
                  <span className="text-sm font-mono break-all text-right">{selectedPayment.gcvHash}</span>
                </div>
                <p className="text-xs text-muted-foreground pt-2">
                  This payment is verified on Pi Network GCV blockchain and cannot be altered.
                </p>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                variant="outline"
                className="flex-1 bg-transparent"
                onClick={() => downloadReceipt(selectedPayment)}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Receipt
              </Button>
              <Button
                variant="outline"
                className="flex-1 bg-transparent"
                onClick={() => {
                  alert(`Sharing receipt ${selectedPayment.receipt}...`)
                }}
              >
                <Receipt className="w-4 h-4 mr-2" />
                Share Receipt
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }
}
