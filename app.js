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

<<<<<<< HEAD
// Render guides only on pages that have the guides list container
if (container) {
  guides.forEach((guide, index) => {
  const card = document.createElement("div");
  card.className = "guide";
=======
if (container) {
  guides.forEach((guide, index) => {
    const card = document.createElement("div");
    card.className = "guide";
>>>>>>> 4de7f4f256264792996de5a4d168b563ae3768e2

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

<<<<<<< HEAD
  setTimeout(() => {
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, index * 100);
=======
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 100);
>>>>>>> 4de7f4f256264792996de5a4d168b563ae3768e2
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
<<<<<<< HEAD
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
   
=======
}

const contactForm = document.querySelector("#contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", saveContact);
}

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

  const toast = document.querySelector("#toast");
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
    location.href = "emergency-contacts.html";
  }, 2000);
}

// Load and display contacts on emergency-contacts.html
function loadContacts() {
  const contactsList = document.getElementById("contacts-list");
  const contactCount = document.getElementById("contact-count");
  if (!contactsList) return;

  let contacts = JSON.parse(localStorage.getItem("emergencyContacts")) || [];
  contactsList.innerHTML = "";

  if (contacts.length === 0) {
    contactsList.innerHTML = "<p>No contacts saved yet.</p>";
    contactCount.textContent = "0 contacts saved";
    return;
  }

  contactCount.textContent = `${contacts.length} contact${
    contacts.length > 1 ? "s" : ""
  } saved`;

  contacts.forEach((contact, index) => {
    const contactDiv = document.createElement("div");
    contactDiv.className = "contact-item";
    contactDiv.innerHTML = `
      <div class="contact-info">
        <h3>${contact.name}</h3>
        <p><strong>Phone:</strong> ${contact.phone}</p>
        <p><strong>Category:</strong> ${contact.category}</p>
        <p><strong>Note:</strong> ${contact.note || "None"}</p>
      </div>
      <div class="contact-actions">
        <button class="edit-btn" onclick="editContact(${index})">Edit</button>
        <button class="delete-btn" onclick="deleteContact(${index})">Delete</button>
      </div>
    `;
    contactsList.appendChild(contactDiv);
  });
}

function editContact(index) {
  let contacts = JSON.parse(localStorage.getItem("emergencyContacts")) || [];
  const contact = contacts[index];
  const contactDiv = document.querySelectorAll(".contact-item")[index];

  contactDiv.innerHTML = `
    <form class="edit-form" onsubmit="saveEdit(event, ${index})">
      <label>Name: <input type="text" value="${contact.name}" required></label>
      <label>Phone: <input type="tel" value="${contact.phone}" required></label>
      <label>Category: <select required>
        <option value="family" ${
          contact.category === "family" ? "selected" : ""
        }>Family</option>
        <option value="medical" ${
          contact.category === "medical" ? "selected" : ""
        }>Medical</option>
        <option value="friends" ${
          contact.category === "friends" ? "selected" : ""
        }>Friends</option>
        <option value="work" ${
          contact.category === "work" ? "selected" : ""
        }>Work</option>
        <option value="emergency" ${
          contact.category === "emergency" ? "selected" : ""
        }>Emergency Services</option>
        <option value="other" ${
          contact.category === "other" ? "selected" : ""
        }>Other</option>
      </select></label>
      <label>Note: <textarea>${contact.note || ""}</textarea></label>
      <button type="submit">Save</button>
      <button type="button" onclick="cancelEdit(${index})">Cancel</button>
    </form>
  `;
}

function saveEdit(e, index) {
  e.preventDefault();
  let contacts = JSON.parse(localStorage.getItem("emergencyContacts")) || [];
  const form = e.target;
  const inputs = form.querySelectorAll("input, select, textarea");

  contacts[index] = {
    name: inputs[0].value,
    phone: inputs[1].value,
    category: inputs[2].value,
    note: inputs[3].value,
  };

  localStorage.setItem("emergencyContacts", JSON.stringify(contacts));
  loadContacts();
}

function cancelEdit(index) {
  loadContacts();
}

function deleteContact(index) {
  if (confirm("Are you sure you want to delete this contact?")) {
    let contacts = JSON.parse(localStorage.getItem("emergencyContacts")) || [];
    contacts.splice(index, 1);
    localStorage.setItem("emergencyContacts", JSON.stringify(contacts));
    loadContacts();
  }
}

// Load contacts on page load if on emergency-contacts.html
if (document.getElementById("contacts-list")) {
  loadContacts();
>>>>>>> 4de7f4f256264792996de5a4d168b563ae3768e2
}
