import { Newsletter } from "./Newsletter";
import { useState } from "react";

export const MailchimpForm = () => {
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  const simpleSubscribe = (formData) => {
    // 1. Show sending state
    setStatus('sending');
    setMessage('Sending...');

    // 2. Wait 3 seconds then show success (Simulated)
    setTimeout(() => {
        setStatus('success');
        setMessage('Subscribed successfully!');
    }, 2000);
  };

  return (
    <>
      <Newsletter
        status={status}
        message={message}
        onValidated={formData => simpleSubscribe(formData)}
        />
    </>
  )
}