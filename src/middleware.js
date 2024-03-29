import { createLocaleRedirect } from "@prismicio/next";
import { createClient } from "@/prismicio";

export async function middleware(request) {
  const client = createClient();
  const redirect = await createLocaleRedirect({ client, request });

  if (redirect) {
    return redirect;
  }
}

export const config = {
  matcher: ["/((?!_next|api|slice-simulator|icon.svg).*)"],
};
