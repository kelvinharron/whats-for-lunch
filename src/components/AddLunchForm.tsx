import {ChangeEventHandler, FormEventHandler} from "react";

interface Props {
    addLunchOption: FormEventHandler<HTMLFormElement>,
    onChanged: ChangeEventHandler<HTMLInputElement>,
    newLunchOptionText: string
}

export function AddLunchForm(props: Props) {

    return (
        <form onSubmit={props.addLunchOption}>
            <input style={{width: 350, height: 20}}
                   type={"text"}
                   id={"newLunchOption"}
                   placeholder={"Where do you want to go?"}
                   value={props.newLunchOptionText}
                   onChange={props.onChanged}>
            </input>
            <div></div>
            <button type={"submit"}>
                Add
            </button>
        </form>
    )
}