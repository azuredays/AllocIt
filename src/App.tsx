import { useState } from "react";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import TasksPage from "./pages/TasksPage";
import StatisticsPage from "./pages/StatisticsPage";
import SettingsPage from "./pages/SettingsPage";

export type Page = "home" | "profile" | "tasks" | "statistics" | "settings";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const renderPage = () => {
    switch (currentPage) {
      case "profile": return <ProfilePage />;
      case "tasks": return <TasksPage />;
      case "statistics": return <StatisticsPage />;
      case "settings": return <SettingsPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        onNavigate={setCurrentPage}
        currentPage={currentPage}
      />

      <div style={{ flex: 1, padding: "1rem" }}>
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
