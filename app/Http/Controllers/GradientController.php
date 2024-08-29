<?php

namespace App\Http\Controllers;

use App\Models\Gradient;
use App\Http\Requests\StoreGradientRequest;
use App\Http\Requests\UpdateGradientRequest;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class GradientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Gradient/Index', [
            'Gradients' => Gradient::all(),
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
    public function store(StoreGradientRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Gradient $gradient)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Gradient $gradient)
    {
        return Inertia::render('Gradient/Edit', [
            'Gradient' => $gradient,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateGradientRequest $request, Gradient $gradient)
    {
        $gradient->update([
            'color_1' => $request->color_1,
            'color_2' => $request->color_2,
            'modified_by' => Auth::id(),
        ]);

        return redirect()->route('gradients.index')->with('success', 'Gradient updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Gradient $gradient)
    {
        //
    }
}
