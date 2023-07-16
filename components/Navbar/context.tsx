import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type NavbarContext = {
  onNavbarLinkClick: () => void;
  toggleMobileNavbar: () => void;
  isMobileNavbarOpned: boolean;
  setIsMobileNavOpned: Dispatch<SetStateAction<boolean>>;
};

const NavbarContext = createContext({} as NavbarContext);

type INavbarContextProvider = {
  children: ReactNode;
};

export const NavbarContextProvider = (props: INavbarContextProvider) => {
  const { children } = props;
  const [isMobileNavbarOpned, setIsMobileNavOpned] = useState<boolean>(false);
  const onNavbarLinkClick = () => {
    setIsMobileNavOpned(false);
  };

  const toggleMobileNavbar = () => {
    setIsMobileNavOpned(!isMobileNavbarOpned);
  };

  return (
    <NavbarContext.Provider
      value={{
        toggleMobileNavbar,
        onNavbarLinkClick,
        isMobileNavbarOpned,
        setIsMobileNavOpned,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbarContext = () => {
  return useContext(NavbarContext)
}