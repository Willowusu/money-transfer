// StepAddress.jsx
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function StepAddress({ data, update }) {
    return (
        <div className="space-y-4">
            <div>
                <Label>Street Address</Label>
                <Input
                    type="text"
                    value={data.address}
                    onChange={(e) => update('address', e.target.value)}
                    required
                />
            </div>
            <div>
                <Label>City</Label>
                <Input
                    type="text"
                    value={data.city}
                    onChange={(e) => update('city', e.target.value)}
                    required
                />
            </div>
            <div>
                <Label>Postal Code</Label>
                <Input
                    type="text"
                    value={data.zip}
                    onChange={(e) => update('zip', e.target.value)}
                    required
                />
            </div>
            <div>
                <Label>State / Province</Label>
                <Input
                    type="text"
                    value={data.state}
                    onChange={(e) => update('state', e.target.value)}
                />
            </div>
            <div>
                <Label>Country</Label>
                <Input
                    type="text"
                    value={data.country}
                    onChange={(e) => update('country', e.target.value)}
                    required
                />
            </div>
        </div>
    );
}