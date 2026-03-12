# AI Development Rules & Tech Stack

## Tech Stack
- **Vite**: Fast build tool and development server.
- **React 18 & TypeScript**: Core UI library with strict type safety.
- **Tailwind CSS**: Utility-first styling framework for all visual design.
- **shadcn/ui**: Accessible, high-quality UI components built on Radix UI.
- **Framer Motion**: Powerful library for declarative animations and transitions.
- **Lucide React**: Clean and consistent icon set for the entire application.
- **React Router DOM**: Standard routing solution for single-page applications.
- **TanStack Query**: Robust server-state management and data fetching.
- **Supabase**: Backend-as-a-Service for database, authentication, and storage.
- **Zod & React Hook Form**: Type-safe form validation and management.

## Library Usage Rules

### Styling & Layout
- **Tailwind CSS**: Use Tailwind classes for all styling. Avoid writing custom CSS in `.css` files unless it's for global base styles or complex animations that Framer Motion can't handle.
- **Utility Classes**: Utilize the custom utility classes defined in `src/index.css` (e.g., `label-text`, `btn-shadow`, `image-outline`) to maintain design consistency.
- **Class Merging**: Always use the `cn()` utility from `@/lib/utils` when conditionally applying Tailwind classes.

### Components
- **shadcn/ui**: Check `src/components/ui` first before building a new component. If a component exists, use it. If you need a new common UI element, assume shadcn/ui is the standard.
- **Icons**: Use `lucide-react` for all iconography. Do not import icons from other libraries.

### State & Data
- **Server State**: Use TanStack Query (`useQuery`, `useMutation`) for all asynchronous data fetching and state synchronization with the backend.
- **Backend**: Use the Supabase client located in `src/integrations/supabase/client.ts` for all database and authentication operations.
- **Forms**: Use `react-hook-form` combined with `zod` schemas for all form implementations to ensure validation and type safety.

### Navigation & Structure
- **Routing**: Define all routes in `src/App.tsx`. Use `react-router-dom` for navigation.
- **File Organization**: 
  - Pages go in `src/pages/`.
  - Reusable components go in `src/components/`.
  - UI primitives (shadcn) stay in `src/components/ui/`.
  - Custom hooks go in `src/hooks/`.

### Animations
- **Framer Motion**: Use `motion` components for entrance animations, hover effects, and layout transitions. Follow the pattern of defining variants for complex animations as seen in `HeroSection.tsx`.