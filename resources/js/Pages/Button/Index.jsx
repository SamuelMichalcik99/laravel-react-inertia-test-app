import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

export default function Buttons({auth, Buttons}) {
    return(
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Buttons
                    </h2>
                </div>
            }
        >
            <Head title="Buttons" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <ul className="flex flex-col gap-y-5">
                                {Buttons.map(button => (
                                    <li key={button.id}>
                                        <h2 className="text-xl font-semibold">Button text: {button.description}</h2>
                                        <p className="text-sm font-normal">Button link: {button.href}</p>
                                        <div className="flex gap-x-5 py-2">
                                            <Link
                                                href={route('buttons.edit', button.id)}
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
    )
}
