FROM php:7.4.2
COPY --from=composer /usr/bin/composer /usr/bin/composer
RUN composer install

WORKDIR /usr/src/app/
COPY . .
RUN apt-get update
RUN apt-get -y install zip
RUN composer install
    
ENTRYPOINT ["php", "/usr/src/app/script.php"]