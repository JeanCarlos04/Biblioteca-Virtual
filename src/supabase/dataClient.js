import { createClient } from "@supabase/supabase-js"; 

<<<<<<< HEAD
// export const supabase = createClient(
//   import.meta.env.VITE_SUPABASE_URL,
//   import.meta.env.VITE_SUPABASE_ANON_KEY
// );


export const supabase = createClient(
  "https://mxlydfefmqkzzykwcwil.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14bHlkZmVmbXFrenp5a3djd2lsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMDkzMjUzNiwiZXhwIjoyMDQ2NTA4NTM2fQ.-lFpry72x0dRKoi3WLuB63OIaebz7C2IApTbgAPH-RM"
=======
export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
>>>>>>> e25c9bffbc2786cfa7dcc733a2c7b45059368ebb
);