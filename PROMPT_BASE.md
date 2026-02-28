# MGF Front - Prompt Base & Estructura de Aplicación

## 🎯 Visión General

MGF Front es una aplicación educativa construida con **React + TypeScript + Vite**. La aplicación se organiza bajo el patrón de **Features por Letras** donde cada letra es una característica educativa independiente con sus propias actividades.

---

## 📦 Estructura de Arquitectura

### Principios Clave
- **Modular**: Cada feature es independiente y reutilizable
- **Escalable**: Fácil agregar nuevas letras/features sin afectar código existente
- **DRY (Don't Repeat Yourself)**: Componentes compartidos en `ui/` y lógica reutilizable

### Estructura de Carpetas Principales

```
src/
├── components/          # Componentes reutilizables
│   ├── layout/         # Header, Navbar - componentes de layout
│   ├── lecture/        # Componentes específicos para actividades de lectura
│   └── ui/             # Componentes UI base (button, card, input, avatar, etc.)
├── context/            # Estado global (AuthContext)
├── features/           # NÚCLEO: Definición de todas las features/letras
├── layouts/            # Layouts principales (Auth, Landing, Main)
├── pages/              # Páginas principales
├── routes/             # Configuración de rutas
├── services/           # Servicios API/HTTP
├── hooks/              # Custom React hooks
├── utils/              # Funciones utilitarias
└── assets/             # Recursos estáticos
```

---

## 🔤 Sistema de Features (Letras)

### ¿Qué es una Feature/Letra?

Una **Feature** (también llamada **Letra**) es una unidad educativa que agrupa un conjunto de actividades relacionadas. Cada letra tiene su propio namespace y datos independientes.

### Letras Disponibles

1. **dado** - Feature de educación con el dado
2. **lola** - Feature educativo
3. **mama** - Feature educativo
4. **nido** - Feature educativo
5. **papa** - Feature educativo
6. **sol** - Feature educativo
7. **tioTian** - Feature educativo

### Estructura de una Feature

Cada feature sigue la siguiente estructura en `src/features/{letra}/`:

```
features/
└── {letra}/
    ├── index.ts                           # Exporta la configuración de la feature
    ├── activities/
    │   └── lecture/
    │       └── lecture.data.ts            # Datos de actividades de lectura
    └── assets/
        └── index.ts                       # Exporta recursos de la feature
```

### Ejemplo: Feature "dado"

```
features/
└── dado/
    ├── index.ts
    │   └── Exporta: lectureActivities, recursos
    ├── activities/
    │   └── lecture/
    │       └── lecture.data.ts
    │           └── Define: lecturas con imágenes y contenido
    └── assets/
        └── index.ts
            └── Exporta: imágenes, videos, etc.
```

---

## 🎬 Sistema de Activities

### Tipos de Activities

De momento existen:
- **Lecture** - Actividades de lectura con contenido multimedia (imágenes, texto, etc.)
- **Draw** - Actividades de práctica de dibujo de letras en un lienzo interactivo

### Estructura de Activity

```
activities/
└── {activityType}/
    ├── {activityType}.data.ts          # Datos de la actividad
    └── (componentes específicos)       # Componentes si es necesario
```

### Activity: Lecture

**Ubicación**: `features/{letra}/activities/lecture/lecture.data.ts`

**Propósito**: Define las lecturas educativas con contenido multimedia

**Estructura de Datos**:
```typescript
interface LectureActivity {
  id: string;
  title: string;
  description: string;
  content: {
    text: string;
    images?: string[];
    // más campos multimedia
  };
  // otros campos necesarios
}
```

### Activity: Draw

**Ubicación**: `features/{letra}/activities/draw/draw.data.ts`

**Propósito**: Define las actividades de práctica de dibujo de letras

**Características**:
- Lienzo interactivo para dibujar
- Letra a practicar mostrada como marca de agua
- Herramientas: deshacer, rehacer, limpiar, descargar
- Dificultad configurable (easy, medium, hard)

**Estructura de Datos**:
```typescript
interface DrawActivity {
  id: string;
  title: string;
  description: string;
  letter: string;           // Letra a dibujar (e.g., "M", "m")
  instructions: string;     // Instrucciones para el usuario
  difficulty: 'easy' | 'medium' | 'hard';
}
```

**Componentes Utilizados**:
- `DrawCanvas` - Lienzo con herramientas integradas
- `DrawPage` - Página completa de la actividad de dibujo

---

## 🎨 Componentes Reutilizables

### Componentes Reutilizables

```
components/
├── layout/
│   ├── Header.tsx              # Header de navegación
│   └── Navbar.tsx              # Barra de navegación
├── draw/
│   ├── DrawPage.tsx            # Página principal de dibujo
│   └── DrawCanvas.tsx          # Lienzo interactivo con controles
├── lecture/
│   ├── LecturePage.tsx         # Página principal de lectura
│   ├── LectureLine.tsx         # Línea/fila de lectura
│   └── LectureToken.tsx        # Token individual de lectura
└── ui/
    ├── button.tsx
    ├── card.tsx
    ├── input.tsx
    ├── label.tsx
    ├── avatar.tsx
    ├── practiceCard.tsx
    └── auth/
        └── LoginComponent.tsx
```

### Principios de Reutilización

1. **Componentes UI Base** (`ui/`): No dependen de features específicas
2. **Componentes de Layout** (`layout/`): Reutilizables en toda la app
3. **Componentes de Actividad** (`lecture/`): Pueden renderizar datos de cualquier feature
4. **Datos Separados**: Los datos están en `features/`, no en componentes

---

## 🔀 Flujo de Datos

### Patrón General

```
Route → Page (pages/)
  ↓
Page obtiene feature data (features/{letra}/)
  ↓
Page pasa data a Componentes (components/)
  ↓
Componentes renderizan contenido
```

### Ejemplo: Lectura del Feature "dado"

```
1. Usuario navega a /letters/dado
2. LetterPage.tsx carga datos de features/dado/
3. Obtiene lectureActivities de features/dado/activities/lecture/lecture.data.ts
4. Pasa datos a LecturePage.tsx
5. LecturePage renderiza usando LectureLine, LectureToken, etc.
6. Assets se obtienen de features/dado/assets/
```

---

## 📄 Páginas Principales

```
pages/
├── auth/
│   ├── LoginPage.tsx           # Página de login
│   └── RegisterPage.tsx        # Página de registro
├── landing/
│   └── LandingPage.tsx         # Página de inicio
├── letters/
│   └── LetterPage.tsx          # Página de contenido de letras
└── practices/
    └── PracticesPage.tsx       # Página de prácticas
```

---

## 🔐 Autenticación

**Sistema**: Context API + React Router

**Archivos**:
- `context/auth-context.ts` - Definición de contexto
- `context/AuthProvider.tsx` - Provider del contexto
- `context/useAuth.ts` - Hook personalizado para usar auth
- `routes/ProtectedRoutes.tsx` - Rutas protegidas

---

## 🛣️ Routing

**Archivo**: `routes/router.tsx`

**Layouts**:
- **AuthLayout** - Para páginas de autenticación
- **LandingPageLayout** - Para página de inicio
- **MainLayout** - Para páginas protegidas

---

## 💡 Mejores Prácticas

### Al Agregar una Nueva Feature/Letra

1. Crear carpeta en `features/{nuevaLetra}/`
2. Definir estructura: `activities/`, `assets/`, `index.ts`
3. Crear archivo de datos: `activities/{tipo}/{tipo}.data.ts`
4. Exportar desde `features/{nuevaLetra}/index.ts`
5. Exportar desde `features/index.ts`
6. Usar componentes existentes en `components/` para renderizar

### Al Agregar un Nuevo Tipo de Activity

1. Crear carpeta en `features/{letra}/activities/{nuevoTipo}/`
2. Crear archivo de datos: `{nuevoTipo}.data.ts`
3. Reutilizar componentes existentes o crear en `components/{nuevoTipo}/`
4. El componente debe ser agnóstico a la feature

### Al Crear Nuevos Componentes

- ¿Es de UI base? → `components/ui/`
- ¿Es de layout? → `components/layout/`
- ¿Es específico de activity? → `components/{activityType}/`
- **Nunca** hardcodear datos de feature en componentes

---

## 📊 Diagrama de Relaciones

```
┌─────────────────────────────────────┐
│         Router (router.tsx)         │
└──────────────┬──────────────────────┘
               │
     ┌─────────┴──────────┬──────────┐
     ▼                    ▼          ▼
┌─────────┐         ┌─────────┐  ┌──────┐
│ Auth    │         │ Landing │  │Pages │
│Pages    │         │ Page    │  │      │
└─────────┘         └────┬────┘  └──┬───┘
                         │          │
                    ┌────▼──────────▼────┐
                    │  LetterPage.tsx    │
                    │ (Main Content)     │
                    └────┬───────────────┘
                         │
        ┌────────────────┴─────────────────┐
        ▼                                  ▼
    ┌────────────────────┐      ┌─────────────────┐
    │ features/          │      │ components/     │
    │ {letra}/           │      │ lecture/        │
    │ activities/lecture/│      │                 │
    │ lecture.data.ts    │      │ LecturePage     │
    │ assets/            │      │ LectureLine     │
    └────────────────────┘      │ LectureToken    │
                                └─────────────────┘
```

---

## 🚀 Stack Tecnológico

- **Framework**: React 18+ con TypeScript
- **Build Tool**: Vite
- **Routing**: React Router
- **Estado**: Context API (para Auth)
- **Dibujo**: react-sketch-canvas (para actividades de draw)
- **Estilos**: CSS Modules + Tailwind CSS (components.json)
- **Linting**: ESLint

---

## 📝 Notas Importantes

1. **No Hardcodear Features**: Los datos siempre vienen de `features/`
2. **Componentes Agnósticos**: Los componentes en `components/` no deben conocer qué feature están usando
3. **Reutilización**: Antes de crear un componente nuevo, verificar si ya existe uno similar
4. **Separación de Responsabilidades**: Datos en features, UI en components, lógica de página en pages
5. **Tipado**: Siempre usar TypeScript para nuevos archivos

---

## 📚 Archivos de Referencia

- `src/features/types.ts` - Tipos globales de features
- `src/features/index.ts` - Punto de entrada para todas las features
- `src/routes/router.tsx` - Configuración de rutas
- `src/components/ui/*` - Componentes base reutilizables

---

## 🔄 Próximas Actividades por Implementar

Basado en la estructura actual, se pueden agregar:
- **Quiz** - Cuestionarios después de lecturas
- **Games** - Juegos educativos interactivos
- **Exercises** - Ejercicios prácticos
- **Videos** - Contenido en video
- **Assessments** - Evaluaciones

Cada una seguiría el mismo patrón: datos en `features/{letra}/activities/{tipo}/`

---

## 🎨 Actividades Implementadas

### Activity: Draw (v1.0)

**Estructura**:
```
features/{letra}/activities/draw/
├── draw.data.ts              # Datos y tipos de la actividad
```

**Características**:
- ✅ Lienzo interactivo con `react-sketch-canvas`
- ✅ Letra mostrada como marca de agua en la esquina
- ✅ Herramientas integradas: deshacer, rehacer, limpiar, descargar
- ✅ Componentes reutilizables y agnósticos a features
- ✅ Integración con todas las features (dado, lola, mama, nido, papa, sol, tioTian)

**Cómo usar**:
```typescript
import { DrawPage } from '@/components/draw/DrawPage';
import { someFeature } from '@/features';

export function MyPage() {
  const activity = someFeature.activities.draw?.[0];

  return (
    <DrawPage
      activity={activity}
      onNext={() => navigate('/next')}
      onPrevious={() => navigate('/previous')}
    />
  );
}
```

---

**Última actualización**: Febrero 2026
**Versión**: 1.1 - Activity Draw Implementada
