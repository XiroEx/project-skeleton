import { useState } from 'react'
import { Welcome } from './Pages/Welcome';
import Nav from './Components/Nav'
import './App.css';
import {  createTheme, ThemeProvider, Box, Grid, useMediaQuery, useTheme,
  Backdrop, Button, CircularProgress, CssBaseline } from '@mui/material'
import { Routes, Route, } from "react-router-dom"

import { initializeApp } from "firebase/app"
import { getFirestore, collection, doc, setDoc, getDoc, getDocs, updateDoc } from "firebase/firestore"
import { getAuth, GoogleAuthProvider, signInWithRedirect, signOut, 
  sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink, signInWithCustomToken  } from 'firebase/auth'
import logo from './logo.svg'
import Theme from './utilities/theme'
import firebaseConfig from './utilities/firebaseconfig'

const app = initializeApp(firebaseConfig)
const auth = getAuth()
const db = getFirestore()
const url = process.env.REACT_APP_API_URL
const theme = createTheme(Theme)


const signInWithMagicLink = async (email) => {
  if (validateEmail) {
    const verify = await verifyEmail(email)
    if (verify.created) {
      alert(`No account found for ${email}, account creation link sent`)
    } else {
      alert('Sign In Email Sent')
    }
    window.location.href =`https://${email.substring(email.indexOf("@")+1, email.length)}`
  } else {
    alert('Email format invalid.')
  }
}

const signInWithWallet = (token) => {
  signInWithCustomToken(auth, token)
}

if (window.location.pathname.split("/")[1] == 'login') {
  let token = window.location.pathname.split("/")[2]
  console.log('sign in')
  signInWithCustomToken(auth, token)
}


function App() {

  const [state, setState] = useState({
    bigmenu: localStorage.getItem('bigmenu') == 'false' ? false : true,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
    }

    if (anchor == 'bigmenu')
      localStorage.setItem('bigmenu', open)

    setState({ ...state, [anchor]: open })
  } 
  return ( 
    <ThemeProvider theme={theme}>
    <div className="App">
      <Nav toggleDrawer={toggleDrawer} data={state} />
      <Routes>
        <Route path="/" element ={ <Welcome logo={logo} />} />
      </Routes>
    </div>

    </ThemeProvider>
  )
}

export default App;


function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

async function getAuthToken(headers) {
  const response = await fetch(url+'getAuthToken', {
    method:'POST',
    headers: headers,
  })
  return response.json()
}

async function verifyEmail (email, wallet) {
  const response = await fetch(url+'verifyEmail', {
    method:'POST',
    headers: {
      email: email,
      wallet: wallet,
    }
  })
  return response.json()
}
