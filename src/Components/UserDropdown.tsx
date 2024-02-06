import React, {useState, useEffect, Fragment} from 'react';
import {Menu, Transition} from "@headlessui/react";
import {IoArchive, IoChevronDown, IoDuplicate, IoMove, IoPencil, IoTrash} from "react-icons/io5";

/**
 * UserDropdown
 * Created 2/4/24
 */
const UserDropdown = () => {
   const [] = useState();

   useEffect(() => {
      // getData();
   }, []);

   return (
      <Menu as="div" className="relative inline-block text-left">
         <div>
            <Menu.Button>
               <img src={"https://placekitten.com/35/35"} className={"rounded-full"} alt={"Username"} />
            </Menu.Button>
         </div>
         <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
         >
            <Menu.Items
               className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
               <div className="px-1 py-1 ">
                  <Menu.Item>
                     {({active}) => (
                        <button
                           className={`${
                              active ? 'bg-sky-600 text-white' : 'text-gray-900'
                           } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                           <IoPencil
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                           />
                           Edit
                        </button>
                     )}
                  </Menu.Item>
                  <Menu.Item>
                     {({active}) => (
                        <button
                           className={`${
                              active ? 'bg-sky-600 text-white' : 'text-gray-900'
                           } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                           <IoDuplicate
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                           />
                           Duplicate
                        </button>
                     )}
                  </Menu.Item>
               </div>
               <div className="px-1 py-1">
                  <Menu.Item>
                     {({active}) => (
                        <button
                           className={`${
                              active ? 'bg-sky-600 text-white' : 'text-gray-900'
                           } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                           <IoArchive
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                           />
                           Archive
                        </button>
                     )}
                  </Menu.Item>
                  <Menu.Item>
                     {({active}) => (
                        <button
                           className={`${
                              active ? 'bg-sky-600 text-white' : 'text-gray-900'
                           } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                           <IoMove
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                           />
                           Move
                        </button>
                     )}
                  </Menu.Item>
               </div>
               <div className="px-1 py-1">
                  <Menu.Item>
                     {({active}) => (
                        <button
                           className={`${
                              active ? 'bg-sky-600 text-white' : 'text-gray-900'
                           } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                           <IoTrash
                              className="mr-2 h-5 w-5 text-sky-400"
                              aria-hidden="true"
                           />
                           Delete
                        </button>
                     )}
                  </Menu.Item>
               </div>
            </Menu.Items>
         </Transition>
      </Menu>
   );
}

export default UserDropdown;
