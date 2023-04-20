interface Props {
    lunchOptions: string[]
}

export function LunchListTable({lunchOptions}: Props) {

    return (
        <table>
            <thead>
            <tr>
                <th>Lunch Options</th>
            </tr>
            </thead>
            <tbody>
            {lunchOptions.map((lunchOption, index) => (
                <tr key={index}>
                    <td>{lunchOption}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}
