<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
  return view('welcome');
});

// Route::resource('/posts', PostController::class);

// Route::get('post', [PostController::class, 'index']);
