import './style.scss'
import Header from './Components/Header';
import Main from './Components/MainPages/Main';
import InfoCoin from './Components/InfoCoinPage/InfoCoin';
import { BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="wrapper">
     <BrowserRouter> 
       <Header/>
          <Routes>  
            <Route path='/*' element={<Main/>}></Route>
            <Route path='/info' element={<InfoCoin/>}></Route>
          </Routes>    
     </BrowserRouter>
    </div>
  );
}

export default App;
