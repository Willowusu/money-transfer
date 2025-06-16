// src/pages/dashboard/recipients.jsx
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function RecipientsPage() {
  const recipients = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+233123456789",
      totalSent: 5,
      dateCreated: "2024-06-01",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+233987654321",
      totalSent: 2,
      dateCreated: "2024-05-21",
    },
  ];

  return (
    <Card className="p-6">
      <h1 className="text-2xl font-semibold mb-2">Recipients</h1>
      <p className="text-gray-600 mb-4">All recipients added to your account</p>

      <div className="overflow-x-auto rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">#</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone Number</TableHead>
              <TableHead>Total Sent To</TableHead>
              <TableHead>Date Created</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recipients.map((recipient, index) => (
              <TableRow key={recipient.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{recipient.name}</TableCell>
                <TableCell>{recipient.email}</TableCell>
                <TableCell>{recipient.phone}</TableCell>
                <TableCell>{recipient.totalSent}</TableCell>
                <TableCell>{recipient.dateCreated}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                    <Button size="sm" variant="destructive">
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
