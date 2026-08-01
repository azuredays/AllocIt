import { FC } from "react";
import {
  Home,
  User,
  CheckSquare,
  BarChart2,
  Settings,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Page } from "../App";

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
    <div
      style={{
        width: isOpen ? "220px" : "70px",
        transition: "width 0.25s",
        background: "#1e1e1e",
        color: "white",
        padding: "0.5rem",
        display: "flex",
        flexDirection: "column"
      }}
    >
      {/* Toggle Button */}
      <button
        onClick={onToggle}
        style={{
          background: "none",
          border: "none",
          color: "white",
          marginBottom: "1rem",
          cursor: "pointer",
          alignSelf: isOpen ? "flex-end" : "center"
        }}
      >
        {isOpen ? <ChevronLeft /> : <ChevronRight />}
      </button>

      {/* Menu Items */}
      {menuItems.map((item) => (
        <button
          key={item.page}
          onClick={() => onNavigate(item.page)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            background: "none",
            border: "none",
            color: currentPage === item.page ? "#4ade80" : "white",
            padding: "0.75rem",
            cursor: "pointer",
            width: "100%",
            textAlign: "left"
          }}
        >
          {item.icon}
          {isOpen && <span>{item.label}</span>}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
