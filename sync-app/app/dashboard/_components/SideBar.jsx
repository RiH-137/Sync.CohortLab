"use client";
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { LayoutDashboard, Shield, UserCircle } from 'lucide-react'
import { usePathname } from 'next/navigation'


function SideBar() {
    const MenuList=[
        {
            name:'Dashboard',
            icon:LayoutDashboard,
            link:'/dashboard'
        },
        {
            name:'Upgrade',
            icon:Shield,
            link:'/dashboard/upgrade'
        },
        {
            name:'Profile',
            icon:UserCircle,
            link:'/dashboard/profile'
        }
    ]

    // hook for dashboard/upgrade etc.
    const path=usePathname();


  return (
    <div className='h-screen shadow-md p-5'>
        

        {/* logo */}
        <div className=' flex gap-2 items-center'>
            <Image src={'/logo.svg'} alt='logo' width={40} height={40}/>
            <h2 className="font-bold text-2xl">SyncAi</h2>
            
        </div>
        <div><h6 className='font-extralight text-xs'>CohortLab</h6></div>


        {/* button */}
        <div className='mt-10'> 
            <Button className='w-full font-bold hover:bg-violet-900 hover:font-extrabold'> + Create New </Button>


            {/* get the menu */}
            <div className='mt-5'>
                {MenuList.map((menu, index)=>(
                    <div key={index} className={`flex gap-5 font-normal items-center p-3 hover:bg-slate-200 cursor-pointer hover:font-bold rounded-lg mt-3
                        ${path==menu.path&&'bg-slate-200'}`}> 
                        <menu.icon size={20} />
                        <h2>{menu.name}</h2>
                    </div>
                ))}
            </div>
            

        </div>
        





    </div>
  )
}

export default SideBar