import React, {useRef, FC} from 'react';
import {AppCredentials as AppCredentialsInterface} from '../../../domain/apps/app-credentials.interface';
import {Section, SmallHelper} from '../../common';
import {Translate} from '../../shared/translate';
import {CredentialList, CredentialListItem} from './CredentialList';
import {RegenerateSecretButton} from './RegenerateSecretButton';
import {IconButton} from '../../common';
import {DuplicateIcon} from '../../common/icons';
import styled from 'styled-components';
import {PropsWithTheme} from '../../common/theme';
import {useNotify, NotificationLevel} from '../../shared/notify';

interface Props {
    code: string;
    appCredentials: AppCredentialsInterface;
}

export const AppCredentials: FC<Props> = ({code, appCredentials}: Props) => {
    const notify = useNotify();

    const clientIdRef = useRef<HTMLElement>(null);
    const secretRef = useRef<HTMLElement>(null);

    const handleCopy = (element: HTMLElement) => {
        const selection = window.getSelection();
        if (null === selection) {
            return;
        }

        const range = document.createRange();
        range.selectNodeContents(element);

        selection.removeAllRanges();
        selection.addRange(range);

        document.execCommand('copy');

        selection.removeAllRanges();
    };

    const handleClientIdCopy = () => {
        if (null === clientIdRef.current) {
            return;
        }
        handleCopy(clientIdRef.current);

        notify(NotificationLevel.INFO, `"${appCredentials.clientId}"Client ID copied!`);
    };

    const handleSecretCopy = () => {
        if (null === secretRef.current) {
            return;
        }
        handleCopy(secretRef.current);

        notify(NotificationLevel.INFO, `Secret copied!`);
    };

    const handleRegeneratedSecret = () => console.log('secret regenerated');

    return (
        <>
            <Section title={<Translate id='akeneo_apps.edit_app.credentials.title' />} />
            <div>
                <SmallHelper>
                    <Translate id='akeneo_apps.edit_app.credentials.helper' />
                </SmallHelper>
            </div>

            <CredentialList>
                <CredentialListItem
                    label={<Translate id='akeneo_apps.app.client_id' />}
                    action={
                        <IconButton onClick={handleClientIdCopy}>
                            <DuplicateIcon />
                        </IconButton>
                    }
                >
                    <CopiableText ref={clientIdRef}>{appCredentials.clientId}</CopiableText>
                </CredentialListItem>
                <CredentialListItem
                    label={<Translate id='akeneo_apps.app.secret' />}
                    action={<RegenerateSecretButton code={code} onRegeneratedSecret={handleRegeneratedSecret} />}
                >
                    {appCredentials.secret}
                </CredentialListItem>
            </CredentialList>
        </>
    );
};

const CopiableText = styled.span`
    ::selection {
        background: transparent;
        color: ${({theme}: PropsWithTheme) => theme.color.darkBlue};
    }
`;
