import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      <Image src="/logo.jpg" width={100} height={100} alt="logo image" />
    </div>
  );
};

export default Header;
