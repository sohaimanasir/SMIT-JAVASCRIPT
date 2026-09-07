import { db , collection , addDoc } from "../firebase/firebase-firestore.js";

  const quill = new Quill('#editor', {
    theme: 'snow'
  });

const blogForm = document.getElementById("blogForm");

blogForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const category = document.querySelector(
    'input[name="category"]:checked',
  ).value;
  const content = quill.root.innerHTML;

  const docRef = await addDoc(collection(db, "blogs"), {
  title: title,
  category: category,
  content: content
});
alert("Blog published successfully ✓");
blogForm.reset();
});
