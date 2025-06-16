// src/pages/dashboard/index.jsx
// import { Card } from "@/components/ui/card";

// export default function DashboardHome() {
//   return (
//     <DashboardLayout>
//       <Card className="p-6">
//         <h1 className="text-2xl font-semibold">Welcome to your transactions</h1>
//         <p className="text-gray-600">Overview of your account</p>
//       </Card>
//     </DashboardLayout>
//   );
// }

// src/pages/dashboard/transactions.jsx

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

export default function TransactionsPage() {
  const transactions = [
    {
      id: "TXN-001",
      recipient: "John Doe",
      amount: "₵150.00",
      status: "Success",
      method: "Mobile Money",
      date: "2024-06-12",
    },
    {
      id: "TXN-002",
      recipient: "Jane Smith",
      amount: "₵230.50",
      status: "Pending",
      method: "Bank Transfer",
      date: "2024-06-14",
    },
    {
      id: "TXN-003",
      recipient: "Kwame Mensah",
      amount: "₵89.99",
      status: "Failed",
      method: "Card",
      date: "2024-06-15",
    },
  ];

  return (
    <Card className="p-6">
      <h1 className="text-2xl font-semibold mb-2">Transactions</h1>
      <p className="text-gray-600 mb-4">
        All your payment and transfer history
      </p>

      <div className="overflow-x-auto rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">#</TableHead>
              <TableHead>Transaction ID</TableHead>
              <TableHead>Recipient</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((txn, index) => (
              <TableRow key={txn.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{txn.id}</TableCell>
                <TableCell>{txn.recipient}</TableCell>
                <TableCell>{txn.amount}</TableCell>
                <TableCell>{txn.status}</TableCell>
                <TableCell>{txn.method}</TableCell>
                <TableCell>{txn.date}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                    <Button size="sm" variant="ghost">
                      Download
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
