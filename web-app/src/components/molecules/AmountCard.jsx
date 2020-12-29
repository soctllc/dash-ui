import React, { useState, useEffect } from 'react';
import { HalfPaper } from '../atoms/Paper';
import { NamedAvatar } from '../atoms/Avatar';
import { SmallButton } from '../atoms/Button';
import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { FlexWrapCenter } from '../atoms/Paper';

export const UserCard = (props) => {
  const name = props.name;
  const caption = props.caption;
  const avatar = props.avatar;
  const icons = props.icons ? props.icons : [];
  const onClick = props.onClick ? props.onClick : () => {};
  return (
    <Card key={props.index}>
      <Div>
        <NamedAvatar avatar={avatar} name={name} caption={caption} />
      </Div>
      <Hr />
      <ButtonWrap>
        <Icons>
          {icons.map((item, index) => (
            <IconButton  key={index} onClick={()=> window.open(item.href, '_blank')}>
              {item.icon}
            </IconButton>
          ))}
        </Icons>
        <SmallButton onClick={onClick}>Edit</SmallButton>
      </ButtonWrap>
    </Card>
  );
};

export const AmountCard = (props) => {
  const { name, name1, value, value1, unit, unit1 } = props;
  const onClick = props.onClick ? props.onClick : () => { };
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  return (
    <CustomCard key={props.index}>
      <Div>
        <RowWrap>
          <NameWrap>
          <FlexWrapCenter>
            <CustomName>
              {name}
            </CustomName>
              <Amount>
                {value}
              </Amount>
              <Unit>
                {unit}
              </Unit>
            </FlexWrapCenter>
            {/*name1 && value1 && unit1 ?
              <Unit>({name1}: {value1} {unit1})</Unit> : <br />*/}
          </NameWrap>
        </RowWrap>
      </Div>
    </CustomCard>
  );
};

const Card = styled(HalfPaper)`
  @media screen and (min-width: ${(props) =>
    props.theme.breakpoints.values.sm}px) {
    width: 350px;
  }
`;

const CustomCard = styled(HalfPaper)`
  @media screen and (min-width: ${(props) =>
      props.theme.breakpoints.values.sm}px) {
        width: 246.03px;
        height: 125px;
        border: 1px solid #ECECEC;
        box-sizing: border-box;
        border-radius: 8px;
        background: #FFFFFF;
  }
  width: 327px;
  height: 65px;
  background: #FFFFFF;
  box-shadow: 1px 1px 8px 1px rgba(192, 192, 192, 0.17);
  border-radius: 8px;
`;

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  @media screen and (min-width: ${(props) =>
      props.theme.breakpoints.values.sm}px) {
    flex-direction: row;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: ${(props) => props.theme.spacing(1)}px;
`;

const Icons = styled.span`
  > * {
    padding: ${(props) => props.theme.spacing(1)}px;
    color: ${(props) => props.theme.palette.grey[400]};
  }
`;

const Hr = styled.hr`
  height: 1px;
  background-color: ${(props) => props.theme.palette.grey[200]};
  border: none;
`;

const RowWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
`;

const NameWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Name = styled(Typography).attrs({
  variant: 'body1',
})`
  margin: ${(props) => props.theme.spacing(1)}px
    ${(props) => props.theme.spacing(2)}px 0;
  font-weight: 700;
`;

const CustomName = styled.div`
@media screen and (min-width: ${(props) =>
  props.theme.breakpoints.values.sm}px) {
    margin-top: 20px;
    width: 226px;
    height: 20px;
    font-family: Noto Sans JP;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    padding: 0 0;
    text-align: center;
  }
  text-align: left;
  width: 110px;
  height: 20px;
  font-family: Noto Sans JP;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  padding: 20px 0;
  letter-spacing: -0.333333px;
  color: #2B2B2B;
`;

const Amount = styled.div`
@media screen and (min-width: ${(props) =>
  props.theme.breakpoints.values.sm}px) {
    margin-top: 7px;
    margin-right: 6.91px;
    height: 41px;
    font-family: Noto Sans JP;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 41px;
    /* identical to box height */
    text-align: center;
    letter-spacing: -0.333333px;
    color: #2E7DF6;
    width: auto;
    margin-left: 0;
  }
  width: 190px;
  margin-left: auto;
  font-family: Noto Sans JP;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 59px;
  /* identical to box height */
  text-align: right;
  letter-spacing: -0.333333px;
  color: #2E7DF6;
`;

const Unit = styled.div`
@media screen and (min-width: ${(props) =>
  props.theme.breakpoints.values.sm}px) {
    //margin: 0 0 0 auto;
    margin-top: 7px;
    width: 15px;
    height: 41px;
    font-family: Noto Sans JP;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 45px;
    padding: 0 0;
    text-align: center;
    letter-spacing: -0.333333px;
    color: #8F8F8F;
    margin-left: 0;
  }
  //margin-left: auto;
  width: 25px;
  height: 23px;
  font-family: Noto Sans JP;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  padding: 20px 0;
  text-align: right;
  letter-spacing: -0.333333px;
  color: #8F8F8F;
`;