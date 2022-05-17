import Button from "./Button";

const Header = () => {
  const onClick = () => {
    console.log("click");
  };

  return (
    <header className="header">
      <h1>Bianca's Inventory</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
};

export default Header;
