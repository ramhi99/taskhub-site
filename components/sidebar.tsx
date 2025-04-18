import { BookOpen, Calendar, Clock, Download, Home, Search, Settings, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function Sidebar() {
  return (
    <div className="h-full w-full flex flex-col bg-muted/40 border-r">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="h-5 w-5 text-blue-600" />
          <span className="font-semibold">LMS Dashboard</span>
        </div>
        <div className="space-y-1">
          <Button variant="ghost" className="w-full justify-start" asChild>
            <a href="#">
              <Home className="mr-2 h-4 w-4" />
              Dashboard
            </a>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <a href="#">
              <Calendar className="mr-2 h-4 w-4" />
              Calendar
            </a>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <a href="#">
              <Search className="mr-2 h-4 w-4" />
              Search
            </a>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <a href="#">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </a>
          </Button>
        </div>
      </div>

      <Separator />

      <div className="p-4 flex-1">
        <h3 className="text-sm font-medium mb-2">Quick Access</h3>
        <div className="space-y-1">
          <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
            <a href="#">
              <Clock className="mr-2 h-4 w-4" />
              Recently Viewed
            </a>
          </Button>
          <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
            <a href="#">
              <Star className="mr-2 h-4 w-4" />
              Starred Tasks
            </a>
          </Button>
          <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
            <a href="#">
              <Calendar className="mr-2 h-4 w-4" />
              Upcoming Exams
            </a>
          </Button>
          <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
            <a href="#">
              <Download className="mr-2 h-4 w-4" />
              Download Materials
            </a>
          </Button>
        </div>
      </div>

      <Separator />

      <div className="p-4">
        <h3 className="text-sm font-medium mb-2">My Courses</h3>
        <div className="space-y-1">
          <Button variant="ghost" size="sm" className="w-full justify-start text-left">
            Computer Science 101
          </Button>
          <Button variant="ghost" size="sm" className="w-full justify-start text-left">
            Mathematics 202
          </Button>
          <Button variant="ghost" size="sm" className="w-full justify-start text-left">
            History 110
          </Button>
          <Button variant="ghost" size="sm" className="w-full justify-start text-left">
            Physics 201
          </Button>
        </div>
      </div>
    </div>
  )
}
