import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostLarge from './components/postLarge';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<App />} />
          <Route path='/posts/:id' element={<PostLarge />} />
      </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);