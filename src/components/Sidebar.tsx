import { FC } from "react";
import {
  Home,
  User,
  CheckSquare,
  BarChart2,
  Settings,
  Menu
} from "lucide-react";
import { Page } from "../App";
import "./Sidebar.css";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, onToggle, onNavigate, currentPage }) => {
  const menuItems = [
    { label: "Home", page: "home" as Page, icon: <Home size={20} /> },
    { label: "My Profile", page: "profile" as Page, icon: <User size={20} /> },
    { label: "Tasks", page: "tasks" as Page, icon: <CheckSquare size={20} /> },
    { label: "Statistics", page: "statistics" as Page, icon: <BarChart2 size={20} /> },
    { label: "Settings", page: "settings" as Page, icon: <Settings size={20} /> },
  ];

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      
      <div className="menu">
        {/* Hamburger Toggle */}
        <button className="menu-toggle" onClick={onToggle}>
          <Menu size={20} />
          {isOpen && <span>Menu</span>}
        </button>

        {/* Menu Items */}
        {menuItems.map((item) => (
          <button
            key={item.page}
            onClick={() => onNavigate(item.page)}
            className={`menu-item ${currentPage === item.page ? "active" : ""}`}
          >
            {item.icon}
            {isOpen && <span>{item.label}</span>}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
