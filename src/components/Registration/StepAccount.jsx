// components/Registration/StepAccount.jsx
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function StepAccount({ data, update }) {
    return (
        <div className="space-y-4">
            <div>
                <Label>Email</Label>
                <Input
                    type="email"
                    placeholder="johndoe@mail.com"
                    value={data.email}
                    onChange={(e) => update('email', e.target.value)}
                    required
                />
            </div>
            <div>
                <Label>Password</Label>
                <Input
                    type="password"
                    placeholder="**********"
                    value={data.password}
                    onChange={(e) => update('password', e.target.value)}
                    required
                />
            </div>
            <div>
                <Label>Confirm Password</Label>
                <Input
                    type="password"
                    placeholder="**********"
                    value={data.confirmPassword}
                    onChange={(e) => update('confirmPassword', e.target.value)}
                    required
                />
            </div>
        </div>
    );
}
