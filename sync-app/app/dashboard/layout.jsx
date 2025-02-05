import React from 'react';
import DashBoardHeader from './_components/DashboardHeader';
import SideBar from './_components/SideBar';

function DashboardLayout({children}){
  return (
    <div>
        <div className='md:w-64 hidden md:block fixed'>
            <SideBar/>
        </div>
        <div className='ml-64'>
            <DashBoardHeader/>
            <div>
                {children}
            </div>
        </div>

    </div>
    
  )
}

export default DashboardLayout