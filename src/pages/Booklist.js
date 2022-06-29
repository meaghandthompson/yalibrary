import '../styles/Common.css';
import BooklistTable from '../components/BooklistTable';

const bookdata=[
    {
        name: "The Mysterious Benedict Society",
        isbn: "1397136418"
    },
    {
        name: "The Voyage of the Dawn Treader",
        isbn: "9446274674"
    },
    {
        name: "Calvin and Hobbes",
        isbn: "2746563732"
    },
    {
        name: "A Series of Unfortunate Events: Book 1",
        isbn: "11386324631"
    }
]

function Booklist(props) {
    return (
        <div>
            <div className="headerBar">
                This is the header bar.
            </div>
            <div className="searchBar">
                This is the search area.
            </div>
            <div>
                This is the book list.
                <BooklistTable books={bookdata}/>
            </div>
        </div>
    );
}

export default Booklist;
