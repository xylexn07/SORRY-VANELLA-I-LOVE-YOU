const messages = [
    "I’m so sorry for hurting you.",
    "Please forgive me, love.",
    "You're my first girlfriend, and I'm still learning.",
    "I never meant to make you feel alone.",
    "I’ve made mistakes, and I hate that I hurt you.",
    "Please let me explain. I care so much about you.",
    "This is not just about being a boyfriend. I want to be better for you.",
    "People may not understand us, but I do."
  ];
  
  let tapCount = 0;
  const button = document.getElementById('heartButton');
  const messageDiv = document.getElementById('message');
  
  button.addEventListener('click', () => {
    tapCount++;
  
    if (tapCount <= messages.length) {
      messageDiv.textContent = messages[tapCount - 1];
    } else {
      messageDiv.innerHTML = `
        <strong>Vanella...</strong><br><br>
        I'm sorry for telling Grace.<br>
        I'm sorry for how I handled everything.<br>
        I'm sorry for being a big idiot and making it about myself.<br>
        I'm sorry I wasn’t a better person, not just a better boyfriend.<br><br>
  
        I’m truly, deeply sorry. I promise you I never meant it. I really didn’t.<br>
        People won’t understand us. They just can’t. We’re different, and that’s okay.<br>
        Please take me back. I won’t ever do something like that again. I promise you.<br><br>
  
        If I ever fail again, I’ll understand if you choose to walk away.<br>
        But I understand things better now. I see what I’ve done.<br><br>
  
        Let’s talk, just you and me. No Nicole, no Grace. Just us.<br>
        I'm sorry, Vanella. Please.
      `;
      button.style.display = "none";
    }
  });
  