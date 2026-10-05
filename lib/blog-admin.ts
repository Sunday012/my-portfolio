import { blogAdminEmail, isSupabaseConfigured } from "./supabase/config";
import { createSupabaseServerClient } from "./supabase/server";

export async function getBlogAdmin() {
  if (!isSupabaseConfigured) {
    return null;
  }

  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.auth.getClaims();
  const claims = data?.claims;

  if (typeof claims?.email !== "string") {
    return null;
  }

  return claims.email.toLowerCase() === blogAdminEmail ? claims : null;
}
