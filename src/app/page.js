// src/app/page.js
import Home from './Home';
import Services from './Services';
import Testimonials from './Testimonials';
import Contact from './Contact'
import Footer from './Footer'

export default function Page() {
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
