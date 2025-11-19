# Utilisation du Système de Thème

## Vue d'ensemble

Le système de thème centralise toutes les couleurs et variables de design dans des fichiers TypeScript, permettant une gestion cohérente et typée du style de l'application.

## Fichiers

### `src/theme.ts`
Contient toutes les variables de thème :
- **Colors** : Couleurs primaires, secondaires, texte, fond, bordures, glow
- **Spacing** : Espacements standardisés
- **Border Radius** : Rayons de bordure
- **Font Sizes** : Tailles de police

### `src/ThemeProvider.tsx`
Provider React qui injecte les variables du thème dans les CSS custom properties (variables CSS) au chargement de l'application.

## Utilisation

### 1. Accéder au thème dans un composant React

```tsx
import { useTheme } from './ThemeProvider'

function MyComponent() {
  const { theme } = useTheme()

  return (
    <div style={{
      color: theme.colors.primary,
      padding: theme.spacing.lg
    }}>
      Contenu
    </div>
  )
}
```

### 2. Utiliser les variables CSS dans les styles

Les variables CSS sont automatiquement injectées et disponibles :

```css
.my-class {
  color: var(--primary);
  background: var(--bg-darker);
  border: 1px solid var(--border);
  box-shadow: 0 0 20px var(--glow-primary);
}
```

### 3. Modifier les couleurs

Pour changer les couleurs de l'application, modifiez simplement `src/theme.ts` :

```typescript
export const theme = {
  colors: {
    primary: '#6366F1',      // Violet/Indigo
    secondary: '#818CF8',    // Violet clair
    // ...
  }
}
```

Les changements seront appliqués automatiquement partout dans l'application.

## Variables CSS Disponibles

### Couleurs
- `--primary` : #6366F1
- `--primary-dark` : #4F46E5
- `--primary-light` : #818CF8
- `--secondary` : #818CF8
- `--accent` : #A5B4FC

### Texte
- `--text-primary` : #ffffff
- `--text-secondary` : #94a3b8
- `--text-light` : #64748b

### Arrière-plans
- `--bg-dark` : #0a0f1e
- `--bg-darker` : #050810
- `--bg-card` : rgba(15, 23, 42, 0.6)

### Effets
- `--border` : rgba(148, 163, 184, 0.1)
- `--glow-primary` : rgba(99, 102, 241, 0.4)
- `--glow-secondary` : rgba(129, 140, 248, 0.3)

## Avantages

1. **Centralisation** : Toutes les couleurs en un seul endroit
2. **Type Safety** : TypeScript garantit l'utilisation correcte des valeurs
3. **Réactivité** : Les changements se propagent automatiquement
4. **Cohérence** : Style uniforme dans toute l'application
5. **Maintenance** : Facile de changer le thème global
