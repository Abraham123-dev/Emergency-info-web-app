const guides = [
  {
    icon: "❤️",
    title: "CPR (Cardiopulmonary Resuscitation)",
    category: "Medical Emergency",
    steps: [
      "Check if the person is responsive by tapping their shoulder and shouting.",
      "Call emergency services immediately.",
      "Place the person on their back on a firm surface.",
      "Place your hands on the center of the chest.",
      "Push hard and fast (100–120 compressions per minute).",
      "Give 30 compressions, then 2 rescue breaths if trained.",
      "Continue until help arrives or they start breathing.",
    ],
  },
  {
    icon: "🔥",
    title: "Fire Emergency",
    category: "Fire Safety",
    steps: [
      "Alert everyone immediately.",
      "Call emergency services.",
      "Use extinguisher if safe, else evacuate.",
      "Stay low to avoid smoke.",
      "Never re-enter a burning building.",
    ],
  },
  {
    icon: "🌪️",
    title: "Severe Weather (Tornado)",
    category: "Natural Disaster",
    steps: [
      "Go to a basement or interior room.",
      "Stay away from windows.",
      "Get under sturdy furniture.",
      "Cover your head.",
      "Wait for the all-clear before emerging.",
    ],
  },
  {
    icon: "🩹",
    title: "Severe Bleeding",
    category: "First Aid",
    steps: [
      "Call emergency services.",
      "Apply direct pressure to the wound.",
      "Keep the injured area elevated.",
      "Do not remove embedded objects.",
      "Add layers if blood soaks through.",
    ],
  },
];

const container = document.getElementById("guides-list");

guides.forEach((guide, index) => {
  const card = document.createElement("div");
  card.className = "guide";

  card.innerHTML = `
    <div class="guide-header" onclick="toggleSteps(${index})">
      <div class="guide-info">
        <span class="icon">${guide.icon}</span>
        <div>
          <h3>${guide.title}</h3>
          <p class="category">${guide.category}</p>
        </div>
      </div>
      <div class="arrow" id="arrow-${index}">⌄</div>
    </div>
    <div class="steps" id="steps-${index}">
      <ol>${guide.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
    </div>
  `;

  container.appendChild(card);

  setTimeout(() => {
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, index * 100);
});

function toggleSteps(i) {
  const steps = document.getElementById(`steps-${i}`);
  const arrow = document.getElementById(`arrow-${i}`);
  const isOpen = steps.style.display === "block";

  if (isOpen) {
    steps.style.display = "none";
    arrow.style.transform = "rotate(0deg)";
    arrow.classList.remove("rotate");
  } else {
    steps.style.display = "block";
    arrow.classList.add("rotate");
  }
}

const button = document.querySelector(".back-btn");
button.addEventListener("click", () => {
  window.location.href = "index.html";
});


const contactForm = document.querySelector("#contactForm");

function saveContact(e) {
  e.preventDefault();

  const emergencyContactName = document.querySelector("#name").value;
  const emergencyContactPhone = document.querySelector("#phone").value;
  const emergencyContactCategory = document.querySelector("#category").value;
  const emergencyContactNote = document.querySelector("#note").value;

  const contact = {
    name: emergencyContactName,
    phone: emergencyContactPhone,
    category: emergencyContactCategory,
    note: emergencyContactNote,
  };

  
  let contacts = JSON.parse(localStorage.getItem("emergencyContacts")) || [];

  contacts.push(contact);


  localStorage.setItem("emergencyContacts", JSON.stringify(contacts));

  console.log("Contact saved:", contact);
  console.log("All contacts:", contacts);

  
  const toast = document.querySelector("toast");
  toast.classList.add("show");

  setTimeout(() => {
    location.href = "emergency-contacts.html"
    }, 2000);
}

