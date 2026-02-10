import Image from 'next/image';
import Button from '../../components/Button/Button';
import { FaArrowDown } from 'react-icons/fa';

export default function About() {
  return (
    <section className="about-container">
      <h1 className="about-title">About Me</h1>
      <div className="card">
        HI, I&apos;M CELENA
        <div className="card-content">
          <p className="card-title">HI, I&apos;M CELENA :')</p>
          <p className="card-description">
            {''}
            I’m a developer student driven by curiosity and creativity. I enjoy
            exploring ideas, turning concepts into experiences, and learning by
            building. Always eager to improve, I see every project as a new
            challenge and every mistake as a step forward.
          </p>
        </div>
      </div>
      <div className="stack-container">
        <div className="track">
          <ul className="stack-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>SCSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>PHP</li>
            <li>SQL</li>
            <li>Bash</li>
            <li>NodeJS</li>
            <li>React</li>
            <li>Tailwind</li>
            <li>Symfony</li>
            <li>SpringBoot</li>
            <li>Nunjucks</li>
            <li>MySQL</li>
            <li>JAVA</li>
            <li>VB.NET</li>
          </ul>
          <ul aria-hidden className="stack-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>SCSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>PHP</li>
            <li>SQL</li>
            <li>Bash</li>
            <li>NodeJS</li>
            <li>React</li>
            <li>Tailwind</li>
            <li>Symfony</li>
            <li>SpringBoot</li>
            <li>Nunjucks</li>
            <li>MySQL</li>
            <li>JAVA</li>
            <li>VB.NET</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
