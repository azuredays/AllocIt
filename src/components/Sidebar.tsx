import { FC } from "react";
import { Home, User, CheckSquare, BarChart2, Settings, Menu } from "lucide-react";
import SidebarItem from "./SidebarItem";
import { Page } from "../App";
import "./Sidebar.css";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

const menuItems = [
  { label: "Home", page: "home" as Page, icon: Home },
  { label: "Tasks", page: "tasks" as Page, icon: CheckSquare },
  { label: "Statistics", page: "statistics" as Page, icon: BarChart2 },
  { label: "My Profile", page: "profile" as Page, icon: User },
  { label: "Settings", page: "settings" as Page, icon: Settings },
];

const Sidebar: FC<SidebarProps> = ({ isOpen, onToggle, onNavigate, currentPage }) => {
  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`} role="navigation" aria-label="Main">
      <div className="menu">
        <button
          className="menu-toggle"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-label="Toggle sidebar"
        >
          <Menu size={20} />
          <span className="menu-label">{isOpen ? "Menu" : ""}</span>
        </button>

        <nav className="menu-list" aria-label="Primary">
          {menuItems.map((item) => (
            <SidebarItem
              key={item.page}
              label={item.label}
              page={item.page}
              Icon={item.icon}
              isOpen={isOpen}
              active={currentPage === item.page}
              onClick={(p) => onNavigate(p as Page)}
            />
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
