
const NavLink = ({href, text}) => {

  return (
    <a
      className="text-white hover:text-lime-200 text-lg uppercase font-semibold"
      href={href}
    >
      {text}
    </a>
  );
};

export default NavLink;

