import React, { useDebugValue, useState } from "react";
import Task from "./Task";

type TaskData = {
    id: number;
    name: string;
}

function Todo() {
    const [curTask, setCurTask] = useState<string>('')
    const [todoTasks, setTodoTasks] = useState<TaskData[]>([])
    const [doneTasks, setDoneTasks] = useState<TaskData[]>([])

    const onChangeCallback = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setCurTask(ev.target.value)
    }

    const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        if (ev.key == "Enter") addTask(curTask)
    }

    const addTask = (taskName: string) => {
        if (curTask === '') {
            alert('Task cannot be empty')
            return
        }
        const newId = (new Date()).getTime()
        const newTasks = [{ id: newId, name: taskName }, ...todoTasks]

        setTodoTasks(newTasks)
        document.querySelectorAll('input')[0].value = ''
        setCurTask('')
        console.log(todoTasks)
    }

    const doneTask = (id: number) => {
        let newId: number = 0
        let taskName: string = ''
        const newTodoTasks = todoTasks.filter(x => {
            if (x.id === id) {
                newId = x.id
                taskName = x.name
            }
            return x.id !== id
        })
        const newDoneTasks = [{} ,...doneTasks]
        setTodoTasks(newTodoTasks)
        setDoneTasks([{ id: newId, name: taskName }, ...doneTasks])
    }

    const deleteTask = (id: number) => {
        // create new task list (หากจะ set ค่าให้กับตัวแปรที่สร้างจาก useState จะต้องสร้างข้อมูลใหม่หมดเสมอ)
        const newTasks = todoTasks.filter(x => x.id !== id)
        setTodoTasks(newTasks)
    }


    return (
        <div className='mx-auto max-w-4xl'>

            {/* task input and add button */}
            <div className='flex space-x-1'>
                <input className='border border-gray-400 w-full text-2xl'
                    onKeyDown={onKeyDownCallback} onChange={onChangeCallback}></input>
                <button className='border border-gray-400 w-8 font-bold' onClick={() => addTask(curTask)}>+</button>
            </div>

            {/* tasks section */}
            <div>
                {/* task example */}
                {/* Please convert this into a task component */}
                {todoTasks.map(x => <Task id={x.id} name={x.name} deleteFn={deleteTask} doneFn={doneTask} status={"inprogress"}/>)}
                {doneTasks.map(x => <Task id={x.id} name={x.name} deleteFn={deleteTask} doneFn={doneTask} status={"done"} />)}
                {/* another task example */}


            </div>
        </div>
    );
}

export default Todo;