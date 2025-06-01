import Desciption from "./Desciption"
import Properties from "./Properties"

function TicketDetails() {
  return (
    <div className="flex h-full flex-col md:flex-row ">
      <Desciption />
      <Properties/>
    </div>
  )
}

export default TicketDetails
