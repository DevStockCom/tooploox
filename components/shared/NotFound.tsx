import styled from 'styled-components'

const S = {
  NotFound: styled.div`
    text-align: center;
  `
}

interface IProps {
  text: string
}

const NotFound = ({ text } : IProps) => {
  return (
    <S.NotFound>
      {text}
    </S.NotFound>
  )
}

export default NotFound