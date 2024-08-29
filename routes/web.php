<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\GradientController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PictureController;
use App\Http\Controllers\MenuItemController;
use App\Http\Controllers\ButtonController;
use App\Http\Controllers\TextContentController;
use App\Http\Controllers\FrontendController;
use Illuminate\Support\Facades\Route;

Route::get('/', [FrontendController::class, 'index']);

Route::middleware(['auth','verified'])->group(function () {
    Route::get('/admin', [AdminController::class, 'index'])->name('admin.index');
    Route::post('/admin/reset', [AdminController::class, 'resetToDefaults'])->name('admin.reset');

    /* All CRUD operations for menu_items */
    Route::resource('menu_items', MenuItemController::class);


    /* {picture} = {id} */
    Route::get('/pictures', [PictureController::class, 'index'])->name('pictures.index');
    Route::get('/pictures/{picture}/edit', [PictureController::class, 'edit'])->name('pictures.edit');
    Route::put('/pictures/{picture}', [PictureController::class, 'update'])->name('pictures.update');
    Route::get('/pictures/favicon', [PictureController::class, 'faviconEdit'])->name('favicon.edit');
    Route::post('/pictures/favicon', [PictureController::class, 'faviconUpdate'])->name('favicon.update');

    /* {text_content} = {id} */
    Route::get('/text_contents', [TextContentController::class, 'index'])->name('text_contents.index');
    Route::get('/text_contents/{text_content}/edit', [TextContentController::class, 'edit'])->name('text_contents.edit');
    Route::put('/text_contents/{text_content}', [TextContentController::class, 'update'])->name('text_contents.update');

    /* {button} = {id} */
    Route::get('/buttons', [ButtonController::class, 'index'])->name('buttons.index');
    Route::get('/buttons/{button}/edit', [ButtonController::class, 'edit'])->name('buttons.edit');
    Route::put('/buttons/{button}', [ButtonController::class, 'update'])->name('buttons.update');

    /* {button} = {id} */
    Route::get('/gradients', [GradientController::class, 'index'])->name('gradients.index');
    Route::get('/gradients/{gradient}/edit', [GradientController::class, 'edit'])->name('gradients.edit');
    Route::put('/gradients/{gradient}', [GradientController::class, 'update'])->name('gradients.update');

});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
