interface Props {
    lunchOptions: string[];
    onDeleteClicked: (index: number) => void;
}

export function LunchListTable(props: Props) {

    const onDelete = (index: number) => {
        props.onDeleteClicked(index)
    }

    return (
        <table>
            <thead>
            <tr>
                <th>Lunch Options</th>
            </tr>
            </thead>
            <tbody>
            {props.lunchOptions.map((lunchOption, index) =>
                <tr key={index}>
                    <td>{lunchOption}</td>
                    <td>
                        <button onClick={() => onDelete(index)}>
                            x
                        </button>
                    </td>
                </tr>
            )}
            </tbody>
        </table>
    )
}
