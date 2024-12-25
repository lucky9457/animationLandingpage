"use client";
import { useEffect } from 'react';
import dynamic from 'next/dynamic'; // Import dynamic for client-side rendering
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import './page.css';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), { ssr: false }); // Dynamic import

export default function Page({ darkMode }) {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible'); // Optional: remove when out of view
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the section is visible
        );

        const sections = document.querySelectorAll('section');
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <div>
            {/* Include the AnimatedCursor component */}
            <AnimatedCursor
                innerSize={10}
                outerSize={20}
                color="255, 0,0 "
                outerAlpha={0.4}
                innerScale={1.7}
                outerScale={5}
                trailingSpeed={5}
                clickables={[
                    'a', 'button', 'textarea', 'select', 'label',
                    'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
                    'p', 'img', 'svg', 'span',
                    'li', 'thead', 'tbody', 'tfoot', 'tr', 'td', 'th', 'ul'
                ]}
                outerStyle={{
                    mixBlendMode: 'exclusion'
                }}
            />

            <section id="home">
                <Home />
            </section>
            <section id="services">
                <Services />
            </section>
            <section id="testimonials">
                <Testimonials />
            </section>
            <section id="footer">
                <Footer />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    );
}
