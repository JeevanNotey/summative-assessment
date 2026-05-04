function generateMessage() {
    const name = document.getElementById("nameInput").value.trim();
    const role = document.getElementById("roleSelect").value;
    const output = document.getElementById("output");
  
    if (name === "") {
      output.innerHTML = "<strong>Please enter your name first.</strong>";
      output.classList.remove("hidden");
      return;
    }
  
    const now = new Date().toLocaleString();
  
    output.innerHTML = `
      <h2>Hello, ${name}!</h2>
      <p>You selected the role: <strong>${role}</strong>.</p>
      <p>This application demonstrates a small interactive feature deployed through an automated DevOps pipeline.</p>
      <p><strong>Deployment checked at:</strong> ${now}</p>
    `;
  
    output.classList.remove("hidden");
  }
  
  function toggleTheme() {
    document.body.classList.toggle("dark");
  }