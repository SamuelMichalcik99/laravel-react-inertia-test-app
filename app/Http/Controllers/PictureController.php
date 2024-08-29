<?php

namespace App\Http\Controllers;

use App\Models\Picture;
use App\Http\Requests\StorePictureRequest;
use App\Http\Requests\UpdatePictureRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PictureController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Picture/Index', [
            'Pictures' =>  Picture::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePictureRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Picture $picture)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Picture $picture)
    {
        return Inertia::render('Picture/Edit', [
            'Picture' => $picture,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePictureRequest $request, Picture $picture)
    {
        if ($request->hasFile('image')) {
            // Delete old image if it is not default image
            $default_image_prefix = 'default-images/';
            $current_image_path = str_replace('storage/', '', $picture->image_path);

            if ($current_image_path && !str_starts_with($current_image_path, $default_image_prefix) && Storage::disk('public')->exists($current_image_path)) {
                Storage::disk('public')->delete($current_image_path);
            }

            // Store the new image and update the path
            $newImagePath = $request->file('image')->store('images', 'public');
            $picture->image_path = 'storage/' . $newImagePath;
        } else {
            $picture->image_path = '';
        }

        $picture->description = $request->input('description');
        $picture->modified_by = Auth::id();
        $picture->save();

        return redirect()->route('pictures.index')->with('success', 'Picture updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Picture $picture)
    {
        //
    }

    // Display favicon upload form
    public function faviconEdit()
    {
        return Inertia::render('Picture/FaviconEdit');
    }

    // Handle favicon update
    public function faviconUpdate(Request $request)
    {
        $request->validate([
            'favicon' => [
                'required',
                'file',
                'mimes:ico,png,svg',
                'max:2048',
                'dimensions:min_width=16,min_height=16,max_width=512,max_height=512',
            ],
        ]);

        if ($request->hasFile('favicon')) {
            // Store the new favicon in the public directory
            $favicon = $request->file('favicon');
            $favicon->move(public_path(), 'favicon.ico');

            return redirect()->route('admin.index')->with('success', 'Favicon updated successfully.');
        }

        return redirect()->route('admin.index')->with('error', 'Failed to update favicon.');
    }
}
