// Generated by Wrangler on Sat Jul 06 2024 18:52:21 GMT+0200 (Central European Summer Time)
// by running `wrangler types`

interface Env {
  datalake_blobs: KVNamespace;
  DATALAKE_APAC: R2Bucket;
  DATALAKE_EEUR: R2Bucket;
  DATALAKE_WEUR: R2Bucket;
  DATALAKE_ENAM: R2Bucket;
  DATALAKE_WNAM: R2Bucket;
  HYPERDRIVE: Hyperdrive;
  STREAMS_ACCOUNT_ID: string;
  STREAMS_AUTH_KEY: string;
  R2_ACCOUNT_ID: string;
  DB_URL: string;
  DATALAKE_APAC_ACCESS_KEY: string;
  DATALAKE_APAC_SECRET_KEY: string;
  DATALAKE_APAC_BUCKET_NAME: string;
  DATALAKE_EEUR_ACCESS_KEY: string;
  DATALAKE_EEUR_SECRET_KEY: string;
  DATALAKE_EEUR_BUCKET_NAME: string;
  DATALAKE_WEUR_ACCESS_KEY: string;
  DATALAKE_WEUR_SECRET_KEY: string;
  DATALAKE_WEUR_BUCKET_NAME: string;
  DATALAKE_ENAM_ACCESS_KEY: string;
  DATALAKE_ENAM_SECRET_KEY: string;
  DATALAKE_ENAM_BUCKET_NAME: string;
  DATALAKE_WNAM_ACCESS_KEY: string;
  DATALAKE_WNAM_SECRET_KEY: string;
  DATALAKE_WNAM_BUCKET_NAME: string;
}