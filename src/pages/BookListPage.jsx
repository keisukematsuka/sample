import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import db from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import Header from "../components/Header";
import Search from "../components/Search";
import AddButton from "../components/AddButton";
import "../assets/css/booklistpage.css";
import Footer from "../components/Footer";

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
    <>
      <Header />
      <div className="search_add_bar">
        <Search />
        <AddButton />
      </div>
      <main>
        <h1>書籍一覧</h1>
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <Link to={`/book/${book.id}`}>{book.title}</Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default BookListPage;
