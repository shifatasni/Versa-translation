function openWhatsApp() {
  const phoneNumber = "918590292015"; // replace with your number
  const message = "Hello, I want to know more!";
  
  const url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
  
  window.open(url, "_blank");
}





document.addEventListener("DOMContentLoaded", function() {

  const quoteBtn = document.getElementById("quoteBtn");
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("closeBtn");
  const form = document.getElementById("quoteForm");

  // Open popup
  quoteBtn.addEventListener("click", () => {
    popup.style.display = "flex";
  });

  // Close popup
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Close on outside click
  window.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });

  // ✅ WhatsApp submit
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const source = form.querySelectorAll('select')[0].value;
    const target = form.querySelectorAll('select')[1].value;
    const message = form.querySelector('textarea').value.trim();

    if (!name || !email || !source || !target || !message) {
      alert("Please fill all fields");
      return;
    }

    const text = encodeURIComponent(
`Free Translation Quote Request

Name: ${name}
Email: ${email}
Source: ${source}
Target: ${target}
Message: ${message}`
    );

    const phoneNumber = "918590292015"; // ← change this

    const url = `https://wa.me/${phoneNumber}?text=${text}`;

    // Redirect (works on desktop)
    window.location.href = url;
  });

});









document.getElementById("whatsappForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let language = document.getElementById("language").value;
    let message = document.getElementById("message").value;

    let phoneNumber = "918590292015"; // 👉 PUT YOUR REAL NUMBER

    let text = `Hello, I need translation service:

Name: ${name}
Email: ${email}
Language: ${language}
Message: ${message}`;

    let encodedText = encodeURIComponent(text);

    let url = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    window.open(url, "_blank");
});



function goTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}








function openForm() {
  document.getElementById("quoteForm").style.display = "block";
}

function closeForm() {
  document.getElementById("quoteForm").style.display = "none";
}

function sendToWhatsApp(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let language = document.getElementById("language").value;
  let message = document.getElementById("message").value;

  let phoneNumber = "918590292015"; // your WhatsApp number

  let url = "https://wa.me/" + phoneNumber + "?text="
    + encodeURIComponent(
      "Hello, I need a translation quote.\n\n"
      + "Name: " + name + "\n"
      + "Language: " + language + "\n"
      + "Message: " + message
    );

  window.open(url, "_blank");
}






function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}




