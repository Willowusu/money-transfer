// StepPersonal.jsx
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function StepPersonal({ data, update }) {
    return (
        <div className="space-y-4">
            <div>
                <Label>First Name</Label>
                <Input
                    type="text"
                    placeholder="Enter your first name here..."
                    value={data.firstName}
                    onChange={(e) => update('firstName', e.target.value)}
                    required
                />
            </div>
            <div>
                <Label>Last Name</Label>
                <Input
                    type="text"
                    placeholder="Enter your last name here..."
                    value={data.lastName}
                    onChange={(e) => update('lastName', e.target.value)}
                    required
                />
            </div>
            <div>
                <Label>Phone Number</Label>
                <Input
                    type="tel"
                    placeholder="233 244 456 456"
                    value={data.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    required
                />
            </div>
        </div>
    );
}