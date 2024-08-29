import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function Admin({ auth }) {
    // Use Inertia's useForm hook for the reset action
    const { post } = useForm();

    // Handle the reset action
    const handleReset = () => {
        if (confirm('Are you sure you want to reset the content to default values?')) {
            post(route('admin.reset'));
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Admin Panel</h2>}
        >
            <Head title="Admin Panel" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100 flex justify-between items-center l-mobile:flex-col l-mobile:gap-y-3">
                            <p>You're logged in!</p>
                            <button
                                onClick={handleReset}
                                className="bg-red-500 text-white py-2 px-4 rounded shadow transition-all hover:bg-red-600"
                            >
                                Reset content to default values
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
