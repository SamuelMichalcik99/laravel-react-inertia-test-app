import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, router } from '@inertiajs/react';

export default function EditPicture({ auth, Picture }) {
    const { data, setData, errors } = useForm({
        description: Picture.description || '',
        image: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post(route('pictures.update', Picture.id), {
            ...data,
            _method: 'put',
            forceFormData: true,
        });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Edit Picture" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form onSubmit={handleSubmit}>
                                <div>
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
                                    <label htmlFor="image" className="block">Upload New Image</label>
                                    <input
                                        type="file"
                                        id="image"
                                        onChange={e => setData('image', e.target.files[0])}
                                        className="mt-1 block w-full text-text"
                                    />
                                    {errors.image && <div className="text-red-600">{errors.image}</div>}
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
