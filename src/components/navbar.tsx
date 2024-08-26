"use client";

import { useState } from "react";
import { Logout } from "@/services/auth";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, MenuProps } from "antd";

export default function Navbar() {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setLoading(true);
      await Logout();
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <button className="flex items-center" disabled={loading} onClick={handleLogout}>
          <LogoutOutlined className="mr-2" />
          Logout
        </button>
      ),
    },
  ];

  return (
    <header className="flex items-center justify-between rounded-md border-b p-4 shadow-md">
      <h1 className="flex-1 text-center text-2xl font-bold uppercase">My ToDo App</h1>
      <Dropdown arrow menu={{ items }} placement="bottom">
        <div className="cursor-pointer">
          <Avatar icon={<UserOutlined />} />
        </div>
      </Dropdown>
    </header>
  );
}
