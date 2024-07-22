import Link from 'next/link';
import React from 'react'

function Header() {
  return (
    <div className='px-10 bg-blue-700 w-full h-[50px] flex items-center space-x-10 text-white'>
        <div>
            <Link href='/' className='hover:underline'>
                Tasks
            </Link>
        </div>
        <div>
            <Link href='/addtask' className='hover:underline'>
                Add Task
            </Link>
        </div>
    </div>
  )
}

export default Header