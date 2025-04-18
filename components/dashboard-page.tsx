"use client"

import { useState } from "react"
import { Bell, CalendarIcon, CheckCircle2, Filter, Home, Mail, Menu, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { TaskCard } from "@/components/task-card"
import { CalendarWidget } from "@/components/calendar-widget"
import { Sidebar } from "@/components/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"
import { useMobile } from "@/hooks/use-mobile"

export function DashboardPage() {
  const isMobile = useMobile()
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile)

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar for desktop */}
      {!isMobile && (
        <div className={`${sidebarOpen ? "w-64" : "w-0"} transition-all duration-300 ease-in-out overflow-hidden`}>
          <Sidebar />
        </div>
      )}

      {/* Mobile sidebar */}
      {isMobile && (
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0">
            <Sidebar />
          </SheetContent>
        </Sheet>
      )}

      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <header className="border-b">
          <div className="flex h-16 items-center px-4 md:px-6">
            {!isMobile && (
              <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)} className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Sidebar</span>
              </Button>
            )}
            <div className="font-semibold text-lg md:text-xl">Student Dashboard</div>
            <div className="ml-auto flex items-center space-x-2">
              <div className="hidden md:flex">
                <Input placeholder="Search..." className="w-[200px] mr-2" />
              </div>
              <ThemeToggle />
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <img src="/placeholder.svg?height=32&width=32" alt="Avatar" className="rounded-full h-8 w-8" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Sign out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Navigation Tabs */}
          <Tabs defaultValue="dashboard" className="w-full">
            <TabsList className="w-full justify-start px-4 md:px-6 h-12 bg-background border-b">
              <TabsTrigger value="dashboard" className="data-[state=active]:bg-muted">
                <Home className="h-4 w-4 mr-2" />
                Dashboard
              </TabsTrigger>
              <TabsTrigger value="tasks" className="data-[state=active]:bg-muted">
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Tasks
              </TabsTrigger>
              <TabsTrigger value="calendar" className="data-[state=active]:bg-muted">
                <CalendarIcon className="h-4 w-4 mr-2" />
                Calendar
              </TabsTrigger>
              <TabsTrigger value="notifications" className="data-[state=active]:bg-muted">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="messages" className="data-[state=active]:bg-muted">
                <Mail className="h-4 w-4 mr-2" />
                Messages
              </TabsTrigger>
              <TabsTrigger value="filters" className="data-[state=active]:bg-muted">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </TabsTrigger>
            </TabsList>

            {/* Dashboard Content */}
            <TabsContent value="dashboard" className="p-4 md:p-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="md:col-span-2 lg:col-span-2">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle>Tasks by Course</CardTitle>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Sort by Due Date</DropdownMenuItem>
                            <DropdownMenuItem>Sort by Priority</DropdownMenuItem>
                            <DropdownMenuItem>Sort by Course</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <CardDescription>Manage your academic tasks efficiently</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-medium mb-2">Computer Science 101</h3>
                          <div className="grid gap-3 md:grid-cols-2">
                            <TaskCard
                              title="Programming Assignment #3"
                              deadline="Tomorrow, 11:59 PM"
                              priority="High"
                              progress={75}
                              status="urgent"
                            />
                            <TaskCard
                              title="Read Chapter 7"
                              deadline="Friday, 5:00 PM"
                              priority="Medium"
                              progress={30}
                              status="upcoming"
                            />
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-medium mb-2">Mathematics 202</h3>
                          <div className="grid gap-3 md:grid-cols-2">
                            <TaskCard
                              title="Problem Set #5"
                              deadline="Monday, 9:00 AM"
                              priority="High"
                              progress={10}
                              status="upcoming"
                            />
                            <TaskCard
                              title="Group Project Milestone"
                              deadline="Next Wednesday"
                              priority="Medium"
                              progress={50}
                              status="upcoming"
                            />
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-medium mb-2">History 110</h3>
                          <div className="grid gap-3 md:grid-cols-2">
                            <TaskCard
                              title="Essay Draft"
                              deadline="Yesterday"
                              priority="High"
                              progress={100}
                              status="completed"
                            />
                            <TaskCard
                              title="Research Paper Outline"
                              deadline="In 3 days"
                              priority="Low"
                              progress={20}
                              status="upcoming"
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-4">
                  <CalendarWidget />

                  <Card>
                    <CardHeader>
                      <CardTitle>Course Progress</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">Computer Science 101</span>
                          <span className="text-sm text-muted-foreground">68%</span>
                        </div>
                        <Progress value={68} className="h-2" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">Mathematics 202</span>
                          <span className="text-sm text-muted-foreground">45%</span>
                        </div>
                        <Progress value={45} className="h-2" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">History 110</span>
                          <span className="text-sm text-muted-foreground">82%</span>
                        </div>
                        <Progress value={82} className="h-2" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">Physics 201</span>
                          <span className="text-sm text-muted-foreground">75%</span>
                        </div>
                        <Progress value={75} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tasks">
              <div className="p-4 text-center text-muted-foreground">Tasks content would go here</div>
            </TabsContent>

            <TabsContent value="calendar">
              <div className="p-4 text-center text-muted-foreground">Calendar content would go here</div>
            </TabsContent>

            <TabsContent value="notifications">
              <div className="p-4 text-center text-muted-foreground">Notifications content would go here</div>
            </TabsContent>

            <TabsContent value="messages">
              <div className="p-4 text-center text-muted-foreground">Messages content would go here</div>
            </TabsContent>

            <TabsContent value="filters">
              <div className="p-4 text-center text-muted-foreground">Filters content would go here</div>
            </TabsContent>
          </Tabs>
        </header>
      </div>
    </div>
  )
}
