import { useDispatch, useSelector } from "react-redux"
import { decrement, incremenet } from "./features/counter/counterSlice"

function App() {
  
  const count = useSelector((state) => state.counter.value)
  const disptach = useDispatch()

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      
      <h1 className="text-3xl font-bold text-center text-gray-800 flex justify-center items-center">
        Counter App with Redux
      </h1>

      <div className="flex gap-10 mt-10 items-center justify-center bg-slate-100 p-10 rounded-lg shadow-sm border-2 border-gray-200">

        <button
          onClick={() => disptach(incremenet())}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Increment
        </button>

        <p className={`text-3xl font-bold text-center ${count >= 0 ? "text-green-700" : "text-red-500"}`}>
          {count}
        </p>

        <button 
          onClick={() => disptach(decrement())}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Decrement
        </button>

      </div>
    </div>
  )
}

export default App
