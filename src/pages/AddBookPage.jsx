import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import db from "../firebase";
import { useNavigate } from "react-router-dom";

const AddBookPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    isbn: "",
    publishedYear: "",
    publisher: "",
    genre: "",
    description: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "books"), formData);
      setFormData({
        title: "",
        author: "",
        isbn: "",
        publishedYear: "",
        publisher: "",
        genre: "",
        description: "",
      });
      alert("書籍が追加されました");
      navigate("/");
    } catch (error) {
      console.error("書籍の追加に失敗しました", error);
      alert("書籍の追加に失敗しました");
      navigate("/");
    }
  };

  return (
    <div>
      <h1>書籍追加</h1>
      <form onSubmit={handleSubmit}>
        <label>
          タイトル:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          著者名:
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          ISBN:
          <input
            type="text"
            name="isbn"
            value={formData.isbn}
            onChange={handleChange}
          />
        </label>
        <label>
          出版年:
          <input
            type="number"
            name="publishedYear"
            value={formData.publishedYear}
            onChange={handleChange}
          />
        </label>
        <label>
          出版社:
          <input
            type="text"
            name="publisher"
            value={formData.publisher}
            onChange={handleChange}
          />
        </label>
        <label>
          ジャンル:
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
          />
        </label>
        <label>
          概要:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </label>
        <button type="submit">追加</button>
      </form>
    </div>
  );
};

export default AddBookPage;
