import React, {ReactNode} from 'react';
import styled from 'styled-components';
import {PropsWithTheme} from '../../common/theme';

export const CredentialList = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
`;

export const CredentialListItem = ({
    label,
    children: value,
    action,
}: {
    label: ReactNode;
    children: ReactNode;
    action: ReactNode;
}) => (
    <>
        <LabelColumn>{label}</LabelColumn>
        <ValueColumn>{value}</ValueColumn>
        <ActionColumn>{action}</ActionColumn>
    </>
);

const Column = styled.div`
    border-bottom: 1px solid ${({theme}: PropsWithTheme) => theme.color.mediumGrey};
    height: 54px;
    line-height: 54px;
    padding: 0 10px;
`;

const LabelColumn = styled(Column)`
    color: ${({theme}: PropsWithTheme) => theme.color.purple};
    font-weight: bold;
    padding-left: 20px;
`;

const ValueColumn = styled(Column)`
    color: ${({theme}: PropsWithTheme) => theme.color.darkBlue};
`;

const ActionColumn = styled(Column)`
    padding-right: 20px;
    text-align: right;
`;
