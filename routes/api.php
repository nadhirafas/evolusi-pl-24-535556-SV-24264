<?php

use App\Models\User;
use Illuminate\Support\Facades\Route;

Route::get('/users', function () {
    return response()->json(
        User::select('id', 'name', 'email')->get()
    );
});