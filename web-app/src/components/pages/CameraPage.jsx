import React from 'react';
import {PageTitle} from '../atoms/Title';
import Camera from '../organisms/Camera';

const CameraPage = () => {
  return(
    <div>
        <PageTitle>インカメページ</PageTitle>
        <Camera/>
    </div>
    );
}

export default CameraPage;