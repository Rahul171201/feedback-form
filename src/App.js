import Feedback from "./pages/feedback";
import Thankyou from "./pages/thankyou";
import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [rating, setRating] = useState(0);
  console.log(rating);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              rating ? (
                <Thankyou rating={rating}></Thankyou>
              ) : (
                <Feedback rating={rating} setRating={setRating}></Feedback>
              )
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
