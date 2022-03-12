import React from "react";
export function Welcome({
  logo
}) {
  return <header className="App-header">
        <span className="fade-in-top">
          <img src={logo} className="App-logo" alt="logo" style={{
        width: 625,
        height: 500
      }} />
        </span>
        <p className="fade-in-left" style={{
      'animation-delay': "300ms"
    }}>
            Time to build.
        </p>
        <a className="App-link fade-in-right" style={{
      'animation-delay': "600ms"
    }} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <a className="App-link fade-in-left" style={{
      'animation-delay': "600ms"
    }} href="https://reactrouter.com/docs/en" target="_blank" rel="noopener noreferrer">
          Learn React Router
        </a>
        <a className="App-link fade-in-right" style={{
      'animation-delay': "600ms"
    }} href="https://mui.com/getting-started/usage/" target="_blank" rel="noopener noreferrer">
          Learn Material UI
        </a>
        <a className="App-link fade-in-left" style={{
      'animation-delay': "600ms"
    }} href="https://firebase.google.com/docs" target="_blank" rel="noopener noreferrer">
          Learn Firebase
        </a>
      </header>;
}
  