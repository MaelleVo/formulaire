const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  console.log("Page fully upload");
});

$.querySelector("#formulaire").addEventListener("submit", async (event) => {
  event.preventDefault();

  const response = await axios.post("", {
    firstname: $.querySelector("#firstname").value,
    lastname: $.querySelector("#lastname").value,
    email: $.querySelector("#email").value,
    message: $.querySelector("#message").value,
    subject: $.querySelector("#subject").value,
  });
  console.log(response.data);
  alert("Votre message à été envoyé");
});
