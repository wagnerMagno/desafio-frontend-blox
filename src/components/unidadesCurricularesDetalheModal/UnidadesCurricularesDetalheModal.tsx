import React from "react";

import UnidadesCurricularesDetalheModalStyled from './UnidadesCurricularesDetalheModalStyled';
import { Dialog, DialogContent, Grid, Typography } from "@material-ui/core";

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogTitle from '@material-ui/core/DialogTitle';



const styled: any = {
    modalTitle: {
        color: "white"
    },
    groupModalidade: {
        textAlign: "right",
        marginRight: "13px",
        color: "#a0a0a0",
        fontWeight: "700"
    },
    groupCargaHoraria: {
        borderLeft: "1px solid",
        paddingLeft: "10px",
        color: "#a0a0a0",
        fontWeight: "700"
    },
    label: {
        margin: "0",
        fontWeight: 500
    },
    value: {
        margin: 0,
        fontSize: "1.3em"
    },
    area: {
        color: "#a0a0a0",
        fontWeight: 700
    },
    valueArea: {
        margin: 0,
        fontSize: "0.8em"
    },
    gridArea: {

    },
    competences: {
        borderRadius: "10px",
        padding: "5px 10px 5px 10px",
        fontSize: "0.6em",
        color: "white",
        marginRight: "5px"
    }
}


const UnidadesCurricularesDetalheModal = (props: any) => {

    const { handleClose, openModal, objDetail } = props;
    console.log("objDetail wag ", objDetail);

    const close = () => {

    }

    return (
        <UnidadesCurricularesDetalheModalStyled>

            {
                objDetail.id &&
                <Dialog fullWidth maxWidth={false} className="dialog" onClose={handleClose} aria-labelledby="customized-dialog-title" open={openModal}>
                    <MuiDialogTitle style={{ ...styled.modalTitle, backgroundColor: objDetail.knowledge_area.color1 }}>
                        <h3 style={{ display: "inline-block" }}>{objDetail.title}</h3>
                        <IconButton aria-label="close" style={{ float: "right", color: "white" }} onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </MuiDialogTitle>

                    <DialogContent>
                        <Grid container style={{ marginBottom: "30px" }}>

                            <Grid style={{ ...styled.groupModalidade }} xs={6}>
                                <p style={{ ...styled.label }}>
                                    Modalidade
                                </p>
                                <p style={{ ...styled.value }}>
                                    {objDetail.modality}
                                </p>
                            </Grid>
                            <Grid style={{ ...styled.groupCargaHoraria }} xs={5}>
                                <p style={{ ...styled.label }}>
                                    Carga Horária
                                </p>
                                <p style={{ ...styled.value }}>
                                    {objDetail.hours} h
                                </p>
                            </Grid>
                        </Grid>

                        <Grid container style={{ ...styled.gridArea }}>
                            <Grid xs={2}>
                            </Grid>
                            <Grid style={{ ...styled.area }} xs={5}>
                                <p style={{ ...styled.label, color: "black" }}>
                                    Área de conhecimento
                                </p>
                                <p style={{ ...styled.valueArea }}>
                                    {objDetail.knowledge_area.name}
                                </p>
                            </Grid>
                            <Grid style={{ ...styled.area }}  >
                                <p style={{ ...styled.label, color: "#3a3a3a" }}>
                                    Perfil
                                </p>
                                <p style={{ ...styled.valueArea }}>
                                    {objDetail.blox_profile.name}
                                </p>
                            </Grid>

                        </Grid>
                        <Grid container style={{ ...styled.gridArea, marginTop: "20px", marginBottom: "30px" }}>

                            <Grid xs={2}>
                            </Grid>
                            <Grid style={{ ...styled.area }} xs={5}>
                                <p style={{ ...styled.label, color: "black" }}>
                                    Área Funcional
                                </p>
                                <p style={{ ...styled.valueArea }}>
                                    {objDetail.functional_area.name}
                                </p>
                            </Grid>
                            <Grid style={{ ...styled.area }} >
                                <p style={{ ...styled.label, color: "#3a3a3a" }}>
                                    Competências
                                </p>
                                {
                                    objDetail.competences.map((comp: any) => {
                                        return (
                                            <span style={{ ...styled.competences, background: objDetail.knowledge_area.color1 }}>
                                                {comp.name}
                                            </span>
                                        )
                                    })
                                }
                            </Grid>

                        </Grid>
                    </DialogContent>

                </Dialog>
            }

        </UnidadesCurricularesDetalheModalStyled>
    );
};

export default UnidadesCurricularesDetalheModal;


