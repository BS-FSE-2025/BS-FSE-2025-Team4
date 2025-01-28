// Default profile data
const defaultProfile = {
    name: "שם לדוגמה",
    age: "20",
    email: "example@email.com",
    phone: "050-1234567",
    username: "user123",
    password: "password",
  };
  
  // Load profile from localStorage or use default
  function loadProfile() {
    const storedProfile = localStorage.getItem("studentProfile");
    const profile = storedProfile ? JSON.parse(storedProfile) : defaultProfile;
  
    document.getElementById("name-display").textContent = profile.name;
    document.getElementById("age-display").textContent = profile.age;
    document.getElementById("email-display").textContent = profile.email;
    document.getElementById("phone-display").textContent = profile.phone;
    document.getElementById("username-display").textContent = profile.username;
    document.getElementById("password-display").textContent = profile.password;
  
    // Fill input fields with the profile data
    document.getElementById("name-input").value = profile.name;
    document.getElementById("age-input").value = profile.age;
    document.getElementById("email-input").value = profile.email;
    document.getElementById("phone-input").value = profile.phone;
    document.getElementById("username-input").value = profile.username;
    document.getElementById("password-input").value = profile.password;
  }
  
  // Switch to edit mode
  function editProfile() {
    document.querySelectorAll('.profile-details input').forEach(input => {
      input.style.display = 'block';
    });
    document.querySelectorAll('.profile-details span').forEach(span => {
      span.style.display = 'none';
    });
    document.querySelector('.edit-button').style.display = 'none';
    document.querySelector('.save-button').style.display = 'inline-block';
  }
  
  // Save profile data
  function saveProfile() {
    const profile = {
      name: document.getElementById('name-input').value,
      age: document.getElementById('age-input').value,
      email: document.getElementById('email-input').value,
      phone: document.getElementById('phone-input').value,
      username: document.getElementById('username-input').value,
      password: document.getElementById('password-input').value,
    };
  
    // Save to localStorage
    localStorage.setItem("studentProfile", JSON.stringify(profile));
  
    // Update the displayed profile
    loadProfile();
  
    // Switch back to read-only mode
    document.querySelectorAll('.profile-details input').forEach(input => {
      input.style.display = 'none';
    });
    document.querySelectorAll('.profile-details span').forEach(span => {
      span.style.display = 'inline';
    });
    document.querySelector('.edit-button').style.display = 'inline-block';
    document.querySelector('.save-button').style.display = 'none';
  }
  
  // Initialize profile on page load
  window.onload = loadProfile;
  