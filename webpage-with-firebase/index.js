import { db, collection, getDocs } from "./firebase/firebase-firestore.js";

const blogContainer = document.getElementById("blogsContainer");

const blogSnap = await getDocs(collection(db, "blogs"));

blogSnap.forEach((doc) => {
  const blog = doc.data();

  const blogCard = document.createElement("div");

  blogCard.innerHTML = `
   <h2>${blog.title}</h2>
   <p>${blog.category}</p>
   <div>${blog.content}</div>
   `
   ;

   blogContainer.append(blogCard);
});


