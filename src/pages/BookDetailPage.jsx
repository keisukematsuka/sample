import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, onSnapshot } from "firebase/firestore";
import db from "../firebase";
import DeleteBookPage from "./DeleteBookPage";

const BookDetailPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const docRef = doc(db, "books", id);

    const unsubscribe = onSnapshot(docRef, (doc) => {
      if (doc.exists()) {
        setBook({ id: doc.id, ...doc.data() });
      } else {
        console.log("ドキュメントが取得できません");
        setBook(null);
      }
    });

    // コンポーネントのクリーンアップ時にリスナーを解除
    return () => unsubscribe();
  }, [id]);

  if (!book) {
    return <div>書籍が見つかりません</div>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <p>著者名: {book.author}</p>
      <p>ISBN: {book.isbn}</p>
      <p>出版年: {book.publishedYear}</p>
      <p>出版社: {book.publisher}</p>
      <p>ジャンル: {book.genre}</p>
      <p>概要: {book.description}</p>
      <Link to={`/edit/${book.id}`}>編集</Link>
      <br />
      <DeleteBookPage id={id} />
      <br />
      <Link to="/">一覧</Link>
    </div>
  );
};

export default BookDetailPage;
