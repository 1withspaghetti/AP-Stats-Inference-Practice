import React from 'react';

interface ProcedureSelectionProps {
    item: string;
    id: string;
    selected: string[];
    setSelected: (value: string[]) => void;
}

export const ProcedureSelectionItem: React.FC<ProcedureSelectionProps> = ({ item, id, selected, setSelected }) => {

    return (
        <div className="flex items-center">
            <input id={id} name={id} type="checkbox" checked={selected.includes(item)} onChange={() => {
                if (selected.includes(item)) {
                    setSelected(selected.filter((i) => i !== item));
                } else {
                    setSelected([...selected, item]);
                }
            }} 
            />
            <label htmlFor={id} className="ml-2 text-lg">{item}</label>
        </div>
    );
};

export default ProcedureSelectionItem;