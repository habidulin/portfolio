import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="p-4 sm:p-8 text-center">
      {/* Приветствие для посетителей */}
      <h1 className="text-2xl font-bold mb-4 mt-8">{t("home.hello")}</h1>
      <p className="text-base mb-4">
        {t("home.home_welcome")}
      </p>

      {/* Кнопка для перехода на страницу контактов */}
      <button
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
        onClick={() => navigate("/contact")}
      >
        {t("contact.contact_me")}
      </button>
    </div>
  );
};

export default Home;
