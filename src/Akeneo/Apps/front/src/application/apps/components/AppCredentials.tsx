import React from 'react';
import {AppCredentials as AppCredentialsInterface} from '../../../domain/apps/app-credentials.interface';
import {Section, SmallHelper} from '../../common';
import {Translate} from '../../shared/translate';
import {CredentialList, CredentialListItem} from './CredentialList';
import {UpdateIcon, DuplicateIcon} from '../../common/icons';
import {IconButton} from '../../common';

interface Props {
    appCredentials: AppCredentialsInterface;
}

export const AppCredentials = ({appCredentials}: Props) => {
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
                        <IconButton>
                            <UpdateIcon />
                        </IconButton>
                    }
                >
                    {appCredentials.clientId}
                </CredentialListItem>
                <CredentialListItem
                    label={<Translate id='akeneo_apps.app.secret' />}
                    action={
                        <IconButton>
                            <DuplicateIcon />
                        </IconButton>
                    }
                >
                    {appCredentials.secret}
                </CredentialListItem>
            </CredentialList>
        </>
    );
};
