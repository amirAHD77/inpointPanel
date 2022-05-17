import styled from "styled-components";

const TransactionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
  justify-content: center;

  form {
    /* border: 1px solid #ddd; */
    padding: 24px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 10px 3px rgba(69, 94, 100, 0.12);
  }

  input {
    min-width: 500px;
    background-color: #e1e1e1;
    height: 40px;
    border-radius: 8px;
    padding: 4px 16px;
    margin-top: 16px;
    margin-bottom: 16px;
  }

  label {
    color: #222;
    font-size: 16px;
  }

  input:focus {
    outline: none;
  }

  button {
    background-color: orange;
    border: 0;
    border-radius: 8px;
    width: 250px;
    align-self: center;
    padding: 8px 32px;
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 16px;
    margin-top: 16px;
  }

  @media screen and (max-width: 768px) {
    input {
      min-width: 240px;
    }
  }
`;

export default TransactionsContainer;
