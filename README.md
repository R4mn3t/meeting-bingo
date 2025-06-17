# About

Are you catching yourself not paying attention to meetings? Do you go out of meeting not knowing what happens seconds after?

There is no better way to pay attention to **what** is happening during a meeting than playing meeting bingo.

To be honest, it won't help you remember the meeting topics, but it's a lot more fun and you won't fall asleep while your boss watches.

# Requirements

-   composer
-   npm

# Setup and deployment
## Installation and basic configuration

1. Install dependencies:
```
composer install
npm install
php artisan key:generate
php artisan migrate
npm run build
```

2. Customize the application name (optional):

```
APP_NAME=<Your name>
```

3. Set language (optional):

```
APP_LOCALE=<your language tag>
```

English and German are currently available. Other languages can be added if required. Further information on language localization can be found in the [Laravel documentation](https://laravel.com/docs/11.x/localization).

# Deployment for production environment

1. Run production build for assests (JavaScript, CSS):

    ```
    npm run build
    ```

2. Configure environment settings:

    ```
    APP_ENV=production
    APP_DEBUG=false
    APP_URL=https://<your-domain.com>
    ```

3. Run optimizes:

    ```
    php artisan config:cache
    php artisan route:cache
    php artisan view:cache
    ```

4. Provision on the server:

    - Upload project to server (Git, SFTP)
    - Make sure your server has access to your application:

    ```
    composer install --optimize-autoloader --no-dev
    ```

5. Run database migrations:

    ```
    php artisan migrate
    ```
   
6. You're good to go, have fun!