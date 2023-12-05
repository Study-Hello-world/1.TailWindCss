import React from "react";

//npm install -D prettier-plugin-tailwindcss
const Login = () => {
  return (
    <body className="bg-gray-200 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-semibold mb-6">로그인</h2>
        <form>
          <div className="mb-4">
            <label
              for="username"
              className="block text-sm font-medium text-gray-700"
            >
              사용자 이름
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label
              for="password"
              className="block text-sm font-medium text-gray-700"
            >
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          >
            로그인
          </button>
        </form>
      </div>
    </body>
  );
};

export default Login;
