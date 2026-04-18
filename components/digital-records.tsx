"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  FileText,
  Download,
  Share2,
  Eye,
  QrCode,
  Shield,
  GraduationCap,
  Award,
  Wallet,
  Calendar,
  CheckCircle2,
  Upload,
  Search,
  Heart,
  UserCheck,
  Briefcase,
  Trophy,
  Plane,
  Users,
  Clock,
  Building2,
  FileCheck,
} from "lucide-react"

const academicRecords = [
  {
    id: "transcript-2024",
    type: "Transcript",
    title: "Academic Transcript - 2024",
    date: "2024-12-15",
    issuer: "University of Rwanda",
    verified: true,
    gcvHash: "GCV-TR-2024-847362",
  },
  {
    id: "transcript-2023",
    type: "Transcript",
    title: "Academic Transcript - 2023",
    date: "2023-12-10",
    issuer: "University of Rwanda",
    verified: true,
    gcvHash: "GCV-TR-2023-729183",
  },
  {
    id: "report-s1-2024",
    type: "Report Card",
    title: "Semester 1 Report - 2024",
    date: "2024-06-20",
    issuer: "Green Hills Academy",
    verified: true,
    gcvHash: "GCV-RC-2024-582741",
  },
]

const certificates = [
  {
    id: "degree-cs",
    type: "Degree",
    title: "Bachelor of Computer Science",
    date: "2024-07-15",
    issuer: "University of Rwanda",
    verified: true,
    gcvHash: "GCV-DEG-2024-947281",
  },
  {
    id: "cert-blockchain",
    type: "Certificate",
    title: "Blockchain Development Certificate",
    date: "2024-05-10",
    issuer: "EduPay Africa Learning",
    verified: true,
    gcvHash: "GCV-CERT-2024-374829",
  },
  {
    id: "cert-ai",
    type: "Certificate",
    title: "AI & Machine Learning Certificate",
    date: "2024-03-22",
    issuer: "EduPay Africa Learning",
    verified: true,
    gcvHash: "GCV-CERT-2024-192847",
  },
]

const paymentRecords = [
  {
    id: "pay-2024-03",
    type: "Tuition",
    title: "Semester 2 Tuition Payment",
    amount: "π250",
    date: "2024-03-01",
    status: "Completed",
    gcvHash: "GCV-PAY-2024-847362",
  },
  {
    id: "pay-2024-02",
    type: "Transport",
    title: "Monthly Transport Pass - March",
    amount: "π15",
    date: "2024-02-28",
    status: "Completed",
    gcvHash: "GCV-PAY-2024-738291",
  },
  {
    id: "pay-2024-01",
    type: "Supplies",
    title: "School Supplies Purchase",
    amount: "π45",
    date: "2024-01-15",
    status: "Completed",
    gcvHash: "GCV-PAY-2024-629184",
  },
]

const medicalRecords = [
  {
    id: "med-2024-01",
    type: "Vaccination",
    title: "Annual Vaccination Record",
    date: "2024-01-20",
    clinic: "Kigali Health Center",
    verified: true,
  },
  {
    id: "med-2023-12",
    type: "Medical Exam",
    title: "Student Medical Checkup",
    date: "2023-12-05",
    clinic: "University Health Services",
    verified: true,
  },
]

const attendanceRecords = [
  {
    id: "att-2024-01",
    period: "January 2024",
    daysPresent: 20,
    daysAbsent: 2,
    percentage: 90.9,
    status: "Good Standing",
  },
  {
    id: "att-2023-12",
    period: "December 2023",
    daysPresent: 18,
    daysAbsent: 0,
    percentage: 100,
    status: "Perfect Attendance",
  },
  {
    id: "att-2023-11",
    period: "November 2023",
    daysPresent: 19,
    daysAbsent: 1,
    percentage: 95,
    status: "Good Standing",
  },
]

