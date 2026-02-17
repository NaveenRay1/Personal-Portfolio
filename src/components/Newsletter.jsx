import { useState, useEffect } from "react";

export const Newsletter = ({ onValidated, status, message }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "success") {
      setEmail("");
    }
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && email.includes("@")) {
      onValidated({
        EMAIL: email,
      });
    }
  };

  return (
    <div className="bg-[#1a1a1a] rounded-2xl p-10 flex flex-col lg:flex-row items-center justify-between gap-8">

      {/* Left Content */}
      <div className="space-y-4 text-center lg:text-left">
        <h3 className="text-2xl md:text-3xl font-semibold">
          Subscribe to our Newsletter <br />
          <span className="text-purple-400">
            & Never miss latest updates
          </span>
        </h3>

        {/* Status Messages */}
        {status === "sending" && (
          <p className="text-yellow-400 font-medium">Sending...</p>
        )}

        {status === "error" && (
          <p className="text-red-400 font-medium">{message}</p>
        )}

        {status === "success" && (
          <p className="text-green-400 font-medium">{message}</p>
        )}
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full lg:w-auto flex flex-col sm:flex-row gap-4"
      >
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full sm:w-72 bg-black/40 border border-white/10
                     px-5 py-3 rounded-lg
                     focus:outline-none focus:ring-2 focus:ring-purple-600"
        />

        <button
          type="submit"
          className="px-6 py-3 rounded-lg
                     bg-gradient-to-r from-purple-600 to-indigo-600
                     hover:opacity-90 transition font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
