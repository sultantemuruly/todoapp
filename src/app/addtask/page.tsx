export default function Home() {
  return (
    <div className='flex flex-col items-center pt-36'>
        <div className='font-bold text-[42px]'>Add Task</div>
        <div className='pt-10'>
            <input className='text-black border rounded p-2 placeholder-gray-500 placeholder-italic placeholder-text-sm' type="text" name="task" placeholder="task..."/>
        </div>
        <div className='pt-[15px]'>
            <button className='bg-blue-500 w-[96px] h-[32px]'>Add</button>
        </div>
    </div>
  );
}
