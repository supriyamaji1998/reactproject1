import React, { useState, useEffect } from "react";

export default function WordList(props) {
  const [wordCountList, setWordCountList] = useState({});
  useEffect(() => {
    handleCount();
  }, [props.text]);
  const handleCount = () => {
    let wordarr = props.text.split(/\s+/);
    let updatedWordCountList = {};
    wordarr.forEach((word) => {
      if (word !== "") {
        if (updatedWordCountList[word]) {
          updatedWordCountList[word] = updatedWordCountList[word] + 1;
        } else {
          updatedWordCountList[word] = 1;
        }
      }
    });
    setWordCountList(updatedWordCountList);
  };
  return (
    <div>
      <ol>
        <table style={{ border: " 1px solid black", width: "40%" }}>
          {Object.keys.length > 0 &&
            Object.keys(wordCountList).map(function (keyName, keyIndex) {
              return (
                <tr style={{ border: "1px solid black" }}>
                  <td>{keyName}</td>
                  <td>{wordCountList[keyName]}</td>
                </tr>
              );
            })}
        </table>
      </ol>
    </div>
  );
}
