# 🔐 VALIDADOR DE CREDENCIALES - PROYECTO TDD

## Descripción del Proyecto
Sistema de validación de contraseñas desarrollado siguiendo estrictamente la metodología **Test-Driven Development (TDD)**. Este proyecto demuestra el ciclo Rojo-Verde-Refactorizar aplicado a un caso real de desarrollo de software.

## 🎯 Requisitos Implementados

### ✅ Requisito 1: Longitud Mínima
- La contraseña debe tener **al menos 8 caracteres** de longitud
- Ejemplo válido: `"Password1"`
- Ejemplo inválido: `"pass1"`

### ✅ Requisito 2: Presencia de Números
- La contraseña debe contener **al menos un número**
- Ejemplo válido: `"Password1"`
- Ejemplo inválido: `"Password"`

### ✅ Requisito 3: Letra Mayúscula
- La contraseña debe contener **al menos una letra mayúscula**
- Ejemplo válido: `"Password1"`
- Ejemplo inválido: `"password1"`

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Node.js (v14 o superior)
- npm

### Instalación
```bash
# Clonar o descargar el proyecto
cd P_Avanzada/U3

# Instalar dependencias
npm install
```

### Ejecutar Pruebas
```bash
# Ejecutar todas las pruebas
npm test

# Ejecutar pruebas en modo watch (desarrollo)
npm test -- --watch
```

## 📁 Estructura del Proyecto

```
U3/
├── PasswordValidator.js          # Clase principal (código de producción)
├── PasswordValidator.test.js     # Suite de pruebas unitarias
├── TDD-BITACORA.md              # Bitácora detallada del proceso TDD
├── DIAGRAMA-FLUJO-TDD.md        # Diagrama del proceso TDD
├── README.md                    # Documentación del proyecto
├── package.json                 # Configuración del proyecto
└── node_modules/                # Dependencias (Jest)
```

## 🧪 Metodología TDD Aplicada

### Ciclo Rojo-Verde-Refactorizar

1. **🔴 ROJO:** Escribir una prueba que falle
2. **🟢 VERDE:** Escribir el código mínimo para que pase
3. **🔄 REFACTORIZAR:** Mejorar el código manteniendo las pruebas

### Ejemplo de Uso

```javascript
const PasswordValidator = require('./PasswordValidator');

const validator = new PasswordValidator();

// Contraseñas inválidas
console.log(validator.isValid("pass1"));     // false (muy corta)
console.log(validator.isValid("Password"));  // false (sin números)
console.log(validator.isValid("password1")); // false (sin mayúsculas)

// Contraseñas válidas
console.log(validator.isValid("Password1"));           // true
console.log(validator.isValid("MySecurePassword123")); // true
```

## 📊 Cobertura de Pruebas

Las pruebas cubren:
- ✅ Validación de longitud mínima
- ✅ Validación de presencia de números
- ✅ Validación de presencia de mayúsculas
- ✅ Casos de contraseñas válidas
- ✅ Casos de contraseñas inválidas

## 🏗️ API de la Clase PasswordValidator

### Métodos Públicos

#### `isValid(password: string): boolean`
Valida si una contraseña cumple con todos los requisitos.

**Parámetros:**
- `password` (string): La contraseña a validar

**Retorna:**
- `boolean`: `true` si la contraseña es válida, `false` en caso contrario

### Métodos Privados

#### `hasMinimumLength(password: string): boolean`
Verifica si la contraseña tiene al menos 8 caracteres.

#### `hasNumber(password: string): boolean`
Verifica si la contraseña contiene al menos un número.

#### `hasUppercase(password: string): boolean`
Verifica si la contraseña contiene al menos una letra mayúscula.

## 📈 Resultados de las Pruebas

```
 PASS  ./PasswordValidator.test.js
  PasswordValidator
    Invalid passwords
      ✓ should return false for password with less than 8 characters
      ✓ should return false for password without numbers
      ✓ should return false for password without uppercase letter
    Valid passwords
      ✓ should return true for password meeting all requirements
      ✓ should return true for longer password meeting all requirements

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        0.528 s
```

## 🎓 Aprendizajes del Proceso TDD

### Beneficios Observados
1. **Confianza en el código:** Cada funcionalidad está respaldada por pruebas
2. **Diseño incremental:** El código evoluciona de forma natural
3. **Documentación viva:** Las pruebas documentan el comportamiento esperado
4. **Detección temprana de errores:** Los problemas se detectan inmediatamente
5. **Refactorización segura:** Las pruebas garantizan que los cambios no rompan funcionalidad

### Desafíos Enfrentados
1. **Resistencia inicial:** Escribir pruebas primero requiere cambio de mentalidad
2. **Tiempo de desarrollo:** Aparentemente más lento al inicio, pero más rápido a largo plazo
3. **Disciplina:** Requiere seguir estrictamente el ciclo Rojo-Verde-Refactorizar

## 📚 Entregables del Proyecto

1. **Bitácora TDD:** `TDD-BITACORA.md` - Documentación paso a paso del proceso
2. **Diagrama de Flujo:** `DIAGRAMA-FLUJO-TDD.md` - Visualización del proceso TDD
3. **Código Fuente:**
   - `PasswordValidator.js` - Clase de producción
   - `PasswordValidator.test.js` - Suite de pruebas

## 🛠️ Tecnologías Utilizadas

- **Lenguaje:** JavaScript (ES6+)
- **Framework de Pruebas:** Jest
- **Metodología:** Test-Driven Development (TDD)
- **Entorno:** Node.js

## 👨‍💻 Autor

Proyecto desarrollado como parte de la **TAREA 2 - PROGRAMACIÓN AVANZADA 202550**

---

> *"El TDD no es sobre las pruebas, es sobre el diseño y la confianza en el código."*
