import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Register from "./pages/Register"
import BookTest from "./pages/BookTest"
import DownloadReport from "./pages/DownloadReport"
import Navbar from "./components/navbar"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/book" element={<BookTest />} />
        <Route path="/download" element={<DownloadReport />} />
      </Routes>
    </Router>
  )
}

export default App
