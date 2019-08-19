import { useState, KeyboardEvent } from 'react'
import styled from 'styled-components'
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

const S = {
  Wrapper: styled.div`
    margin: 0 auto;
    max-width: 500px;
    margin-top: 30px;
  `
}

const SearchUser = ({ onSearch } : any) => {
  const [searchValue, setSearchValue] = useState('')

  const onEnterPressHandler = (e : KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') {
      onSearch(searchValue)
    }
  }

  return (
    <S.Wrapper onKeyPress={onEnterPressHandler}>
      <InputGroup>
        <Input vaue={searchValue} onChange={e => setSearchValue(e.target.value)} />
        <InputGroupAddon addonType="append">
          <Button onClick={() => onSearch(searchValue)} color="primary">Find User</Button>
        </InputGroupAddon>
      </InputGroup>
    </S.Wrapper>

  )
}

export default SearchUser