# About

Are you catching yourself not paying attention to meetings? Do you go out of meeting not knowing what happends seconds after?

There is no better way to pay attention to **what** is happening during a meeting than playing meeting bingo.

To be honest, it won't help you remember the meeting topics, but it's a lot more fun and you won't fall asleep while your boss watches.

# Requirements

-   composer
-   npm

# Installation

```
composer install
npm install
php artisan key:generate
php artisan migrate
npm run build
```

If you want to change the application name change 'APP_NAME' in .env:

```
APP_NAME=<Your name>
```

The default language is english. Too apply another language change 'APP_LOCALE' in .env:

```
APP_LOCALE=<your language tag>
```

Currently english and german are available. Feel free to add more. For more information abaout languages klick [here](https://laravel.com/docs/11.x/localization).
