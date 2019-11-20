import React, {ReactNode} from 'react';
import styled from "styled-components";
import iconUrl from '../assets/icons/info.svg';

const HintIcon = styled.div`
    border-right: 1px #D9DDE2 solid;
    min-width: 65px;
    margin-right: 16px;
    min-height: 44px;
    background-image: url(${iconUrl});
`;

const SubsectionHint = styled.div`
    background: #F5F9FC;
    display: flex;
    padding: 5px 20px 5px 5px;
    font-size: 13px;
    color: #67768A;
    align-items: center;
`;

export const SmallHelper = ({ children }: {children: ReactNode}) => (
    <div className="AknSubsection">
        <SubsectionHint>
            <HintIcon className=" AknIconButton AknIconButton--info"></HintIcon>
            <div className="AknSubsection-hintTitle">{ children }</div>
        </SubsectionHint>
    </div>
);
