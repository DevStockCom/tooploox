import styled from 'styled-components'

const S = {
  SectionWrapper: styled.div`
    margin: 10px auto;
    background-color: #fff;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    max-width: 900px;
    padding: 30px;
  `,
}

const SectionWrapper = ({ children }: any) => (
  <S.SectionWrapper>
    {children}
  </S.SectionWrapper>
)

export default SectionWrapper