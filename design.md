# Ayoub Boulbaz's Lord of the Rings SDK Design!

The Lord of the Rings SDK is designed to provide a simple and easy-to-use interface for fetching information about the Lord of the Rings movies and quotes. The SDK is built using Node.js, Typescript and utilizes the Axios library to make HTTP requests to an external API that provides the data.
	
#  Architecture


The SDK architecture is designed to be modular and extensible, with separate modules for fetching movie information and fetching quotes. Each module is implemented as a separate Typescript file, and exports a class that represents the entity we want to use, each class has its own configuration.

The SDK also includes a main index.ts file that serves as the entry point for the SDK. This file exports an object that contains the two modules as properties.

## Code Implementation

The SDK has a clean folder strucuture that separates the services, the Http request handler, and other elements:
```
sdk/
├── src/
│   ├── client/
│   │   ├── http-request.ts
│   │   ├── index.ts
│   ├── constants/
│   │   ├── constants.ts
│   │   └── index.ts
│   ├── services/
│   │   ├── movies.ts
│   │   ├── quotes.ts
│   │   └── index.ts
│   └── types/
│   │   ├── index.ts
│   │   └── types.ts
│   └── index.ts
├── tsconfig.json
└── package.json
```

## Dependencies

The Lord of the Rings SDK depends on the following third-party libraries:

-   Axios: A Promise-based HTTP client for Node.js and the browser, used to make HTTP requests to an external API that provides the data.