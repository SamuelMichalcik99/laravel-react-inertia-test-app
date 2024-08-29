import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from '@inertiajs/react';

export default function EditButton({ auth, Button }) {
    const { data, setData, put, errors } = useForm({
        href: Button.href,
        description: Button.description,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('buttons.update', Button.id));
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Edit Button" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="href" className="block">Link (href)</label>
                                    <input
                                        type="text"
                                        id="href"
                                        value={data.href}
                                        onChange={e => setData('href', e.target.value)}
                                        className="mt-1 block w-full text-text"
                                    />
                                    {errors.href && <div className="text-red-600">{errors.href}</div>}
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="description" className="block">Description</label>
                                    <input
                                        type="text"
                                        id="description"
                                        value={data.description}
                                        onChange={e => setData('description', e.target.value)}
                                        className="mt-1 block w-full text-text"
                                    />
                                    {errors.description && <div className="text-red-600">{errors.description}</div>}
                                </div>
                                <div className="mt-4">
                                    <button type="submit" className="bg-blue-500 text-white px-4 py-2">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
