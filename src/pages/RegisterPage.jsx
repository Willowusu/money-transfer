// src/pages/register.jsx or app/register/page.jsx
import RegistrationForm from '@/components/Registration/RegistrationForm';

export default function RegisterPage() {
    return (
            <div className="min-h-screen flex flex-col md:flex-row">
                {/* Left Side - Illustration / Info */}
            <div className="md:w-1/2 bg-custom-blue-100 flex items-center justify-center p-10">
                    <div className="text-center md:text-left space-y-6 max-w-md">
                        <h2 className="text-3xl font-bold text-white">
                            Create your account
                        </h2>
                        <p className="text-gray-700">
                            Send money faster and cheaper to Africa, Asia, the Caribbean, and Latin America.
                        </p>
                        <img
                            src="https://placehold.co/300x500?text=Illustration"
                            alt="Registration illustration"
                            className="mx-auto md:mx-0 rounded-xl"
                        />
                    </div>
                </div>

                {/* Right Side - Form */}
                
            <div className="w-full max-w-lg bg-white flex items-center justify-center p-6 mx-auto">

                    <RegistrationForm />
                </div>
            </div>
    );
}
