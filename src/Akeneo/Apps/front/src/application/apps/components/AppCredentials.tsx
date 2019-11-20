import React from 'react';
import {Translate} from '../../shared/translate';
import {Section, SmallHelper} from "../../common";
import {ListItem} from "./ListItem";
import {AppCredentials as AppCredentialsInterface} from "../../../domain/apps/app-credentials.interface";

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

            <table>
                <ListItem label={<Translate id='pim_apps.app_credentials.client_id' />}>
                    { appCredentials.clientId }
                </ListItem>
                <ListItem label={<Translate id='pim_apps.app_credentials.secret' />}>
                    { appCredentials.secret }
                </ListItem>
            </table>

        </>
    )
};
