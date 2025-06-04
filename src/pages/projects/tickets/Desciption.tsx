import { activities, ticketData } from "@/constant/ticket"
import { Typography } from "@/components/ui/typography"
import { Clock, FileText, ArrowUp } from "lucide-react" 

function Desciption() {
  return (
    <div className="flex-1 space-y-4 md:pr-4">
      <div className=" bg-card py-4">
        <div className="flex items-center gap-2 w-full pb-4 border-b-2 border-gray">
          <FileText className="w-6 h-6" />
          <Typography className="font-medium">Description</Typography>
        </div>
        <div className="space-y-4 py-4">
          {ticketData.description.split("\n\n").map((paragraph, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className="mt-1.5 h-1.5 w-1.5 rounded-full border border-blue-500 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">{paragraph}</p>
            </div>
          ))}
        </div>
        <button className="mt-2 mb-10 text-sm text-blue hover:underline">
          + Add sub-tickets
        </button>
        <div className="flex items-center gap-2 w-full pb-4 border-b-2 border-gray">
          <FileText className="w-6 h-6" />
          <Typography className="font-medium">Activity</Typography>
        </div>
        <div className="relative space-y-0 mt-4">
          {activities.map((activity, index) => (
            <div key={activity.id} className="relative">
              <div className="flex items-center gap-2">
                <div
                  className={`h-2 w-2 rounded-full ${
                    activity.status ? "bg-green-500" : "bg-[#005b86]"
                  } relative z-10`}
                />
                <p className="text-sm">{activity.content}</p>
                <Clock className="w-4 h-4 hidden md:block" />
                <p className="text-xs text-muted-foreground hidden md:block">{activity.time}</p>
              </div>

              {index !== activities.length - 1 && (
                <div className="relative h-[20px]">
                  <div className="absolute top-0 left-1 h-full w-[1px] -translate-x-1/2 bg-[#000000]"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-4 relative">
          <textarea
            placeholder="Leave a comment ..."
            className="w-full min-h-[100px] rounded-lg py-3 px-6 text-sm bg-[#ECECEC] outline-none resize-none placeholder:text-gray-500"
          />
          <button 
            className="absolute bottom-3 right-3 p-1.5 rounded bg-transparent"
          >
            <ArrowUp className="w-6 h-6 text-blue" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Desciption
