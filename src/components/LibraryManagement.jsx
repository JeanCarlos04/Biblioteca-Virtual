import { useContext } from "react";
import { ContextLibrary } from "../contexts/ContextLibrary";

export function LibraryManagement() {
  const { usuarios } = useContext(ContextLibrary);

  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Lista de Usuarios</h1>
        <ul>
          {usuarios.map((usuario) => (
            <li key={usuario.id} className="mb-2">
              <strong>{usuario.Nombre}</strong> - {usuario.Email}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
