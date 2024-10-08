import React, { useState } from "react";
import AdminHeader from "../Admin/common/AdminHeader";
import AdminSidebar from "../Admin/common/AdminSidebar";
import { Link, useMatch, useParams, Outlet } from "react-router-dom";

function AdminLayout() {
  const matchDashBoard = useMatch("/admin/dashboard");
  const matchJobType = useMatch("/admin/jobType");
  const matchSkill = useMatch("/admin/skill");
  const matchLevel = useMatch("/admin/level");
  const matchWorkForm = useMatch("/admin/workForm");

  const getTitle = () => {
    if (matchDashBoard) return "DashBoard";
    if (matchJobType) return "Manage Type Of Job";
    if (matchSkill) return "Manage Skill";
    if (matchLevel) return "Manage Level";
    if (matchWorkForm) return "Manage Working Form";
  };

  const title = getTitle();

  return (
    <div className="flex h-full">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminHeader />

        <main className="flex-1 bg-gray-100 p-6">
          {(matchJobType || matchSkill || matchLevel || matchWorkForm) && (
            <>
              {/* Banner Image */}
              <img
                src="/src/assets/images/Banner/Banner.jpeg" // Replace with the actual URL of your banner image
                alt="Banner"
                className="w-cover h-33 pb-4 object-cover " // Adjust height as needed
              />
              <span className="text-2xl font-bold pl-1">{title}</span>
            </>
          )}
          {matchDashBoard && (
            <>
              <span className="text-2xl font-bold pl-1">{title}</span>
            </>
          )}
          <div className="pt-2">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;