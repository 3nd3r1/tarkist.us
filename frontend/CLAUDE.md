# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality
- `npm run type-check` - Run TypeScript type checking

### Environment Setup
- Create `.env.local` with `NEXT_PUBLIC_API_URL=http://localhost:8000` (defaults to this if not set)
- Requires Node.js 18+ and npm

## Architecture Overview

### Project Structure
This is a Next.js 14 app using the App Router architecture:

```
app/                     # Next.js App Router pages
├── page.tsx            # Landing page with hero search
├── layout.tsx          # Root layout with navigation
├── assess/[id]/        # Dynamic assessment detail pages
├── compare/            # Comparison functionality
└── globals.css         # Global styles with Tailwind

components/
├── ui/                 # shadcn/ui base components
├── shared/             # Reusable components (navigation, logo, etc.)
├── search/             # Search-related components  
└── assessment/         # Assessment-specific components

lib/
├── types.ts            # Complete TypeScript type definitions
├── api.ts              # API client with OpenAPI integration
├── auth-context.tsx    # Authentication context
└── utils.ts            # Utility functions
```

### Type System
- All types are defined in `lib/types.ts` following the 15-section assessment framework
- Main interface is `Assessment` which covers all security dimensions
- API types in `lib/api.ts` handle OpenAPI integration and mapping

### API Integration
- Backend API integration handled in `lib/api.ts`
- Uses OpenAPI specification for type safety
- Supports both UUID and integer ID formats for backward compatibility
- Key functions: `getAllAssessments()`, `getAssessment(id)`, `createAssessment()`, etc.

### Component Architecture
- Built on shadcn/ui component library with custom theme extensions
- Uses Framer Motion for animations
- Recharts for data visualizations
- Three theme support: light, dark, matrix (custom)
- Components are organized by function (ui, shared, search, assessment)

### Styling System
- Tailwind CSS with custom design system
- CSS custom properties for theming
- Custom animations and color schemes
- Responsive design patterns throughout

## Key Technical Details

### State Management
- React Context for authentication (`auth-context.tsx`)
- Theme management via `next-themes`
- No global state library - uses React hooks and context

### Routing & Pages
- Next.js App Router with dynamic routes
- Assessment details at `/assess/[id]` support both UUID and integer IDs
- Static pages for about, pricing, applications

### Data Flow
- API client handles all backend communication
- Assessment data follows comprehensive 15-section security framework
- Frontend types map from backend OpenAPI specification
- Caching handled at API client level

### Security Assessment Framework
The application evaluates software across 15 comprehensive dimensions defined in `docs/assessment-schema.md`:
1. Vendor Information 
2. Product Information
3. Information Sources
4. Admin Controls
5. Platform Support
6. Data Handling
7. Permissions
8. Vulnerabilities (CVE)
9. Release Lifecycle
10. AI Features
11. Incidents & Breaches
12. Compliance
13. Report Configuration
14. Alternatives
15. Citations

Each assessment produces a trust score (0-100) with detailed analysis across all dimensions.