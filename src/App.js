import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BookListPage from "./pages/BookListPage";
import BookDetailPage from "./pages/BookDetailPage";
import AddBookPage from "./pages/AddBookPage";
import EditBookPage from "./pages/EditBookPage";
import DeleteBookPage from "./pages/DeleteBookPage";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<BookListPage />} />
          <Route path="/book/:id" element={<BookDetailPage />} />
          <Route path="/add" element={<AddBookPage />} />
          <Route path="/edit/:id" element={<EditBookPage />} />
          <Route path="/delete/:id" element={<DeleteBookPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
