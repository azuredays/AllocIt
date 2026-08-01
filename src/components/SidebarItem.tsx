import React, { FC } from "react";

interface SidebarItemProps {
  label: string;
  page: string;
  Icon: React.ComponentType<{ size?: number }>;
  isOpen: boolean;
  active: boolean;
  onClick: (page: string) => void;
}

const SidebarItem: FC<SidebarItemProps> = ({ label, page, Icon, isOpen, active, onClick }) => {
  return (
    <button
      type="button"
      className={`menu-item ${active ? "active" : ""}`}
      onClick={() => onClick(page)}
      aria-current={active ? "page" : undefined}
      title={!isOpen ? label : undefined}
    >
      <Icon size={20} />
      <span className="menu-label">{label}</span>
    </button>
  );
};

export default SidebarItem;
