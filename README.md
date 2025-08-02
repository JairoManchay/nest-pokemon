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
- ✅ Configuración mediante variables de entorno
- ✅ Validación de datos con class-validator
- ✅ Documentación automática con Swagger
- ✅ Manejo de errores personalizado
- ✅ DTOs para validación de entrada
- ✅ Arquitectura modular y escalable

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

### 3. Configurar variables de entorno

Crear el archivo de configuración copiando la plantilla:

```bash
# En Windows (PowerShell)
Copy-Item .env.template .env

# En Linux/Mac
cp .env.template .env
```

Editar el archivo `.env` según tu entorno. El archivo `.env.template` contiene todas las variables necesarias.

**⚠️ Importante**: El archivo `.env` está en `.gitignore` y NO se sube al repositorio.

### 4. Configurar la base de datos

Levantar MongoDB con Docker:

```bash
docker-compose up -d
```

**📊 Para visualizar la base de datos:**

Si tienes un cliente MongoDB local (MongoDB Compass, Studio 3T, etc.), conecta usando:

```
mongodb://host.docker.internal:27017/nest-pokemon
```

Esta URL permite acceder al contenedor Docker desde tu motor MongoDB local.

### 5. Ejecutar en modo desarrollo

```bash
# Modo desarrollo con watch (recomendado)
npm run start:dev

# Modo desarrollo simple
npm run start
```

La aplicación estará disponible en: `http://localhost:3000`

### 6. Poblar la base de datos (Seed)

**¡IMPORTANTE!** Para probar el CRUD de Pokémon, necesitas generar datos de prueba:

```bash
# Realizar petición GET al endpoint de seed
GET http://localhost:3000/seed
```

O usando curl en terminal:

```bash
curl http://localhost:3000/seed
```

Este endpoint:
- ✅ Limpia la base de datos actual
- ✅ Descarga datos de la [PokéAPI](https://pokeapi.co/)
- ✅ Inserta 10 Pokémon de prueba en tu base de datos
- ✅ Permite probar inmediatamente el CRUD

**Nota**: Solo necesitas ejecutar el seed una vez, o cuando quieras resetear los datos.

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

## Endpoints de la API

### 🌱 Seed (Generar datos de prueba)
- `GET /seed` - **¡Ejecutar PRIMERO!** Pobla la base de datos con 10 Pokémon

### 🔍 Pokémon CRUD
- `GET /pokemon` - Listar todos los Pokémon
- `GET /pokemon/:term` - Buscar Pokémon por:
  - **ID de MongoDB** (ej: `507f1f77bcf86cd799439011`)
  - **Número** (ej: `25` para Pikachu)
  - **Nombre** (ej: `pikachu`)
- `POST /pokemon` - Crear nuevo Pokémon
  ```json
  {
    "no": 151,
    "name": "mew"
  }
  ```
- `PATCH /pokemon/:term` - Actualizar Pokémon
- `DELETE /pokemon/:term` - Eliminar Pokémon

### 📝 Ejemplos de uso

```bash
# 1. Poblar base de datos
curl localhost:3000/api/seed

# 2. Listar todos los Pokémon
curl http://localhost:3000/api/pokemon

# 3. Buscar Pikachu (número 25)
curl http://localhost:3000/api/pokemon/25

# 4. Buscar por nombre
curl http://localhost:3000/api/pokemon/pikachu

# 5. Crear nuevo Pokémon
curl -X POST http://localhost:3000/api/pokemon \
  -H "Content-Type: application/json" \
  -d '{"no": 151, "name": "mew"}'
```

## 🏗️ Arquitectura - Módulo Common

Se implementó un módulo `common` siguiendo principios de **Clean Architecture** y **SOLID**, que contiene componentes reutilizables en toda la aplicación:

### 📡 HTTP Adapter Pattern

**Ubicación**: `src/common/adapters/`

Se implementó el patrón Adapter para abstraer las peticiones HTTP y hacerlas intercambiables:

```typescript
// Interface que define el contrato
interface HTTPAdapter {
  get<T>(url: string): Promise<T>;
}

// Implementación concreta con Axios
@Injectable()
export class AxiosAdapter implements HTTPAdapter {
  async get<T>(url: string): Promise<T> {
    // Implementación con manejo de errores
  }
}
```

**Beneficios:**
- ✅ **Intercambiable**: Fácil cambio de librería HTTP (Axios → Fetch, etc.)
- ✅ **Testeable**: Mock del adapter en pruebas unitarias
- ✅ **Reutilizable**: Un solo punto para configurar peticiones HTTP
- ✅ **Manejo centralizado de errores**

### 🔧 Custom Pipes

**Ubicación**: `src/common/pipes/`

#### ParseMongoIdPipe
Pipe personalizado para validar IDs de MongoDB:

```typescript
@Injectable()
export class ParseMongoIdPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if(!isValidObjectId(value)){
      throw new BadRequestException(`"${value}" is not a valid Mongo ID`);
    }
    return value;
  }
}
```

**Uso en controladores:**
```typescript
@Get(':id')
findOne(@Param('id', ParseMongoIdPipe) id: string) {
  return this.pokemonService.findOne(id);
}
```

**Beneficios:**
- ✅ **Validación automática** de ObjectIds de MongoDB
- ✅ **Mensajes de error claros** y consistentes
- ✅ **Reutilizable** en todos los controladores
- ✅ **Fail fast**: Valida antes de llegar al service

### 📦 CommonModule

**Ubicación**: `src/common/common.module.ts`

Módulo que centraliza y exporta todos los componentes comunes:

```typescript
@Module({
  providers: [AxiosAdapter],
  exports: [AxiosAdapter],
})
export class CommonModule {}
```

### 🎯 Principios aplicados

- **Single Responsibility**: Cada clase tiene una responsabilidad única
- **Open/Closed**: Abierto para extensión, cerrado para modificación
- **Dependency Inversion**: Depende de abstracciones, no de concreciones
- **DRY**: Don't Repeat Yourself - Componentes reutilizables

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
