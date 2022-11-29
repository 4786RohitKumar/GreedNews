
import React from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { useState } from "react";
import LoadingBar from 'react-top-loading-bar'

function App() {
  const [progress, setProgress] = useState(10)

  return (
    <div>
     <BrowserRouter basename="/react-dummy">
      <Navbar/>
      <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />

      <Routes>

      <Route exact path='/react-dummy' element={<News key="general" category="general" setProgress={setProgress}  country="in" pageSize={20}/>}/>
      <Route exact path='/business' element={<News key="business" category="business" setProgress={setProgress} country="in" pageSize={20}/>}/>
      <Route exact path='/entertainment' element={<News key="entertainment" setProgress={setProgress} category="entertainment" country="in" pageSize={20}/>}/>
      <Route exact path='/general' element={<News key="general" category="general" setProgress={setProgress} country="in" pageSize={20}/>}/>
      <Route exact path='/health' element={<News key="health" category="health" setProgress={setProgress} country="in" pageSize={20}/>}/>
      <Route exact path='/science' element={<News key="science" category="science" setProgress={setProgress} country="in" pageSize={20}/>}/>
      <Route exact path='/sports' element={<News key="sports" category="sports" setProgress={setProgress} country="in" pageSize={20}/>}/>
      <Route exact path='/technology' element={<News key="technology" category="technology" setProgress={setProgress} country="in" pageSize={20}/>}/>
      


      </Routes>
  
      
      </BrowserRouter>
    </div>
  );
}

export default App;
