import styled from "styled-components";

const GuestsListContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
  justify-content: center;

  form {
    padding: 24px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 10px 3px rgba(69, 94, 100, 0.12);
  }

  .input {
    min-width: 500px;
    background-color: #e1e1e1;
    height: 40px;
    border-radius: 8px;
    padding: 4px 16px;
    margin-top: 16px;
    margin-bottom: 16px;
    text-align: initial;
    background-image: none;
  }

  label {
    color: #222;
    font-size: 16px;
  }

  input:focus {
    outline: none;
  }

  button {
    background-color: ${(props) => props.colors.main};
    border: 0;
    border-radius: 8px;
    width: 300px;
    align-self: center;
    padding: 8px 32px;
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 15px;
    margin-top: 16px;
  }

  @media screen and (max-width: 768px) {
    input {
      min-width: 240px;
    }
  }
`;

export default GuestsListContainer;
