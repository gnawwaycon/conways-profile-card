// src/App.jsx
import { useState } from 'react';
import ProfileCard from './components/ProfileCard';
import ContactInfo from './components/ContactInfo';
import profileImage from './assets/profile-pic.png'; // Import your image
import './App.css';

function App() {
  // State to manage the visibility of the contact info
  const [showContact, setShowContact] = useState(false);

  // User data object
  const userData = {
    name: 'Conway Wang',
    imageUrl: profileImage,
    bio: 'CS/Engineering teacher at Saratoga HS',
    email: 'conwaytutoringservice@gmail.com',
    phone: '123-456-7890',
  };

  // Function to toggle the state
  const handleToggleContact = () => {
    setShowContact(!showContact);
  };

  return (
    <div className="App">
      <ProfileCard
        user={userData}
        onToggleContact={handleToggleContact}
        showContact={showContact}
      />
      {/* This is conditional rendering: ContactInfo only shows if showContact is true */}
      {showContact && <ContactInfo email={userData.email} phone={userData.phone} />}
    </div>
  );
}

export default App;