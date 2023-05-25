<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Models\User;
use Illuminate\Support\Facades\Log;
use Spatie\Emoji\Emoji;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'prefix' => 'emojix'
], function ($router) {

    Route::post('/all', function() {
        $allEmoji = Emoji::all();

        return response()->json($allEmoji);

    });

    Route::post("/utilisation", function() {

        $emoji = request("emoji");
        $clientIP = request()->ip();

        Log::info("[Emojix] - Le service a été solliciter pour copier un emoji : '.$emoji.'.");

        return response()->json(true);

    });

});