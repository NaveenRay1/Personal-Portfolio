import { useState } from "react";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send Message");
  const [status, setStatus] = useState(null);

  const onFormUpdate = (field, value) => {
    setFormDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    setStatus(null);

    const data = {
      access_key: "5ad153ab-644e-4ef2-b9a2-a79646ecdb1d",
      name: `${formDetails.firstName} ${formDetails.lastName}`,
      email: formDetails.email,
      phone: formDetails.phone,
      message: formDetails.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setButtonText("Send Message");

      if (result.success) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormDetails(formInitialDetails);
      } else {
        setStatus({
          type: "error",
          message: "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setButtonText("Send Message");
      setStatus({
        type: "error",
        message: "Network error. Please try again later.",
      });
    }
  };

  return (
    <section
      id="connect"
      className="py-24 bg-[#0f0f0f] text-white"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">

        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={contactImg}
            alt="Contact"
            className="w-80 md:w-96 animate-pulse"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Get In Touch
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name Row */}
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                value={formDetails.firstName}
                onChange={(e) => onFormUpdate("firstName", e.target.value)}
                className="bg-[#1a1a1a] p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />

              <input
                type="text"
                placeholder="Last Name"
                value={formDetails.lastName}
                onChange={(e) => onFormUpdate("lastName", e.target.value)}
                className="bg-[#1a1a1a] p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>

            {/* Email + Phone */}
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email Address"
                value={formDetails.email}
                onChange={(e) => onFormUpdate("email", e.target.value)}
                className="bg-[#1a1a1a] p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={formDetails.phone}
                onChange={(e) => onFormUpdate("phone", e.target.value)}
                className="bg-[#1a1a1a] p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            {/* Message */}
            <textarea
              rows="6"
              placeholder="Your Message"
              value={formDetails.message}
              onChange={(e) => onFormUpdate("message", e.target.value)}
              className="w-full bg-[#1a1a1a] p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-4 rounded-xl
                         bg-gradient-to-r from-purple-600 to-indigo-600
                         hover:opacity-90 transition font-semibold"
            >
              {buttonText}
            </button>

            {/* Status Message */}
            {status && (
              <p
                className={`mt-4 font-medium ${
                  status.type === "error"
                    ? "text-red-400"
                    : "text-green-400"
                }`}
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
