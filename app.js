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

// Render guides only on pages that have the guides list container
if (container) {
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
}

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
if (button) {
  button.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}


// // --- Contacts: load, render and save ---
// const STORAGE_KEY = "emergencyContacts";

// // Load contacts from localStorage (or start with empty array)
// let contacts = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

// // Utility: update the counter element (if present)
// function updateCounter() {
//   const counterEl = document.getElementById("counter");
//   const headerCount = document.getElementById('contact count') || document.querySelector('.header p');
//   const count = contacts.length;
//   if (counterEl) {
//     counterEl.textContent = count === 0 ? "No Contacts Yet" : `${count} contact${count > 1 ? "s" : ""}`;
//   }
//   // Also update header paragraph if present
//   if (headerCount) {
//     headerCount.textContent = `${count} contact${count !== 1 ? "s" : ""} saved`;
//   }
// }

// // Render contacts list on emergency-contacts page
// function renderContacts() {
//   const list = document.getElementById("contacts-list");
//   if (!list) return;
//   list.innerHTML = "";
//   if (contacts.length === 0) {
//     list.innerHTML = ""; // empty
//     return;
//   }

//   contacts.forEach((c, i) => {
//     const card = document.createElement('div');
//     card.className = 'contact-card';
//     card.innerHTML = `
//       <div class="contact-info">
//         <h3>${c.name}</h3>
//         <p>${c.phone}</p>
//         <p style="color:#6b7280; font-size:0.9rem">${c.category || ''}</p>
//       </div>
//       <div>
//         <button class="call-btn" onclick="window.location.href='tel:${c.phone}'">Call</button>
//       </div>
//     `;
//     list.appendChild(card);
//   });
// }

// // Save contact (used by add-contact page)
// const contactForm = document.querySelector("#contactForm");
// if (contactForm) {
//   contactForm.addEventListener('submit', function saveContact(e) {
//     e.preventDefault();
//     const emergencyContactName = document.querySelector("#name").value;
//     const emergencyContactPhone = document.querySelector("#phone").value;
//     const emergencyContactCategory = document.querySelector("#category").value;
//     const emergencyContactNote = document.querySelector("#note").value;

//     const contact = {
//       name: emergencyContactName,
//       phone: emergencyContactPhone,
//       category: emergencyContactCategory,
//       note: emergencyContactNote,
//     };

//     contacts.push(contact);
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));

//     // show toast if present
//     const toast = document.getElementById('toast');
//     if (toast) {
//       toast.classList.add('show');
//       setTimeout(() => toast.classList.remove('show'), 2000);
//     }

//     // navigate back to contacts after a short delay
//     setTimeout(() => { location.href = 'emergency-contacts.html'; }, 800);
//   });
// }

// // Initialize contact views on pages
// updateCounter();
// renderContacts();



const STORAGE_KEY = "emergencyContacts";
let contacts = JSON.parse(localStorage.getItem(STORAGE_KEY)) || '[]';

function updateCounter () {
  const contactCounter = document.getElementById('counter');
  const count = contacts.length;
  const headerCount = document.querySelector("header p") || document.getElementById('contact count');
  if (count === 0) {
    contactCounter.textContent = "No Contacts Yet";
  } else if (count === 1) {
    contactCounter.textContent = "1 Contact Saved";
  } else {
    contactCounter.textContent = `${count} Contacts Saved`;
  }
}

function renderContacts() {
  const lists = document.getElementById('contacts-list');

  if (lists === null) return 
   lists.innerHTML = "";
   
}
