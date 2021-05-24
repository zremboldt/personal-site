import React, { useState } from 'react';
import IconEmail from '../images/icon-email';
import { useClipboard } from 'use-clipboard-copy';

export default function ContactCard({ socialData }) {
  const [isCopied, setIsCopied] = useState(false)
  const clipboard = useClipboard();

  const handleCopy = () => {
    clipboard.copy('zremboldt@gmail.com');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3500);
  }

  return (
    <>
      <div className="ctr-Text">
        <h3>Say Hi :)</h3>
        <p>I'm available for remote projects. If you’d like to build something together, get in touch.</p>
      </div>

      <div className="email btn" onClick={handleCopy}>
        <div className={`txt-address ${isCopied ? 'address-active' : ''}`}>
          <IconEmail />
          <p>zremboldt@gmail.com</p>
        </div>
        <div className={`txt-copied ${isCopied ? 'copied-active' : ''}`}>
          <p>Address copied.</p>
          <p>Can't wait to hear from you!</p>
        </div>
      </div>

      <div className="social">
        {socialData.map(({ label, href, icon: Icon }, i) => (
          <a
            aria-label={label}
            href={href}
            key={i}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon />
          </a>
        ))}
      </div>
    </>
  );
}
