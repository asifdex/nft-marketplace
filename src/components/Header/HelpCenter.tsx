import {
    User,
    
  } from "lucide-react"
   
 
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "../ui/DropDownMenu"
   
const helpCenter = () => {
  return (
    <DropdownMenu modal={false}>
    <DropdownMenuTrigger asChild>
      <button >Open</button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
    
      <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>
      
    </DropdownMenuContent>
  </DropdownMenu>
  )
}

export default helpCenter
