import { useState, useContext } from 'react'

import { Container } from './Styles'
import { Button, IconButton } from '../Button'
import * as Card from '../Card'
import * as FormGroup from '../FormGroup'

import { ConfigurationContext } from '../../utils/withConfigurationContext'

interface Props {
  onClose: () => void
}

const ConfigurationDialog = ({ onClose }: Props) => {
  const { amount, setAmount } = useContext(ConfigurationContext)
  const [amountSelected, setAmountSelected] = useState(amount)

  const onApply = () => {
    setAmount(amountSelected)
    onClose()
  }

  return (
    <Container onClick={onClose}>
      <Card.Container
        className="dialog__container"
        onClick={(e) => e.stopPropagation()}
      >
        <Card.Header>
          <IconButton className="header__action" onClick={onClose}>
            ×
          </IconButton>
          <h2>Configuration</h2>
        </Card.Header>
        <Card.Body className="dialog__content">
          <FormGroup.Container>
            <label>Number of questions:</label>
            {[5, 10, 15, 20].map((amount) => {
              return (
                <Button
                  key={amount}
                  className={amount === amountSelected ? 'selected' : ''}
                  onClick={() => setAmountSelected(amount)}
                >
                  {amount}
                </Button>
              )
            })}
          </FormGroup.Container>
          <br />
          <FormGroup.Container>
            <label>Dificulty:</label>
            <Button disabled>Easy</Button>
            <Button disabled>Normal</Button>
            <Button disabled>Hard</Button>
          </FormGroup.Container>
        </Card.Body>
        <Card.Footer>
          <Button onClick={onApply}>Apply</Button>
        </Card.Footer>
      </Card.Container>
    </Container>
  )
}

export default ConfigurationDialog
