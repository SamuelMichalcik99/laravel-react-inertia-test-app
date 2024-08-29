import React from 'react';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function EditGradient({ auth, Gradient }) {
    const { data, setData, put, processing, errors } = useForm({
        color_1: Gradient.color_1 || '#C1E9FF',
        color_2: Gradient.color_2 || '#D1C1FF',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('gradients.update', Gradient.id));
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Edit Gradient" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form onSubmit={handleSubmit}>
                                <div className="mt-4 flex items-center gap-x-5">
                                    <label htmlFor="color_1" className="block w-16 font-medium text-sm text-gray-700 dark:text-gray-300">Color 1</label>
                                    <input
                                        id="color_1"
                                        type="color"
                                        value={data.color_1}
                                        onChange={e => setData('color_1', e.target.value)}
                                        className="mt-1 block w-10 h-10"
                                    />
                                    {errors.color_1 && <div className="text-red-600">{errors.color_1}</div>}
                                </div>
                                <div className="mt-4 flex items-center gap-x-5">
                                    <label htmlFor="color_2" className="block w-16 font-medium text-sm text-gray-700 dark:text-gray-300">Color 2</label>
                                    <input
                                        id="color_2"
                                        type="color"
                                        value={data.color_2}
                                        onChange={e => setData('color_2', e.target.value)}
                                        className="mt-1 block w-10 h-10"
                                    />
                                    {errors.color_2 && <div className="text-red-600">{errors.color_2}</div>}
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className={`bg-blue-500 text-white px-4 py-2 rounded shadow ${processing ? 'opacity-50' : ''}`}
                                        disabled={processing}
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>

                            {/* Display any validation errors */}
                            {errors.color_1 && <p className="mt-2 text-sm text-red-600">{errors.color_1}</p>}
                            {errors.color_2 && <p className="mt-2 text-sm text-red-600">{errors.color_2}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
