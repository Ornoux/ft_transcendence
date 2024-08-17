"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    password: 'mypassword',
    username: 'myuser',
    database: 'postgresql',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
    logging: true,
};
//# sourceMappingURL=orm.config.js.map