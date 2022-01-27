import { useMemo, useContext } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

import { Container } from './Styles'
import * as Card from '../../components/Card'
import { Button } from '../../components/Button'
import Configuration from '../../components/Configuration'
import withConfigurationContext, {
  ConfigurationContext
} from '../../utils/withConfigurationContext'

const Home = () => {
  const { amount } = useContext(ConfigurationContext)
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const renderError = useMemo(() => {
    return searchParams.get('error') === ''
  }, [searchParams])

  return (
    <Container>
      <Card.Container>
        <Card.Header>
          <p className="title">
            welcome to the <span className="emphasis">Trivia Challenge!</span>
          </p>
          <Configuration className="header__action" />
        </Card.Header>
        <Card.Body>
          <p className="summary">
            You will be presented with some trivia questions. Can well can you
            score?
          </p>
        </Card.Body>
        <Card.Footer>
          <Button onClick={() => navigate(`/challenge?amount=${amount}`)}>
            BEGIN
          </Button>
        </Card.Footer>
      </Card.Container>
      {renderError && (
        <p className="error">Please check your internet connection.</p>
      )}
    </Container>
  )
}

export default withConfigurationContext(Home)
