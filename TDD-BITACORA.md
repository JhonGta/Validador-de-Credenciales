# BITÁCORA DEL CICLO TDD - VALIDADOR DE CREDENCIALES

## Proyecto: Validador de Contraseñas
**Estudiante:** Jhon Guamám
**Fecha:** 6 de Agosto, 2025  
**Framework:** JavaScript con Jest  

---

## REQUISITO 1: La contraseña debe tener al menos 8 caracteres de longitud

### CICLO 1: ROJO 🔴
**Objetivo:** Escribir una prueba que falle para validar que una contraseña con menos de 8 caracteres es inválida.

**Prueba escrita:**
```javascript
// Archivo: PasswordValidator.test.js
test('should return false for password with less than 8 characters', () => {
    const validator = new PasswordValidator();
    expect(validator.isValid("pass1")).toBe(false);
});
```

**Razón de la falla:** La clase `PasswordValidator` no existe aún.

**Evidencia del fallo:** 
```
FAIL  ./PasswordValidator.test.js
● Test suite failed to run
  Cannot find module './PasswordValidator' from 'PasswordValidator.test.js'
```

---

### CICLO 1: VERDE 🟢
**Objetivo:** Escribir el código mínimo para que la prueba pase.

**Código de producción escrito:**
```javascript
// Archivo: PasswordValidator.js
class PasswordValidator {
    isValid(password) {
        return password.length >= 8;
    }
}

module.exports = PasswordValidator;
```

**Evidencia del éxito:** [Captura de pantalla pendiente]

---

### CICLO 1: REFACTORIZAR 🔄
**Análisis:** El código es simple y claro. No requiere refactorización en este momento.
- La función cumple exactamente con el requisito
- Es legible y eficiente
- No hay duplicación de código

**Decisión:** No se requieren cambios.

---

## REQUISITO 2: La contraseña debe contener al menos un número

### CICLO 2: ROJO 🔴
**Objetivo:** Añadir una nueva prueba que falle para verificar que la contraseña contenga al menos un número.

**Prueba escrita:**
```javascript
test('should return false for password without numbers', () => {
    const validator = new PasswordValidator();
    expect(validator.isValid("Password")).toBe(false);
});
```

**Razón de la falla:** El método actual solo verifica longitud, no la presencia de números.

**Evidencia del fallo:** [Captura de pantalla pendiente]

---

### CICLO 2: VERDE 🟢
**Objetivo:** Modificar el código para que todas las pruebas pasen.

**Código de producción modificado:**
```javascript
class PasswordValidator {
    isValid(password) {
        if (password.length < 8) {
            return false;
        }
        
        const hasNumber = /\d/.test(password);
        return hasNumber;
    }
}

module.exports = PasswordValidator;
```

**Evidencia del éxito:** [Captura de pantalla pendiente]

---

### CICLO 2: REFACTORIZAR 🔄
**Análisis:** El código sigue siendo simple pero podemos mejorarlo para mayor claridad.

**Código refactorizado:**
```javascript
class PasswordValidator {
    isValid(password) {
        return this.hasMinimumLength(password) && this.hasNumber(password);
    }
    
    hasMinimumLength(password) {
        return password.length >= 8;
    }
    
    hasNumber(password) {
        return /\d/.test(password);
    }
}

module.exports = PasswordValidator;
```

---

## REQUISITO 3: La contraseña debe contener al menos una letra mayúscula

### CICLO 3: ROJO 🔴
**Objetivo:** Añadir una nueva prueba que falle para verificar que la contraseña contenga al menos una letra mayúscula.

**Prueba escrita:**
```javascript
test('should return false for password without uppercase letter', () => {
    const validator = new PasswordValidator();
    expect(validator.isValid("password1")).toBe(false);
});
```

**Razón de la falla:** El método actual no verifica la presencia de letras mayúsculas.

**Evidencia del fallo:** [Captura de pantalla pendiente]

---

### CICLO 3: VERDE 🟢
**Objetivo:** Modificar el código para que todas las pruebas pasen.

**Código de producción modificado:**
```javascript
class PasswordValidator {
    isValid(password) {
        return this.hasMinimumLength(password) && 
               this.hasNumber(password) && 
               this.hasUppercase(password);
    }
    
    hasMinimumLength(password) {
        return password.length >= 8;
    }
    
    hasNumber(password) {
        return /\d/.test(password);
    }
    
    hasUppercase(password) {
        return /[A-Z]/.test(password);
    }
}

module.exports = PasswordValidator;
```

**Evidencia del éxito:** [Captura de pantalla pendiente]

---

### CICLO 3: REFACTORIZAR 🔄
**Análisis:** El código está bien estructurado y es legible. Cada método tiene una responsabilidad única.

**Decisión:** No se requieren cambios adicionales.

---

## RESUMEN FINAL
- ✅ Requisito 1: Mínimo 8 caracteres implementado
- ✅ Requisito 2: Al menos un número implementado  
- ✅ Requisito 3: Al menos una letra mayúscula implementado
- ✅ Todas las pruebas pasan
- ✅ Código refactorizado y limpio
