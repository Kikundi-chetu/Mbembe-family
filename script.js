document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault(); // zuia kurasa kujireload

  const jina = document.getElementById("jina").value;
  const email = document.getElementById("email").value;

  document.getElementById("maelezo").innerHTML =
    `<p>Asante ${jina}, umejiunga kwa email: ${email}</p>`;

  // Hapa unaweza kuongeza sehemu ya kutuma taarifa kwa database kama Firebase au PHP
});
