import React, { useState } from "react";
import { UserIcon, LockIcon, EyeIcon, EyeOffIcon } from "lucide-react";
import chatbotIntro from "../assets/logo.png";

// Custom color palette (kept the same)
const COLORS = {
  primary: "#FFA500",
  secondary: "#00AECF",
  dark: "#073161",
};

const USERS = [
  { username: "admin", password: "vega2024!", token: "admin-token" },
  { username: "703055690", password: "Welcome@2025", token: "user-token" },
  { username: "703070518", password: "Welcome@2025", token: "user-token" },
  { username: "302009439", password: "Welcome@2025", token: "user-token" },
];

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const user = USERS.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      localStorage.setItem("authToken", user.token);
      onLogin();
      setError("");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div
      className="h-screen w-full flex items-center justify-center p-4"
     
    >
      {/* Central container with blur effect */}
      <div
        className="w-full max-w-3xl h-auto rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden backdrop-filter backdrop-blur-md bg-blue-950 bg-opacity-10"
      >
        {/* Left Panel - Minimal Data */}
        <div className="w-full md:w-1/2 p-8 flex flex-col items-center justify-center" style={{ backgroundColor: COLORS.dark }}>
          <img src={chatbotIntro} alt="vega SAP" className="h-20 mx-auto mb-6" />
          <h1 className="text-xl font-bold text-white mb-4 text-center">
            Vega SAP Support
          </h1>
          <p className="text-white text-opacity-80 text-center text-sm">
            Access our support system for all your SAP needs.
          </p>
        </div>

        {/* Right Panel - Login Form */}
        <div className="w-full md:w-1/2 relative p-6 flex items-center justify-center">
          <div className="w-full max-w-md">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-6" style={{ color: COLORS.dark }}>
                Sign In
              </h2>

              <form onSubmit={handleLogin} className="space-y-5">
                {/* Username Field */}
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium"
                    style={{ color: COLORS.dark }}
                  >
                    Username
                  </label>
                  <div className="relative">
                    <div
                      className="absolute left-0 top-0 bottom-0 w-10 flex items-center justify-center rounded-l-md"
                      style={{ backgroundColor: COLORS.dark }}
                    >
                      <UserIcon size={16} className="text-white" />
                    </div>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter your username"
                      className="w-full pl-12 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50"
                      style={{
                        borderColor: "rgb(229, 231, 235)",
                        focusRing: COLORS.primary,
                      }}
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium"
                    style={{ color: COLORS.dark }}
                  >
                    Password
                  </label>
                  <div className="relative">
                    <div
                      className="absolute left-0 top-0 bottom-0 w-10 flex items-center justify-center rounded-l-md"
                      style={{ backgroundColor: COLORS.primary }}
                    >
                      <LockIcon size={16} className="text-white" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="w-full pl-12 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50"
                      style={{
                        borderColor: "rgb(229, 231, 235)",
                        focusRing: COLORS.secondary,
                      }}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-gray-100"
                      style={{ color: COLORS.dark }}
                    >
                      {showPassword ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
                    </button>
                  </div>
                </div>

                {/* Forgot Password Link */}
                <div className="flex justify-end">
                  <a
                    href="#"
                    className="text-sm font-medium hover:underline"
                    style={{ color: COLORS.secondary }}
                  >
                    Forgot Password?
                  </a>
                </div>

                {/* Error Message */}
                {error && (
                  <div
                    className="text-center py-2 px-4 rounded-md text-sm"
                    style={{
                      backgroundColor: `${COLORS.primary}15`,
                      color: COLORS.primary,
                    }}
                  >
                    {error}
                  </div>
                )}

                {/* Sign In Button */}
                <button
                  type="submit"
                  className="w-full py-2 rounded-md text-white font-medium shadow-md hover:shadow-lg transition-shadow bg-green-700"
                  // style={{ backgroundColor: COLORS.dark }}
                >
                  Sign In
                </button>
              </form>
            </div>

            {/* Footer */}
            <div className="mt-4 text-center">
              <p className="text-sm">
                © 2024 Vega SAP Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;