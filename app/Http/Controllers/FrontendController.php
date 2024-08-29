<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Route;
use App\Models\Picture;
use App\Models\MenuItem;
use App\Models\Button;
use App\Models\TextContent;
use App\Models\Gradient;
use Inertia\Inertia;

class FrontendController extends Controller
{
    public function index()
    {
        $pictures = Picture::all()->mapWithKeys(function ($picture) {
            return [
                $picture->usage => [
                    'description' => $picture->description,
                    'image_path' => $picture->image_path,
                ],
            ];
        });

        $buttons = Button::all()->mapWithKeys(function ($button) {
            return [
                $button->usage => [
                    'description' => $button->description,
                    'href' => $button->href,
                ],
            ];
        });

        $textContents = TextContent::all()->mapWithKeys(function ($textContent) {
            return [
                $textContent->usage => [
                    'description' => $textContent->description,
                ],
            ];
        });

        $menuItems = MenuItem::all()->map(function ($menuItem) {
            return [
                'title' => $menuItem->title,
                'description' => $menuItem->description,
            ];
        });

        $gradients = Gradient::all()->map(function ($gradient) {
            return [
                'color_1' => $gradient->color_1,
                'color_2' => $gradient->color_2,
            ];
        });

        return Inertia::render('Welcome', [
            'pictures' => $pictures,
            'buttons' => $buttons,
            'text_contents' => $textContents,
            'menu_items' => $menuItems,
            'gradients' => $gradients,
            //'canLogin' => Route::has('login'),
            //'canRegister' => Route::has('register'),
        ]);
    }
}
