"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"

export function CalendarWidget() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  // Example upcoming deadlines
  const upcomingDeadlines = [
    {
      date: new Date(new Date().setDate(new Date().getDate() + 1)),
      title: "Programming Assignment #3",
      course: "CS 101",
    },
    {
      date: new Date(new Date().setDate(new Date().getDate() + 3)),
      title: "Research Paper Outline",
      course: "History 110",
    },
    { date: new Date(new Date().setDate(new Date().getDate() + 5)), title: "Problem Set #5", course: "Math 202" },
    {
      date: new Date(new Date().setDate(new Date().getDate() + 7)),
      title: "Group Project Milestone",
      course: "CS 101",
    },
  ]

  // Function to highlight dates with deadlines
  const isDayWithDeadline = (day: Date) => {
    return upcomingDeadlines.some(
      (deadline) =>
        deadline.date.getDate() === day.getDate() &&
        deadline.date.getMonth() === day.getMonth() &&
        deadline.date.getFullYear() === day.getFullYear(),
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Calendar</CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
          modifiers={{
            deadline: (date) => isDayWithDeadline(date),
          }}
          modifiersStyles={{
            deadline: {
              fontWeight: "bold",
              backgroundColor: "rgba(239, 68, 68, 0.1)",
              color: "rgb(239, 68, 68)",
            },
          }}
        />

        <div className="mt-4">
          <h3 className="font-medium text-sm mb-2">Upcoming Deadlines</h3>
          <div className="space-y-2">
            {upcomingDeadlines.slice(0, 3).map((deadline, index) => (
              <div key={index} className="flex items-start gap-2 text-sm">
                <Badge
                  variant="outline"
                  className="bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300 mt-0.5"
                >
                  {deadline.date.toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                </Badge>
                <div>
                  <div className="font-medium">{deadline.title}</div>
                  <div className="text-xs text-muted-foreground">{deadline.course}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
