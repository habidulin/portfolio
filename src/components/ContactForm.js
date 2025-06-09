import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Валидация полей
    if (!name || !email || !message) {
      setError("Пожалуйста, заполните все поля.");
      setSuccess("");
      return;
    }

    // Очистка ошибок
    setError("");

    try {
      // Отправка данных на сервер (опционально)
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setSuccess("Сообщение успешно отправлено!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setError("Ошибка отправки сообщения. Попробуйте позже.");
      }
    } catch (err) {
      console.error("Ошибка:", err);
      setError("Ошибка отправки сообщения. Попробуйте позже.");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">Связаться со мной</h2>
      <form onSubmit={handleSubmit}>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        <input
          type="text"
          placeholder="Ваше имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <input
          type="email"
          placeholder="Ваш email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <textarea
          placeholder="Ваше сообщение"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border p-2 mb-4 w-full"
        ></textarea>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Отправить
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
