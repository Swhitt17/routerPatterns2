import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Colors from './Colors';
import ColorFill from './ColorFill';
import NewColorForm from './NewColorForm';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
          <Route path='/colors' element={<Colors />} />
          <Route path='/colors/:color' element={<ColorFill />} />
          <Route path='/colors/new' element={<NewColorForm />} />
         </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
