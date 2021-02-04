import React, { Component } from "react";
import "./Board.scss";

const BOARD_NAME = {
  2: "Inquire",
};
const PAGES = ["<", 1, 2, 3, 4, 5, ">"];
class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardData: [],
    };
  }

  openBoardContent = (e) => {
    const { boardData } = this.state;
    for (let i = 0; i < boardData.length; i++) {
      if (boardData[i].id === +e.target.id)
        boardData[i].show = !boardData[i].show;
    }
    this.setState({ boardData: boardData });
  };

  getInquireData = async () => {
    const questionRes = await fetch(`./data/Inquire.json`);
    const question = await questionRes.json();
    this.setState({ boardData: question.question });
  };

  componentDidMount() {
    const { menuTabId } = this.props;
    const { getReviewData, getInquireData } = this;
    menuTabId === 4 ? getReviewData() : getInquireData();
  }
  render() {
    const { menuTabId, showLike } = this.props;
    return (
      <div className="Board">
        <div className="menu-header">
          <h1>{`${BOARD_NAME[menuTabId]} Board`}</h1>
        </div>
        <table className="board-table">
          <thead>
            <tr>
              <th className="id">번호</th>
              <th className="title">제목</th>
              <th className="writer">작성자</th>
              <th className="date">작성일</th>
              {showLike && <th className="like">도움</th>}
              <th className="lookup">조회</th>
            </tr>
          </thead>

          {this.state.boardData.map((review) => {
            return (
              <tbody key={review.id}>
                <tr>
                  <td className="id">{review.id}</td>
                  <td
                    className="title"
                    id={review.id}
                    onClick={this.openBoardContent}
                  >
                    {review.title}
                  </td>
                  <td className="writer">{review.writer}</td>
                  <td className="date">{review.date}</td>
                  {showLike && <td className="like">{review.like}</td>}
                  <td className="lookup">{review.lookup}</td>
                </tr>
                <tr>
                  {true && (
                    <td
                      colSpan="6"
                      className={`content ${review.show ? "show" : ""}`}
                    >
                      {review.show ? review.content : ""}
                    </td>
                  )}
                </tr>
              </tbody>
            );
          })}
        </table>
        <div className="button-box">
          <button>작성</button>
        </div>
        <div className="page-routing">
          <ul>
            {PAGES.map((page, idx) => {
              return (
                <li key={idx}>
                  <button>{page}</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Board;
