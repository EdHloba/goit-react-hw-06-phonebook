import styled from '@emotion/styled';

export const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0px;
`;

export const Text = styled.p`
    color: var(--primary-text-color);
    font-size: 20px;
    &:first-of-type {
    font-weight: 500; 
    color: var(--secondary-text-color);  
    }
`;

export const Button = styled.button`
        min-width: 100px;
        height: 40px;

        border: 1px solid transparent;
        border-radius: 5px;

        background-color: var(--accent-color);
        color: var(--primary-white-color);
        font-weight: 700;
        font-size: 16px;
        transition: background-color var(--transition);

        &:hover,
        &:focus {
        background-color: #02029b;
    }
`