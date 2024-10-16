import { useState } from 'react';
import HomeScreen from "./Pages/HomeScreen.jsx"
import FrensScreen from "./Pages/FrensScreen.jsx"
import SplashScreen from "./Pages/SplashScreen.jsx"
import TaskScreen from './Pages/TaskScreen.jsx'; 
import CommentScreen from "./Pages/CommentScreen.jsx"
import ProfileScreen from "./Pages/ProfileScreen.jsx"
import  CreatePostScreen from "./Pages/CreatePost.jsx"
import {Route,Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <div>
      <Routes>
      <Route  path='/app' element={<SplashScreen/>} />
      <Route exact path='/' element={<HomeScreen/>} />
      <Route path='/tasks' element={<TaskScreen/>} />
      <Route path='/comment/:postid' element={<CommentScreen/>} />
      <Route path='/profile' element={<ProfileScreen/>} />
      <Route path='/createPost' element={<CreatePostScreen/>} />
      <Route path='/frens' element={<FrensScreen/>} />
    </Routes>
    </div>
    </>
  )
}

export default App
