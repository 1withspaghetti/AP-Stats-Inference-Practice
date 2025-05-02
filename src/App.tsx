import { useState } from 'react'
import ProcedureSelection from './components/ProcedureSelection';
import { procedureTypes } from './data';

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
        ""
      )}
    </div>
  )
}

export default App
