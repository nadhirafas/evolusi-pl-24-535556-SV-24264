FROM php:8.4-cli

WORKDIR /var/www/html

RUN apt-get update \
    && apt-get install -y unzip libzip-dev \
    && docker-php-ext-install zip \
    && rm -rf /var/lib/apt/lists/*

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

COPY composer.json composer.lock ./

RUN composer install \
    --no-scripts \
    --optimize-autoloader \
    --no-interaction

COPY . .

EXPOSE 8000

CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]






