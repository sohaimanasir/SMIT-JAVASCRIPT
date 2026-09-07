import { logout } from "../firebase/firebase-auth.js";

const logoutBtn = document.getElementById("signoutBtn");

logoutBtn.addEventListener("click", (e) => {
    logout();
})