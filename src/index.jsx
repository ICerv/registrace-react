import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { useState } from 'react';

const App = () => {
  const [userName, setUserName] = useState('')
  const [isUserNameEmpty, setIsUserNameEmpty] = useState(true);
  const [country, setCountry] = useState('Česká republika')
  const [newsletterAccepted, setNewsletterAccepted] = useState(false)



  const handleSubmit = (event) => {
    event.preventDefault();
    const newsletterText = newsletterAccepted ? 'a dostávat pravidelně novinky' : 'a o novinky nemá zájem';
    alert(`Uživatelské jméno: ${userName} ze země ${country} se chce zaregistrovat ${newsletterText}`)
  };

  const handleNameChange = (event) => {
    const { value } = event.target;
    setUserName(value)
    setIsUserNameEmpty(value === '');
    setCountry()
  }

  const handleCountryChange = (event) => {
    const { value } = event.target
    setCountry(value)
  }

  const handleNewsletterChange = (event) => {
    const { checked } = event.target;
    setNewsletterAccepted(checked)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Uživatelské jméno:
        <input value={userName} onChange={handleNameChange} type="text" />
      </label>
      {isUserNameEmpty && <div>Uživatelské jméno je povinný údaj</div>}
      <label>
        Země původu:
        <select value={country} onChange={handleCountryChange}>
          <option value="Chorvatsko">Chorvatsko</option>
          <option value="Česká republika">Česká republika</option>
          <option value="Polsko">Polsko</option>
          <option value="Slovenská republika">Slovenská republika</option>
        </select>
      </label>
      <label>
        <input type="checkbox" checked={newsletterAccepted} onChange={handleNewsletterChange} />
        Chci pravidelně dostávat novinky do mé e-mailové schránky.
      </label>


      <button type="submit" disabled={isUserNameEmpty}>Registrovat</button>
    </form>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
