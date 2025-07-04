import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef(); // Добавляем ref для формы
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false); // Добавляем состояние загрузки

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      setError(t("contact.contact_error_fill_all"));
      setSuccess("");
      return;
    }

    setError("");
    setLoading(true); // Начинаем загрузку

    try {
      const result = await emailjs.sendForm(
        'service_0t15v3b',      // ← ID вашего сервиса
        'template_9prlcoj',     // ← ID вашего шаблона
        formRef.current,        // Передаем ref формы
        '5Bd5jS385t16jnxe3'  // ← публичный ключ
      );

      if (result.status === 200) {
        setSuccess(t("contact.contact_success"));
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setError(t("contact.contact_error_send"));
      }
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError(t("contact.contact_error_send"));
    } finally {
      setLoading(false); // Завершаем загрузку
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{t("contact.contact_me")}</h2>
      <div className="border-2 bg-white p-5 mb-6"
        style={{
          borderColor: 'gold',
          boxShadow: '5px 7px 0 0 black',
          transition: 'all 0.5s ease'
        }}>
        <form ref={formRef} onSubmit={handleSubmit}>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {success && <p className="text-green-500 mb-4">{success}</p>}
          <input
            type="text"
            name="from_name"
            placeholder={t("contact.contact_name_placeholder")}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 mb-4 w-full rounded"
          />
          <input
            type="email"
            name="from_email"
            placeholder={t("contact.contact_email_placeholder")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 mb-4 w-full rounded"
          />
          <textarea
            name="message"
            placeholder={t("contact.contact_message_placeholder")}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border p-2 mb-4 w-full rounded min-h-[120px]"
          ></textarea>
          <button 
            type="submit" 
            className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded transition-colors duration-200"
            disabled={loading}
          >
            {loading ? t("contact.contact_sending") : t("contact.contact_send")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;