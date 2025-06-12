import type { GlobalAfterChangeHook } from "payload"
import { revalidateTag } from "next/cache"

export const revalidateTheme: GlobalAfterChangeHook = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating theme`)

    revalidateTag("global_theme")
  }

  return doc
}
