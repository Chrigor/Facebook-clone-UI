import styled from 'styled-components';

export const Container = styled.section`
  display:flex;
  flex-direction:column;

  width: 100%;
  max-width: 600px;
  background: #242526;
  margin: 8px 0px; 
  padding: 2px 0px;
  border-radius: 10px;
`;

export const ContainerHeader = styled.header`
  display:flex;
  flex-direction:row;

  padding: 0px 10px;
  margin:0;

  img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin-right: 10px;
  }

  h5 {
    color: #ddd;
  }

  div {
    display: flex;
    flex-direction:column;
    height: 40px;

    justify-content:flex-end;

    h3 {
      font-size: 16px;
      color: #D8E6EB  ;
      font-family: sans-serif;
    }

  }
`
export const ContainerPost = styled.div`
  display:flex;
  flex-direction:column;

  align-self: center;

  margin-top:2px;
  
  width: 100%;
  height: 100%;

  max-width: 700px;
  max-height: 500px;

  img {
    width: 100%;
    height: 100%;
  }

  p {
    margin:0;
    text-align:justify;
    padding: 2px 24px;
    color:#ddd;
  }
`

export const ContainerAction = styled.div`
  display:flex;
  align-items:center;

  width: 100%;
  height: 40px;

  padding: 2px;
  background: transparent;
`

export const ButtonAction = styled.button`
  background: transparent;
  margin-right: 10px;

  svg {
    margin-right: 5px;
  }

  span {
    font-size: 14px;
    font-family: sans-serif;
    color: ${(props) => {
      console.log(props);
      return (props.color)
    }
  }
`