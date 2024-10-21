import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

const defaultLocale = "es";

export default getRequestConfig(async () => {
  const locale = cookies().get("NEXT_LOCALE")?.value || defaultLocale;

  return {
    locale,
    messages: (await import(`/messages/${locale}.json`)).default,
  };
});
