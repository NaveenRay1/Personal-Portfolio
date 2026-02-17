import { Newsletter } from "./Newsletter";
import { useState } from "react";

export const MailchimpForm = () => {
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  const simpleSubscribe = () => {
    setStatus("sending");

    setTimeout(() => {
      setStatus("success");
      setMessage("Subscribed successfully!");
    }, 2000);
  };

  return (
    <Newsletter
      status={status}
      message={message}
      onValidated={simpleSubscribe}
    />
  );
};
