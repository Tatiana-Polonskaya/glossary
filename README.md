![image](https://github.com/Tatiana-Polonskaya/glossary/assets/112598242/b4621163-2809-4709-94e1-e69a8198ff14)


# Глоссарий терминов React+TypeScript

**О проекте:**\
  Веб-приложения с глоссарием терминов по теме "Подходы к проектированию интерактивных веб-приложений" и семантическим графом MindMap.

**Функционал:**
- Главная страница:
  - Вывод всех терминов  

- Страница Граф:
  - Вывод всех терминов  
  - Представление терминов в виде графа
  - Описание связей на графе
  - Элементы управления
 
**Особенности проекта:**
- Семантический граф с возможностями управления
- Минимальное количество CSS файлов
- Dockerfile

----
## Содержание
- [Roadmap](#roadmap)
- [Архитектура проекта](#архитектура-проекта)
- [API](#api)
- [Запуск проекта](#запуск-проекта)
- [Технологии](#технологии)



## Roadmap

- [ ] Добавить модальное окно для подробного описания терминов.
- [ ] Добавить возможность добавления термина.
- [ ] Опубликовать проект в открытый доступ.

## Архитектура проекта

Структура проекта представляет собой клиент-серверное приложение:

- `client`: SPA на основе React+TypeScript.
- `server`: сервер на Node.js с модулем JSON Server.

Структура клиента составлена по стандратной стуктуре React-проектов.

Структура `server`:

- `api/server.js`: создание и запуск сервера модуля JSON Server.
- `db.json`: данные приложения.

Дополнительно созданы Dockerfile для клиента и сервера в соответствующих папках, `docker-compose.yml` - в корневом каталоге.


## API

Используется собственное API, созданное с помощью:

- [JSON Server](https://www.npmjs.com/package/json-server)

## Запуск проекта

- `docker compose up` - запуск Docker контейнеров
- `docker compose down` - остановка приложения

## Технологии

- [React](https://react.dev/blog/2023/03/16/introducing-react-dev)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/en/main/)
- [React Flow](https://reactflow.dev/)
- [Redux Toolkit Query](https://redux-toolkit.js.org/rtk-query/overview/)
- [Docker](https://www.docker.com/get-started/)
- [Docker Compose](https://docs.docker.com/compose/)
- [MUI](https://mui.com/)




