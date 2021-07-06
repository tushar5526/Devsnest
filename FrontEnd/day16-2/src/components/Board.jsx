import Cell from "./Cell";
import "../styles.css";

function Board() {
    function Cells() {
        let cell = [];
        for (let i = 0; i < 81; ++i)
            cell.push(<Cell key={i} />);
        return cell;
    }
    return (
        <div className="board"><Cells /></div>
    )
}

export default Board;