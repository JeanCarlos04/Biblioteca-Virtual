import { supabase } from "./supabase.config";

// Insertar usuario
export const InsertarUsuarios = async (p) => {
  const result = await MostrarUsuarioXIdAuthSupabase(p.idauth_supabase);
  if (result.length === 0) {
    try {
      const { data, error } = await supabase.from("usuarios").insert(p).select();
      if (error) throw error;
      return data;
    } catch (error) {
      console.error("Error al insertar usuario:", error.message);
      alert(error.error_description || error.message);
    }
  }
};

// Mostrar usuario por ID de autenticación
export const MostrarUsuarioXIdAuthSupabase = async (idauth_supabase) => {
  try {
    const { data, error } = await supabase
      .from("usuarios")
      .select("id, nombres, foto, idauth_supabase, correo")
      .eq("idauth_supabase", idauth_supabase);
    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error al obtener usuario:", error.message);
    alert(error.error_description || error.message);
  }
};
