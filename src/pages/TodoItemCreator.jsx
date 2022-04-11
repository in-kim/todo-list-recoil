import { useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { todoListState } from "../atom";

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <Wrapper>
      <Input type="text" value={inputValue} onChange={onChange} />
      <Button onClick={addItem}>Add</Button>
    </Wrapper>
  );
};

// 고유한 Id 생성을 위한 유틸리티
let id = 0;
function getId() {
  return id++;
}

const Wrapper = styled.div`
  display: flex; align-items: center; gap:10px;
`;

const Input = styled.input`
  flex:1;
  height:35px;
  border-radius: 5px;
  border:solid 1px rgba(145, 158, 171, 0.24);
  padding:0 20px;
  box-sizing: border-box;
`;

const Button = styled.button`
  font-size:14px; font-weight: 700;
  color:#fff;
  background-color:#3366FF;
  border:0;
  height:35px;
  padding:0 20px;
  border-radius: 8px;
`;

export default TodoItemCreator;