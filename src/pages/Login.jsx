import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ emailOrPhone: "", password: "" });
  const navigate = useNavigate();

  // Validation functions
  const isValidEmailOrPhone = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    return emailRegex.test(value) || phoneRegex.test(value);
  };

  const isValidPassword = (password) => password.length >= 6;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    setError({ emailOrPhone: "", password: "" });

    // Validate email or phone
    if (!emailOrPhone) {
      setError((prev) => ({
        ...prev,
        emailOrPhone: "Email or phone is required.",
      }));
      return;
    }
    if (!isValidEmailOrPhone(emailOrPhone)) {
      setError((prev) => ({
        ...prev,
        emailOrPhone: "Enter a valid email or 10-digit phone number.",
      }));
      return;
    }

    // Validate password
    if (!password) {
      setError((prev) => ({
        ...prev,
        password: "Password is required.",
      }));
      return;
    }
    if (!isValidPassword(password)) {
      setError((prev) => ({
        ...prev,
        password: "Password must be at least 6 characters long.",
      }));
      return;
    }

    // Simulate login process with loading
    setLoading(true);
    setTimeout(() => {
      setLoading(false);

      // Simulate successful login
      const isAuthenticated = true;

      if (isAuthenticated) {
        // Clear input fields
        setEmailOrPhone("");
        setPassword("");

        // Store session in localStorage
        localStorage.setItem(
          "userSession",
          JSON.stringify({ emailOrPhone, isAuthenticated: true })
        );

        // Navigate to dashboard
        navigate("/dashboard");
      } else {
        setError((prev) => ({
          ...prev,
          emailOrPhone: "Invalid credentials. Please try again.",
        }));
      }
    }, 2000);
  };

  return (
    <div className="max-w-sm mx-auto p-4 bg-white shadow-lg rounded-md mt-32">
      <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email/Phone Field */}
        <div>
          <label
            htmlFor="emailOrPhone"
            className="block text-sm font-medium text-gray-700"
          >
            Email or Phone
          </label>
          <input
            type="text"
            id="emailOrPhone"
            className={`w-full px-4 py-2 border ${
              error.emailOrPhone ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none`}
            placeholder="Enter your email or phone number"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
          />
          {error.emailOrPhone && (
            <p className="text-red-500 text-sm mt-1">{error.emailOrPhone}</p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className={`w-full px-4 py-2 border ${
              error.password ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none`}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error.password && (
            <p className="text-red-500 text-sm mt-1">{error.password}</p>
          )}

          {/* Forgot Password */}
          <div className="mt-2 text-right">
            <a
              href="/forgot-password"
              className="text-sm text-[#4175B7] hover:underline"
            >
              Forgot Password?
            </a>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-md text-white font-medium ${
              loading ? "bg-gray-400" : "bg-[#4175B7] hover:bg-blue-500"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
      </form>

      {/* Register Option */}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/register" className="text-[#4175B7] hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;