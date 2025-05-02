import React from 'react';
import { procedureTypes } from '../data';
import ProcedureSelectionItem from './ProcedureSelectionItem';

interface ProcedureSelectionProps {
    selected: string[];
    setSelected: (value: string[]) => void;
    setHasSelected: (value: boolean) => void;
}

export const ProcedureSelection: React.FC<ProcedureSelectionProps> = ({ selected, setSelected, setHasSelected }) => {

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        if (selected.length <= 1) {
            alert("Please select at least two procedures to study with.");
            return;
        }
        setHasSelected(true);
    }

    return (
        <form className="flex flex-col items-center gap-4 max-w-2xl" onSubmit={handleSubmit}>
            <div className="text-xl">Select procedures to study with:</div>
            <div className="flex flex-col">
                {procedureTypes.map((item) => 
                    <ProcedureSelectionItem
                        key={item}
                        item={item}
                        id={item}
                        selected={selected}
                        setSelected={setSelected}
                    />
                )}
            </div>
            <div className="flex gap-4">
                <button type="button" className="btn secondary" onClick={() => setSelected([])}>Clear</button>
                <button type="button" className="btn secondary" onClick={() => setSelected(procedureTypes)}>Select All</button>
            </div>
            <div>
                <button type="submit" className="btn primary">Start</button>
            </div>
        </form>
    );
};

export default ProcedureSelection;