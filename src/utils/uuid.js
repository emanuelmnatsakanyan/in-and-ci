import crypto from 'crypto-browserify';

// генерируем какой-то идентификатор для запуска
export const UUID = crypto.randomBytes(20).toString('hex');
