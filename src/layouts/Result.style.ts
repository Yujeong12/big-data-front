// Upload.style.ts

import styled from "styled-components";

export const body = styled.div`
  margin: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: black;
  text-align: center;
  padding-top: 5%;
  overflow-y: hidden;
`;

export const container = styled.div`
  width: 50%;
  height: 100%;
  margin: auto;
`;

export const button = styled.button`
  width: 80%;
  height: 10%;
  background-color: black;
  color: white;
  border-radius: 20px;
  font-weight: bolder;
  border: none;
  margin-top: 10%;
  border: 3px solid rgb(255, 196, 231);
  &:hover {
    cursor: pointer;
  }
  a {
    color: white;
    text-decoration: none;
  }
`;

export const title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  padding-bottom: 10%;
`;

export const person1 = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;
  height: 25%;
  margin-left: 5%;
  background-color: rgb(255, 196, 231);
  border-radius: 40px;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  align-items: center;
`;
export const person2 = styled.div`
  display: flex;
  justify-content: center;
  float: right;
  width: 40%;
  height: 25%;
  margin-right: 5%;
  background-color: black;
  color: white;
  border-radius: 40px;
  font-size: 1rem;
  font-weight: bold;
  align-items: center;
`;

export const person1name = styled.div`
  padding-top: 5%;
  width: 93%;
  margin-left: 7%;
  margin-bottom: 1%;
  text-align: left;
  color: black;
  font-size: 1rem;
  font-weight: bold;
`;
export const person2name = styled.div`
  width: 92%;
  text-align: right;
  margin-right: 8%;
  margin-bottom: 1%;
  color: black;
  font-size: 1rem;
  font-weight: bold;
`;
export const anal = styled.div`
  color: white;
  width: fit-content;
  /* margin: auto; */
  text-align: left;
  padding-left: 3%;
  margin-top: 5%;
`;
export const leftContainer = styled.div`
  width: 20%;
  height: 100%;
  padding-top: 10%;
  padding-left: 3%;
  /* background-color: white; */
`;

export const box = styled.div`
  width: 90%;
  height: 40%;
  background-color: white;
  border-radius: 20px;
  margin: auto;
`;

export const personname = styled.div`
  padding-top: 5%;
  width: 93%;
  margin-left: 2%;
  margin-bottom: 1%;
  text-align: left;
  color: white;
  font-size: 1rem;
  font-weight: bold;
`;
