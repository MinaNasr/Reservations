import styled from 'styled-components';

export const TimeSlotContainer = styled.div`
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

    ${({disabled})=>(
        disabled ? `
        background-color:rgb(180, 180, 180);
        `:`
        `
    )}

    ${({reservation}) => (
        reservation ? `
            pointer-events:none;
            cursor:none
        `:`
        
        `
    )}
`