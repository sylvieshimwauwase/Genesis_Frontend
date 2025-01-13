import React, { useState } from "react";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(1000); // Default amount
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Simulate payment processing
    try {
      // Normally, here you'd send the payment data to your backend or a payment gateway.
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSuccess(true);
    } catch (err) {
      setError("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Payment Information</h2>
      {error && <div className="text-red-600 mb-4">{error}</div>}
      {success ? (
        <div className="text-green-600 font-bold">Payment successful! Thank you for your purchase.</div>
      ) : (
        <>
          <div className="mb-4">
            <label className="block text-lg font-medium">Amount to Pay:</label>
            <input
              type="text"
              value={`${amount}`}
              disabled
              className="w-full p-2 border rounded-md bg-gray-100 text-lg font-semibold"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium">Select Payment Method</label>
            <div className="space-y-3">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Airtel Money"
                  checked={paymentMethod === "Airtel Money"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-2"
                />
                Airtel Money
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="MTN MoMo"
                  checked={paymentMethod === "MTN Mobile Money"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-2"
                />
                MTN MoMo
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Card"
                  checked={paymentMethod === "Card"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-2"
                />
                Credit/Debit Card
              </label>
            </div>
          </div>

          {paymentMethod === "Card" && (
            <>
              <div className="mb-4">
                <label className="block text-lg font-medium">Name on Card</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-medium">Card Number</label>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  required
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="mb-4 flex space-x-4">
                <div className="w-1/2">
                  <label className="block text-lg font-medium">Expiration Date</label>
                  <input
                    type="text"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    placeholder="MM/YY"
                    required
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-lg font-medium">CVV</label>
                  <input
                    type="text"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    required
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              </div>
            </>
          )}

          {paymentMethod === "Airtel Money" || paymentMethod === "MTN Mobile Money" ? (
            <div className="mb-4">
              <label className="block text-lg font-medium">
                Please enter your phone number to pay via {paymentMethod}
              </label>
              <input
                type="text"
                placeholder="Phone number"
                required
                className="w-full p-2 border rounded-md"
              />
            </div>
          ) : null}

          <button
            type="submit"
            onClick={handleSubmit}
            disabled={loading}
            className="w-full p-3 bg-blue-500 text-white rounded-md mt-6 disabled:bg-gray-400"
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </>
      )}
    </div>
  );
};

export default Payment;