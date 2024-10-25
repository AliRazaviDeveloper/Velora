import Image from "next/image";
import TopNavigation from "./top-navigation";

const Header: React.FC = () => {
  return (
    <header className="border-b dark:border-b-base-content dark:border-opacity-5 ">
      <div className="container flex flex-row justify-between items-center">
        <Image
          src="./images/logo-light.svg"
          alt="logo"
          width={100}
          height={36}
        />
        <TopNavigation />
        <span className="mr-auto">Authecation</span>
      </div>
    </header>
  );
};

export default Header;
