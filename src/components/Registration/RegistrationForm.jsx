// components/Registration/RegistrationForm.jsx
'use client';

import { useState } from 'react';
import StepAccount from './StepAccount';
import StepPersonal from './StepPersonal';
import StepAddress from './StepAddress';
import StepUse from './StepUse';
import { Button } from '@/components/ui/button';

const steps = ['Account', 'Personal', 'Address', 'Usage'];

export default function RegistrationForm() {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        phone: '',
        address: '',
        city: '',
        zip: '',
        state: '',
        country: '',
        destinationCountry: '',
    });

    const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
    const back = () => setStep((s) => Math.max(s - 1, 0));
    const updateField = (field, value) =>
        setFormData((prev) => ({ ...prev, [field]: value }));

    return (
        <div className="w-full max-w-xl mx-auto bg-white shadow rounded-xl p-6 space-y-6 flex-grow">
            <div className="text-center">
                <h2 className="text-2xl font-semibold text-gray-800">
                    Step {step + 1} of {steps.length}: {steps[step]}
                </h2>
            </div>

            {step === 0 && <StepAccount data={formData} update={updateField} />}
            {step === 1 && <StepPersonal data={formData} update={updateField} />}
            {step === 2 && <StepAddress data={formData} update={updateField} />}
            {step === 3 && <StepUse data={formData} update={updateField} />}

            <div className="flex justify-between pt-4">
                {step > 0 ? (
                    <Button variant="outline" onClick={back}>
                        Back
                    </Button>
                ) : (
                    <div />
                )}

                {step < steps.length - 1 ? (
                    <Button onClick={next}>Next</Button>
                ) : (
                    <Button onClick={() => console.log(formData)}>Register</Button>
                )}
            </div>
        </div>
    );
}
