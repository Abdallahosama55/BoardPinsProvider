import React from 'react'
import DatePicker from '../../components/provider/ProjectMangent/DatePicker'
import TodoList from '../../components/provider/ProjectMangent/todoList'

function ProjectmangementTasks() {
  return (
    <div className=' h-full mx-6 grid grid-cols-4 items-center justify-center'>

<div className='px-8 py-6  flex flex-col gap-5 lg:col-span-3 col-span-4 p-2 rounded-2xl h-full bg-white'>

<DatePicker/>
<TodoList/>

</div>

    </div>
  )
}

export default ProjectmangementTasks