import {ChangeEvent, FormEvent, useState} from "react";
import {LunchListTable} from "./LunchListTable";
import {AddLunchForm} from "./AddLunchForm";

const initialLunchOptions = [
    "McDonalds",
    "Boojum"
]

export function LunchList() {

    const [lunchOptions, setLunchOptions] = useState<string[]>(initialLunchOptions);
    const [newLunchOptionText, setNewLunchOptionText] = useState('');

    const addLunchOption = (event: FormEvent<HTMLFormElement>) => {
        setLunchOptions(lunchOptions.concat([newLunchOptionText]));
        setNewLunchOptionText('')

        event.preventDefault()
    }

    const onChanged = (e: ChangeEvent<HTMLInputElement>) => setNewLunchOptionText(e.target.value);

    const deleteLunchOption = (lunchIndex: number) => {
        const newLunchOptions = [...lunchOptions]
        newLunchOptions.splice(lunchIndex, 1)
        setLunchOptions(newLunchOptions)
    }

    return (
        <div>
            <AddLunchForm addLunchOption={addLunchOption}
                          onChanged={onChanged}
                          newLunchOptionText={newLunchOptionText}/>
            <LunchListTable lunchOptions={lunchOptions}/>
        </div>
    )
}