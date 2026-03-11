async function askAI() {
  const userMessage = document.getElementById('userInput').value;
  const responseDiv = document.getElementById('response');

  responseDiv.innerHTML = "Thinking...";


  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "user", content: userMessage }
      ]
    })
  });

  const data = await response.json();
  const aiReply = data.choices[0].message.content;
  responseDiv.innerHTML = aiReply;
}
