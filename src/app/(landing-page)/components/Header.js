import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-gray-900 bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto py-2 p-8 md:p-12 lg:p-20">
        <Link
          href={"/"}
          className="text-2xl md:text-2xl text-white font-bold hover:text-primary-500 duration-300 transition-shadow"
        >
          El Blogger
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            <li key="about">
              <Link href="#about" className="hover:text-primary-600">
                About
              </Link>
            </li>
            <li key="projects">
              <Link href="#projects" className="hover:text-primary-600">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#blog" className="hover:text-primary-600">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
