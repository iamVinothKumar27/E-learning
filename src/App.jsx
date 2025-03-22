import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/login";
import Signup from "./components/Signup";
import VideoPage from "./components/courses/VideoPage";
import Contact from "./components/Contact";
import Subscription from "./components/Subscription";
import LearningForm from "./backend/LearningForm";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/courses/:id" element={<VideoPage />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/doubts" element={<Doubts/>} />
        <Route path="/connect" element={<Connect/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/learning-form" element={<LearningForm />} />
      </Routes>
    </Router>
  );
};

const Quiz = () => {
  React.useEffect(() => {
    window.location.href = "http://127.0.0.1:5050/";
  }, []);

  return <p>Redirecting to Quiz...</p>;
};

const Summary = () => {
  React.useEffect(() => {
    window.location.href = "http://127.0.0.1:8080/";
  }, []);

  return <p>Redirecting to Summary...</p>;
};

const Connect = () => {
  React.useEffect(() => {
    window.location.href = "http://127.0.0.1:5500/";
  }, []);

  return <p>Redirecting to Meeting...</p>;
};

const Doubts = () => {
  React.useEffect(() => {
    window.location.href = "http://127.0.0.1:8000/";
  }, []);

  return <p>Redirecting to Doubts...</p>;
};


export default App;