import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import {BodyText as Text} from '../atoms/Text'

export const VerticalStepper = (props) => {
    const activeStep = props.activeStep;
    const steps = props.steps ? props.steps : [];
    return (
        <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((item,index) => (
            <Step key={item.label}>
                <StepLabel>{item.label}</StepLabel>
                <StepContent>
                    <Text>{item.content}</Text>
                    
                            {item.button}
                    
                </StepContent>
            </Step>
            ))}
            
        </Stepper>
    );
}