import styled  from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 23%;
`

export const CompanyContainer = styled.div`
    border-radius: 4px;
    min-height: 100px;
    background: rgb(235, 235, 235);
    padding: 0.7em;
    margin: 1em ;
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
    justify-content: center;

    cursor: pointer;
`

export const SlotsContainer = styled.div`
    border-radius: 4px;
    min-height: 100px;
    background: rgb(235, 235, 235);
    padding: 0.7em;
    margin: 1em ;
    width: 100%;
    max-height: 380px;
    overflow-y: auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);`