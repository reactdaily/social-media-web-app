import { Disclosure } from '@headlessui/react';
import React from 'react';
import {IoChevronUp} from "react-icons/io5";

interface MenuItem {
    label: string;
    icon: any;
    badge?: number;
}

interface SideMenuProps {
    title: string;
    items: MenuItem[]
}

/**
 * SideMenu
 * Created 2/4/24
 */
const SideMenu = ({title, items}: SideMenuProps) => {
    return (
        <div className={"my-4"}>
           <Disclosure defaultOpen={true}>
              {({ open }) => (
                 <>
                    <Disclosure.Button className="flex items-center w-full justify-between px-2 py-2 text-left text-sm font-medium">
                       <span className={"text-white font-bold py-1"}>{title}</span>
                       <IoChevronUp
                          className={`${
                             open ? 'rotate-180 transform' : ''
                          } h-5 w-5 text-white`}
                       />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                       <ul>
                          {
                             items.map(item => (
                                <li>
                                   <a href="#" className={"flex justify-between items-center text-gray-300 text-sm px-4 py-2 border-l-2 border-l-transparent transition-colors hover:bg-slate-600 hover:text-gray-100 hover:border-sky-500"}>
                                      <span>{item.label}</span>
                                      { item.badge && <span className={"bg-sky-500 rounded-full text-xs w-[20px] h-[20px] flex justify-center items-center font-semibold"}>{item.badge}</span> }
                                   </a>
                                </li>
                             ))
                          }
                       </ul>
                    </Disclosure.Panel>
                 </>
              )}
           </Disclosure>
        </div>
    );
}

export default SideMenu;
