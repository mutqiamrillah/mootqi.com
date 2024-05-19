import Link from "next/link";
import Image from "next/image";
// import classes from "./index.module.less";

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="logo flex">
          <Link href="/" className="flex">
            <Image
              src="/images/amril.jpg"
              className="hover:border-white border-dashed border-transparent border-2"
              width={100}
              height={100}
              alt="Amril's profile"
            />
          </Link>
        </div>
        <h1 className="flex items-center ml-1 text-sm font-bold hover:text-white">
          Hey, I'm Amril 👋
        </h1>
        {/* <ul className="flex">
          <li className="mr-6">
            <a className="hover:text-white" href="#">
              Work
            </a>
          </li>
          <li className="mr-6">
            <a className="hover:text-white" href="#">
              About
            </a>
          </li>
          <li className="mr-6">
            <a className="hover:text-white" href="#">
              Contact
            </a>
          </li>
        </ul> */}
      </div>
      <hr />
    </>
  );
};

export default Navbar;
