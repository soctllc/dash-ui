import React from 'react';
import {FullPaper,HalfPaper} from '../atoms/Paper'
import {PageTitle} from '../atoms/Title';

const TopPage = () => {
  return(
    <div>
      <PageTitle>ダッシュボード</PageTitle>
      <FullPaper>
        full paper
      </FullPaper>
      <HalfPaper>
        half paper
      </HalfPaper>
      <HalfPaper>
        half paper
      </HalfPaper>
    </div>
  )
};

export default TopPage;
