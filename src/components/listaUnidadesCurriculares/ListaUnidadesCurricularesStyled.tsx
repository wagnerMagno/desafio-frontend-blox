import styled from "styled-components";

const ListaUnidadesCurricularesStyled = styled.section`

    padding: 20px 60px 20px 60px;

    .justify-center{
        display: flex;
        justify-content: center;
    }
    hr{
        border-top: 1px solid #e6e6e6;
        border-bottom: 0;
        border-right: 0;
        border-left: 0;
    }
    .grid-search{
        text-align: right;
        
        .filter-titulo-id{
            margin-right: 30px;
            
            .icon-search{
                color: #5f8af2;
            }
        }
    }

    .paginacao{
        justify-content: space-between;
        padding: 20px 15%;
        
        button{
            width: 35%;
            height: 40px;
        }
    }

    
`;


export default ListaUnidadesCurricularesStyled;

export const CardUnidadeCurriculares = styled.div`
    background-color : ${props => props.theme.bgColor};
    width: 95%;
    border-radius: 10px;
    min-height: 175px;
    margin-bottom: 11px;
    color : white;


`

CardUnidadeCurriculares.defaultProps = {
    theme: {
        bgColor: "white"
    }
}


export const CardHeaderUnidadeCurriculares = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    height: 15%;

    .label-data-limite{
        font-size: 0.5em;
    }
    p{
        margin : 0;
        font-size: 0.8em;
    }
`

export const CardBodyUnidadeCurriculares = styled.div`
    width: 100%;
    background-color : ${props => props.theme.bgColor};
    
    .MuiGrid-container{
        padding-left: 10px;
        padding-bottom: 10px;
    }    
    .grid-icon-title{
        padding: 10px;
    }    
    .img-blox{
        font-size: 10px;
        background: ${props => props.theme.bgColorImg};
        width: 80%;
        display: block;
        text-align: center;
    }

    p{
        margin: 0px;
    }
    .title{
        font-size: 0.8em;
        margin-top: 5px;
    
    }

    .info{
        display: inline-block;
        margin-right: 10px;


        .label{
            font-size: 0.5em;
        }
        
        .value{
            font-size: 0.6em;
        }
    }
`


CardBodyUnidadeCurriculares.defaultProps = {
    theme: {
        bgColor: "white",
        bgColorImg: "white"

    }
}


export const CardFooterUnidadeCurriculares = styled.div`
    padding : 10px;
    
    .responsible{
        border: 1px solid;
        padding: 3px;
        border-radius: 18px;
    }

    .sem-editor{
        font-size : 0.8em;
    }
    
`