import React from "react";
import "./school.css"
import schoolImage from "./school.jpg"

class SchoolPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList : [
        "학교가 너무 멀어요",
        "Hello"
      ],
      newComment : ""
    };
  }

  handleOnChange = (e) => {
    this.setState({
      newComment : e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {commentList, newComment} = this.state;
    if (newComment !== "") {
      this.setState({
        commentList : [...commentList, newComment],
        newComment : ""
      });
    }
  }

  render() {
    const {commentList, newComment} = this.state;

    return (
      <div className="school-page">
        <div className="content">
          <h1>TsingHua University</h1>
          <img src={schoolImage} alt="School's image" className="school-image"/>
          <p>
            Tsinghua University (simplified Chinese: 清华大学; traditional Chinese: 清華大學; pinyin: qīnghuá dàxué; abbr. THU) is a national public research university in Beijing, China. The university is funded by the Ministry of Education. The university is a member of the C9 League, Double First Class University Plan, Project 985, and Project 211.[8][9] Since it was established in 1911, it has produced notable leaders in science, engineering, politics, business, and academia
          </p>
        </div>

        <div className="comment">
          <h2>Viewers' comments:</h2>

          <ul className="comment-list">
            {commentList.map((comment) =>
              <li>{comment}</li>
            )}
          </ul>

          <form onSubmit={this.handleSubmit}>
            <label>
              Add your comment:
              <input type="text" placeholder="Write your comment here" value={newComment} onChange={this.handleOnChange}/>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>

      </div>
    )
  }
}

export default SchoolPage;
