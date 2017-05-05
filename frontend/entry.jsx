import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Weather from './weather';

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <section>
      <Clock />
      <Weather />
    </section>
    , document.getElementById('root'));

});
