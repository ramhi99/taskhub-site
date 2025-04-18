import { Calendar, FileText, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Task {
  id: number
  title: string
  course: string
  dueDate: string
  daysLeft: number
  status: "urgent" | "upcoming" | "completed"
  icon: string
}

interface TaskItemProps {
  task: Task
}

export function TaskItem({ task }: TaskItemProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "urgent":
        return "bg-red-500"
      case "upcoming":
        return "bg-yellow-500"
      case "completed":
        return "bg-green-500"
      default:
        return "bg-gray-300"
    }
  }

  const getStatusIcon = (status: string) => {
    if (status === "completed") {
      return <CheckCircle className="h-4 w-4 text-green-500" />
    }
    return null
  }

  const getDaysLeftText = (daysLeft: number, status: string) => {
    if (status === "completed") {
      return (
        <span className="text-green-500 flex items-center">
          <CheckCircle className="h-4 w-4 mr-1" /> Completed
        </span>
      )
    }

    if (daysLeft === 0) {
      return <span className="text-red-500 font-medium">Due today</span>
    }

    if (daysLeft === 1) {
      return <span className="text-orange-500 font-medium">Due tomorrow</span>
    }

    return <span className="text-orange-500 font-medium">{daysLeft} days left</span>
  }

  return (
    <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden flex">
      <div className={`w-1.5 ${getStatusColor(task.status)}`}></div>
      <div className="flex-1 p-4">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-right justify-end mb-1">
              <Calendar className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">{task.dueDate}</span>
              <FileText className="h-4 w-4 text-gray-400 ml-2" />
            </div>
            <h3 className="font-medium text-right">{task.title}</h3>
            <p className="text-sm text-gray-600 text-right">Course: {task.course}</p>
            <div className="mt-2 text-right">{getDaysLeftText(task.daysLeft, task.status)}</div>
          </div>
        </div>
        <div className="mt-3 text-right">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-md px-4 py-1 text-sm">
            Submit Assignment
          </Button>
        </div>
      </div>
    </div>
  )
}
