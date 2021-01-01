import React from 'react';
import {PageTitle} from '../atoms/Title';
import {StyledFullPaper} from '../atoms/Paper';
import { ContentCardList } from '../molecules/ContentCardList';
import { SearchTextInput } from '../atoms/TextInput';
import { CategoryList } from '../molecules/CategoryList';

const SearchPage = () => {
  return(
    <div>
        <PageTitle>検索ページ</PageTitle>
          <StyledFullPaper>
          <SearchTextInput/>
          <CategoryList/>
         <ContentCardList/>
        </StyledFullPaper>
    </div>
    );
}
export default SearchPage;
