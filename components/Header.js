import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      {/* Left */}
      <div className="flex items-center justify-between max-w-6xl">
        <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
          <Image
            src="https://www.asiapacdigital.com/Kr/img/ap/services/agency/AsiaPac_Instagram_logo.png"
            layout="fill"
            className="object-contain"
          />
        </div>
        <div className="cursor-pointer h-24 w-10 relative lg:hidden">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/800px-Instagram-Icon.png"
            layout="fill"
            className="object-contain"
          />
        </div>

        <h1>Right sides</h1>
      </div>
      {/* Middle */}

      {/* Right */}
    </div>
  );
};

export default Header;
