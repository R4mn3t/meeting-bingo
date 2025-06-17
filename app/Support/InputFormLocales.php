<?php

namespace App\Support;

class InputFormLocales
{
    /**
     * Returns the translations for InputForm.jsx
     * @return array
     */
    public static function getTranslations()
    {
        return [
            'too_few' => __('app.too_few'),
            'too_many' => __('app.too_many'),
            'placeholder' => __('app.placeholder'),
            'values' => __('app.values'),
            'randomize' => __('app.randomize'),
        ];
    }
}
