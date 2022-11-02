import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Blog from "./Blog";
import BlogDetails from "./BlogDetails";
import Home from "./Home";
import JobDetails from "./JobDetails";
import JobListing from "./JobListing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/job_listing" element={<JobListing />}></Route>
        <Route path="/job_details" element={<JobDetails />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/blog_details" element={<BlogDetails />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
