import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, Thead, Tbody, Tr, Th, Td } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Plus, Edit, Trash } from "lucide-react";

export default function AdminDashboard() {
  const [users, setUsers] = useState([
    { id: 1, name: "Nguyễn Văn A", role: "User" },
    { id: 2, name: "Trần Thị B", role: "Admin" },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Quản lý người dùng</h1>
      <div className="mb-4 flex gap-2">
        <Input placeholder="Tìm kiếm người dùng..." />
        <Button><Plus size={16} className="mr-2" /> Thêm người dùng</Button>
      </div>
      <Card>
        <CardContent>
          <Table>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Tên</Th>
                <Th>Vai trò</Th>
                <Th>Hành động</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map((user) => (
                <Tr key={user.id}>
                  <Td>{user.id}</Td>
                  <Td>{user.name}</Td>
                  <Td>{user.role}</Td>
                  <Td>
                    <Button variant="outline" className="mr-2"><Edit size={16} /></Button>
                    <Button variant="destructive"><Trash size={16} /></Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
