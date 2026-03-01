'allowImp'
import Image from 'next/image';
import Nav from '../components/Nav/Nav';
import HomePage from './Home/Home';
import Projects from './Projects/Projects';
import About from './About/About';
import Contact from './Contact/Contact';

export default function Home() {
  return (
    <div>
      <main>
        <Nav />
        <HomePage />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
