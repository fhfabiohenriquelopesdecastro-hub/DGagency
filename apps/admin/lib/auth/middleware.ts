import type { NextRequest } from "next/server";
import { auth } from "./index";

export async function getSession(request: NextRequest) {
  const sessionCookie = request.cookies.get("admin.session");

  if (!sessionCookie) {
    return null;
  }

  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    return session;
  } catch {
    return null;
  }
}