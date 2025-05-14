import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBEIPw4cCvxFsfEtmWFW7ENNHvHo8az-VE",
  authDomain: "kikundi-chetu-71bd9.firebaseapp.com",
  projectId: "kikundi-chetu-71bd9",
  storageBucket: "kikundi-chetu-71bd9.appspot.com",
  messagingSenderId: "451600651066",
  appId: "1:451600651066:web:f90b57f5b382eb5d122b68",
  measurementId: "G-E19MSTQDT8"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const jina1 = document.getElementById("jinaKwanza").value;
  const jina2 = document.getElementById("jinaPili").value;
  const jina3 = document.getElementById("jinaMwisho").value;
  const simu = document.getElementById("simu").value;

  const refTaarifa = ref(database, 'watumiaji');
  push(refTaarifa, {
    jinaKwanza: jina1,
    jinaPili: jina2,
    jinaMwisho: jina3,
    simu: simu
  }).then(() => {
    document.getElementById("maelezo").innerHTML =
      `<p>Asante ${jina1} ${jina2} ${jina3}, taarifa zako zimehifadhiwa.</p>`;
  }).catch((error) => {
    document.getElementById("maelezo").innerHTML =
      `<p>Kosa: ${error.message}</p>`;
  });
});
