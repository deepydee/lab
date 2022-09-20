FROM php:5.6.40-apache

# Arguments defined in docker-compose.yml
ARG user
ARG uid
ARG php_ver

# Proxy if needed
# ENV http_proxy "http://19713:ppe964@192.168.1.58:3128/"
# ENV https_proxy "http://19713:ppe964@192.168.1.58:3128/"

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip
	
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -

RUN apt-get update && apt-get install -y nodejs npm

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Get latest Composer
COPY --from=composer:2.2 /usr/bin/composer /usr/bin/composer

# Create system user to run Composer and Artisan Commands
RUN useradd -G www-data,root -u $uid -d /home/$user $user
RUN mkdir -p /home/$user/.composer && \
    chown -R $user:$user /home/$user

# Run apache mod_rewrite module
RUN a2enmod rewrite

# Set working directory
WORKDIR /var/www/html

USER $user

# Install Laravel

#RUN composer global config allow-plugins.kylekatarnls/update-helper true && \
#	composer create-project --prefer-dist laravel/laravel blog "5.4.*"  && \
#	cp .env.example .env

# Composer
#	composer install && \

# NPM
#	npm install