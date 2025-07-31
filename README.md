<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descripción

API RESTful de Pokédex desarrollada con NestJS, TypeScript y MongoDB. Esta aplicación permite gestionar información de Pokémon con operaciones CRUD completas.

## Características

- ✅ API RESTful con NestJS
- ✅ Base de datos MongoDB con Docker
- ✅ Validación de datos con class-validator
- ✅ Documentación automática con Swagger
- ✅ Manejo de errores personalizado
- ✅ DTOs para validación de entrada

## Requisitos previos

- Node.js (v18 o superior)
- Docker y Docker Compose
- Git

## Configuración del proyecto

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd pokedex
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar la base de datos

Levantar MongoDB con Docker:

```bash
docker-compose up -d
```

### 4. Ejecutar en modo desarrollo

```bash
# Modo desarrollo con watch (recomendado)
npm run start:dev

# Modo desarrollo simple
npm run start
```

La aplicación estará disponible en: `http://localhost:3000`

## Scripts disponibles

```bash
# Desarrollo
npm run start:dev      # Modo watch (recarga automática)
npm run start          # Modo desarrollo

# Producción
npm run build          # Compilar proyecto
npm run start:prod     # Ejecutar en producción

# Testing
npm run test           # Tests unitarios
npm run test:e2e       # Tests end-to-end
npm run test:cov       # Cobertura de tests

# Base de datos
docker-compose up -d   # Levantar MongoDB
docker-compose down    # Detener MongoDB
```

## Endpoints principales

- `GET /pokemon` - Listar todos los Pokémon
- `GET /pokemon/:id` - Obtener Pokémon por ID
- `POST /pokemon` - Crear nuevo Pokémon
- `PATCH /pokemon/:id` - Actualizar Pokémon
- `DELETE /pokemon/:id` - Eliminar Pokémon

## Tecnologías utilizadas

- **NestJS** - Framework de Node.js
- **TypeScript** - Lenguaje de programación
- **MongoDB** - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB
- **Docker** - Contenedorización
- **Class-validator** - Validación de datos

## Autor

Jairo Manchay 
Desarrollado como parte del curso de NestJS en Udemy.
