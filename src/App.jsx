import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
import MeetingSchedule from "./components/MeetingSchedule";
const App = () => {
  return (
    <Router>
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} /> 
          <Route path="/signup" element={<SignUp />} />
          <Route path="/meeting" element={<MeetingSchedule />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
