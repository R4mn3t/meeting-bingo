<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Session;

/**
 * Class SetLocale
 */
class SetLocale
{
	/**
	 * @param $request
	 * @param Closure $next
	 * @return Response
	 */
    public function handle($request, Closure $next): Response {
        $locale = Session::get('locale', config('app.locale'));

        App::setLocale($locale);

        return $next($request);
    }
}
