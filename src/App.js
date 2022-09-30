import "./App.css";
import AllReviews from "./components/allReviews/AllReviews";
import Header from "./components/Header-Nav/Header";
import Nav from "./components/Header-Nav/Nav";
import { Route, Routes } from "react-router-dom";
import AllCategories from "./components/categories.jsx/AllCategories";
import ReviewCategory from "./components/categories.jsx/ReviewCategory";
import SingleReview from "./components/SingleReview/SingleReview";
import AllUsers from "./components/Users/AllUsers";
import FourOhFour from "./components/FourOhFour/FourOhFour";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<AllCategories />} />
          <Route path="/reviews" element={<AllReviews />} />
          <Route path="/reviews/:category" element={<ReviewCategory />} />
          <Route path="/users" element={<AllUsers />} />
          <Route path="/reviews/review/:review_id" element={<SingleReview />} />
          <Route path="/*" element={<FourOhFour />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
