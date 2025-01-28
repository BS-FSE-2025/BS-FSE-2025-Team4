import React, { useState, useEffect } from 'react';

const defaultProfile = {
  name: "שם לדוגמה",
  age: "20",
  email: "example@email.com",
  phone: "050-1234567",
  username: "user123",
  password: "password",
};

const Profile = () => {
  const [profile, setProfile] = useState(defaultProfile);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const storedProfile = localStorage.getItem("studentProfile");
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [id]: value,
    }));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    localStorage.setItem("studentProfile", JSON.stringify(profile));
    setIsEditing(false);
  };

  return (
    <div className="profile-container" style={{ maxWidth: "800px", margin: "50px auto", padding: "20px", backgroundColor: "white", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
      <div className="profile-picture" style={{ width: "150px", height: "150px", borderRadius: "50%", overflow: "hidden", margin: "0 auto", border: "5px solid #ddd" }}>
        <img src="https://via.placeholder.com/150" alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div className="profile-name" style={{ fontSize: "24px", fontWeight: "bold", margin: "20px 0 10px" }}>
        {profile.name} Profile
      </div>
      <div className="profile-bio" style={{ fontSize: "16px", color: "#666" }}>
        קבוצת גילאים 7-10
      </div>
      <div className="profile-bio" style={{ fontSize: "16px", color: "#666" }}>
        ימי ראשון ושני
      </div>

      <div className="profile-details" style={{ marginTop: "20px", textAlign: "right" }}>
        <h3 style={{ fontSize: "20px", borderBottom: "2px solid #ddd", paddingBottom: "5px", marginBottom: "15px" }}>מידע אישי</h3>
        <ul style={{ listStyle: "none", padding: "0" }}>
          <li style={{ padding: "10px 0", borderBottom: "1px solid #eee" }}>
            <strong>שם:</strong>
            {!isEditing ? (
              <span>{profile.name}</span>
            ) : (
              <input type="text" id="name" value={profile.name} onChange={handleInputChange} style={{ width: "95%", padding: "8px", borderRadius: "5px" }} />
            )}
          </li>
          <li style={{ padding: "10px 0", borderBottom: "1px solid #eee" }}>
            <strong>גיל:</strong>
            {!isEditing ? (
              <span>{profile.age}</span>
            ) : (
              <input type="number" id="age" value={profile.age} onChange={handleInputChange} style={{ width: "95%", padding: "8px", borderRadius: "5px" }} />
            )}
          </li>
          <li style={{ padding: "10px 0", borderBottom: "1px solid #eee" }}>
            <strong>אימייל:</strong>
            {!isEditing ? (
              <span>{profile.email}</span>
            ) : (
              <input type="email" id="email" value={profile.email} onChange={handleInputChange} style={{ width: "95%", padding: "8px", borderRadius: "5px" }} />
            )}
          </li>
          <li style={{ padding: "10px 0", borderBottom: "1px solid #eee" }}>
            <strong>מספר טלפון:</strong>
            {!isEditing ? (
              <span>{profile.phone}</span>
            ) : (
              <input type="text" id="phone" value={profile.phone} onChange={handleInputChange} style={{ width: "95%", padding: "8px", borderRadius: "5px" }} />
            )}
          </li>
          <li style={{ padding: "10px 0", borderBottom: "1px solid #eee" }}>
            <strong>שם משתמש:</strong>
            {!isEditing ? (
              <span>{profile.username}</span>
            ) : (
              <input type="text" id="username" value={profile.username} onChange={handleInputChange} style={{ width: "95%", padding: "8px", borderRadius: "5px" }} />
            )}
          </li>
          <li style={{ padding: "10px 0", borderBottom: "1px solid #eee" }}>
            <strong>סיסמה:</strong>
            {!isEditing ? (
              <span>{profile.password}</span>
            ) : (
              <input type="password" id="password" value={profile.password} onChange={handleInputChange} style={{ width: "95%", padding: "8px", borderRadius: "5px" }} />
            )}
          </li>
        </ul>
      </div>

      <div className="buttons" style={{ textAlign: "center" }}>
        {!isEditing ? (
          <button className="edit-button" onClick={handleEditClick} style={{ padding: "10px 20px", backgroundColor: "#2196F3", color: "white", border: "none", borderRadius: "5px" }}>
            ערוך
          </button>
        ) : (
          <button className="save-button" onClick={handleSaveClick} style={{ padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px" }}>
            שמור
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;