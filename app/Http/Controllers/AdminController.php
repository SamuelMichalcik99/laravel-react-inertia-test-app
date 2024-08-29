<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AdminController extends Controller
{

    public function index()
    {
        return Inertia::render('Admin');
    }

    // Method to reset content to default values
    public function resetToDefaults()
    {
        // Delete all non-default images
        $allImages = Storage::allFiles('public/images');
        $defaultImages = Storage::allFiles('public/default-images');

        $nonDefaultImages = array_diff($allImages, $defaultImages);

        foreach ($nonDefaultImages as $image) {
            Storage::delete($image);
        }

        Artisan::call('migrate:refresh', [
            '--path' => '/database/migrations/2024_08_24_140748_create_menu_items_table.php',
            '--seed' => true,
            '--force' => true,
        ]);

        Artisan::call('migrate:refresh', [
            '--path' => '/database/migrations/2024_08_24_141131_create_text_contents_table.php',
            '--seed' => true,
            '--force' => true,
        ]);

        Artisan::call('migrate:refresh', [
            '--path' => '/database/migrations/2024_08_24_141141_create_pictures_table.php',
            '--seed' => true,
            '--force' => true,
        ]);

        Artisan::call('migrate:refresh', [
            '--path' => '/database/migrations/2024_08_24_203434_create_buttons_table.php',
            '--seed' => true,
            '--force' => true,
        ]);

        Artisan::call('migrate:refresh', [
            '--path' => '/database/migrations/2024_08_29_101242_create_gradients_table.php',
            '--seed' => true,
            '--force' => true,
        ]);

        return redirect()->route('admin.index')->with('success', 'Content has been reset to default values.');
    }
}
