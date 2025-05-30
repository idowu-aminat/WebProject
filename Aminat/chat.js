function sendMessage() {
  const input = document.getElementById('user-input');
  const message = input.value.trim();

  if (message === "") return;

  const chatBox = document.getElementById('chat-box');

  // Add user message
  const userMsg = document.createElement('div');
  userMsg.className = 'message user';
  userMsg.innerText = message;
  chatBox.appendChild(userMsg);

  input.value = "";

  // Simulate bot response
  setTimeout(() => {
    const botMsg = document.createElement('div');
    botMsg.className = 'message bot';
    botMsg.innerText = "Thanks for your message! We'll get back to you soon.";
    chatBox.appendChild(botMsg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 1000);
}
