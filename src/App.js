import React, {useState} from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from "./components/home";
import Profile from "./components/about";
import Projects from './components/project';
import ProjectInfo from './components/projectInfo';

const w=document.documentElement.clientWidth

const App=()=> {
  const [page, setPage]=useState("p1")
  const [changeset, setchange]=useState(0)
  const location=useLocation()
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.key}>
        <Route 
          path="/"
          element={<Home />}
        />
        <Route
          path="/profile"
          element={<Profile w={w} changeset={changeset} setchange={setchange}/>}
        />
        <Route
          path="/projects"
          element={<Projects w={w} setPage={setPage} changeset={changeset} setchange={setchange}/>}
        />
        <Route
          path="/projectinfo"
          element={<ProjectInfo w={w} page={page} setPage={setPage} changeset={changeset} setchange={setchange}/>}
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
