import React from 'react';
import {AppCredentials as AppCredentialsInterface} from '../../../domain/apps/app-credentials.interface';
import {Section, SmallHelper} from '../../common';
import {Translate} from '../../shared/translate';
import {CredentialList, CredentialListItem} from './CredentialList';

interface Props {
    appCredentials: AppCredentialsInterface;
}

export const AppCredentials = ({appCredentials}: Props) => {
    return (
        <>
            <Section title={<Translate id='pim_apps.app_credentials.subtitle' />} />
            <div>
                <SmallHelper>Lorem ipsum</SmallHelper>
            </div>

            <CredentialList>
                <CredentialListItem
                    label={<Translate id='pim_apps.app_credentials.client_id' />}
                    action={<button>🔄</button>}
                >
                    {appCredentials.clientId}
                </CredentialListItem>
                <CredentialListItem
                    label={<Translate id='pim_apps.app_credentials.secret' />}
                    action={<button>🔄</button>}
                >
                    {appCredentials.secret}
                </CredentialListItem>
            </CredentialList>
        </>
    );
};
