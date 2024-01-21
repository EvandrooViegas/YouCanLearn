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
        <a target="_blank" href="https://personal-4kvj0qzg.outsystemscloud.com/YCL/Course?_ts=638414461739285779">
        Entrar
        </a>
        </Button>
      </li>
    </ul>
  );
};
