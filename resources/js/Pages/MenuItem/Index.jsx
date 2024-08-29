import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

export default function MenuItems({auth, MenuItems}) {
    return(
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Menu Items
                    </h2>
                    <Link
                        href={route('menu_items.create')}
                        className="bg-emerald-500 py-2 px-4 rounded shadow transition-all hover:bg-emerald-600 text-gray-100">
                        Add New
                    </Link>
                </div>

                }
        >
        <Head title="Menu Items" />

        <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <ul className="flex flex-col gap-y-5">
                                {MenuItems.map(menuItem => (
                                    <li key={menuItem.id}>
                                        <h4 className="text-xl font-semibold">{menuItem.title}</h4>
                                        <p className="text-sm font-normal">{menuItem.description}</p>
                                        <div className="flex gap-x-5 py-2">
                                            <Link
                                                href={route('menu_items.edit', menuItem.id)}
                                                className="bg-blue-500 py-2 px-4 rounded shadow transition-all hover:bg-blue-600 text-gray-100"
                                            >
                                                Edit
                                            </Link>
                                            <Link
                                                href={route('menu_items.destroy', menuItem.id)}
                                                method="delete"
                                                as="button"
                                                className="bg-red-500 py-2 px-4 rounded shadow transition-all hover:bg-red-600 text-gray-100"
                                            >
                                                Delete
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
    )
}
