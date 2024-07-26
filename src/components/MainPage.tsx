import prisma from '@/lib/db'
import React from 'react'
import Task from '@/components/Task'

interface TaskType {
  id: number;
  text: string;
}

const MainPage = async () => {
  try {
    // Fetch tasks from the database
    const tasks: TaskType[] = await prisma.task.findMany({});

    return (
      <div className='pt-10'>
        <div className='text-center font-bold text-[42px]'>My Tasks</div>
        <div className='pt-[100px] flex flex-col items-center space-y-10'>
          {tasks.map(task => (
            <Task key={task.taskId} id={task.taskId} text={task.text} />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return (
      <div className='pt-10'>
        <div className='text-center font-bold text-[42px]'>Error Loading Tasks</div>
      </div>
    );
  }
}

export default MainPage;