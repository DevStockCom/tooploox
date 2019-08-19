import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'

const S = {
  Layout: styled.div`
    background-color: #F9FAFA;
  `
}

const Layout = ({ children } : any) => {
  return (
    <S.Layout>
      <Container>
        <Row>
          <Col>
            {children}
          </Col>
        </Row>
      </Container>
    </S.Layout>
  )
}

export default Layout