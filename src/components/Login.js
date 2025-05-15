import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { auth, provider } from '../firebase';

const login = () => {
  const loginInWithGoogle = () => {
    //Googleでログイン
    signInWithPopup(auth , provider).then((result) => {
      
    });
  };

  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginInWithGoogle}>Googleでログイン</button>
    </div>
  )
}

export default login