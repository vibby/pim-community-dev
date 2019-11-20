import React, {ReactNode} from 'react';
import styled from "styled-components";
import iconUrl from '../../common/assets/icons/copy.svg';

const Row = styled.tr`
    width: 480px;
    height: 54px;
    line-height: 54px;
    border-bottom: 1px solid #547857;
`;

const Label = styled.span`
    width: 39px;
    height: 16px;
    color: #9452BA;
    font-size: 13px;
    font-weight: bold;
`;

const Action = styled.img`
    width: 18px;
    height: 18px;
    background-image: url(${iconUrl});
`;

export const ListItem = ({ children, label }: { children: ReactNode, label: ReactNode}) => (
    <Row>
        <td><Label><i>{ label }</i></Label></td>
        <td>{ children }</td>
        <td><Action></Action></td>
    </Row>
);
