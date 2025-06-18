import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"


const recipients = [
    { name: "Ama", avatar: "/avatars/ama.png" },
    { name: "John", avatar: "/avatars/john.png" },
    { name: "Liu", avatar: "/avatars/liu.png" },
]

const wallets = [
    {
        country: "Ghana",
        flag: "🇬🇭",
        balance: "₵4,200",
    },
    {
        country: "Nigeria",
        flag: "🇳🇬",
        balance: "₦98,000",
    },
    {
        country: "USA",
        flag: "🇺🇸",
        balance: "$98,000",
    },

]

const chartData = [
    { date: "May 1", amount: 120 },
    { date: "May 2", amount: 300 },
    { date: "May 3", amount: 250 },
    { date: "May 4", amount: 500 },
    { date: "May 5", amount: 430 },
]

const stats = [
    { label: "Total Sent (This Month)", value: "₵2,350" },
    { label: "# Transactions", value: "14" },
    { label: "Total Recipients", value: "6" },
    { label: "Lifetime Sent", value: "₵12,980" },
]

const transactions = [
    { id: "TX001", recipient: "Ama", amount: "₵500", date: "2025-06-01", status: "Completed" },
    { id: "TX002", recipient: "John", amount: "₵200", date: "2025-05-30", status: "Pending" },
    { id: "TX003", recipient: "Liu", amount: "₵800", date: "2025-05-28", status: "Completed" },
    { id: "TX004", recipient: "Carlos", amount: "₵150", date: "2025-05-25", status: "Failed" },
]

export default function DashboardHome() {
    return (
        <div className="p-6 md:p-10">
            {/* Page Title */}
            <h1 className="text-3xl font-bold text-gray-800 mb-10">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                {/* LEFT SIDE */}
                <div className="space-y-8 pt-5">
                    {/* Statistics */}
                    <div>
                        <h4 className="text-xl text-gray-600 font-bold mb-4">Statistics</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {stats.map((stat) => (
                                <Card key={stat.label} className="shadow-none">
                                    <CardContent className="p-4">
                                        <p className="text-sm text-gray-500">{stat.label}</p>
                                        <p className="text-2xl font-bold text-green-700">{stat.value}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Graph */}
                    <div>
                        <h4 className="text-xl text-gray-600 font-bold mb-4">Transfer History</h4>
                        <div className="bg-white pt-4 pb-4 px-0 rounded-xl">
                            <ResponsiveContainer width="100%" height={400}>
                                <LineChart data={chartData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="date" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line
                                        type="monotone"
                                        dataKey="amount"
                                        stroke="#22c55e"
                                        strokeWidth={2}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE*/}
                <div>
                    <div className="space-y-8 pt-5">
                        {/* Wallets */}
                        <div>
                            <h4 className="text-xl text-gray-600 font-bold mb-4">Wallets</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                                {wallets.map((wallet) => (
                                    <Card key={wallet.country} className="shadow-none">
                                        <CardContent className="p-4">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="font-medium">{wallet.country}</span>
                                                <span className="text-2xl">{wallet.flag}</span>
                                            </div>
                                            <div className="text-2xl font-bold">
                                                {wallet.balance}
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Send Money */}
                        <div>
                            <h4 className="text-xl text-gray-600 font-bold mb-4">Send Money</h4>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {recipients.map((recipient) => (
                                    <Card key={recipient.name} className="text-center shadow-none">
                                        <CardContent className="p-4 flex flex-col items-center">
                                            <Avatar className="w-12 h-12 mb-2">
                                                <AvatarImage src={recipient.avatar} alt={recipient.name} />
                                                <AvatarFallback>{recipient.name[0]}</AvatarFallback>
                                            </Avatar>
                                            <span className="text-sm font-medium">{recipient.name}</span>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Transactions */}
                        <div className="pb-12">
                            <h4 className="text-xl text-gray-600 font-bold mb-4">Transactions</h4>
                            <div className="bg-white rounded-xl shadow overflow-x-auto p-4">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>ID</TableHead>
                                            <TableHead>Recipient</TableHead>
                                            <TableHead>Amount</TableHead>
                                            <TableHead>Date</TableHead>
                                            <TableHead>Status</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {transactions.map((tx) => (
                                            <TableRow key={tx.id}>
                                                <TableCell className="py-4">{tx.id}</TableCell>
                                                <TableCell className="py-4">{tx.recipient}</TableCell>
                                                <TableCell className="py-4">{tx.amount}</TableCell>
                                                <TableCell className="py-4">{tx.date}</TableCell>
                                                <TableCell className="py-4 font-medium">{tx.status}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
