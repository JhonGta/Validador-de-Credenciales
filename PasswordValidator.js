/**
 * Validador de contraseñas que verifica diferentes criterios de seguridad
 */
class PasswordValidator {
    /**
     * Valida si una contraseña cumple con todos los criterios
     * @param {string} password - La contraseña a validar
     * @returns {boolean} - true si la contraseña es válida, false en caso contrario
     */
    isValid(password) {
        return this.hasMinimumLength(password) && 
               this.hasNumber(password) && 
               this.hasUppercase(password);
    }
    
    /**
     * Verifica si la contraseña tiene al menos 8 caracteres
     * @param {string} password - La contraseña a validar
     * @returns {boolean} - true si tiene al menos 8 caracteres
     */
    hasMinimumLength(password) {
        return password.length >= 8;
    }
    
    /**
     * Verifica si la contraseña contiene al menos un número
     * @param {string} password - La contraseña a validar
     * @returns {boolean} - true si contiene al menos un número
     */
    hasNumber(password) {
        return /\d/.test(password);
    }
    
    /**
     * Verifica si la contraseña contiene al menos una letra mayúscula
     * @param {string} password - La contraseña a validar
     * @returns {boolean} - true si contiene al menos una letra mayúscula
     */
    hasUppercase(password) {
        return /[A-Z]/.test(password);
    }
}

module.exports = PasswordValidator;
