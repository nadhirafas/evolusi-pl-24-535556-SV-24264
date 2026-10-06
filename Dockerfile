# Stage 1: Build
FROM php:8.4-cli AS builder

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


# Stage 2: Runtime
FROM php:8.4-cli

WORKDIR /var/www/html

RUN apt-get update \
    && apt-get install -y libzip-dev \
    && docker-php-ext-install zip \
    && rm -rf /var/lib/apt/lists/*

# Membuat user non-root
RUN groupadd --gid 1000 appuser \
    && useradd --uid 1000 --gid 1000 --create-home appuser

COPY --from=builder --chown=appuser:appuser /var/www/html/vendor ./vendor
COPY --chown=appuser:appuser . .

# Memberikan hak akses ke folder Laravel
RUN chown -R appuser:appuser storage bootstrap/cache

USER appuser

EXPOSE 8000

# Mengecek apakah server Laravel berjalan
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD php -r '$s=@fsockopen("127.0.0.1",8000); exit($s ? 0 : 1);'

CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
