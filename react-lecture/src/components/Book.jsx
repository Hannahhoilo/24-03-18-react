function Book ({ title, pages, author }){

	return (
		<>
		<div>
			<span>{title}</span>
			<span>{pages}</span>
			<span>{author}</span>
		</div>
		</>
	);

}

export default Book;