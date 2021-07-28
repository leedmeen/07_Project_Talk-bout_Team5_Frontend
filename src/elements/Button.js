import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  const {
    children,
    text,
    bg,
    width,
    height,
    margin,
    _onClick,
    border_radius,
    cursor,
    border,
    color,
    font_size,
  } = props;

  const styles = {
    bg: bg,
    width: width,
    height: height,
    margin: margin,
    border_radius: border_radius,
    cursor: cursor,
    border: border,
    color: color,
    font_size: font_size,
  };
  return (
    <React.Fragment>
      <ElButton {...styles} text={text} onClick={_onClick}>
        {children}
      </ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
<<<<<<< HEAD
    children: null,
    text: false,
    bg: "#BCBCBC",
    width: "100%",
    height: "100%",
    margin: null,
    _onClick: () => {},
    border_radius: "0px",
    cursor: "pointer",
    border: null,
    color: null,
    font_size: null,
}
=======
  children: null,
  text: false,
  bg: '#BCBCBC',
  width: '100%',
  height: '100%',
  margin: 'auto',
  _onClick: () => {},
  border_radius: '0px',
  cursor: 'pointer',
  border: null,
  color: null,
  font_size: null,
};
>>>>>>> DH

const ElButton = styled.button`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bg};
  border-radius: ${(props) => props.border_radius};
  cursor: ${(props) => props.cursor};
  border: ${(props) => props.border};
  color: ${(props) => props.color};
  font-size: ${(props) => props.font_size};
`;

export default Button;
