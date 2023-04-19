import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  padding: 20px;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`
export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 2px solid #ffffff;
  border-radius: 10px;
  margin-top: 2px;
  background-color: transparent;
  width: 80%;
`
export const ScoreNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 20px;
  margin-top: 0px;
  margin-bottom: 0px;
  font-family: 'Bree Serif';
`
export const ScoreBoard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  width: 15%;
  border-radius: 10px;
`
export const ScoreHeading = styled.p`
  color: #223a5f;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 0px;
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`
export const ScoreResult = styled.p`
  color: #223a5f;
  font-size: 42px;
  margin-top: 0px;
  font-weight: bold;
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    font-size: 24px;
    margin-top: 10px;
  }
`
export const RulesView = styled.div`
  align-self: flex-end;
  margin-top: auto;
  @media screen and (max-width: 576px) {
    margin-bottom: 40px;
  }
`
export const PopUpView = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: center;
  align-items: center;
  padding: 10px;
  @media screen and (max-width: 576px) {
    height: 260px;
    width: 100%;
  }
`

export const PopUpImage = styled.img`
  width: 100%;
  height: 50%;
  margin-top: auto;
`
