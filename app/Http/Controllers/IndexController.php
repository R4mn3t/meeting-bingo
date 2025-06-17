<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Support\InputFormLocales;
use Inertia\Response;

class IndexController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Index', ['locales' => InputFormLocales::getTranslations()]);
    }
}
