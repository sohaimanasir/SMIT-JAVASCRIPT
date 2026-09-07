import { getFirestore, collection, addDoc , getDocs } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";

import { app } from "./firebase-config.js";

const db = getFirestore(app);

export { db , collection , addDoc , getDocs };