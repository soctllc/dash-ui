import Chip from '@material-ui/core/Chip';
import styled from "styled-components"

export const SmallChip = styled(Chip).attrs({
  variant:"outlined",
  size:"small"
})`
`

export const BasicChip = styled(Chip).attrs({
  variant:"outlined",
})`
margin: ${props => props.theme.spacing(0.5)}px;

`