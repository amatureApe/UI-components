import styled, { css } from 'styled-components'

export const PickWrapper = styled.div`
    border: 1px solid red;
    border-radius: 7px;

    width: 500px;

    button {
        border: none;
        outline: none;
        background: none;
    }
`
export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;

    p {
        flex: 1 0 0;
    }

    ion-icon {
        cursor: pointer;
        font-size: 1.5rem;
    }
`

export const Body = styled.div`
    margin: 5px;
`

export const SevenColGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 10px;

    ${({ heading }) => heading && css`
        font-weight: bold;
    `}

    .active {
        border: 1px solid green;
        border-radius: 10px;
        height: 100%;
    }

    p {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button: disabled {
        text-decoration: line-through;
    }
`