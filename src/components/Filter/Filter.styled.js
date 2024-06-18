
import styled from 'styled-components';

export const StyledFilter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap; /* Ensure items do not wrap to the next line */

    select, input, button {
        margin: 5px; /* Add spacing around filters */
        height: 35px; /* Standardize height for all filter elements */
    }

    button {
        cursor: pointer; /* Change cursor to pointer on hover over button */
        background-color: orange;
        color: white;
        border: none;
        padding: 0 15px;
        height: 35px; /* Ensure button has the same height as inputs */
    }
    
    @media only screen and (max-width: 530px) {
        flex-wrap: wrap; /* Allow wrapping on small screens */
        justify-content: center; /* Center items on small screens */
        
        select, input, button {
            flex: 1 1 100%; /* Allow items to take full width on small screens */
            margin: 5px 0; /* Adjust margin for better spacing */
        }
    }
`;
