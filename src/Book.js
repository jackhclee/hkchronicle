function Book(props) {
  let listItems = props.books.map(book => <li>{book.title}</li>)
  return (
    <ol>
       {listItems}
    </ol>
  );
}

export default Book;
