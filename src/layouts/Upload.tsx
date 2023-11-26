import * as S from "./Upload.style";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeartLoading from "../components/heartLoading";

const Upload = () => {
  const [dataSend, setDataSend] = useState<FormData | null>(null);
  const [placeholder, setPlaceholder] = useState("파일을 선택해주세요");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const data = event.target.files?.[0];
    if (data) {
      const formData = new FormData();
      formData.append("file", data);
      setDataSend(formData);
      setPlaceholder(data.name);
    }
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    if (dataSend === null) {
      alert("파일을 선택해주세요");
      setLoading(false);
      return;
    }
    if (!/^[a-zA-Z._]+$/.test(placeholder)) {
      alert(
        "파일 제목에는 영어, 점(.) 또는 언더스코어(_)만 포함되어야 합니다.",
      );
      setLoading(false);
      return;
    }
    if (placeholder.slice(-4) !== ".txt") {
      alert("txt파일만 업로드해주세요.");
      setLoading(false);
      return;
    }

    fetch(`http://127.0.0.1:8000/server/upload`, {
      method: "POST",
      credentials: "include",
      mode: "cors",
      body: dataSend,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        localStorage.clear();
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("myData", JSON.stringify(data));
        console.log("mydata : ", JSON.stringify(data));
        setLoading(false);
        navigate("/result");
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  };

  return (
    <S.body>
      {loading ? (
        <>
          <S.Loading>Loading...</S.Loading>
          <HeartLoading />
        </>
      ) : (
        <>
          <S.title>카톡으로 알아보는 우리 관계~</S.title>
          <S.info>카톡 내보내기로 txt 파일 다운</S.info>
          <S.File>
            {placeholder}
            <S.FileUpload onChange={handleDataChange} />
          </S.File>
          <S.button onClick={handleFormSubmit}>결과 확인하러 가기~</S.button>
        </>
      )}
    </S.body>
  );
};

export default Upload;
