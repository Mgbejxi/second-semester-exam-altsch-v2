import React from 'react';
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./Components/NotFound";
import Contact from "./Components/contact";
import Counter from "./Components/counter";
import Countert from "./Components/countert";
import "./style.css";


// const handleResetCounter = () => {
//   dispatch({ type: "resetCounter" });
// };

export default function App() {
  return (
    <div>
      <ErrorBoundary>
        <main className="main">
         <Router>
            <Routes>
              <Route path="/" element={<Counter />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/countert" element={<Countert />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
         </Router>
       </main>
     </ErrorBoundary>
    </div>
  );
}
