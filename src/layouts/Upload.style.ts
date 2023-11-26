// Upload.style.ts

import styled from "styled-components";

export const body = styled.div`
  margin: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  text-align: center;
  padding-top: 5%;
`;

export const FileUpload = styled.input.attrs({
  type: "file",
})`
  display: none;
`;

export const File = styled.label`
  display: flex;
  margin: auto;
  text-align: center;
  border-radius: 10px;
  width: 20%;
  height: 40%;
  padding-left: 2%;
  border: none;
  font-size: 1rem;
  background-color: rgb(255, 196, 231);
  text-align: left;
  &:hover {
    background-color: grey;
    color: white;
    cursor: pointer;
  }
  align-items: center;
`;

export const button = styled.button`
  width: 20%;
  height: 10%;
  background-color: black;
  color: white;
  border-radius: 20px;
  font-weight: bolder;
  border: none;
  margin-top: 3%;
  border: 3px solid rgb(255, 196, 231);
  &:hover {
    cursor: pointer;
  }
`;

export const title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: white;
`;
export const Loading = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: white;
`;
export const info = styled.div`
  color: white;
  margin-bottom: 2%;
`;
