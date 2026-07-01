const SUPABASE_URL = "COLE_AQUI_SEU_PROJECT_URL";

const SUPABASE_ANON_KEY = "COLE_AQUI_SUA_ANON_KEY";

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

console.log("✅ Supabase conectado");
