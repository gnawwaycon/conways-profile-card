function ContactInfo({ email, phone }) {
  return (
    <div className="contact-info">
      <p>📧 Email: {email}</p>
      <p>📞 Phone: {phone}</p>
    </div>
  );
}

export default ContactInfo;