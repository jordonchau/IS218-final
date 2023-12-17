import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Image,
} from "@nextui-org/react";

export const NavbarMain = () => {
  return (
    <div>
      <Navbar>
        <NavbarBrand>
          <p className="font-bold text-inherit">Scoops of Eurphoria</p>
          <Image width={50} alt="NextUI hero Image" src="/ice.png" />
        </NavbarBrand>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} color="primary" href="/HomePage2" variant="flat">
              Join Mailchimp
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <Navbar className="flex justify-center">
        <NavbarItem>
          <Link color="foreground" href="/" className="font-sans">
            HOME
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/icecreampage" color="foreground" className="font-sans">
            ICE CREAM
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/HomePage2" className="font-sans">
            CAKES
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="#" className="font-sans">
            ABOUT
          </Link>
        </NavbarItem>
      </Navbar>
    </div>
  );
};
