import React, { useState, useEffect } from 'react';
import { FlexWrap } from '../atoms/Paper';
import { AmountCard } from '../molecules/AmountCard';
//import { useSelector } from 'react-redux';
//import moment from 'moment-timezone';

const SalesCards = (props) => {
  const { selectedMonth } = props;
  const [totalSales, setTotalSales] = useState(10000);
  const [totalMonthSales, setTotalMonthSales] = useState('-');
  const [customersOfIndividualprods, setCustomersOfIndividualprods] = useState(0);
  const [averageCutomerFrequency, setAverageCutomerFrequency] = useState(0);
  const [numberOfMembers, setNumberOfMembers] = useState(0);
  const initTotalMonthSales = async () => {
  };
  useEffect(() => {
    initTotalMonthSales();
  }, []);
  return (
    <FlexWrap>
      <AmountCard name={'売上累計額'} value={totalSales} unit={'円'} />
      <AmountCard name={'今月の売上額'} value={totalMonthSales} unit={'円'} />
      <AmountCard name={'個別商品購入人数'} value={customersOfIndividualprods} unit={'人'} />
      <AmountCard name={'会員人数'} value={numberOfMembers} unit={'人'} />
    </FlexWrap>
  );
};

export default SalesCards;

