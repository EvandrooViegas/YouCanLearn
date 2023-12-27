import { Button } from "../Button";
import NavLink from "./NavLink";
import { links } from "./links";

export const LinksList = () => {
  return (
    <ul className=" flex md:items-center flex-col md:flex-row md:gap-4 gap-4 mt-28 md:mt-0 px-12 md:px-0">
      {links?.map((link) => (
        <NavLink key={link.name} link={link} />
      ))}
      <li>
        <Button size={"small"}>
        <a target="_blank" href="https://personal-cz9pe0mx.outsystemscloud.com/YCL/Course">
        Entrar
        </a>
        </Button>
      </li>
    </ul>
  );
};
