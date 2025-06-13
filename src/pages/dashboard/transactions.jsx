// src/pages/dashboard/index.jsx
import { Card } from '@/components/ui/card';

export default function DashboardHome() {
    return (
        <DashboardLayout>
            <Card className="p-6">
                <h1 className="text-2xl font-semibold">Welcome to your transactions</h1>
                <p className="text-gray-600">Overview of your account</p>
            </Card>
        </DashboardLayout>
    );
}
