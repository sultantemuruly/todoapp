'use client'

import axios from 'axios'
import { ChangeEvent, FormEvent, useState } from "react";
import ReactTextareaAutosize from 'react-textarea-autosize'
import { useRouter } from 'next/navigation';

export default function Home() {
  const [task, setTask] = useState<string>('');
  const router = useRouter();

  const handleTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTask(value);
  }

  const handleAdd = async () => {
    try {
      const response = await axios.post('api/tasks', {
        text: task
      });
      
      if (response.status === 200) {
        setTask('');
        router.push('/');
      } else {
        console.error('Unexpected response status:', response.status);
      }
    } catch(error) {
      console.error(error);
    }
  }

  return (
    <div className='flex flex-col items-center pt-36'>
        <div className='font-bold text-[42px]'>Add Task</div>
        <div className='pt-10'>
            <ReactTextareaAutosize onChange={handleTaskChange} className='text-black border rounded p-2 placeholder-gray-500 placeholder-italic placeholder-text-sm' name="task" placeholder="task..."/>
        </div>
        <div className='pt-[15px]'>
            <button className='bg-blue-500 w-[96px] h-[32px]' onClick={handleAdd}>Add</button>
        </div>
    </div>
  );
}
