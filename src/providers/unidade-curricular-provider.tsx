import React, { useState, useMemo, useContext } from "react"
import { UnidadeCurricularContext } from './../contexts/UnidadeCurricularContext';
import { getBloxes } from './../api/api';

const UnidadeCurricularProvider = (props: any) => {
    const [ listUnidadesCurriculares, setListUnidadesCurriculares] = useState<any[]>([]);
    const listUnidadesCurricularesMock: any[] = require('../json/curricular_units_response_example.json')


    const fetchUnidadeCurricularData = (page: number) => {
        getBloxes(page).then(res => {
            setListUnidadesCurriculares(res.data)
        }).catch(error =>{
            console.log("error" , error)
            setListUnidadesCurriculares(listUnidadesCurricularesMock) //Feito para contornar o problema do endpoint

        });
    }

    const UnidadeCurricularData = useMemo(() => {
        return {
            fetchUnidadeCurricularData, listUnidadesCurriculares
        }
    }, [listUnidadesCurriculares]);

    return <UnidadeCurricularContext.Provider value={UnidadeCurricularData} {...props} />;
};

export const useUnidadeCurricularContext = () => useContext(UnidadeCurricularContext);

export default UnidadeCurricularProvider;
