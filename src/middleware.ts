import createIntlMiddleware from "next-intl/middleware";
import { routing } from "./shared/config/i18n/routing";

export default createIntlMiddleware(routing);

export const config = {
  matcher: ["/((?!api|_next|favicon.ico|images).*)"],
};
