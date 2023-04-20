interface Props {
    lunchOptions: string[];
}

export function LunchListTable(props: Props) {

    return (
        <table>
            <thead>
            <tr>
                <th>Lunch Options</th>
            </tr>
            </thead>
            <tbody>
            {props.lunchOptions.map((lunchOption, index) => (
                <tr key={index}>
                    <td>{lunchOption}</td>
                    <td>
                        <button type={"submit"}>
                            x
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}
