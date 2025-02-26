import React, { FC, useCallback, useState } from 'react'
import { BodyText, Button, ButtonGroup, Subtitle, Title, FlexContainer, elMb12 } from '@reapit/elements'
import Routes from '../../constants/routes'
import reapitLogo from '../../assets/images/reapit-logo.svg'
import { reapitConnectBrowserSession } from '../../core/connect-session'
import { KeyAnimation } from '@reapit/utils-react'
import { LoginContainer, LoginContentWrapper, LoginImageContainer } from './__styles__'

export const handleLoginClick = () => {
  reapitConnectBrowserSession.connectLoginRedirect(`${window.location.origin}${Routes.APPROVALS}`)
}

export const Login: FC = () => {
  const [keyStep, setKeyStep] = useState<1 | 2 | 3>(1)

  const loginUser = useCallback(handleLoginClick, [])

  return (
    <LoginContainer>
      <LoginImageContainer>
        <KeyAnimation step={keyStep} />
      </LoginImageContainer>
      <LoginContentWrapper>
        <img src={reapitLogo} alt="Reapit Connect Graphic" />
        <FlexContainer isFlexColumn>
          <Title hasNoMargin hasCenteredText>
            Welcome
          </Title>
          <Subtitle hasCenteredText>to Reapit Developer Admin</Subtitle>
        </FlexContainer>
        <ButtonGroup
          alignment="center"
          className={elMb12}
          onMouseOver={() => {
            setKeyStep(3)
          }}
          onMouseOut={() => {
            setKeyStep(1)
          }}
        >
          <Button onClick={loginUser} intent="primary" size={3}>
            Login With Reapit
          </Button>
        </ButtonGroup>
        <BodyText hasGreyText>{process.env.APP_VERSION}</BodyText>
      </LoginContentWrapper>
    </LoginContainer>
  )
}

export default Login
