import { doc, updateDoc, getDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import db from "../firebase";

const EditBookPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    isbn: "",
    publishedYear: "",
    publisher: "",
    genre: "",
    description: "",
  });

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const bookDoc = await getDoc(doc(db, "books", id));
        if (bookDoc.exists()) {
          setBook(bookDoc.data());
        } else {
          console.log("ドキュメントが見つかりません");
        }
      } catch (e) {
        console.error("データの取得に失敗しました ", e);
      }
    };

    fetchBook();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const updateItemInFirestore = async (e) => {
    e.preventDefault();
    try {
      const itemDoc = doc(db, "books", id);
      await updateDoc(itemDoc, book);
      alert("アイテムが更新されました");
      navigate(`/book/${id}`);
    } catch (e) {
      console.error("ドキュメントの更新に失敗しました", e);
    }
  };

  if (!book.title) {
    return <div>書籍が見つかりません</div>;
  }

  return (
    <div>
      <h1>書籍の編集 - {book.title}</h1>
      <form onSubmit={updateItemInFirestore}>
        <label>
          タイトル:
          <input
            type="text"
            name="title"
            placeholder={book.title}
            onChange={handleInputChange}
          />
        </label>
        <label>
          著者名:
          <input
            type="text"
            name="author"
            placeholder={book.author}
            onChange={handleInputChange}
          />
        </label>
        <label>
          ISBN:
          <input
            type="text"
            name="isbn"
            placeholder={book.isbn}
            onChange={handleInputChange}
          />
        </label>
        <label>
          出版年:
          <input
            type="number"
            name="publishedYear"
            placeholder={book.publishedYear}
            onChange={handleInputChange}
          />
        </label>
        <label>
          出版社:
          <input
            type="text"
            name="publisher"
            placeholder={book.publisher}
            onChange={handleInputChange}
          />
        </label>
        <label>
          ジャンル:
          <input
            type="text"
            name="genre"
            placeholder={book.genre}
            onChange={handleInputChange}
          />
        </label>
        <label>
          概要:
          <textarea
            name="description"
            placeholder={book.description}
            onChange={handleInputChange}
          ></textarea>
        </label>
        <button type="submit">保存</button>
      </form>
    </div>
  );
};

export default EditBookPage;
