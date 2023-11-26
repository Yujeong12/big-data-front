import * as S from "./Result.style";
import { Link, useNavigate } from "react-router-dom";

const Result = () => {
  const data = localStorage.getItem("myData");
  const parsedData = data
    ? JSON.parse(data)
    : console.log("Data not found in localStorage");
  console.log(parsedData);
  console.log(typeof parsedData.p1_sim);
  return (
    <S.body>
      <S.leftContainer>
        <S.personname>{parsedData.person[0]}님의 말투 분석</S.personname>
        <S.anal>
          {Object.entries(parsedData.p1_sim).map(([key, value]: any) => (
            <div key={key}>
              <strong>{key}:</strong> {value}
            </div>
          ))}
        </S.anal>
      </S.leftContainer>
      <S.container>
        <S.title>{parsedData.result}</S.title>
        <S.box>
          <S.person1name>{parsedData.person[0]}</S.person1name>
          <S.person1>{parsedData.p1}</S.person1>
          <S.person2name>{parsedData.person[1]}</S.person2name>
          <S.person2>{parsedData.p1}</S.person2>
        </S.box>
        <S.button>
          <Link to="/">돌아가기</Link>
        </S.button>
      </S.container>
      <S.leftContainer>
        <S.personname>{parsedData.person[1]}님의 말투 분석</S.personname>
        <S.anal>
          {Object.entries(parsedData.p2_sim).map(([key, value]: any) => (
            <div key={key}>
              <strong>{key}:</strong> {value}
            </div>
          ))}
        </S.anal>
      </S.leftContainer>
    </S.body>
  );
};

export default Result;
