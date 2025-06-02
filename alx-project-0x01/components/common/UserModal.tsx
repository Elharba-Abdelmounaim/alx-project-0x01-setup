// components/common/UserModal.tsx

import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState<UserData>({
    id: Date.now(), // Generate temporary ID
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl w-[90%] md:w-[600px]">
        <h2 className="text-2xl font-semibold mb-4">Add New User</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border p-2 mb-2 w-full"
          onChange={handleChange}
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="border p-2 mb-2 w-full"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-2 mb-2 w-full"
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          className="border p-2 mb-2 w-full"
          onChange={handleChange}
        />
        <input
          type="text"
          name="website"
          placeholder="Website"
          className="border p-2 mb-4 w-full"
          onChange={handleChange}
        />

        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onSave(formData);
              onClose();
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
