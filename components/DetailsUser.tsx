import React from 'react'
import styled, { keyframes } from 'styled-components'
import { IUser } from '../redux/types';

const animatop = keyframes`
  from {
      opacity: 0;
      bottom: -500px;
  }
  to {
      opacity: 1;
      bottom: 0px;
  }
`

const rotatemagic = keyframes`
  from {
      opacity: 0;
      transform: rotate(0deg);
      top: -24px;
      left: -253px;
  }
  to {
      transform: rotate(-30deg);
      top: -24px;
      left: -78px;
  }
`

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  Label: styled.div`
    font-weight: bold;
    font-size: 1.125rem;
    margin-right: 30px;
  `,

  Avatar: styled.div`
    border-radius: 20px 20px 0 0;
    width: 400px;
    height: 250px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 150px;
      height: 150px;
      border-radius: 50px;
    }
  `,

  Content: styled.div`
    position: relative;
    animation: ${animatop} 0.9s cubic-bezier(0.425, 1.14, 0.47, 1.125) forwards;
    .card {

    }
  `,

  FirstInfo: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    img {
      border-radius: 50%;
      width: 120px;
      height: 120px;
      z-index: 1;
    }
  `,

  ProfileInfo: styled.div`
    padding: 0px 20px;
    h1 {
      font-size: 1.8em;
    }

    h3 {
      font-size: 1.2em;
      color: #00bcd4;
      font-style: italic;
    }

    p {
      padding: 0;
      margin: 2px 0;
      color: #5A5A5A;
      line-height: 1.2;
      font-style: initial;
      overflow: hidden; 
      white-space: nowrap; 
      text-overflow: ellipsis; 
      width: 200px; 
    }
  `,

  Card: styled.div`
    width: 500px;
    min-height: 100px;
    padding: 20px;
    border-radius: 3px;
    background-color: white;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    position: relative;
    overflow: hidden;

    &:after {
      content: '';
      display: block;
      width: 190px;
      height: 300px;
      background: cadetblue;
      position: absolute;
      animation: ${rotatemagic} 0.75s cubic-bezier(0.425, 1.04, 0.47, 1.105) 1s both;
    }
  `
}

interface IProps {
  user: IUser
}

const DetailsUser = ({ user } : IProps) => {
  const avatarUrl = user.avatarUrl || 'static/img/avatar-placeholder.png'
  return (
    <S.Wrapper>
      <S.Content>
          <S.Card>
              <S.FirstInfo>
                <img src={avatarUrl} />
                <S.ProfileInfo>
                    <h1>{user.name}</h1>
                    <h3>{user.login}</h3>
                    {user.repos.slice(0, 3).map(({ id, name, url }) => (
                      <p key={id}>
                        <a href={url} target="_blank">
                          {name}
                        </a>
                      </p>
                    ))}
                </S.ProfileInfo>
              </S.FirstInfo>
          </S.Card>
      </S.Content>
    </S.Wrapper>

  )
}

export default DetailsUser