import { MainPage } from "./pages/main/index.jsx";
import {Link, Route, Routes} from "react-router-dom";
import {InfoPage} from "./pages/info/index.jsx";

const App = () => {

  return (
    <main>
        <nav className='navigation'>
            <Link to='/' children='Главная'/>
            <Link to='/info' children='Информация'/>
        </nav>
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/info' element={<InfoPage/>}/>
        </Routes>
    </main>
  );
};

export default App;
