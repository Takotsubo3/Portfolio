"use client";
import Image from 'next/image';

export default function About() {
  return (
    <section className="about-container">
      <h1 className="about-title">About Me</h1>
      <div className="card-container">
        <div className="left-span">
          <Image className='profile' src="/me.jpeg" height={350} width={350} alt="celena lentete" />
        </div>
        <div className="vertical-line"></div>
        <div className="right-span">
          <h2 className="card-title">HI, I&apos;M CELENA</h2>
          <p className="card-description">
            Lorem ipsum dolor sit amet. Est galisum fugiat non similique illum
            33 voluptas autem ut nobis sint vel omnis quas rem voluptatem porro.
            Est quia recusandae id modi soluta quo tempore corporis eos sunt
            iste.
            <br /><br />
            Est perferendis unde qui ullam omnis et ratione dolores sit
            nesciunt Quis non tenetur totam et quasi sint qui quisquam nemo! Ut
            aspernatur doloremque sed mollitia velit aut dolorem nostrum? Eos
            omnis optio et rerum corporis rem inventore placeat quo atque
            placeat eos culpa saepe et architecto beatae in autem veritatis. 
           <br /><br />
            Qui
            Quis porro est rerum molestias et consequatur vitae id animi
            perferendis est dolores porro et voluptas deleniti et enim iusto. Ad
            reprehenderit voluptas eum alias nihil non nulla sint.
          </p>
        </div>
      </div>
      <div className="pop-up-btns">
        <button className='pop-up-btn'>CV</button>
        <button className='pop-up-btn'>HardSkills</button>
        <button className='pop-up-btn'>SoftSkills</button>
      </div>
    </section>
  );
}
