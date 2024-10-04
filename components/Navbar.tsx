import { useEffect } from "react";
import { Link, Events } from "react-scroll";

const Navbar: React.FC = () => {
  useEffect(() => {
    Events.scrollEvent.register("begin", function () {});
    Events.scrollEvent.register("end", function () {});

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <>
      <div className="w-full py-12 hidden sm:flex items-center">
        <ul className="flex items-center">
          {[
            { label: "About Me", section: "about-me" },
            { label: "Projects", section: "personal-projects" },
            { label: "Contact", section: "contact" },
          ].map((item, index: number) => {
            const { label, section } = item;
            return (
              <li
                key={label}
                className="text-xl font-bold flex items-center pb-2"
              >
                {index >= 1 && (
                  <span className="mx-3 text-sm select-none">●</span>
                )}

                <Link
                  to={section}
                  smooth={true}
                  offset={-50}
                  duration={500 + index * 200}
                  className="border-b-2 border-transparent hover:border-black dark:hover:border-white cursor-pointer transition ease-in-out duration-200"
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

    </>
  );
};

export default Navbar;
