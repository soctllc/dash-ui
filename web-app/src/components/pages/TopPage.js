import React from 'react';
import {FullPaper,HalfPaper} from '../atoms/Paper'
import {PageTitle} from '../atoms/Title';
import {BodyTitle,BodyText,Caption} from '../atoms/Text'
import {body,jpBody} from '../../demo/textData';
import {VerticalStepper as Stepper} from '../molecules/Stepper'
import {SmallButton as Button} from '../atoms/Button'

const steps = [
  { label:"ステップその1", content: "テストテストテストテスト", button: <Button href="/form">ここを押してね</Button> },
  { label:"ステップその2", content: "テストテスト", button: <Button>test</Button> },
  { label:"ステップその3", content: "テストテスト", button: <Button>test</Button> }
]

const TopPage = () => {
  return(
    <div>
      <PageTitle>ダッシュボード</PageTitle>
      <HalfPaper>
        <Stepper activeStep={0} steps={steps}/>
      </HalfPaper>
      <FullPaper>
        <BodyTitle>
          Body Title
        </BodyTitle>
        <BodyText>
          {body}<br/>{body}
        </BodyText>
        <Caption>
        {body}<br/>{body}
        </Caption>
      </FullPaper>
      <HalfPaper>
      <BodyTitle>
          ボディータイトル
        </BodyTitle>
        <BodyText>
          {jpBody}<br/>{jpBody}
        </BodyText>
        <Caption>
        {jpBody}<br/>{jpBody}
        </Caption>
      </HalfPaper>
     
    </div>
  )
};

export default TopPage;
