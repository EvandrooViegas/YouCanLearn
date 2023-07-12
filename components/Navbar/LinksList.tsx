import NavLink from "./NavLink";
import { links } from "./links";

export const LinksList = () => {
  return (
    <ul className="flex flex-col md:flex-row md:gap-4 gap-4 mt-28 md:mt-0 px-12 md:px-0">
      {links?.map((link) => (
        <NavLink key={link.name} link={link} />
      ))}
    </ul>
  );
};
