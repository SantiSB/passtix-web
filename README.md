# 🎫 PassTix

**PassTix** es una plataforma moderna de boletería digital desarrollada con **Next.js**, **Tailwind CSS**, **shadcn/ui** y **Firebase**.

El sistema está diseñado para ser rápido, escalable y enfocado en dispositivos móviles. Soporta múltiples roles como **superadmin**, **productor** y **comprador**, permitiendo gestionar eventos, vender entradas, validar accesos y visualizar estadísticas en tiempo real.

---

## 🚀 Cómo empezar

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/passtix-web.git
cd passtix-web
```

### 2. Instalar dependencias

```bash
pnpm install
```

### 3. Iniciar el servidor de desarrollo

```bash
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la app en funcionamiento.

---

## 🧱 Tecnologías utilizadas

* **Framework**: [Next.js](https://nextjs.org) (App Router)
* **Estilos**: [Tailwind CSS](https://tailwindcss.com)
* **Componentes UI**: [shadcn/ui](https://ui.shadcn.com)
* **Estado global**: [Redux Toolkit](https://redux-toolkit.js.org)
* **Autenticación y base de datos**: [Firebase](https://firebase.google.com)
* **Data fetching y sincronización**: [React Query (TanStack)](https://tanstack.com/query)
* **Validación de formularios**: [Zod](https://zod.dev) + [React Hook Form](https://react-hook-form.com)
* **Íconos**: [Lucide React](https://lucide.dev)

---

## 📁 Estructura del proyecto

```bash
src/
├── app/                # Rutas y páginas principales (App Router)
├── components/         # Componentes reutilizables (UI, layouts, etc.)
├── features/           # Slices de Redux organizados por dominio
├── hooks/              # Hooks personalizados
├── lib/                # Configuración de Firebase, helpers y utilidades
├── store/              # Configuración de Redux Toolkit
├── types/              # Tipos globales y esquemas Zod
└── styles/             # Estilos globales (globals.css, etc.)
```

---

## ☁️ Despliegue

Este proyecto está preparado para ser desplegado en plataformas como [Vercel](https://vercel.com), [Firebase Hosting](https://firebase.google.com/products/hosting) o cualquier proveedor que soporte Next.js.

Consulta la [documentación oficial de Next.js sobre despliegue](https://nextjs.org/docs/app/building-your-application/deploying) para más detalles.
