import Book from "./Book";

function BookWrapper() {
	const books = [
	  {
		id: 1,
		title: "Harry potter",
		pages: 452,
		author: "JK Rowling",
	  },
	  {
		id: 2,
		title: "Lord of the Rings",
		pages: 521,
		author: "JRR Tolkien",
	  },
	  {
		id: 3,
		title: "Hyperion",
		pages: 564,
		author: "Dan Simmons",
	  },

	];
return (
    <>
      <ul>
        {books.map((book) => {
          return <Book
              key={book.id}
              title={book.title}
              pages={book.pages}
              author={book.author}
            />
		  
          
        })}
      </ul>
    </>
  );
}
export default BookWrapper;