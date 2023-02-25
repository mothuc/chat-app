import React, { useState } from "react";
import Add from "../img/addAvatar.png";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";

import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      // create User
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //create img name
      const storageRef = ref(storage, displayName);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update Profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });

            //Create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            // Create chats db
            await setDoc(doc(db, "userChats", res.user.uid), {});

            // Move to Home page affter
            navigate("/login");
            console.log("done");
          } catch (error) {
            console.log(error);
          }
        });
      });
    } catch {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="file" style={{ display: "none" }} id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          You do have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
