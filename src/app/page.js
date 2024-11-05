// src/app/page.js
import Home from '../Pages/Home';
import Services from '../Pages/Services';
import Testimonials from '..//Pages/Testimonials';
import Contact from '../Pages/Contact'

export default function Page() {
    return (
        <div>
                <Home />
                <Services />
                <Testimonials />
                <Contact />
        </div>
    );
}
