import { useState, useEffect } from "react";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRight } from "lucide-react";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200);
  const toRotate = ["Frontend Developer", "React Developer", "Software Engineer"];
  const period = 2000;

  useEffect(() => {
    const ticker = setTimeout(() => {
      tick();
    }, delta);

    return () => clearTimeout(ticker);
  }, [text]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];

    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setTimeout(() => setIsDeleting(true), period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }

    setDelta(isDeleting ? 100 : 200);
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">

        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 space-y-6">

          <span className="inline-block px-4 py-2 text-sm font-semibold tracking-wide uppercase bg-purple-600/20 text-purple-400 rounded-full">
            Welcome to my Portfolio
          </span>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
            Hi! I'm Naveen Ray <br />
            <span className="text-purple-400">{text}</span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed">
            I am a passionate Frontend Developer dedicated to building interactive
            and responsive web applications. I specialize in crafting clean,
            user-friendly interfaces using React.js and modern JavaScript.
          </p>

          <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-lg font-medium">
            Let’s Connect
            <ArrowRight size={20} />
          </button>

        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={headerImg}
            alt="Header"
            className="w-80 md:w-96 animate-pulse"
          />
        </div>

      </div>
    </section>
  );
};
