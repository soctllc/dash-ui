import React from 'react';
import {PageTitle} from '../atoms/Title';
import { Provider } from '../molecules/Provider';

const ProviderPage = () => {
  return(
    <div>
        <PageTitle>Providerページ</PageTitle>
        <Provider/>
    </div>
    );
}

export default ProviderPage;