// src/app/page.js
import Home from './Home';
import Services from './Services';
import Testimonials from './Testimonials';
import Contact from './Contact'
import Footer from './Footer'
import Cursor from './Cursor';

export default function Page({darkMode}) {
    return (
        
        <div>
           
                <Home />
                <Services />
                <Testimonials />
                <Footer />
                <Contact />
        </div>
    );
}
