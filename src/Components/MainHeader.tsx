import React from 'react';
import {IoChatbubbles, IoChevronBack, IoChevronForward, IoNotifications, IoSearch} from "react-icons/io5";
import UserDropdown from "./UserDropdown";

/**
 * MainHeader
 * Created 2/4/24
 */
const MainHeader = () => {
   return (
      <header className={"flex justify-between items-center bg-white px-4 py-3"}>
         <div className={"flex items-center md:space-x-4"}>
            <div className={"hidden md:block border border-gray-400 rounded-md"}>
               <button
                  className={"hover:bg-gray-100 py-1 px-2 text-gray-400 border-r border-gray-300 my-1"}>
                  <IoChevronBack size={18}/>
               </button>
               <button className={"hover:bg-gray-100 py-1 px-2 text-gray-400"}>
                  <IoChevronForward size={18}/>
               </button>
            </div>

            <div className={"flex items-center space-x-2 border border-gray-400 px-3 py-2 rounded-md text-gray-400 w-[300px] bg-gray-100 focus:bg-white"}>
               <IoSearch size={22} />
               <input type="text" placeholder={"Type to search..."}
                      className={"bg-transparent outline-0"}
               />
            </div>
         </div>

         <div className={"flex items-center space-x-4"}>
            <div className={"flex items-center space-x-1"}>
               <IoNotifications size={18} color={"gray"}/>
               <span className={"hidden lg:inline-block text-sm"}>Notifications</span>
            </div>

            <div className={"flex items-center space-x-1"}>
               <IoChatbubbles size={18} color={"gray"}/>
               <span className={"hidden lg:inline-block text-sm"}>Messages</span>
            </div>

            <UserDropdown />
         </div>

      </header>
   );
}

export default MainHeader;
