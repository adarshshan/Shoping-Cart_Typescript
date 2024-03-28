import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 94%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 530px;
  padding:10px;
  margin-left:auto;
  

  button {
    border-radius: 0 0 20px 20px;
  }

  img {
    height:200px;
    // max-height: 220px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: .5rem;
    height: 100%;
  }
`;