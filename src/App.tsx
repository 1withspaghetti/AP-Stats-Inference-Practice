import { useState } from 'react'
import ProcedureSelection from './components/ProcedureSelection';
import { procedureTypes } from './data';
import Question from './components/Question';

function App() {

  const [hasSelected, setHasSelected] = useState(false);
  const [selected, setSelected] = useState<string[]>(procedureTypes);


  return (
    <div className='flex flex-col items-center w-full min-h-screen p-4 bg-gray-100'>
      <h1 className='text-2xl font-bold mb-8'>AP Statistics Inference Procedure Practice</h1>
      {!hasSelected ? (
        <ProcedureSelection
          selected={selected}
          setSelected={setSelected}
          setHasSelected={setHasSelected}
        />
      ) : (
        <Question
          selected={selected}
          setHasSelected={setHasSelected}
        />
      )}
      <div className="mt-16">
        <p className='text-sm text-gray-500'>
          Made by Tyler Place. <a href="https://github.com/1withspaghetti/AP-Stats-Inference-Practice" className='underline'>Github</a>
        </p>
      </div>
    </div>
  )
}

export default App
