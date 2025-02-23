import { Home, Users, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white p-4 shadow-lg">
      <h1 className="text-xl font-bold mb-6">Admin Panel</h1>
      <ul>
        <li className="mb-2">
          <a href="#" className="flex items-center p-2 hover:bg-gray-200 rounded">
            <Home className="mr-2" /> Dashboard
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="flex items-center p-2 hover:bg-gray-200 rounded">
            <Users className="mr-2" /> Quản lý người dùng
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center p-2 hover:bg-gray-200 rounded">
            <Settings className="mr-2" /> Cài đặt
          </a>
        </li>
      </ul>
    </div>
  );
}
