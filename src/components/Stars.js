import React from 'react';
import styled from 'styled-components';
import { IoStar } from 'react-icons/io5';

const Stars = (props) => {          // 부트캠프별 별점 표시하는 컴포넌트
  const {score} = props;            // score라는 이름으로 평점 props를 받는다.
  const countingStar = () => {      
    const star_full = parseInt(score).toFixed(0);     // 별점 개수는 평점에서 소수점 이하 자리를 제외한다.
    const star_empty = 5 - star_full;       // 빈 별 개수는 총 5개에서 별점 개수를 뺀 나머지로 한다.
    let result = [];
    for (let i = 0; i < star_full; i++) {     // 별점 개수만큼 꽉 찬 별을 만든다.
      result.push(<StarFull><IoStar /></StarFull>);
    }
    for (let i = 0; i < star_empty; i++) {    // 빈 별 개수만큼 빈 별을 만든다.
      result.push(<StarEmpty><IoStar /></StarEmpty>);
    }
    return result;    // 꽉 찬 별과 빈 별을 합쳐 5개의 별이 들어있는 배열을 리턴한다.
  }

  return (
    <React.Fragment>
      {/* countingStar()에서 만든 별 5개와 함께 평점을 보여준다. */}
      {countingStar()} {score}
    </React.Fragment>
  )
};

const StarFull = styled.span`
  font-weight: 700;
  color: #e5e5e5;
  vertical-align: middle;
`;

const StarEmpty = styled.span`
  font-weight: 700;
  color: #848484;
  vertical-align: middle;
`;

export default Stars;