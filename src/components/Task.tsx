'use client'

import axios from 'axios'
import prisma from '@/lib/db'
import React from 'react'

type Props = {
    id: number,
    text: string
}

const Task: React.FC<Props> = ({ id, text }) => {
  const handleDelete = async () => {
    try {
      const response = await axios.delete('api/tasks', {
        data: { deleteId: id }
      });
      if (response.status === 200) {
        window.location.reload();
      } else {
        console.error('Failed to delete task:', response.status);
      }
    } catch(error) {
      console.error(error);
    }
  }

  return (
    <div className='flex items-center w-[400px] py-[10px] px-[10px] rounded-[20px] bg-green-600 font-bold text-[15px]'>
        <div>
          {text}
        </div>
        <div className='pl-[200px] ml-auto'>
          <button className='p-2 rounded-[10px] bg-red-600 hover:bg-red-800' onClick={handleDelete}>
            delete
          </button>
        </div>
    </div>
  )
}

export default Task