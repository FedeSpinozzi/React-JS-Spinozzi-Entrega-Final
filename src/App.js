import './App.css';
import ItemListContainer from './Components/Main/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Components/Main/Cart';
import ItemDetailContainer from './Components/Main/ItemDetailContainer';
import CustomProvider from './Components/Context/CustomProvider'
import Navigation from './Components/Header/NavBar';
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = () => {

    return (
        <CustomProvider>
            <BrowserRouter>
                <Navigation />
                <Routes>
                
                    <Route
                        path="/"
                        element={
                            <ItemListContainer/>
                        }
                    />
                    <Route
                        path="/tipo/:tipoElegido"
                        element={
                            <ItemListContainer/>
                        }
                    />
                    <Route
                        path="/genero/:generoElegido"
                        element={
                            <ItemListContainer/>
                        }
                    />
                    <Route path="/detail/:id" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
                <Footer />
            </BrowserRouter>
            <ToastContainer autoClose={1000} />
        </CustomProvider>
    );
};

export default App;