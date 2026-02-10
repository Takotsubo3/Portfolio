import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
  return (
    <section className="contact-container">
      <h1 className="contact-title">Contact Info</h1>
      <h3 className="contact-sub-title">
        Drop me a message and let’s build something cool together.
      </h3>
      <div className="contact-list">
        <div className="contact-item">
          <Image src="/email.png" height={64} width={64} />
          <p>Email</p>
          <Link href="mailto:claire.lentete@outlook.com">
            claire.lentete@outlook.com
          </Link>
        </div>
        <div className="contact-item">
          <Image src="/linkedin.png" height={64} width={64} />
          <p>LinkedIn</p>
          <Link href="https://www.linkedin.com/in/celena-lentete/">
            Céléna L&apos;Entété
          </Link>
        </div>
        <div className="contact-item">
          <Image src="/github.png" height={64} width={64} />
          <p>GitHub</p>
          <Link href="https://github.com/Takotsubo3/">Takotsubo3</Link>
        </div>
      </div>
      <footer className="footer">
        <form className="contact-form">
          <div className="col-1">
            <label>
              Name
              <input type="text" required />
            </label>
            <label>
              Email
              <input type="email" required />
            </label>
          </div>
          <div className="col-2">
            <label>
              Message
              <textarea  required/>
            </label>
            <input type="submit" />
          </div>
        </form>
      </footer>
    </section>
  );
}