const awardsAchievements = [
  {
    id: "award-2024-01",
    title: "Best Computer Science Student",
    date: "2024-06-15",
    issuer: "University of Rwanda",
    category: "Academic Excellence",
    verified: true,
    gcvHash: "GCV-AWARD-2024-847362",
  },
  {
    id: "award-2024-02",
    title: "Hackathon Winner - EAC Tech Challenge",
    date: "2024-03-20",
    issuer: "East African Community",
    category: "Competition",
    verified: true,
    gcvHash: "GCV-AWARD-2024-738291",
  },
  {
    id: "award-2023-01",
    title: "Leadership Award",
    date: "2023-12-10",
    issuer: "Green Hills Academy",
    category: "Leadership",
    verified: true,
    gcvHash: "GCV-AWARD-2023-629184",
  },
]

const immigrationDocs = [
  {
    id: "imm-2024-01",
    type: "Student Visa",
    title: "Kenya Student Visa",
    country: "Kenya",
    issueDate: "2024-01-15",
    expiryDate: "2025-01-15",
    status: "Active",
    verified: true,
    gcvHash: "GCV-VISA-2024-847362",
  },
  {
    id: "imm-2024-02",
    type: "Study Permit",
    title: "Uganda Study Permit",
    country: "Uganda",
    issueDate: "2023-09-01",
    expiryDate: "2024-09-01",
    status: "Expired",
    verified: true,
    gcvHash: "GCV-PERMIT-2023-738291",
  },
]

const employmentHistory = [
  {
    id: "emp-2024-01",
    position: "Senior Mathematics Teacher",
    institution: "Green Hills Academy",
    startDate: "2022-09-01",
    endDate: "Present",
    country: "Rwanda",
    verified: true,
  },
  {
    id: "emp-2021-01",
    position: "Computer Science Teacher",
    institution: "Kigali International School",
    startDate: "2020-01-15",
    endDate: "2022-08-31",
    country: "Rwanda",
    verified: true,
  },
]

const emergencyContacts = [
  {
    id: "em-1",
    name: "Jean Baptiste Mugabo",
    relationship: "Father",
    phone: "+250 788 123 456",
    email: "j.mugabo@email.com",
    address: "Kigali, Rwanda",
  },
  {
    id: "em-2",
    name: "Marie Claire Uwase",
    relationship: "Mother",
    phone: "+250 788 654 321",
    email: "m.uwase@email.com",
    address: "Kigali, Rwanda",
  },
]

const verificationRequests = [
  {
    id: "ver-2024-01",
    requester: "USIU-Africa University",
    requestType: "Academic Transcript",
    date: "2024-01-10",
    status: "Approved",
  },
  {
    id: "ver-2024-02",
    requester: "Google Kenya",
    requestType: "Degree Certificate",
    date: "2024-01-08",
    status: "Pending",
  },
]

