// Type definitions for Crisp Chat
interface Window {
  $crisp: any[];
  CRISP_WEBSITE_ID: string;
}

// Type definitions for environment variables
interface ImportMetaEnv {
  readonly VITE_CRISP_WEBSITE_ID: string;
  // Ajoutez d'autres variables d'environnement ici
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
