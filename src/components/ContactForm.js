import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError(t("contact.contact_error_fill_all"));
      setSuccess("");
      return;
    }

    setError("");

    try {
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setSuccess(t("contact.contact_success"));
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setError(t("contact.contact_error_send"));
      }
    } catch (err) {
      console.error("Ошибка:", err);
      setError(t("contact.contact_error_send"));
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{t("contact.contact_me")}</h2>
      <form onSubmit={handleSubmit}>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        <input
          type="text"
          placeholder={t("contact.contact_name_placeholder")}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <input
          type="email"
          placeholder={t("contact.contact_email_placeholder")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <textarea
          placeholder={t("contact.contact_message_placeholder")}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border p-2 mb-4 w-full"
        ></textarea>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          {t("contact.contact_send")}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
