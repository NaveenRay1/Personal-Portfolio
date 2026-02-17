import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const skills = [
    { img: meter1, title: "Frontend Development" },
    { img: meter3, title: "React.js & Tailwind" },
    { img: meter2, title: "Data Structures (DSA)" },
    { img: meter3, title: "MERN Stack" },
    { img: meter2, title: "Problem Solving" },
  ];

  return (
    <section
      id="skills"
      className="relative py-24 bg-[#0f0f0f] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Skills</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            I am not just a developer; I am a problem solver.
            I combine strong logical thinking from Data Structures &
            Algorithms (C++) with the creativity of Frontend Development.
          </p>
        </div>

        {/* Scroll Wrapper */}
        <div className="relative">

          {/* Left Fade */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-[#0f0f0f] to-transparent z-10" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[#0f0f0f] to-transparent z-10" />

          {/* Scrollable Skills Row */}
          <div className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth px-4">

            {skills.map((skill, index) => (
              <div
                key={index}
                className="
                  snap-start shrink-0
                  w-[85%] sm:w-[48%] lg:w-[32%]
                  bg-[#1a1a1a]
                  rounded-2xl
                  p-10
                  flex flex-col items-center
                  hover:bg-purple-600/10
                  hover:scale-105
                  transition-all duration-300
                "
              >
                <img
                  src={skill.img}
                  alt={skill.title}
                  className="w-24 h-24 mb-6"
                />
                <h5 className="text-xl font-semibold text-center">
                  {skill.title}
                </h5>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* Background Decorative Image */}
      <img
        src={colorSharp}
        alt="Background Decoration"
        className="absolute left-0 bottom-0 opacity-10 pointer-events-none"
      />
    </section>
  );
};
