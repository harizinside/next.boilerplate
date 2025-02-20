# Another NextJS Boilerplate

A minimal and efficient Next.js boilerplate with Bun and MongoDB.

## Requirements

- **Bun** (You can install it from [bun.sh](https://bun.sh))
- **MongoDB** (You can use [MongoDB Atlas](https://www.mongodb.com/atlas/database) or a local instance)

## Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/harizinside/next.boilerplate.git
cd next.boilerplate
bun install
```

## Environment Variables

Copy the .env.sample file and rename it to .env.local:

```sh
cp .env.sample .env.local
```

Then update the values as needed

## Running the Project

Start the development server:

```sh
bun run dev
```

If you have mkcert installed, you can run the development server with HTTPS:

```sh
bun run dev:secure
```

## For production:

```sh
bun run build
bun run start
```

## Features

- ⚡ Bun for fast and efficient package management
- 🚀 Next.js for a modern React framework
- 📦 MongoDB for database integration
- 🔒 mkcert for local HTTPS support
- 🛠 ESLint & Prettier for code consistency
- 🌿 Environment Variables stored in .env.local
- 📝 CRUD on Artikel – Create, read, update, and delete articles (On Development)
- 🗺️ Dynamic sitemap.xml – Automatically generated based on articles
- 🔑 Auth to Dashboard – Secure authentication for admin access (On Development)
- 📊 Statistic Web View – Track and analyze website traffic (On Development)

## License

This project is licensed under the MIT License.

Let me know if you need any more tweaks! 🚀
