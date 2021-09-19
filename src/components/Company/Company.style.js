import styled  from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
`

export const CompanyContainer = styled.div`
    border-radius: 4px;
    min-height: 100px;
    background: rgb(235, 235, 235);
    padding: 0.7em;
    margin: 1em ;
    width: 100%;
`

export const CompanyNameSection = styled.div`
    border-radius: 4px;
    border-bottom: rgb(180, 180, 180) 1px solid;
    background: white;
    margin: 1em 0 ;
    padding: 0.5em;
    font-size: 0.9em;
    position: relative;

    display: flex;
    justify-content: space-between;

    cursor: pointer;
`