import styled from 'styled-components'
import { connect } from 'react-redux'
import { Dispatch } from "redux";

import Layout from '../components/shared/Layout'
import SectionWrapper from '../components/shared/SectionWrapper'
import NotFound from '../components/shared/NotFound'
import SearchUser from '../components/SearchUser'
import DetailsUser from '../components/DetailsUser'

import { fetchUserData } from '../redux/async'
import { IUser } from '../redux/types';

interface IProps {
  fetchUserData: (user: string) => (dispatch : Dispatch) => void;
  user: IUser,
  error: string,
}

const S = {
  Header: styled.h1`
    text-align: center;
    margin: 0 auto;
  `
}

const Index = ({ fetchUserData, user, error } : IProps) => {
  return (
    <Layout>
      <SectionWrapper>
        <S.Header>Tooploox</S.Header>
        <SearchUser onSearch={fetchUserData}/>
      </SectionWrapper>
      <SectionWrapper>
        {
          user ?
            <DetailsUser user={user} /> :
            <NotFound text={error} />
        }
      </SectionWrapper>
    </Layout>
  )
}

const mapStateToProps = (state : any) => ({
  isLoading: state.isLoading,
  user: state.user,
  error: state.error,
})

const mapDispatchToProps = (dispatch: Function) => ({
  fetchUserData: (user : string) => dispatch(fetchUserData(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)