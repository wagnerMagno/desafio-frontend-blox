import { createContext } from "react";

interface UnidadeCurricularContextProps {
  fetchUnidadeCurricularData: Function,
  listUnidadesCurriculares : any[]
}

const UnidadeCurricularValue = {
  listUnidadesCurriculares: [],
  fetchUnidadeCurricularData: () => {},
}

export const UnidadeCurricularContext = createContext<UnidadeCurricularContextProps>(UnidadeCurricularValue)