import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import db from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

const BookListPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "books"), (snapshot) => {
      const booksData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBooks(booksData);
    });

    return () => unsubscribe();
  }, []);
  return (
    <div>
      <h1>書籍一覧</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/book/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/add">
        <button>登録ページ</button>
      </Link>
    </div>
  );
};

export default BookListPage;
