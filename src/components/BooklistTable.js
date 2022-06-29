import BookRow from "./BookRow";

function BooklistRows(props) {
    const rows = [];

    props.thebookswewilldraw.forEach(b => {
        rows.push(<BookRow isbn={b.isbn} name={b.name} />);
    });


    return rows;
}

function BooklistTable(props) {
    return (
        <div>
            This is the list of books.
            <BooklistRows thebookswewilldraw={props.books} />
        </div>
    );
}

export default BooklistTable;
