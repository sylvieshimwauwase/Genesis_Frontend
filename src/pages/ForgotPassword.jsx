import { useState } from "react";

function ForgotPassword() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  
  const isValidEmailOrPhone = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    return emailRegex.test(value) || phoneRegex.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    if (!emailOrPhone) {
      setError("Please enter your email or phone number.");
      return;
    }

    if (!isValidEmailOrPhone(emailOrPhone)) {
      setError("Enter a valid email or 10-digit phone number.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccessMessage(
        "A password reset link has been sent to your email or phone."
      );
      setEmailOrPhone("");
    }, 2000);
  };

  return (
    <div className="max-w-sm mx-auto p-4 bg-white shadow-lg rounded-md mt-32">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Forgot Password
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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
              error ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none`}
            placeholder="Enter your email or phone number"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-md text-white font-medium ${
              loading ? "bg-gray-400" : "bg-[#4175B7] hover:bg-blue-500"
            }`}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </div>
      </form>

      {successMessage && (
        <p className="text-green-500 text-center mt-4">{successMessage}</p>
      )}

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Remembered your password?{" "}
          <a href="/login" className="text-[#4175B7] hover:underline">
            Back to Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
