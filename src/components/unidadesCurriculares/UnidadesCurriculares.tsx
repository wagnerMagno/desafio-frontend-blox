import React, {useEffect} from "react";
import { AppBar, Tab, Tabs } from "@material-ui/core";

import UnidadesCurricularesStyled from './UnidadesCurricularesStyled';
import { useUnidadeCurricularContext } from "../../providers/unidade-curricular-provider";
import ListaUnidadesCurriculares from "../listaUnidadesCurriculares/ListaUnidadesCurriculares";


interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`wrapped-tabpanel-${index}`}
            aria-labelledby={`wrapped-tab-${index}`}
            {...other}
        >
            {children}
        </div>
    );
}

const UnidadesCurriculares = () => {

    const { fetchUnidadeCurricularData, listUnidadesCurriculares } = useUnidadeCurricularContext()
    const [value, setValue] = React.useState('lista');



    useEffect(() => {
        fetchUnidadeCurricularData(1);
    }, [])



    const getTabProps = (index: string) => {
        return {
            id: `wrapped-tab-${index}`,
            'aria-controls': `wrapped-tabpanel-${index}`,
        };
    }

    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setValue(newValue);
    };


    return (
        <UnidadesCurricularesStyled>
            <AppBar position="static">
                <h3 className="titlePage">
                    Gerenciar Unidades Curriculares
                </h3>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Lista" value="lista" {...getTabProps('lista')} />
                    <Tab label="Criar novo" value="novo" {...getTabProps('novo')} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={'lista'}>
                <ListaUnidadesCurriculares />
            </TabPanel>
            <TabPanel value={value} index={'novo'}>
                Item Two
            </TabPanel>
        </UnidadesCurricularesStyled>
    );
};

export default UnidadesCurriculares;
