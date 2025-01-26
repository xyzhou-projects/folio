"use client";

import { testSupabaseConnection } from "@/lib/supabase/test";
import { useEffect } from "react";

export default function TestPage() {
  useEffect(() => {
    testSupabaseConnection();
  }, []);

  return <div>Check console for connection test results</div>;
}
