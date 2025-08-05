import './ProfileCard.css'; 

// This is our JavaScript data formatting function (Requirement #5)
const formatName = (name) => {
  if (!name) return '';
  return name.toUpperCase();
};

function ProfileCard({ user, onToggleContact, showContact }) {
  return (
    <div className="profile-card">
      <img src={user.imageUrl} alt="Profile" className="profile-image" />
      <h1 className="profile-name">{formatName(user.name)}</h1>
      <p className="profile-bio">{user.bio}</p>
      <button onClick={onToggleContact}>
        {showContact ? 'Hide Contact Info' : 'Show Contact Info'}
      </button>
    </div>
  );
}

export default ProfileCard;