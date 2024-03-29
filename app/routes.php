<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

// Index page
Route::get('/', array(
    'as' => 'index',
    'uses' => 'AppController@showIndex'
));

// Naming Convention Tool page
Route::get('naming', array(
    'as' => 'naming',
    'uses' => 'AppController@showNaming'
));
