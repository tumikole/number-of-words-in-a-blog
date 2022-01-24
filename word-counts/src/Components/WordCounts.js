import React, { useState } from "react";

function WordCounts() {
  const [countWords, setCountWords] = useState({
    wordsTyped: "",
    length: 0,
  });

  const [list, newList] = useState([]);

  const handleChange = (e) => {
    setCountWords({
      wordsTyped: e.target.value,
      length: e.target.value.trim().split(" ").length,
    });
  };

  const handleSubmit = (e) => {
    let { wordsTyped, length } = countWords;

    if (length > 150) {
      alert("exceeded 2 words");
    } else if (wordsTyped.length === 0) {
      alert("no text in text area");
    } else {
      newList([...list, countWords]);
    }
  };

  return (
    <div>
      <h1>Word Counts</h1>

      <div>
        <button type="button" className="btn btn-outline-info">
          Words typed so far: {countWords.length}
        </button>

        <p></p>
        <textarea
          value={countWords.wordsTyped}
          class="form-control"
          rows="7"
          onChange={(e) => handleChange(e)}
        ></textarea>
        <br />
        <button onClick={(e) => handleSubmit(e)} className="btn btn-primary">
          Count words
        </button>
      </div>
      <br />
      <table className="table table-bordered">
        {" "}
        <thead>
          <tr>
            <th scope="col">Blog Number</th>
            <th scope="col">Blog</th>
            <th scope="col">Number of Words</th>
          </tr>
        </thead>
        <tbody>
          {list.map((val, index) => {
            return (
              <tr key={index} className="display">
                <td>{val.wordsTyped}</td>
                <td>{val.length} words</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default WordCounts;
