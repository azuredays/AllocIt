import { JSX, useState } from "react";
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

  const pages: Record<Page, JSX.Element> = {
    home: <HomePage />,
    profile: <ProfilePage />,
    tasks: <TasksPage />,
    statistics: <StatisticsPage />,
    settings: <SettingsPage />,
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <Sidebar
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen((s) => !s)}
        onNavigate={setCurrentPage}
        currentPage={currentPage}
      />

      <main
        style={{
          flex: 1,
          padding: "1rem",
          overflowY: "auto", // allows main content to scroll independently
          overflowX: "hidden",
          height: "100%",
        }}
      >
        {pages[currentPage]}
      </main>
    </div>
  );
}

export default App;
