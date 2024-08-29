<?php

namespace Database\Seeders;

use App\Models\Button;
use App\Models\MenuItem;
use App\Models\TextContent;
use App\Models\User;
use App\Models\Picture;
use App\Models\Gradient;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     *
     * ATTENTION for correct "php artisan migrate:refresh --seed" uncomennt line 29 and 46 to truncate and full users
     *
     */
    public function run(): void
    {
        $this->truncateTables();

        //$this->seedUsers();
        $this->seedMenuItems();
        $this->seedPictures();
        $this->seedTextContents();
        $this->seedButtons();
        $this->seedGradients();
    }

    private function truncateTables(): void
    {
        // List of tables to truncate
        $tables = [
            'menu_items',
            'pictures',
            'text_contents',
            'buttons',
            'gradients',
            //'users',
        ];

        foreach ($tables as $table) {
            // Disable foreign key checks
            Schema::disableForeignKeyConstraints();

            // Truncate table
            DB::table($table)->truncate();

            // Enable foreign key checks
            Schema::enableForeignKeyConstraints();
        }
    }

    private function seedUsers(): void
    {
        // Create a specific test user
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);
    }

    private function seedMenuItems(): void
    {
        $menuItems = [
            [
                'title' => 'Services',
                'description' => $this->getLoremIpsum(),
                'modified_by' => 1,
            ],
            [
                'title' => 'About',
                'description' => $this->getLoremIpsum(),
                'modified_by' => 1,
            ],
            [
                'title' => 'Contact',
                'description' => $this->getLoremIpsum(),
                'modified_by' => 1,
            ],
        ];

        foreach ($menuItems as $menuItem) {
            MenuItem::factory()->create($menuItem);
        }
    }

    private function seedPictures(): void
    {
        $pictures = [
            [
                'usage' => 'logo',
                'description' => 'Site logo',
                'image_path' => 'storage/default-images/site-logo.png',
                'modified_by' => 1,
            ],
            [
                'usage' => 'left-bg',
                'description' => 'Left background image',
                'image_path' => 'storage/default-images/left-bg.png',
                'modified_by' => 1,
            ],
            [
                'usage' => 'right-bg',
                'description' => 'Right background image',
                'image_path' => 'storage/default-images/right-bg.png',
                'modified_by' => 1,
            ],
            [
                'usage' => 'main-img',
                'description' => 'Main image',
                'image_path' => 'storage/default-images/main-img.png',
                'modified_by' => 1,
            ],
            [
                'usage' => 'additional-img',
                'description' => 'Additional image',
                'image_path' => 'storage/default-images/additional-img.png',
                'modified_by' => 1,
            ],
            [
                'usage' => 'left-img',
                'description' => 'Left image',
                'image_path' => 'storage/default-images/left-img.png',
                'modified_by' => 1,
            ],
            [
                'usage' => 'top-img-1',
                'description' => 'Top image 1',
                'image_path' => 'storage/default-images/top-img-1.png',
                'modified_by' => 1,
            ],
            [
                'usage' => 'top-img-2',
                'description' => 'Top image 2',
                'image_path' => 'storage/default-images/top-img-2.png',
                'modified_by' => 1,
            ],
            [
                'usage' => 'bottom-img',
                'description' => 'Bottom image',
                'image_path' => 'storage/default-images/bottom-img.png',
                'modified_by' => 1,
            ],
            [
                'usage' => 'play-icon',
                'description' => 'Button image',
                'image_path' => 'storage/default-images/play-icon.png',
                'modified_by' => 1,
            ],

        ];

        foreach ($pictures as $picture) {
            Picture::factory()->create($picture);
        }
    }

    private function seedTextContents(): void
    {
        $textContents = [
            [
                'usage' => 'title',
                'description' => 'Protect Our Water Buddies',
                'modified_by' => 1,
            ],
            [
                'usage' => 'content',
                'description' => 'You did not inherit the Earth’s water from your ancestors, you owe it to your future generations ahead.',
                'modified_by' => 1,
            ],
        ];

        foreach ($textContents as $textContent) {
            TextContent::factory()->create($textContent);
        }
    }

    private function seedButtons(): void
    {
        $buttons = [
            [
                'usage' => 'left-btn',
                'description' => 'let\'s begin',
                'href' => '#',
                'modified_by' => 1,
            ],
            [
                'usage' => 'right-btn',
                'description' => 'watch video',
                'href' => '#',
                'modified_by' => 1,
            ],
        ];

        foreach ($buttons as $button) {
            Button::factory()->create($button);
        }
    }

    private function seedGradients(): void
    {
        $gradients = [
            [
                'usage' => 'page-bg',
                'color_1' => '#C1E9FF',
                'color_2' => '#D1C1FF',
                'modified_by' => 1,
            ]
        ];

        foreach ($gradients as $gradient) {
            Gradient::factory()->create($gradient);
        }
    }

    private function getLoremIpsum(): string
    {
        return 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, blanditiis. Ab maxime quam, possimus eum esse, rerum non et libero at, voluptate fuga aliquam reiciendis dicta sed aperiam quisquam dignissimos!';
    }
}
