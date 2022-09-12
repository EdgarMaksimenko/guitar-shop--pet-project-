import {Routes, Route, Navigate} from 'react-router-dom';
import Header from './components/Header/Header';
import ShopPage from './pages/ShopPage/ShopPage'
import About from './pages/About/About';
import Cart from './components/Cart/Cart';
import NotFound from './components/NotFound/NotFound';
import Guitar from './components/Guitar/Guitar';

function App() {

  return (
   <div className="body-wrapper">
      <Header/>
      <Cart/>
      <div className="container">
        <Routes>
          <Route path ="/" exact={true} element={<ShopPage/>}/>
          <Route path ="/about" exact={true} element={<About/>}/>
          <Route path ="/guitar/:id" exact={true} element={<Guitar/>}/>
          <Route path="*" element={<Navigate to="/404" />} />
          <Route path ="/404" element={<NotFound/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;



