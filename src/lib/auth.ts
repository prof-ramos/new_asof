import bcrypt from 'bcrypt';

/**
 * Hash a password using bcrypt
 */
export function hashPassword(password: string): string {
  const saltRounds = 10;
  return bcrypt.hashSync(password, saltRounds);
}

/**
 * Compare a password with its hash
 */
export function verifyPassword(password: string, hash: string): boolean {
  return bcrypt.compareSync(password, hash);
}

/**
 * Generate a random token
 */
export function generateToken(): string {
  return Array.from({ length: 32 }, () => 
    Math.random().toString(36)[2] || Math.random().toString(36)[3]
  ).join('');
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}