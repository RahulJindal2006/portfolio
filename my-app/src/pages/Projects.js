import react from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import '../styles/Projects.css'
function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">IDEAS TO REALITY</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              description={menuItem.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;