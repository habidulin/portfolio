import { useTranslation } from "react-i18next";
import Timeline from "./Timeline";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="p-2 sm:p-8 text-center">
      {/* Приветствие для посетителей */}
      <h1 className="text-2xl font-bold mb-4 mt-8">{t("home.hello")}</h1>
      <p className="text-base mb-4">
        {t("home.home_welcome")}
      </p>

      {/* Timeline */}
      <Timeline />
    </div>
  );
};

export default Home;