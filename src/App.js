import "bootstrap/dist/css/bootstrap.min.css";
import "./styling/colors.css";
import {Route, Routes} from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import RegisterPage from "./pages/RegisterPage";
import BookingPage from "./pages/BookingPage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import Footer from "./components/Footer";


export default function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route exact path="/" element={<LoginPage/>}/>
                <Route exact path="/book" element={<BookingPage/>}/>
                <Route exact path="/admin" element={<AdminPage/>}/>
                <Route exact path="/register" element={<RegisterPage/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

