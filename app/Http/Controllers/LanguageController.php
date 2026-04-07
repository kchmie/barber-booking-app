<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class LanguageController extends Controller
{
    public function __invoke(Request $request)
    {
        $locale = $request->input('language');
        
        if (in_array($locale, ['pl', 'en'])) {
            Session::put('locale', $locale);
        }

        return back();
    }
}
