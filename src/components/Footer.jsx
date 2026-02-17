import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import githubIcon from "../assets/img/github.svg";
import leetcodeIcon from "../assets/img/leetcode.png";
import gfgIcon from "../assets/img/geeksforgeeks.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 space-y-12">

        {/* Newsletter Section */}
        <MailchimpForm />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">

          {/* Logo */}
          <div className="flex justify-center sm:justify-start">
            <img src={logo} alt="Logo" className="w-32" />
          </div>

          {/* Social + Copyright */}
          <div className="flex flex-col items-center sm:items-end gap-4">

            {/* Social Icons */}
            <div className="flex gap-6">

              <a
                href="https://github.com/NaveenRay1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >
                <img
                  src={githubIcon}
                  alt="GitHub"
                  className="w-6 h-6"
                />
              </a>

              <a
                href="https://leetcode.com/u/Naveen_Ray_17/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >
                <img
                  src={leetcodeIcon}
                  alt="LeetCode"
                  className="w-6 h-6"
                />
              </a>

              <a
                href="https://www.geeksforgeeks.org/profile/navennnn01?tab=activity"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >
                <img
                  src={gfgIcon}
                  alt="GeeksforGeeks"
                  className="w-6 h-6"
                />
              </a>

            </div>

            <p className="text-gray-400 text-sm text-center sm:text-right">
              © 2026 Naveen Ray. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
