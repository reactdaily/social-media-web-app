import React from 'react';
import './App.css';
import SideMenu from "./Components/SideMenu";
import MainHeader from "./Components/MainHeader";
import StatusCard from "./Components/StatusCard";
import {
   IoAddCircleOutline, IoClose, IoEllipsisHorizontal, IoGift,
   IoImagesOutline,
   IoJournalOutline, IoMailOutline, IoMegaphoneOutline, IoMicOutline,
   IoMusicalNotes, IoMusicalNotesOutline, IoNewspaperOutline
} from "react-icons/io5";

function App() {
   return (
      <div className="flex h-screen">
         <aside className={"hidden md:block bg-slate-700 h-full w-[220px]"}>
            <img src="https://placekitten.com/220/80" alt=""/>
            <hr/>
            <SideMenu title={"Main Menu"} items={[
               {label: "Messages", icon: '', badge: 5},
               {label: 'Mail', icon: ''},
               {label: 'People', icon: ''},
               {label: 'Feed', icon: ''},
               {label: 'Profile', icon: ''}
            ]}/>
            <SideMenu title={"Explore"} items={[
               {label: "Pages", icon: ''},
               {label: 'Events', icon: ''},
               {label: 'Jobs', icon: ''},
               {label: 'Groups', icon: ''},
               {label: 'Saved', icon: ''},
               {label: 'Recommendations', icon: ''},
               {label: 'Memories', icon: ''}
            ]}/>
         </aside>

         <main className={"bg-gray-200 w-full h-screen overflow-auto"}>
            <MainHeader/>

            <div className={"flex space-x-4 ml-4"}>
               <div className={"w-full my-4"}>
                  <div className={"bg-white py-2 px-4 rounded-md shadow-lg flex justify-between items-center mb-4"}>
                     <div className={"flex space-x-2 w-full"}>
                        <img src="https://placekitten.com/45/45" alt=""
                             className={"rounded-full"}
                        />
                        <input type="text" placeholder={"What's new?"} className={"w-full outline-0"} />
                     </div>

                     <ul className={"flex items-center space-x-3"}>
                        <li>
                           <IoMusicalNotes size={18} color={"gray"}/>
                        </li>
                        <li>
                           <IoImagesOutline size={18} color={"gray"}/>
                        </li>
                        <li>
                           <IoJournalOutline size={18} color={"gray"}/>
                        </li>
                     </ul>
                  </div>

                  <div className={"flex flex-col space-y-4"}>
                     <StatusCard images={["https://placekitten.com/400/400", "https://placekitten.com/400/400"]}/>
                     <StatusCard/>
                     <StatusCard images={["https://placekitten.com/400/400"]}/>
                  </div>
               </div>

               <aside className={"hidden md:block my-4 w-[400px]"}>
                  <div className={"bg-white rounded-md shadow-lg mb-4"}>
                     <div className={"flex items-center justify-between p-3"}>
                        <span className={"font-semibold"}>Upcoming events</span>
                        <IoAddCircleOutline size={22}/>
                     </div>
                     <hr/>
                     <ul className={"flex flex-col space-y-4 py-2"}>
                        <li className={"flex items-start space-x-2 px-4 py-2 transition-colors hover:bg-gray-100"}>
                           <IoMailOutline size={20}/>
                           <div>
                              <span className={"text-sm"}>Apple Keynote</span>
                              <br/>
                              <span className={"text-gray-400 text-xs"}>Monday, Aug 3, 10:00AM</span>
                           </div>
                        </li>
                        <li className={"flex items-start space-x-2 px-4 py-2 transition-colors hover:bg-gray-100"}>
                           <IoMusicalNotesOutline size={20}/>
                           <div>
                              <span className={"text-sm"}>30 Seconds to Mars</span>
                              <br/>
                              <span className={"text-gray-400 text-xs"}>Monday, Aug 10, 10:00PM</span>
                           </div>
                        </li>

                        <li className={"flex items-start space-x-2 px-4 py-2 transition-colors hover:bg-gray-100"}>
                           <IoNewspaperOutline size={20}/>
                           <div>
                              <span className={"text-sm"}>Captain Marvel Premiere</span>
                              <br/>
                              <span className={"text-gray-400 text-xs"}>Monday, Sep 3, 10:00AM</span>
                           </div>
                        </li>

                        <li className={"flex items-start space-x-2 px-4 py-2 transition-colors hover:bg-gray-100"}>
                           <IoMicOutline size={20}/>
                           <div>
                              <span className={"text-sm"}>Podcast</span>
                              <br/>
                              <span className={"text-gray-400 text-xs"}>Thursday, Aug 23, 11:00AM</span>
                           </div>
                        </li>

                        <li className={"flex items-start space-x-2 px-4 py-2 transition-colors hover:bg-gray-100"}>
                           <IoMegaphoneOutline size={20}/>
                           <div>
                              <span className={"text-sm"}>Peaceful protest</span>
                              <br/>
                              <span className={"text-gray-400 text-xs"}>Monday, Aug 19, 1:00PM</span>
                           </div>
                        </li>
                     </ul>
                  </div>

                  <div className="bg-white rounded-md shadow-lg mb-4">
                     <div className={"flex items-center justify-between p-3"}>
                        <span className={"font-semibold"}>Advertising</span>
                        <IoClose size={22}/>
                     </div>
                     <hr/>

                     <div className={"p-4"}>
                        <img src="https://placekitten.com/400/400" alt="" className={"rounded-md mb-4"}/>

                        <p className={"text-sm font-bold"}>Special offer: 20% off today</p>
                        <a href="https://google.com" className={"text-sky-500 text-xs"}>https://nike.com</a>
                        <p className="text-gray-400 text-xs">
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid atque culpa doloremque et
                           ex fuga illum, itaque
                        </p>
                     </div>
                  </div>

                  <div className="bg-white rounded-md shadow-lg mb-4">
                     <div className={"flex items-center justify-between p-3"}>
                        <span className={"font-semibold"}>Birthdays in August</span>
                     </div>
                     <hr/>

                     <div className={"p-4"}>
                        <div className={"font-bold text-sm mb-2"}>August 4</div>
                        <ul className={"flex-col space-y-2 mb-2"}>
                           <li className={"flex items-start justify-between"}>
                              <div className={"flex items-start space-x-2"}>
                                 <img src="https://placekitten.com/35/35" alt="" className={"rounded-full"}/>
                                 <div>
                                    <div className="font-bold text-sm">Jane Joe</div>
                                    <div className={"text-xs text-gray-400"}>Turning 45 years old</div>
                                 </div>
                              </div>
                              <IoGift size={20}/>
                           </li>

                           <li className={"flex items-start justify-between"}>
                              <div className={"flex items-start space-x-2"}>
                                 <img src="https://placekitten.com/35/35" alt="" className={"rounded-full"}/>
                                 <div>
                                    <div className="font-bold text-sm">Mel Moe</div>
                                    <div className={"text-xs text-gray-400"}>Turning 145 years old</div>
                                 </div>
                              </div>
                              <IoGift size={20}/>
                           </li>
                        </ul>

                        <hr/>

                        <div className={"font-bold text-sm my-2"}>August 20</div>
                        <ul className={"flex-col space-y-2"}>
                           <li className={"flex items-start justify-between"}>
                              <div className={"flex items-start space-x-2"}>
                                 <img src="https://placekitten.com/35/35" alt="" className={"rounded-full"}/>
                                 <div>
                                    <div className="font-bold text-sm">Jane Joe</div>
                                    <div className={"text-xs text-gray-400"}>Turning 45 years old</div>
                                 </div>
                              </div>
                              <IoGift size={20}/>
                           </li>

                           <li className={"flex items-start justify-between"}>
                              <div className={"flex items-start space-x-2"}>
                                 <img src="https://placekitten.com/35/35" alt="" className={"rounded-full"}/>
                                 <div>
                                    <div className="font-bold text-sm">Mel Moe</div>
                                    <div className={"text-xs text-gray-400"}>Turning 145 years old</div>
                                 </div>
                              </div>
                              <IoGift size={20}/>
                           </li>
                        </ul>
                     </div>
                  </div>
               </aside>

               <aside className={"hidden lg:block bg-white shadow-md w-[360px]"}>
                  <div className={"font-semibold mb-4 flex items-center justify-between px-2 pt-3"}>
                     <span>Groups</span>
                     <IoEllipsisHorizontal size={20}/>
                  </div>

                  <ul className={"flex-col space-y-2"}>
                     <li className={"flex items-start space-x-2 p-2 transition-colors hover:bg-gray-100"}>
                        <img src="https://placekitten.com/35/35" alt=""
                             className={"rounded-full"}
                        />
                        <div>
                           <span className={"text-sm font-bold"}>Nike</span>
                           <br/>
                           <span className={"text-xs text-gray-400"}>819K subscribers</span>
                        </div>
                     </li>
                     <li className={"flex items-start space-x-2 p-2 transition-colors hover:bg-gray-100"}>
                        <img src="https://placekitten.com/35/35" alt=""
                             className={"rounded-full"}
                        />
                        <div>
                           <span className={"text-sm font-bold"}>Netflix</span>
                           <br/>
                           <span className={"text-xs text-gray-400"}>5.2M subscribers</span>
                        </div>
                     </li>
                  </ul>

                  <div className={"font-semibold my-4 flex items-center justify-between px-2"}>
                     <span>Contacts</span>
                     <IoEllipsisHorizontal size={20}/>
                  </div>
                  <ul className={"flex-col space-y-2"}>
                     <li className={"flex justify-between items-center space-x-2 p-2 transition-colors hover:bg-gray-100"}>
                        <div className={"flex items-center space-x-2"}>
                           <img src="https://placekitten.com/35/35" alt=""
                                className={"rounded-full"}
                           />
                           <span className={"text-sm"}>Jane Joe</span>
                        </div>

                        <span className={"text-xs text-gray-400"}>(5)</span>
                     </li>
                     <li className={"flex justify-between items-center space-x-2 p-2 transition-colors hover:bg-gray-100"}>
                        <div className={"flex items-center space-x-2"}>
                           <img src="https://placekitten.com/35/35" alt=""
                                className={"rounded-full"}
                           />
                           <span className={"text-sm"}>Todd Howards</span>
                        </div>

                        <span className={"text-xs text-gray-400"}>(5)</span>
                     </li>
                     <li className={"flex justify-between items-center space-x-2 p-2 transition-colors hover:bg-gray-100"}>
                        <div className={"flex items-center space-x-2"}>
                           <img src="https://placekitten.com/35/35" alt=""
                                className={"rounded-full"}
                           />
                           <span className={"text-sm"}>Ray Hammond</span>
                        </div>

                        <span className={"text-xs text-gray-400"}>(5)</span>
                     </li>
                     <li className={"flex justify-between items-center space-x-2 p-2 transition-colors hover:bg-gray-100"}>
                        <div className={"flex items-center space-x-2"}>
                           <img src="https://placekitten.com/35/35" alt=""
                                className={"rounded-full"}
                           />
                           <span className={"text-sm"}>Philip Frank</span>
                        </div>

                        <span className={"text-xs text-gray-400"}>(5)</span>
                     </li>
                     <li className={"flex justify-between items-center space-x-2 p-2 transition-colors hover:bg-gray-100"}>
                        <div className={"flex items-center space-x-2"}>
                           <img src="https://placekitten.com/35/35" alt=""
                                className={"rounded-full"}
                           />
                           <span className={"text-sm"}>Mel Boe</span>
                        </div>

                        <span className={"text-xs text-gray-400"}>(5)</span>
                     </li>
                     <li className={"flex justify-between items-center space-x-2 p-2 transition-colors hover:bg-gray-100"}>
                        <div className={"flex items-center space-x-2"}>
                           <img src="https://placekitten.com/35/35" alt=""
                                className={"rounded-full"}
                           />
                           <span className={"text-sm"}>Cynthia Henry</span>
                        </div>

                        <span className={"text-xs text-gray-400"}>(5)</span>
                     </li>
                  </ul>

                  <div className={"font-semibold my-4 flex items-center justify-between px-2"}>
                     <span>Messages</span>
                     <IoEllipsisHorizontal size={20}/>
                  </div>
                  <ul className={"flex-col space-y-2"}>
                     <li className={"flex items-start space-x-2 p-2 p-2 transition-colors hover:bg-gray-100"}>
                        <img src="https://placekitten.com/35/35" alt=""
                             className={"rounded-full"}
                        />
                        <div>
                           <span className={"text-sm font-bold"}>Adam, Eve, Anna</span>
                           <br/>
                           <span className={"text-xs text-gray-400"}>Today at 3:32PM</span>
                        </div>
                     </li>
                     <li className={"flex items-start space-x-2 p-2 p-2 transition-colors hover:bg-gray-100"}>
                        <img src="https://placekitten.com/35/35" alt=""
                             className={"rounded-full"}
                        />
                        <div>
                           <span className={"text-sm font-bold"}>Funny Stuff</span>
                           <br/>
                           <span className={"text-xs text-gray-400"}>Thursday, Jun 31, 4:45PM</span>
                        </div>
                     </li>
                  </ul>

                  <div className={"font-semibold my-4 flex items-center justify-between px-2"}>
                     <span>People you may know</span>
                     <IoEllipsisHorizontal size={20}/>
                  </div>
                  <ul className={"flex-col space-y-2"}>
                     <li className={"flex items-start space-x-2 p-2 p-2 transition-colors hover:bg-gray-100"}>
                        <img src="https://placekitten.com/35/35" alt=""
                             className={"rounded-full"}
                        />
                        <div>
                           <span className={"text-sm font-bold"}>Bel Boe</span>
                           <br/>
                           <span className={"text-xs text-gray-400"}>3 Friends in common</span>
                        </div>
                     </li>
                     <li className={"flex items-start space-x-2 p-2 p-2 transition-colors hover:bg-gray-100"}>
                        <img src="https://placekitten.com/35/35" alt=""
                             className={"rounded-full"}
                        />
                        <div>
                           <span className={"text-sm font-bold"}>John Joe</span>
                           <br/>
                           <span className={"text-xs text-gray-400"}>12 Friends in common</span>
                        </div>
                     </li>
                  </ul>
               </aside>
            </div>
         </main>
      </div>
   );
}

export default App;
