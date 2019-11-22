import React, {FC} from 'react';
import {IconButton} from '../../common';
import {UpdateIcon} from '../../common/icons';
import {useRoute} from '../../shared/router';
import {fetch} from '../../shared/fetch';
import {isErr} from '../../shared/fetch/result';

interface Props {
    code: string;
    onRegeneratedSecret: () => void;
}

export const RegenerateSecretButton: FC<Props> = ({code, onRegeneratedSecret}: Props) => {
    const url = useRoute('akeneo_apps_regenerate_secret_rest', {code});

    const handleClick = async () => {
        const result = await fetch<undefined, undefined>(url, {
            method: 'POST',
        });

        if (isErr(result)) {
            console.error('error');
            return;
        }

        onRegeneratedSecret();
    };

    return (
        <IconButton onClick={handleClick}>
            <UpdateIcon />
        </IconButton>
    );
};
