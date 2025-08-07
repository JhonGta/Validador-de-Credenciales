const PasswordValidator = require('./PasswordValidator');

describe('PasswordValidator', () => {
    let validator;
    
    beforeEach(() => {
        validator = new PasswordValidator();
    });

    describe('Invalid passwords', () => {
        test('should return false for password with less than 8 characters', () => {
            expect(validator.isValid("pass1")).toBe(false);
        });

        test('should return false for password without numbers', () => {
            expect(validator.isValid("Password")).toBe(false);
        });

        test('should return false for password without uppercase letter', () => {
            expect(validator.isValid("password1")).toBe(false);
        });
    });

    describe('Valid passwords', () => {
        test('should return true for password meeting all requirements', () => {
            expect(validator.isValid("Password1")).toBe(true);
        });

        test('should return true for longer password meeting all requirements', () => {
            expect(validator.isValid("MySecurePassword123")).toBe(true);
        });
    });
});
