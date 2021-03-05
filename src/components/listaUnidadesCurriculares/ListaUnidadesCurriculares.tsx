import React from "react";
import { Grid, InputAdornment, Paper, TextField } from "@material-ui/core";

import { useUnidadeCurricularContext } from "../../providers/unidade-curricular-provider";
import ListaUnidadesCurricularesStyled from "./ListaUnidadesCurricularesStyled";
import SearchIcon from '@material-ui/icons/Search';



const ListaUnidadesCurriculares = () => {

    const { listUnidadesCurriculares } = useUnidadeCurricularContext()



    return (
        <ListaUnidadesCurricularesStyled>

            <Grid container spacing={2}>
                <Grid xs={12}>
                    <Grid container>
                        <Grid xs={6}>
                            <h3>Arquivados</h3>
                        </Grid>
                        <Grid className="grid-search" xs={6}>
                            <TextField className="filter-titulo-id" label="Título ou Id" InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <SearchIcon className="icon-search" />
                                    </InputAdornment>
                                ),
                            }} />
                            <TextField label="Filtrar" />

                        </Grid>
                    </Grid>
                    <hr />

                    <Grid  container>
                        <Grid xs={4}>
                            <Paper elevation={0}>
                                Teste {listUnidadesCurriculares.length}
                            </Paper>
                        </Grid>
                        <Grid xs={4}>
                            <Paper elevation={0}>
                                Teste {listUnidadesCurriculares.length}
                            </Paper>
                        </Grid>
                        <Grid xs={4}>
                            <Paper elevation={0}>
                                Teste {listUnidadesCurriculares.length}
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </ListaUnidadesCurricularesStyled>
    );
};

export default ListaUnidadesCurriculares;
