<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gradient extends Model
{
    use HasFactory;

    protected $fillable = ['color_1', 'color_2', 'modified_by'];
}
