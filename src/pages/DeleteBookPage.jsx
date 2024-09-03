import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import db from "../firebase";

const DeleteBookPage = ({ id }) => {
  const navigate = useNavigate();
  const deleteItemFromFirestore = async () => {
    try {
      await deleteDoc(doc(db, "books", id));
      alert("アイテムが削除されました");
      navigate("/");
    } catch (e) {
      console.error("削除に失敗しました ", e);
    }
  };

  return <button onClick={deleteItemFromFirestore}>削除</button>;
};

export default DeleteBookPage;
