# barber-booking-app
A modern web application built with **Laravel 11** that allows users to book barber appointments, manage schedules, and browse available services.

## Prerequisites
- **PHP 8.2+** (with following extensions enabled):
    - `openssl`, `pdo_mysql`, `mbstring`, `curl`, `fileinfo`, `intl`, `bcmath`, `ctype`, `tokenizer`, `xml`, `gd`, `zip`
- **Composer**
- **Docker**
- **Node.js 24** (with **NPM**)

## Getting Started
```
# Clone the repository
git clone https://github.com/kchmie/barber-booking-app.git
cd barber-booking-app

# Set up docker containers (MariaDB, Redis, Mailpit)
docker compose up -d

# Install dependencies, generate key and run migrations
composer run setup

# Run a development server
composer run dev
```

## Services
|Service|URL|Description|
|-|-|-|
|**Web app**|[http://localhost:8000](http://localhost:8000)|App interface|
|**Mailpit UI**|[http://localhost:8025](http://localhost:8000)|Email inbox (for testing)|
|**MariaDB**|`localhost:3306`|Database|
|**Redis**|`localhost:6379`|Cache & sessions|
