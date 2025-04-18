import { BookOpen, GraduationCap, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface CourseCardProps {
  title: string
  instructor: string
  icon: string
  color: string
}

export function CourseCard({ title, instructor, icon, color }: CourseCardProps) {
  return (
    <Card
      className={`overflow-hidden ${color} border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow duration-200`}
    >
      <CardContent className="p-0">
        <div className="flex items-start p-4">
          <div className="mr-4 mt-1">
            {icon === "BookOpen" ? (
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-300" />
              </div>
            ) : (
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-blue-600 dark:text-blue-300" />
              </div>
            )}
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-1">{title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Instructor: {instructor}</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-500 dark:text-gray-400">
                <MoreVertical className="h-4 w-4" />
                <span className="sr-only">More options</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>View Course</DropdownMenuItem>
              <DropdownMenuItem>View Assignments</DropdownMenuItem>
              <DropdownMenuItem>Course Materials</DropdownMenuItem>
              <DropdownMenuItem>Contact Instructor</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="px-4 pb-4 pt-0">
          <div className="mt-2 flex items-center space-x-2">
            <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full flex-1">
              <div
                className="h-1.5 bg-blue-500 rounded-full"
                style={{ width: `${Math.floor(Math.random() * 100)}%` }}
              ></div>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">Progress</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
