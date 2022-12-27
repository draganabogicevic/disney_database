import { SvgIcon } from "@mui/material";

const MenuBurger = (props) => {
  // const inactiveColor = useColorModeValue('#24293E', '#EFF0F6')
  // const activeColor = '#FBD38D'

  return (
    <SvgIcon
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M31.001 8V3H19.001V8H31.001Z" />
      <path d="M30.999 22V17H12.999V22H30.999Z" />
      <path d="M31 29V24H6V29H31Z" />
      <path d="M30.999 15V10H0.999023L0.999023 15H30.999Z" />
    </SvgIcon>
  );
};

export default MenuBurger;
