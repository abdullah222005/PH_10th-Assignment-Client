import { Outlet } from 'react-router';
import Navbar from './../components/Navbar/Navbar';
import Footer from './../components/Footer/Footer';
import AuthProvider from '../Auth/AuthProvider';


const Root = () => {

  
    return (
        <AuthProvider>
            <Navbar />
            <Outlet />
            <Footer /> 
        </AuthProvider>
    );
};

export default Root;