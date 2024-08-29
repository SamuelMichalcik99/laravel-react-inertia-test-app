import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from '@inertiajs/react';

export default function EditFavicon({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        favicon: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('favicon.update'), {
            forceFormData: true,
            data: {
                favicon: data.favicon,
            },
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Edit Favicon
                    </h2>
                </div>
            }
        >
            <Head title="Edit Favicon" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="favicon" className="block">Upload New Favicon</label>
                                    <input
                                        type="file"
                                        id="favicon"
                                        onChange={e => setData('favicon', e.target.files[0])}
                                        className="mt-1 block w-full text-text"
                                    />
                                    {errors.favicon && <div className="text-red-600">{errors.favicon}</div>}
                                </div>
                                <div className="mt-4">
                                    <button type="submit" className="bg-blue-500 text-white px-4 py-2" disabled={processing}>
                                        {processing ? 'Updating...' : 'Update Favicon'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
