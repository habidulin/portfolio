import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 sm:p-8 text-center">
      {/* Приветствие для посетителей */}
      <h1 className="text-2xl font-bold mb-4 mt-8">Привет!</h1>
      <p className="text-base mb-4">
        Добро пожаловать в мое портфолио. Здесь вы можете узнать больше о моих
        проектах и навыках.
      </p>

      {/* Кнопка для перехода на страницу контактов */}
      <button
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
        onClick={() => navigate("/contact")}
      >
        Связаться со мной
      </button>
    </div>
  );
};

export default Home;
