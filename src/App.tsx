import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Footer from './components/Footer/Footer'
// import Navbar from './components/Navbar/Navbar'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import News from './pages/News/News';
import Projects from './pages/Projects/Projects';
import Spotlight from './pages/Spotlight/Spotlight';
import Vacation from './pages/Vacation/Vacation';
import Contacts from './pages/Contacts/Contacts';
import Project from './pages/Project/Project';

const App: React.FC = () => {
  
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project" element={<Project />} />
          <Route path="/spotlight" element={<Spotlight />} />
          <Route path="/vacation" element={<Vacation />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
