import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as questionActions } from '../redux/modules/question';

import styled from 'styled-components';
import { Grid, Text, Button, Input, Image } from '../elements';
//icons
import { BiLike } from 'react-icons/bi';
import profile_medium from '../image/profile_medium.png';

const AnswerCard = (props) => {
  const dispatch = useDispatch();
  // console.log(props);

  const answer_id = parseInt(props.answerId);
  const user_name = useSelector((state) => state.user.user.nickname);

  // 전체 답변 리스트
  const answer_list = useSelector((state) => state.question.answer_list);

  //답변별 목록
  const one_answer = answer_list.find((answer) => answer.answerId == answer_id);

  // 답변의 좋아요
  const answer_like = one_answer.answerLike;
  console.log(answer_like);

  // 내가 닉네임이 좋아요 한 답변
  const my_answer_like = answer_like.find(
    (answer) => answer.nickname == user_name
  );
  // console.log(my_answer_like);

  // 좋아요 버튼
  const likeAnswer = () => {
    dispatch(questionActions.likeAnswerDB(answer_id, user_name));
  };
  // 좋아요 취소 버튼
  const unlikeAnswer = (answerLikeId) => {
    // const my_answer_like = {
    //   answer_id: answer_id,
    //   answerLikeId : my_answer_like.answerLikeId,

    // }
    dispatch(questionActions.unlikeAnswerDB(answer_id, answerLikeId));
  };

  return (
    <React.Fragment>
      <AnswerBox>
        <Grid padding="3%">
          <Grid display="flex">
            <Text fontSize="3vh" fontWeight="600" color="#ffffff">
              A
            </Text>
            <Grid width="4vw" height="4vh" margin="auto 0% auto 2%">
              <Image src={profile_medium} size="5"></Image>
            </Grid>

            <Grid width="40%">
              {props.nickname === null ? (
                <Text p margin="auto" fontWeight="600" color="#C4C4C4">
                  탈퇴한 회원입니다.
                </Text>
              ) : (
                <Text p margin="auto" fontWeight="600" color="#C4C4C4">
                  {props.nickname}님의 답변
                </Text>
              )}

              <Text p margin="auto" color="#C4C4C4">
                {props.createdAt}
              </Text>
            </Grid>
          </Grid>
          <Grid margin="3% 0%">
            <Text p color="#C4C4C4">
              {props.content}
            </Text>
          </Grid>
          {my_answer_like ? (
            <Grid>
              <LikeCommentBtn
                onClick={() => unlikeAnswer(my_answer_like.answerLikeId)}
              >
                <BiLike color="#7879f1" />
                <Text margin="2px" color="#7879f1">
                  {answer_like.length}
                </Text>
              </LikeCommentBtn>
            </Grid>
          ) : (
            <Grid>
              <LikeCommentBtn onClick={() => likeAnswer()}>
                <BiLike color="#C4C4C4" />
                <Text margin="2px" color="#C4C4C4">
                  {answer_like.length}
                </Text>
              </LikeCommentBtn>
            </Grid>
          )}
        </Grid>
      </AnswerBox>
    </React.Fragment>
  );
};
const AnswerBox = styled.div`
  width: 70vw;
  margin: 30px auto;
  background-color: #202124;
  border-radius: 12px;
`;

const LikeCommentBtn = styled.button`
  background-color: #2e3134;
  color: #bdc1cb;
  font-weight: 700;
  border: 0;
  outline: 0;
  border-radius: 7px;
  width: 7%;
  padding: 1%;
  margin-right: 1%;
`;

export default AnswerCard;
