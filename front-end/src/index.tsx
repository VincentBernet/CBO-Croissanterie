import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainCardContainer from './components/MainCardContainer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const MockTeamMembers: string[] =
  ["Vincent", "Kevin", "Jean", "Jean-Christophe", "Hakima", "Aya", "Virgil", "Stéphane", "Wendy", "Oum", "Jeremy", "Claudia"]
  ;

root.render(
  <React.StrictMode>
    <MainCardContainer TeamMembers={MockTeamMembers} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
