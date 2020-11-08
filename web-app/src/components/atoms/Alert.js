import Alert from '@material-ui/lab/Alert';
import styled from "styled-components"

export const ErrorAlert = styled(Alert).attrs({
  variant:'outlined',
  severity:'error',
})`
  margin:${props => props.theme.spacing(2)}px;
  max-width:calc(615px - ${props => props.theme.spacing(2)}px * 3);
`

export const InfoAlert = styled(Alert).attrs({
  variant:'outlined',
  severity:'info',
})`
  margin:${props => props.theme.spacing(2)}px;
  max-width:calc(615px - ${props => props.theme.spacing(2)}px * 3);
`

export const WarningAlert = styled(Alert).attrs({
  variant:'outlined',
  severity:'warning',
})`
  margin:${props => props.theme.spacing(2)}px;
  max-width:calc(615px - ${props => props.theme.spacing(2)}px * 3);
`

export const SuccessAlert = styled(Alert).attrs({
  variant:'outlined',
  severity:'success',
})`
  margin:${props => props.theme.spacing(2)}px;
  max-width:calc(615px - ${props => props.theme.spacing(2)}px * 3);
`