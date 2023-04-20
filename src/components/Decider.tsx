import React from "react";

interface Props {
    lunchOptions: string[]
    onDecideClicked: () => void
}
export function Decider(props: Props) {

    return (
        <div>
            <button onClick={props.onDecideClicked}>
                TELL ME WHERE TO GO FOR LUNCH
            </button>
        </div>
    )
}
