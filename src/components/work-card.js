import React, { useEffect, useState } from 'react';

export default function Card({ 
  card: {
    name,
    url,
    text,
    icon: Icon
  }, 
  index 
}) {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => setTimeout(() => setIsVisible(true), 300 + 125 * index), [])

  return (
    <a
      aria-label={name}
      href={url}
      className={`card cardWork ${isVisible && 'fadeInLeft'}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h3>{name}</h3>
      <p>{text}</p>
      <div className="tab">
        <Icon />
      </div>
    </a>
  );
}
