// pages/users/index.tsx

import React, { useState } from "react";
import UserModal from "@/components/common/UserModal";
import { UserData } from "@/interfaces";

const UsersPage = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddUser = (user: UserData) => {
    setUsers((prev) => [...prev, user]);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Users</h1>

      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Add User
      </button>

      {users.length === 0 ? (
        <p className="text-gray-600">No users added yet.</p>
      ) : (
        <ul className="space-y-2">
          {users.map((user) => (
            <li key={user.id} className="p-4 border rounded shadow">
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
              <p><strong>Website:</strong> {user.website}</p>
            </li>
          ))}
        </ul>
      )}

      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddUser}
      />
    </div>
  );
};

export default UsersPage;
