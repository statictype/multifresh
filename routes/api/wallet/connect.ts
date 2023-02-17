import { Handlers } from "$fresh/server.ts";
import { setCookie } from "std/http/cookie.ts";

export const handler: Handlers = {
  POST(req) {
    const url = new URL(req.url);
    const headers = new Headers();
    setCookie(headers, {
      name: "web3Allowed",
      value: "true",
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
