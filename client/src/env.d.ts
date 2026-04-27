interface ImportMetaEnv {
  readonly VITE_METABASE_INSTANCE_URL: string;
  readonly CLIENT_PORT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
