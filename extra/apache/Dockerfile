FROM ubuntu:24.04

ENV TZ=Europe/Amsterdam
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Install apache in one layer and clean up the package lists
RUN apt-get update && \
    apt-get install -y --no-install-recommends apache2 && \
    rm -rf /var/lib/apt/lists/*

# Apache environment variables
ENV APACHE_RUN_USER=www-data \
    APACHE_RUN_GROUP=www-data \
    APACHE_LOG_DIR=/var/log/apache2 \
    APACHE_LOCK_DIR=/var/lock/apache2 \
    APACHE_PID_FILE=/var/run/apache2.pid

# Copy the website and the virtual host configuration
COPY site /var/www/public
COPY apache/apache-config.conf /etc/apache2/sites-enabled/000-default.conf

EXPOSE 80

# Start apache in the foreground (a container stops when its main process stops)
CMD ["apache2ctl", "-D", "FOREGROUND"]
