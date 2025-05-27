// storage-adapter-import-placeholder
import { postgresAdapter } from "@payloadcms/db-postgres"
import { payloadCloudPlugin } from "@payloadcms/payload-cloud"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import path from "path"
import { buildConfig } from "payload"
import { fileURLToPath } from "url"
import sharp from "sharp"
import { Users } from "./collections/Users"
import { Media } from "./collections/Media"
import { Pages } from "./collections/Pages"
import { PayLoadNavbar } from "./blocks/PayloadHeader/config"
import { Products } from "./collections/Products"
import { ProductCategories } from "./collections/ProductCategories"
import { PayloadFooter } from "./blocks/PayloadFooter/config"
import { s3Storage } from "@payloadcms/storage-s3"
import { Theme } from "./blocks/Theme/config"
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)


export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Pages, Products, ProductCategories],
  globals: [PayLoadNavbar, PayloadFooter, Theme],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    ...(process.env.S3_BUCKET &&
    process.env.S3_ACCESS_KEY_ID &&
    process.env.S3_SECRET_ACCESS_KEY &&
    process.env.S3_REGION
      ? [
          s3Storage({
            collections: {
              media: true,
            },
            bucket: process.env.S3_BUCKET!,
            config: {
              credentials: {
                accessKeyId: process.env.S3_ACCESS_KEY_ID!,
                secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
              },
              region: process.env.S3_REGION,
              endpoint: process.env.S3_ENDPOINT,
              forcePathStyle: true,
              // ... Other S3 configuration
            },
          }),
        ]
      : []),
    // storage-adapter-placeholder
  ],
})
