import React from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function App() {
  const [isSidebarVisible, setIsSidbarVisible] = React.useState(true);

  const handleToggleSidebar = React.useCallback(() => setIsSidbarVisible(s => !s), []);

  return (
    <div className="grid grid-cols-12 h-screen">
      <div className={isSidebarVisible ? "col-span-2  shadow-xl" : "hidden"}>
        <Sidebar />
      </div>
      <div className={isSidebarVisible ? "col-span-10 bg-gradient-to-l bg-[#b3e5fc]" : "col-span-12 bg-gradient-to-l bg-[#b3e5fc]"}>
        <Header {...{
          handleToggleSidebar
        }} />
        <div  className="px-5 py-5 w-full">
          <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default App;
