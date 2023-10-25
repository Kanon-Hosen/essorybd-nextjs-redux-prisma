import SideNav from "@/components/dashboardComponents/SideNav"
import TopNav from "@/components/dashboardComponents/TopNav"
// import '../globals.css';
export const metadata = {
  title: 'Dashboard',
  description: 'Essorybd - Dashboard',
}
 
export default function RootLayout({ children }) {
 return (
     <div className=" scrollbar-thumb-blue-500 scrollbar-thin max-w-[1440px] mx-auto">
       <div className="grid grid-cols-5">
         <div className="col-span-1 sticky top-0 left-0 overflow-hidden h-screen shadow z-40" >
           <div className=" text-white h-full p-4">
         <SideNav/>
           </div>
       </div>
         <div className="col-span-4 overflow-hidden">
           <div className="shadow h-[8vh] z-50">
             <div className="sticky top-0 right-0 px-4 h-full w-full">
         <TopNav></TopNav>
               
             </div>
           </div>
           <div className="p-4">
         {children}
             
           </div>
       </div>
      </div>
      </div>
  )
}
