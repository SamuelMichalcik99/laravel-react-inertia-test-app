import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from '@inertiajs/react';

export default function Pictures({ auth, Pictures }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Pictures
                    </h2>
                    <Link
                        href={route('favicon.edit')}
                        className="bg-blue-500 py-2 px-4 rounded shadow transition-all hover:bg-blue-600 text-gray-100">
                        Edit favicon
                    </Link>
                </div>
            }
        >
            <Head title="Pictures" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="grid grid-cols-2 gap-4 l-mobile:grid-cols-1">
                                {Pictures.map(picture => (
                                    <div key={picture.id} className="flex flex-col border border-gray-200 rounded bg-gray-50 dark:bg-gray-700 h-full">
                                        {/* Content Wrapper */}
                                        <div className="flex-1 h-48 p-4 flex flex-col justify-between">
                                            <div>
                                                <h2 className="text-xl font-semibold">Usage: {picture.usage}</h2>
                                                <p className="text-sm font-normal">Description: {picture.description}</p>
                                            </div>
                                            {picture.image_path && (
                                                <img
                                                src={picture.image_path}
                                                alt={picture.description}
                                                className="w-full h-24 object-contain rounded mt-2"
                                            />
                                            )}
                                        </div>
                                        <div className="p-4">
                                            <Link
                                                href={route('pictures.edit', picture.id)}
                                                className="bg-blue-500 py-2 px-4 rounded shadow transition-all hover:bg-blue-600 text-gray-100"
                                            >
                                                Edit
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

