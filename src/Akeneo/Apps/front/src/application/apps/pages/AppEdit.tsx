import React, {useRef, useState} from 'react';
import {useHistory, useParams} from 'react-router';
import {AppCredentials as AppCredentialsInterface} from '../../../domain/apps/app-credentials.interface';
import {App} from '../../../domain/apps/app.interface';
import {FlowType} from '../../../domain/apps/flow-type.enum';
import {PimView} from '../../../infrastructure/pim-view/PimView';
import {ApplyButton, Breadcrumb, BreadcrumbItem, Page, PageHeader} from '../../common';
import imgUrl from '../../common/assets/illustrations/api.svg';
import {useFetch} from '../../shared/fetch';
import {isErr} from '../../shared/fetch/result';
import {BreadcrumbRouterLink, useRoute} from '../../shared/router';
import {Translate} from '../../shared/translate';
import {AppCredentials} from '../components/AppCredentials';
import {AppEditForm} from '../components/AppEditForm';
import styled from 'styled-components';

export const AppEdit = () => {
    const history = useHistory();

    const formRef = useRef<{submit: () => void}>(null);
    const [formState, setFormState] = useState({hasUnsavedChanges: false, isValid: false});

    const {code} = useParams() as {code: string};
    const result = useFetch<{code: string; label: string; flow_type: FlowType; secret: string; client_id: string}>(
        useRoute('akeneo_apps_get_rest', {code})
    );
    if (isErr(result)) {
        history.push('/apps');
        return <></>;
    }
    if (undefined === result.data) {
        return <></>;
    }

    const app: App = {
        code: result.data.code,
        label: result.data.label,
        flowType: result.data.flow_type,
    };
    const appCredentials: AppCredentialsInterface = {
        code: result.data.code,
        secret: result.data.secret,
        clientId: result.data.client_id,
    };

    const handleSave = () => formRef.current && formRef.current.submit();

    const handleChange = ({hasUnsavedChanges, isValid}: {hasUnsavedChanges: boolean; isValid: boolean}) =>
        setFormState({hasUnsavedChanges, isValid});

    const breadcrumb = (
        <Breadcrumb>
            <BreadcrumbRouterLink route={'oro_config_configuration_system'}>
                <Translate id='pim_menu.tab.system' />
            </BreadcrumbRouterLink>
            <BreadcrumbItem onClick={() => history.push('/apps')} isLast={false}>
                <Translate id='pim_menu.item.apps' />
            </BreadcrumbItem>
        </Breadcrumb>
    );

    const userButtons = (
        <PimView
            className='AknTitleContainer-userMenuContainer AknTitleContainer-userMenu'
            viewName='pim-apps-user-navigation'
        />
    );

    const saveButton = (
        <ApplyButton
            onClick={handleSave}
            disabled={!formState.hasUnsavedChanges || !formState.isValid}
            classNames={['AknButtonList-item']}
        >
            <Translate id='pim_common.save' />
        </ApplyButton>
    );

    const unsavedChangesMessage = (
        <div className='updated-status'>
            <span className='AknState'>
                <Translate id='pim_common.entity_updated' />
            </span>
        </div>
    );

    return (
        <Page>
            <PageHeader
                breadcrumb={breadcrumb}
                buttons={[saveButton]}
                userButtons={userButtons}
                state={formState.hasUnsavedChanges && unsavedChangesMessage}
                imageSrc={imgUrl}
            >
                {app.label}
            </PageHeader>

            <Layout>
                <div>
                    <AppEditForm ref={formRef} app={app} onChange={handleChange} />
                </div>
                <div>
                    <AppCredentials appCredentials={appCredentials} />
                </div>
            </Layout>
        </Page>
    );
};

const Layout = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 40px;
`;
