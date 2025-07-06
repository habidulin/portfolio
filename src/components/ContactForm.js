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
        '5Bd5jS385t16jnxe3'     // ← публичный ключ
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
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{t("contact.contact_me")}</h2>
      <div className="border-2 bg-white p-5 mb-6"
        style={{
          borderColor: 'gold',
          boxShadow: '5px 7px 0 0 black',
          transition: 'all 0.5s ease'
        }}>
        <form ref={formRef} onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 flex items-center">
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <span>{error}</span>
            </div>
          )}
          
          {success && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 flex items-center">
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>{success}</span>
            </div>
          )}
          
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
            className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
              style={{
                boxShadow: '3px 5px 0 0 gold',
                transition: 'all 0.3s ease'
              }}
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