import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";

import { app } from "./firebase-config.js";

const auth = getAuth(app);

const signup = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      window.location.href = "../blogpage/blogpage.html"

      console.log("succss");

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);

      // ..
    });
};

export { signup };

// export function loginUser(email, password) {
//     return signInWithEmailAndPassword(auth, email, password);
// }

const login = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      window.location.href = "../blogpage/blogpage.html"
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

export {login}

const logout = () => {
 signOut(auth).then(() => {
  // Sign-out successful.
  console.log("signout succsesuull");
  
  window.location.href = "../login/login.html"
}).catch((error) => {
  // An error happened.
  console.log(error);
  
});
}

export {logout}

