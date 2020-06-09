import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  max-height: 150px;

  width: 100%;
  max-width: 740px;

  border-radius: 5px;
  background:#333;

  margin: 0px;

  div {
    display:flex;
    flex-direction:row;

    height: 50%;
    width: 100%;

    padding: 12px;
    margin-bottom: 10px;
  }

  .containerNewPost img {
    width: 50px;
    height:50px;

    margin-right: 10px;

    border-radius: 50%;
  }

  .containerNewPost input {
    width: 100%;
    height: 50px;
 
    padding: 4px 14px;
    margin-left: 8px;

    border-radius: 24px;
    border:none;
    color: #9FA1A6;
    font-size:18px;
    background-color:#3A3B3C;

    &::placeholder{
      color:#9FA1A6;
      font-size: 18px;
    }
  }

  .containerSentimentos {
    justify-content: space-between;
  }

  .newPostItem {
    justify-content:center;
    align-items:center;

    padding: 10px;
    height: 30px;
    border-radius: 10px;

    &:hover {
      background: #3A3B3C;
    }

    img {
      width: 25px;
      height: 25px;

      margin-right: 8px;
    }

    h4 {
      font-size: 18px;
      font-weight:bold;
      font-family: sans-serif;
      
      color: #9FA1A6;
    }
  }
`;
