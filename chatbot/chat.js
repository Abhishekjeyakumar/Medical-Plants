async function askAI() {
  const userInput = document.getElementById("userInput").value;
  const responseDiv = document.getElementById("response");
  responseDiv.innerText = "Thinking...";

  try {
    const res = await fetch("/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userInput })
    });
    const data = await res.json();
    if (data.reply) {
      responseDiv.innerText = data.reply;
    } else {
      responseDiv.innerText = "Error: " + (data.error || "No reply");
    }
  } catch (err) {
    console.error(err);
    responseDiv.innerText = "Fetch error: " + err.message;
  }
}