export function DigitalRecords() {
  const [activeTab, setActiveTab] = useState("academic")
  const [searchQuery, setSearchQuery] = useState("")

  const handleDownload = (recordId: string, title: string) => {
    alert(`Downloading: ${title}`)
  }

  const handleShare = (recordId: string, title: string) => {
    alert(`Share link generated for: ${title}`)
  }

  const handleViewQR = (gcvHash: string) => {
    alert(`QR Code for blockchain verification: ${gcvHash}`)
  }

  const handleVerify = (gcvHash: string) => {
    alert(
      `Verifying on GCV blockchain: ${gcvHash}\n\nVerification Status: AUTHENTIC ✓\nThis document is genuine and has not been tampered with.`,
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-10 h-10 text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold">Digital Records</h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Secure, blockchain-verified education documentation on GCV
          </p>
          <Badge variant="secondary" className="mt-2">
            All records verified on Pi Network GCV
          </Badge>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6 text-center">
              <FileText className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold">{academicRecords.length}</p>
              <p className="text-sm text-muted-foreground">Academic Records</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Award className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold">{certificates.length + awardsAchievements.length}</p>
              <p className="text-sm text-muted-foreground">Certificates & Awards</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Wallet className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold">{paymentRecords.length}</p>
              <p className="text-sm text-muted-foreground">Payment Records</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold">{verificationRequests.length}</p>
              <p className="text-sm text-muted-foreground">Verifications</p>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search records by title, type, or date..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-9 gap-1">
            <TabsTrigger value="academic">Academic</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
            <TabsTrigger value="attendance">Attendance</TabsTrigger>
            <TabsTrigger value="awards">Awards</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="medical">Medical</TabsTrigger>
            <TabsTrigger value="immigration">Immigration</TabsTrigger>
            <TabsTrigger value="employment">Employment</TabsTrigger>
            <TabsTrigger value="emergency">Emergency</TabsTrigger>
            <TabsTrigger value="upload">Upload</TabsTrigger>
          </TabsList>

          {/* Academic Records Tab */}
          <TabsContent value="academic" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Academic Records
              </h2>
              <Badge>{academicRecords.length} records</Badge>
            </div>

            {academicRecords.map((record) => (
              <Card key={record.id} className="hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        {record.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {record.date}
                        </span>
                        <span>•</span>
                        <span>{record.issuer}</span>
                      </div>
                    </div>
                    {record.verified && (
                      <Badge variant="secondary" className="bg-green-500/10 text-green-700">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/50 rounded-lg p-3 mb-4">
                    <p className="text-xs text-muted-foreground mb-1">Blockchain Hash</p>
                    <p className="text-sm font-mono">{record.gcvHash}</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleDownload(record.id, record.title)}>
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleShare(record.id, record.title)}>
                      <Share2 className="w-4 h-4 mr-1" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleViewQR(record.gcvHash)}>
                      <QrCode className="w-4 h-4 mr-1" />
                      QR Code
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleVerify(record.gcvHash)}>
                      <Shield className="w-4 h-4 mr-1" />
                      Verify
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Certificates Tab */}
          <TabsContent value="certificates" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Award className="w-5 h-5" />
                Certificates & Degrees
              </h2>
              <Badge>{certificates.length + awardsAchievements.length} certificates</Badge>
            </div>

            {certificates.map((cert) => (
              <Card key={cert.id} className="hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Award className="w-5 h-5 text-primary" />
                        {cert.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {cert.date}
                        </span>
                        <span>•</span>
                        <span>{cert.issuer}</span>
                      </div>
                    </div>
                    {cert.verified && (
                      <Badge variant="secondary" className="bg-green-500/10 text-green-700">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/50 rounded-lg p-3 mb-4">
                    <p className="text-xs text-muted-foreground mb-1">Blockchain Hash</p>
                    <p className="text-sm font-mono">{cert.gcvHash}</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleDownload(cert.id, cert.title)}>
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleShare(cert.id, cert.title)}>
                      <Share2 className="w-4 h-4 mr-1" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleViewQR(cert.gcvHash)}>
                      <QrCode className="w-4 h-4 mr-1" />
                      QR Code
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleVerify(cert.gcvHash)}>
                      <Shield className="w-4 h-4 mr-1" />
                      Verify
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            {awardsAchievements.map((award) => (
              <Card key={award.id} className="hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Trophy className="w-5 h-5 text-primary" />
                        {award.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {award.date}
                        </span>
                        <span>•</span>
                        <span>{award.issuer}</span>
                      </div>
                      <Badge variant="outline">{award.category}</Badge>
                    </div>
                    {award.verified && (
                      <Badge variant="secondary" className="bg-green-500/10 text-green-700">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/50 rounded-lg p-3 mb-4">
                    <p className="text-xs text-muted-foreground mb-1">Blockchain Hash</p>
                    <p className="text-sm font-mono">{award.gcvHash}</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleDownload(award.id, award.title)}>
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleShare(award.id, award.title)}>
                      <Share2 className="w-4 h-4 mr-1" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleViewQR(award.gcvHash)}>
                      <QrCode className="w-4 h-4 mr-1" />
                      QR Code
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleVerify(award.gcvHash)}>
                      <Shield className="w-4 h-4 mr-1" />
                      Verify
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Attendance Records Tab */}
          <TabsContent value="attendance" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Attendance Records
              </h2>
              <Badge>{attendanceRecords.length} periods</Badge>
            </div>

            {attendanceRecords.map((record) => (
              <Card key={record.id} className="hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Clock className="w-5 h-5 text-primary" />
                        {record.period}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                        <span>Present: {record.daysPresent} days</span>
                        <span>•</span>
                        <span>Absent: {record.daysAbsent} days</span>
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className={
                        record.percentage === 100 ? "bg-green-500/10 text-green-700" : "bg-blue-500/10 text-blue-700"
                      }
                    >
                      {record.percentage}%
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/50 rounded-lg p-3 mb-4">
                    <p className="text-sm font-medium">{record.status}</p>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => handleDownload(record.id, record.period)}>
                    <Download className="w-4 h-4 mr-1" />
                    Download Report
                  </Button>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Payment Records Tab */}
          <TabsContent value="payments" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Wallet className="w-5 h-5" />
                Payment Records
              </h2>
              <Badge>{paymentRecords.length} payments</Badge>
            </div>

            {paymentRecords.map((payment) => (
              <Card key={payment.id} className="hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Wallet className="w-5 h-5 text-primary" />
                        {payment.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {payment.date}
                        </span>
                        <span>•</span>
                        <span className="font-semibold text-primary">{payment.amount}</span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-green-500/10 text-green-700">
                      {payment.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/50 rounded-lg p-3 mb-4">
                    <p className="text-xs text-muted-foreground mb-1">GCV Transaction Hash</p>
                    <p className="text-sm font-mono">{payment.gcvHash}</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleDownload(payment.id, payment.title)}>
                      <Download className="w-4 h-4 mr-1" />
                      Receipt
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleShare(payment.id, payment.title)}>
                      <Share2 className="w-4 h-4 mr-1" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleViewQR(payment.gcvHash)}>
                      <QrCode className="w-4 h-4 mr-1" />
                      QR Code
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleVerify(payment.gcvHash)}>
                      <Shield className="w-4 h-4 mr-1" />
                      Verify
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Medical Records Tab */}
          <TabsContent value="medical" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Medical Records
              </h2>
              <Badge>{medicalRecords.length} records</Badge>
            </div>

            {medicalRecords.map((record) => (
              <Card key={record.id} className="hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Heart className="w-5 h-5 text-primary" />
                        {record.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {record.date}
                        </span>
                        <span>•</span>
                        <span>{record.clinic}</span>
                      </div>
                    </div>
                    {record.verified && (
                      <Badge variant="secondary" className="bg-green-500/10 text-green-700">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleDownload(record.id, record.title)}>
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleShare(record.id, record.title)}>
                      <Share2 className="w-4 h-4 mr-1" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-1" />
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Immigration Documents Tab */}
          <TabsContent value="immigration" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Plane className="w-5 h-5" />
                Immigration & Visa Documents
              </h2>
              <Badge>{immigrationDocs.length} documents</Badge>
            </div>

            {immigrationDocs.map((doc) => (
              <Card key={doc.id} className="hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Plane className="w-5 h-5 text-primary" />
                        {doc.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                        <span>Issue: {doc.issueDate}</span>
                        <span>•</span>
                        <span>Expiry: {doc.expiryDate}</span>
                      </div>
                      <Badge variant="outline">{doc.country}</Badge>
                    </div>
                    <Badge
                      variant="secondary"
                      className={
                        doc.status === "Active" ? "bg-green-500/10 text-green-700" : "bg-red-500/10 text-red-700"
                      }
                    >
                      {doc.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/50 rounded-lg p-3 mb-4">
                    <p className="text-xs text-muted-foreground mb-1">Blockchain Hash</p>
                    <p className="text-sm font-mono">{doc.gcvHash}</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleDownload(doc.id, doc.title)}>
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleShare(doc.id, doc.title)}>
                      <Share2 className="w-4 h-4 mr-1" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleViewQR(doc.gcvHash)}>
                      <QrCode className="w-4 h-4 mr-1" />
                      QR Code
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleVerify(doc.gcvHash)}>
                      <Shield className="w-4 h-4 mr-1" />
                      Verify
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Employment History Tab */}
          <TabsContent value="employment" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                Employment History (For Teachers)
              </h2>
              <Badge>{employmentHistory.length} positions</Badge>
            </div>

            {employmentHistory.map((job) => (
              <Card key={job.id} className="hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-primary" />
                        {job.position}
                      </CardTitle>
                      <p className="text-sm font-medium">{job.institution}</p>
                      <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                        <span>
                          {job.startDate} - {job.endDate}
                        </span>
                        <span>•</span>
                        <span>{job.country}</span>
                      </div>
                    </div>
                    {job.verified && (
                      <Badge variant="secondary" className="bg-green-500/10 text-green-700">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleDownload(job.id, job.position)}>
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleShare(job.id, job.position)}>
                      <Share2 className="w-4 h-4 mr-1" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Emergency Contacts Tab */}
          <TabsContent value="emergency" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Users className="w-5 h-5" />
                Emergency Contacts
              </h2>
              <Badge>{emergencyContacts.length} contacts</Badge>
            </div>

            {emergencyContacts.map((contact) => (
              <Card key={contact.id} className="hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        {contact.name}
                      </CardTitle>
                      <Badge variant="outline">{contact.relationship}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="grid gap-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Phone:</span>
                      <span className="font-medium">{contact.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Email:</span>
                      <span className="font-medium">{contact.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Address:</span>
                      <span className="font-medium">{contact.address}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4 bg-transparent">
                    Edit Contact
                  </Button>
                </CardContent>
              </Card>
            ))}

            <Button className="w-full">
              <Users className="w-4 h-4 mr-2" />
              Add New Emergency Contact
            </Button>
          </TabsContent>

          {/* Upload Tab */}
          <TabsContent value="upload" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="w-5 h-5" />
                  Upload New Document
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary transition-colors">
                  <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg font-medium mb-2">Drop files here or click to browse</p>
                  <p className="text-sm text-muted-foreground mb-4">Supported formats: PDF, JPG, PNG (Max 10MB)</p>
                  <Button>Choose Files</Button>
                </div>

                <div className="grid gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Document Type</label>
                    <select className="w-full border rounded-lg p-2">
                      <option>Academic Transcript</option>
                      <option>Certificate</option>
                      <option>Payment Receipt</option>
                      <option>Medical Record</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Document Title</label>
                    <Input type="text" placeholder="Enter document title" />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Issuing Institution</label>
                    <Input type="text" placeholder="Enter institution name" />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Issue Date</label>
                    <Input type="date" />
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm mb-1">Blockchain Verification</p>
                        <p className="text-xs text-muted-foreground">
                          Your document will be hashed and verified on Pi Network GCV blockchain for permanent,
                          tamper-proof storage. Verification fee: π0.5
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button size="lg" className="w-full">
                    <FileCheck className="w-4 h-4 mr-2" />
                    Upload & Verify on GCV (π0.5)
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Blockchain Info */}
        <Card className="mt-8 bg-primary/5">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-primary shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Blockchain-Secured Documentation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  All records on EduPay Africa are secured using Pi Network GCV (Global Consensus Value) blockchain
                  technology. Every document receives a unique cryptographic hash that ensures authenticity and prevents
                  tampering. Employers, universities, and institutions worldwide can instantly verify your credentials
                  using the blockchain hash or QR code.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Verification Requests Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="w-5 h-5" />
              Recent Verification Requests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {verificationRequests.map((request) => (
                <div
                  key={request.id}
                  className="flex items-center justify-between p-3 border rounded-lg hover:border-primary transition-colors"
                >
                  <div>
                    <p className="font-medium">{request.requester}</p>
                    <p className="text-sm text-muted-foreground">
                      Requested: {request.requestType} • {request.date}
                    </p>
                  </div>
                  <Badge
                    variant={request.status === "Approved" ? "default" : "secondary"}
                    className={
                      request.status === "Approved"
                        ? "bg-green-500/10 text-green-700"
                        : "bg-yellow-500/10 text-yellow-700"
                    }
                  >
                    {request.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
