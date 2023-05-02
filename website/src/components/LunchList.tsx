import {ChangeEvent, FormEvent, useState} from "react";
import {LunchListTable} from "./LunchListTable";
import {AddLunchForm} from "./AddLunchForm";
import {Decider} from "./Decider";

const initialLunchOptions = [
    "McDonalds",
    "Boojum"
]

export function LunchList() {

    const [lunchOptions, setLunchOptions] = useState<string[]>(initialLunchOptions);
    const [newLunchOptionText, setNewLunchOptionText] = useState('');
    const [selectedLunchOption, setSelectedLunchOption] = useState('');

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

    const onDecideClicked = () => {
        const chosenOptionIndex = Math.floor(Math.random() * lunchOptions.length)
        setSelectedLunchOption(lunchOptions[chosenOptionIndex])
    }

    return (
        <div>
            <AddLunchForm addLunchOption={addLunchOption}
                          onChanged={onChanged}
                          newLunchOptionText={newLunchOptionText}/>
            <LunchListTable lunchOptions={lunchOptions}
                            onDeleteClicked={deleteLunchOption}/>
            <Decider lunchOptions={lunchOptions}
                     onDecideClicked={onDecideClicked}/>
            <div>
                <h1>{selectedLunchOption}</h1>
            </div>
        </div>
    )
}