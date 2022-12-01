import styled, { css } from 'styled-components'

export const PickWrapper = styled.div`
    border: 1px solid red;
    border-radius: 7px;

    width: 500px;
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
    }
`

export const Body = styled.div`
    margin: 5px;
`

export const SevenColGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);

    ${({ heading }) => heading && css`
        font-weight: bold;
    `}
`