import { createClient } from "./client";

export async function testSupabaseConnection() {
  try {
    const supabase = createClient();

    // Just test if we can connect to Supabase
    const { data, error } = await supabase.auth.getSession();

    if (error) {
      console.error("Supabase error:", error.message);
      return false;
    }

    console.log("Supabase connection successful");
    return true;
  } catch (error) {
    console.error("Supabase connection failed:", error);
    return false;
  }
}
