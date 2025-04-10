export const firebaseErrorMessages: Record<string, string> = {
  EMAIL_EXISTS: 'Пользователь с таким email уже существует.',
  OPERATION_NOT_ALLOWED: 'Парольный вход отключен для этого проекта.',
  TOO_MANY_ATTEMPTS_TRY_LATER:
    'Мы заблокировали все запросы с этого устройства из-за подозрительной активности. Повторите позже.',
  EMAIL_NOT_FOUND: 'Пользователь с таким email не найден.',
  INVALID_PASSWORD: 'Неверный пароль.',
  USER_DISABLED: 'Учетная запись пользователя отключена администратором.',
  WEAK_PASSWORD: 'Слишком слабый пароль. Минимум 6 символов.',
  INVALID_EMAIL: 'Неверный формат email.',
  MISSING_PASSWORD: 'Введите пароль.',
};