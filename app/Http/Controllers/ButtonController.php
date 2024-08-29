<?php

namespace App\Http\Controllers;

use App\Models\Button;
use App\Http\Requests\StoreButtonRequest;
use App\Http\Requests\UpdateButtonRequest;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ButtonController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Button/Index', [
            'Buttons' => Button::all(),
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
    public function store(StoreButtonRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Button $button)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Button $button)
    {
        return Inertia::render('Button/Edit', [
            'Button' => $button,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateButtonRequest $request, Button $button)
    {
        $button->update([
            'description' => $request->description,
            'href' => $request->href,
            'modified_by' => Auth::id(),
        ]);

        return redirect()->route('buttons.index')->with('success', 'Button updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Button $button)
    {
        //
    }
}
