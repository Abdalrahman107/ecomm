import { useNavigate } from "react-router-dom";


export default function NoAccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
        <div className="flex justify-center mb-4">
          <i className="fa-solid fa-lock text-red-500 text-4xl"></i>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          Please Login to Continue
        </h2>
        <button
          onClick={() => navigate("/login")}
          className="mt-2 bg-main-color cursor-pointer text-white px-6 py-2 rounded-lg font-medium transition"
        >
          Go to Login
        </button>
      </div>
    </div>
  );
}
