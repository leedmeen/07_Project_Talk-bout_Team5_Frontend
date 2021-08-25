import React from 'react';
import styled from 'styled-components';
import { Grid, Text, Image } from '../elements';
import { SmallWindow } from '../components';
import { KakaoLogin_btn, GoogleLogin_btn, LogoImg } from '../image';
import { history } from '../redux/ConfigureStore';
import { baseUrl } from '../shared/api';

const Login = (props) => {

  const googleLogin = () => {
    const googleApi = `${baseUrl}/oauth/google`;
    window.location.assign(googleApi);
  };

  const kakaoLogin = () => {
    const kakaoApi = `${baseUrl}/oauth/kakao`;
    window.location.assign(kakaoApi);
  };

  //onChange의 e.target.value안찍힐때 버튼에 콘솔로그 해보기!
  return (
    <SmallWindow>
      <Grid is_center height="100%" MOBheight='fit-content'>
        <Image
          src={LogoImg}
          width="210px"
          MOBwidth='140px'
          height='80px'
          MOBheight='56px'
          margin="0 auto"
          _onClick={() => history.push('/')}
          cursor="pointer"
        />
        <Text p color='#7879F1' fontSize='16px' margin='-10px 0 0' MOBfontSize='12px'>부트캠퍼들의 속시원한 이야기</Text>
        <GoogleBtn src={GoogleLogin_btn} alt='구글 로그인' onClick={() => googleLogin()} />
        <KakaoBtn src={KakaoLogin_btn} alt='카카오 로그인' onClick={() => kakaoLogin()} />
        <Text p color='#5F6368' fontSize='16px' margin='20px 0 0' MOBfontSize='12px'>구글, 카카오로 로그인하기</Text>
      </Grid>
      <Grid is_flex margin='330px 0 0' MOBmargin='30vh 0 0'>
        <Text fontSize='12px' color='#bdc1c6'>© 2021 Project Talk'bout</Text>
        <Text fontSize='12px' color='#bdc1c6' margin='0 24px'>All rights reserved.</Text>
      </Grid>
    </SmallWindow >
  );
};

const GoogleBtn = styled.img`
  /* margin: 100px auto 0; */
  margin: 50px auto 0;
  height: 48px;
  display: block;
  cursor: pointer;
  &:active {
    opacity: 0.7;
  }
`;

const KakaoBtn = styled.img`
  margin: 20px auto 0;
  height: 48px;
  display: block;
  cursor: pointer;
  &:active {
    opacity: 0.7;
  }
`;

export default Login;
