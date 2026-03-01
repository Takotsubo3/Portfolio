"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/app/context/LanguageContext';


export default function Contact() {
  const { t, setLang, lang } = useTranslation();

  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsPending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("Error: " + (data.error?.message || "Something went wrong"));
      }
    } catch (err) {
      alert("Network error. Please try again.");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <section id="contact" className="contact-container">
      <h1 className="contact-title">{t('contact.title')}</h1>
      <h3 className="contact-sub-title">
        {t('contact.subtitle')}
      </h3>

      <div className="contact-list">
        <div className="contact-item">
          <Image src="/email.png" height={64} width={64} alt='email logo'/>
          <p>Email</p>
          <Link href="mailto:claire.lentete@outlook.com">
            claire.lentete@outlook.com
          </Link>
        </div>

        <div className="contact-item">
          <Image src="/linkedin.png" height={64} width={64} alt='linkedin logo'/>
          <p>LinkedIn</p>
          <Link href="https://www.linkedin.com/in/celena-lentete/">
            Céléna L&apos;Entété
          </Link>
        </div>

        <div className="contact-item">
          <Image src="/github.png" height={64} width={64} alt='github logo'/>
          <p>GitHub</p>
          <Link href="https://github.com/Takotsubo3/">Takotsubo3</Link>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-info">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="col-1">
              <label>
                {t('contact.form.name')}
                <input name="name" type="text" required disabled={isPending} />
              </label>

              <label>
                {t('contact.form.email')}
                <input name="email" type="email" required disabled={isPending} />
              </label>
            </div>

            <div className="col-2">
              <label>
                {t('contact.form.message')}
                <textarea name="message" required disabled={isPending} />
              </label>

              <button type="submit" disabled={isPending} style={{ opacity: isPending ? 0.5 : 1 }}>
                {isPending ? t('contact.form.sending') : t('contact.form.submit')}
              </button>
            </div>
          </form>

          <div className="footer-text">
            <h2 className="footer-title">{t('contact.footer.madeWith')}</h2>
            <ul>
              <li><Image src="/physics.png" width={32} height={32} alt='react logo'/> React</li>
              <li><Image src="/typescript.png" width={32} height={32} alt='ts logo'/> Typescript</li>
              <li><Image src="/file.png" width={32} height={32} alt='scss logo'/> Scss</li>
            </ul>
          </div>
        </div>

        <p className='copyright'>{t('contact.footer.copyright')}</p> 
      </footer>
    </section>
  );
}