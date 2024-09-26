<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Support\InputFormLocales;

class IndexController extends Controller
{
    public function index()
    {
        return Inertia::render('Index', ['locales' => InputFormLocales::getTranslations()]);
    }
}
