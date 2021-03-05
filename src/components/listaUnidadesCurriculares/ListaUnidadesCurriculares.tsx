import React, { useState } from "react";
import { Button, Grid, IconButton, InputAdornment, TextField } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import ReactLoading from 'react-loading';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import { useUnidadeCurricularContext } from "../../providers/unidade-curricular-provider";
import ListaUnidadesCurricularesStyled, { CardUnidadeCurriculares, CardHeaderUnidadeCurriculares, CardBodyUnidadeCurriculares, CardFooterUnidadeCurriculares } from "./ListaUnidadesCurricularesStyled";
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import UnidadesCurricularesDetalheModal from './../unidadesCurricularesDetalheModal/UnidadesCurricularesDetalheModal';

const ListaUnidadesCurriculares = () => {

    const { listUnidadesCurriculares, fetchUnidadeCurricularData } = useUnidadeCurricularContext()
    const [page, setPage] = useState(1);
    const [openModal, setOpenModal] = useState(false);
    const [objDetail, setObjDetail] = useState<any>({});

    const getSiglaResponsible = (name: string) => {
        let splitName = name.split(" ");
        let sigla = "";
        splitName.forEach(element => {
            if (sigla.length < 2) {
                sigla = sigla + element[0];
            } else {
                return;
            }
        });
        return sigla;
    }

    const getPageList = (pageIncrement: number) => {
        let newPage = page + pageIncrement;
        setPage(newPage);
        fetchUnidadeCurricularData(newPage);
    }

    const openModalDetail = (objDetail: any) => {
        setOpenModal(true);
        setObjDetail(objDetail);
    }

    const handleCloseModal = () => {
        setOpenModal(false);
    }

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

                    <Grid container>
                        <IconButton component="span">
                            <ViewModuleIcon />
                        </IconButton>
                        <IconButton disabled component="span">
                            <FormatListBulletedIcon />
                        </IconButton>
                        <IconButton disabled component="span">
                            <ViewColumnIcon />
                        </IconButton>
                    </Grid>

                    {
                        listUnidadesCurriculares.length == 0 ?

                            <div className={"justify-center"}>
                                <ReactLoading type={"spin"} color={"#5f8af2"} height={'5%'} width={'5%'} />
                            </div>
                            :
                            <Grid container>
                                {
                                    listUnidadesCurriculares.map(objUnidadeCurricular => {
                                        return (
                                            <Grid className="justify-center" xs={12} sm={6} md={4}>
                                                <CardUnidadeCurriculares theme={{ bgColor: objUnidadeCurricular.knowledge_area.color1 }}>
                                                    <CardHeaderUnidadeCurriculares>

                                                        <span>
                                                            {
                                                                objUnidadeCurricular.date_limit_edition ?
                                                                    <>
                                                                        <p className="label-data-limite">
                                                                            Data Limite
                                                                        </p>
                                                                        <p >
                                                                            {objUnidadeCurricular.date_limit_edition}
                                                                        </p>

                                                                    </>
                                                                    :
                                                                    <>
                                                                        <p>Sem data limite</p>
                                                                    </>
                                                            }
                                                        </span>
                                                        <span>
                                                            <CheckCircleOutlineIcon></CheckCircleOutlineIcon>
                                                            <MoreVertIcon onClick={() => openModalDetail(objUnidadeCurricular)} style={{ cursor: "pointer" }} />
                                                        </span>
                                                    </CardHeaderUnidadeCurriculares>
                                                    <CardBodyUnidadeCurriculares theme={{ bgColor: objUnidadeCurricular.knowledge_area.color2, bgColorImg: objUnidadeCurricular.knowledge_area.color1 }}>
                                                        <Grid className="grid-icon-title" container>
                                                            <Grid xs={2}>
                                                                <img className="img-blox" src={objUnidadeCurricular.knowledge_area.icon_white_url} alt="Blox Imagem" />
                                                            </Grid>
                                                            <Grid xs={9}>
                                                                <p className="title">
                                                                    {objUnidadeCurricular.title}
                                                                </p>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container>
                                                            <Grid xs={12}>
                                                                <div className="info">
                                                                    <p className="label">
                                                                        ID
                                                                    </p>
                                                                    <p className={"value"}>
                                                                        {objUnidadeCurricular.id}
                                                                    </p>
                                                                </div>
                                                                <div className="info">
                                                                    <p className="label">
                                                                        Modalidade
                                                                    </p>
                                                                    <p className={"value"}>
                                                                        {objUnidadeCurricular.modality}
                                                                    </p>
                                                                </div>
                                                            </Grid>
                                                        </Grid>
                                                    </CardBodyUnidadeCurriculares>

                                                    <CardFooterUnidadeCurriculares>
                                                        {
                                                            objUnidadeCurricular.responsibles.length == 0 ?
                                                                <span className="sem-editor">
                                                                    Sem Editor Responsável
                                                                </span>
                                                                :
                                                                <>
                                                                    {
                                                                        objUnidadeCurricular.responsibles.map((responsible: any) => {
                                                                            return (

                                                                                <span className="responsible">
                                                                                    {getSiglaResponsible(responsible.name)}
                                                                                </span>
                                                                            )
                                                                        })
                                                                    }
                                                                </>

                                                        }
                                                    </CardFooterUnidadeCurriculares>

                                                </CardUnidadeCurriculares>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                    }
                    <Grid className="paginacao" container>
                        <Button disabled={page == 1} onClick={() => getPageList(-1)} variant="contained">ANTERIOR</Button>
                        <Button disabled={listUnidadesCurriculares.length == 0} onClick={() => getPageList(1)} variant="contained">PRÓXIMO</Button>
                    </Grid>
                </Grid>
            </Grid>

            <UnidadesCurricularesDetalheModal openModal={openModal} objDetail={objDetail}  handleClose={handleCloseModal} > </UnidadesCurricularesDetalheModal>
        </ListaUnidadesCurricularesStyled>
    );
};

export default ListaUnidadesCurriculares;
