import React from 'react';
import {
   IoAttachOutline,
   IoChatbubblesOutline, IoHappyOutline,
   IoHeart,
   IoHeartOutline, IoSaveOutline, IoShare,
   IoShareOutline
} from "react-icons/io5";

interface StatusCardProps {
   images?: string[]
}

/**
 * StatusCard
 * Created 2/4/24
 */
const StatusCard = ({images}: StatusCardProps) => {
   return (
      <article className={"bg-white p-4 rounded-md shadow-lg"}>
         <header className={"flex items-center space-x-2"}>
            <img src="https://placekitten.com/55/55" alt=""
                 className={"rounded-full"}
            />

            <div>
               <strong>John Doe</strong> is at <span className={"text-sky-500"}>New York, USA</span>
               <br/>
               <span className={"text-sm text-gray-600"}>Thursday, Jun 31, 5:50PM</span>
            </div>
         </header>

         <div>
            <p className={"text-sm mt-2"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab animi atque
               cupiditate earum explicabo facere facilis harum ipsam ipsum itaque labore molestias, nihil nostrum
               numquam sed soluta, sunt velit.</p>

            {images?.length &&
               <div className={"grid grid-cols-2 gap-4 my-4"}>
               {
                  images.map(img => (
                     <img className={"rounded-lg cursor-pointer hover:shadow-md"} src={img} alt=""/>
                  ))
               }
            </div>
            }

            <hr/>

            <div className={"flex justify-between items-center my-2"}>
               <ul className={"flex space-x-2 items-center"}>
                  <li className={"hidden lg:inline-block"}><img src="https://placekitten.com/35/35" alt="" className={"rounded-full"}/></li>
                  <li className={"hidden lg:inline-block"}><img src="https://placekitten.com/35/35" alt="" className={"rounded-full"}/></li>
                  <li className={"hidden lg:inline-block"}><img src="https://placekitten.com/35/35" alt="" className={"rounded-full"}/></li>
                  <li><span className={"text-xs font-bold"}>+ 233 likes</span></li>
               </ul>

               <div className={"flex space-x-4 text-sm"}>
                  <span className={"flex items-center space-x-1"}>
                     <IoHeartOutline size={15}/>
                     <span>Like</span>
                  </span>

                  <span className={"flex items-center space-x-1"}>
                     <IoChatbubblesOutline size={15}/>
                     <span>9 Comments</span>
                  </span>

                  <span className={"flex items-center space-x-1"}>
                     <IoShareOutline size={15}/>
                     <span>12 Shares</span>
                  </span>
               </div>
            </div>

            <hr/>

            <div
               className={"flex justify-between items-center my-2 bg-gray-100 border border-gray-300 py-1 px-2 rounded-md hover:bg-white"}>
               <div className={"flex space-x-2 w-full"}>
                  <img src="https://placekitten.com/35/35" alt=""
                       className={"rounded-full"}
                  />
                  <input type="text" placeholder={"Write a comment..."} className={"w-full bg-transparent outline-0"}/>
               </div>

               <ul className={"flex items-center space-x-2"}>
                  <li><IoAttachOutline size={18}/></li>
                  <li><IoSaveOutline size={18}/></li>
                  <li><IoHappyOutline size={18}/></li>
               </ul>
            </div>

            <div className={"mt-4 mb-2"}>
               <div className={"flex items-start justify-between"}>
                  <div className={"flex items-start space-x-2"}>
                     <img src="https://placekitten.com/45/45" alt="" className={"rounded-full"}/>
                     <div>
                        <strong>Cynthia Henry</strong>
                        <br/>
                        <span className={"text-xs text-gray-400"}>Today at 3:30PM</span>

                        <p className={"text-sm"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
                           consectetur ducimus esse excepturi labore laboriosam, odit perspiciatis quis vel. Amet
                           consectetur cumque distinctio, ducimus facere magni minus velit veniam vitae!</p>
                        <span className={"text-sky-500 text-sm font-semibold cursor-pointer hover:underline"}>- View 2 replies</span>
                     </div>
                  </div>
                  <div className={"flex items-center space-x-2"}>
                     <span className={"flex items-center"}><IoHeart color={"red"} size={18}/><small>9</small></span>
                     <span><IoShare size={18}/></span>
                  </div>
               </div>

               <span className={"text-sky-500 font-semibold text-sm mt-2 inline-block cursor-pointer hover:underline"}>Show 5 more comments</span>
            </div>
         </div>
      </article>
   );
}

export default StatusCard;
