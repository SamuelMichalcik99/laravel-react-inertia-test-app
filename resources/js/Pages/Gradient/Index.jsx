import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

export default function Gradients({ auth, Gradients }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Gradients
                    </h2>
                </div>
            }
        >
            <Head title="Gradients" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <ul className="flex flex-col gap-y-5">
                                {Gradients.map(gradient => (
                                    <li key={gradient.id}>
                                        <h2 className="text-xl font-semibold">Gradient usage: {gradient.usage}</h2>
                                        <div className="mt-2 flex items-center">
                                            <label className="block w-16 font-medium text-sm text-gray-700 dark:text-gray-300">Color 1:</label>
                                            <input
                                                type="color"
                                                value={gradient.color_1}
                                                disabled
                                                className="w-8 h-8 cursor-default"
                                            />
                                        </div>
                                        <div className="mt-2 flex items-center">
                                            <label className="block w-16 font-medium text-sm text-gray-700 dark:text-gray-300">Color 2:</label>
                                            <input
                                                type="color"
                                                value={gradient.color_2}
                                                disabled
                                                className="w-8 h-8 cursor-default"
                                            />
                                        </div>
                                        <div className="flex gap-x-5 py-2">
                                            <Link
                                                href={route('gradients.edit', gradient.id)}
                                                className="bg-blue-500 py-2 px-4 rounded shadow transition-all hover:bg-blue-600 text-gray-100"
                                            >
                                                Edit
                                            </Link>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
