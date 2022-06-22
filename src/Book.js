
import { useEffect } from 'react';

function Book(props) {
  let spans = props.books.map(book => <div>{book.id} {book.title}</div>)
  return (
    <div>
       {spans}
    </div>
  );
}

export default Book;
