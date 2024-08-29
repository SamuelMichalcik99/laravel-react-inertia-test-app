<?php

namespace App\Http\Controllers;

use App\Models\TextContent;
use App\Http\Requests\StoreTextContentRequest;
use App\Http\Requests\UpdateTextContentRequest;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TextContentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('TextContent/Index', [
            'TextContents' => TextContent::all(),
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
    public function store(StoreTextContentRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(TextContent $textContent)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TextContent $textContent)
    {
        return Inertia::render('TextContent/Edit', [
            'TextContent' => $textContent,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTextContentRequest $request, TextContent $textContent)
    {
        $textContent->update([
            'description' => $request->description,
            'modified_by' => Auth::id(),
        ]);

        return redirect()->route('text_contents.index')->with('success', 'Text content updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TextContent $textContent)
    {
        //
    }
}
