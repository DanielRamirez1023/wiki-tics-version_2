import { infoTodos } from "./infoTodos";

export const Seleccion = (etiqueta) => {
  const selecionados = infoTodos.filter(
    (element) => element.etiqueta == etiqueta
  );

  return selecionados;
};
