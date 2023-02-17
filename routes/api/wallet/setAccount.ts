import { Handlers } from "$fresh/server.ts";
import { setCookie } from "std/http/cookie.ts";

export const handler: Handlers = {
  async POST(req) {
    const url = new URL(req.url);
    const headers = new Headers();
    const form = await req.formData();
    const value = form.get("selectedAccount")?.toString() || "";
    setCookie(headers, {
      name: "web3Account",
      value,
      maxAge: 11120,
      sameSite: "Lax",
      domain: url.hostname,
      path: "/",
      secure: true,
    });
    headers.set("location", "/");
    return new Response(null, {
      status: 303,
      headers,
    });
  },
};
