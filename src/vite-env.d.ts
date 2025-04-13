/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WORDLE_API_KEY: string,
  readonly VITE_WORDLE_API_HOST: string,
}

interface ImportMeta {
  readonly env: ImportMetaEnv,
}
