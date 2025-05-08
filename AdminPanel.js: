import React from "react";
import { Button } from "@/components/ui/button";

const AdminPanel = ({ users, toggleBanUser }) => {
  return (
    <div>
      <h1>Admin Panel - User Management</h1>
      {users.map((user, idx) => (
        <div key={idx} className="border p-2 rounded-md">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
          <p><strong>Status:</strong> {user.status}</p>
          {user.role !== "admin" && (
            <Button onClick={() => toggleBanUser(user.email)}>
              {user.status === "banned" ? "Unban User" : "Ban User"}
            </Button>
          )}
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;
