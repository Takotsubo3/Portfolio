import Image from 'next/image';
import Button from '../../components/Button/Button';
import { FaArrowDown } from 'react-icons/fa';

export default function About() {
  return (
    <div className="about-container">
      <div className="about-sub-container">
        <div className="about-sub-sub-container">
          <div className="left-span">
            <Image src="/Me2.png" height={500} width={500}></Image>
          </div>
          <div className="right-span">
            <h3 className="about-title">Hi, I&apos;m Céléna</h3>
            <p className="about-me">
              I’m a developer student driven by curiosity and creativity. I
              enjoy exploring ideas, turning concepts into experiences, and
              learning by building. Always eager to improve, I see every project
              as a new challenge and every mistake as a step forward.
            </p>
            <div className="stack-container">
              <div className="stack-list">
                <Button>
                  <FaArrowDown />
                </Button>
                <ul className="stack-items">
                  <li>React</li>
                  <li>Typescript</li>
                  <li>Node Js</li>
                  <li>Tailwind</li>
                  <li>Symfony</li>
                  <li>Spring Boot</li>
                  <li>Java</li>
                  <li>VB.NET</li>
                  <li>Python</li>
                  <li>Javascript</li>
                  <li>Typescript</li>
                </ul>
                <Button>
                  <FaArrowDown />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
