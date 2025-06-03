// StepUse.jsx
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

export default function StepUse({ data, update }) {
    const countries = ['Ghana', 'Nigeria', 'Kenya', 'Philippines', 'India'];

    return (
        <div className="space-y-4">
            <div>
                <Label>Country you want to send to</Label>
                <Select
                    value={data.destinationCountry}
                    onValueChange={(value) => update('destinationCountry', value)}
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                    <SelectContent>
                        {countries.map((country) => (
                            <SelectItem key={country} value={country}>
                                {country}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
}
