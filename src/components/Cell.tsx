
interface Props {
    index: number,
}

function Cell({index}: Props) {
    return (
        <div className="cell">{index}</div>
    );
}

export default Cell;