import { useState } from "react";

type TaskProps = {
  id: number;
  name: string;
  deleteFn: Function; //Function type
  doneFn: Function;
  status: "inprogress" | "done"
}

const Task = ({ id, name, deleteFn, doneFn, status }: TaskProps) => {
  const task = <div></div>
  const [isShowButton, setIsShowButton] = useState(false)

  const showButton = () => {
    setIsShowButton(true)
  }

  const hKeyeButton = () => {
    setIsShowButton(false)
  }

  if (status === "done") return (
    <div className="flex justify-between h-8 items-center py-6 border-b">
      <span className="text-2xl line-through"> {name} </span>
      <div className="flex space-x-1 items-center">
        <button className="bg-green-400 w-24 text-2xl"></button>
        <button className="bg-red-400 w-24 text-2xl"></button>
      </div>
    </div>
  )

  return (
    <div className="flex justify-between h-8 items-center py-6 border-b" onMouseEnter={showButton} onMouseLeave={hKeyeButton}>
      <span className="text-2xl"> {name} </span>
      <div className="flex space-x-1 items-center">
        <button className="bg-green-400 w-24 text-2xl" onClick={() => doneFn(id)}>{isShowButton ? 'Done' : ''}</button>
        <button className="bg-red-400 w-24 text-2xl" onClick={() => deleteFn(id)}>{isShowButton ? 'Delete' : ''}</button>
      </div>
    </div>
  );
}

export default Task;