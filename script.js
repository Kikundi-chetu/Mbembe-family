document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault(); // zuia kurasa kujireload

  const jina1 = document.getElementById("jinaKwanza").value;
  const jina2 = document.getElementById("jinaPili").value;
  const jina3 = document.getElementById("jinaMwisho").value;
  const simu = document.getElementById("simu").value;

  document.getElementById("maelezo").innerHTML =
    `<p>Asante ${jina1} ${jina2} ${jina3}, umejiunga kwa namba ya simu: ${simu}</p>`;
});
