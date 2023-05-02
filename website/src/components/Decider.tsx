import React from "react";

interface Props {
    lunchOptions: string[]
    onDecideClicked: () => void
}
export function Decider(props: Props) {

    const isLunchOptionsEmpty  = () => {
        return props.lunchOptions.length < 1
    }

    return (
        <div>
            <button disabled={isLunchOptionsEmpty()} onClick={props.onDecideClicked}>
                TELL ME WHERE TO GO FOR LUNCH
            </button>
        </div>
    )
}
