import React from 'react';
import {FullPaper,HalfPaper} from '../atoms/Paper'

const TopPage = () => {
  return(
    <div>
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
