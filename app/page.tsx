"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { TaskItem } from "@/components/task-item"
import { CompletionChart } from "@/components/completion-chart"

export default function TaskHub() {
  const [activeTab, setActiveTab] = useState("all")

  const tasks = [
    {
      id: 1,
      title: "Chapter 1 Reading",
      course: "Psychology",
      dueDate: "27/04",
      daysLeft: 2,
      status: "urgent", // red
      icon: "FileText",
    },
    {
      id: 2,
      title: "Exercise Assignment",
      course: "Statistics",
      dueDate: "28/04",
      daysLeft: 4,
      status: "upcoming", // yellow
      icon: "FileText",
    },
    {
      id: 3,
      title: "Group Presentation",
      course: "Management Principles",
      dueDate: "25/04",
      daysLeft: 0,
      status: "completed", // green
      icon: "FileText",
    },
    {
      id: 4,
      title: "Midterm Exam",
      course: "Physics 1",
      dueDate: "30/04",
      daysLeft: 3,
      status: "urgent", // red
      icon: "FileText",
    },
  ]

  // Filter tasks based on active tab
  const filteredTasks = tasks.filter((task) => {
    if (activeTab === "all") return true
    if (activeTab === "today") return task.dueDate === "27/04"
    if (activeTab === "week") return task.daysLeft <= 7 && task.status !== "completed"
    return true
  })

  // Calculate completion stats
  const completedTasks = tasks.filter((task) => task.status === "completed").length
  const totalTasks = tasks.length

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Task Hub</h1>
      </div>

      <Tabs defaultValue="all" className="mb-6" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="all" className="rounded-full bg-blue-50 data-[state=active]:bg-blue-100">
            All
          </TabsTrigger>
          <TabsTrigger value="week" className="rounded-full bg-blue-50 data-[state=active]:bg-blue-100">
            This Week
          </TabsTrigger>
          <TabsTrigger value="today" className="rounded-full bg-blue-50 data-[state=active]:bg-blue-100">
            Today
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {filteredTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </TabsContent>

        <TabsContent value="week" className="space-y-4">
          {filteredTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </TabsContent>

        <TabsContent value="today" className="space-y-4">
          {filteredTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </TabsContent>
      </Tabs>

      <Card className="p-6 mt-8">
        <h2 className="text-center text-gray-600 mb-4">Task Completion Status</h2>
        <CompletionChart completed={completedTasks} total={totalTasks} />
        <div className="flex justify-center mt-4 gap-6">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
            <span className="text-sm text-gray-600">Completed</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
            <span className="text-sm text-gray-600">Pending</span>
          </div>
        </div>
      </Card>
    </div>
  )
}
