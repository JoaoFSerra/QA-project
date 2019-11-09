import React from "react";
import Question from "./Question";

const questionsApiUrl =
  "https://desolate-woodland-95121.herokuapp.com/questions/";

class Questions extends React.Component {
  state = { questions: undefined };

  componentDidMount() {
    fetch(questionsApiUrl)
      .then(r => r.json())
      .then(questions => {
        this.setState({ questions });
      });
  }

  render() {
    console.log(this.state);
    if (this.state.questions === undefined) {
      return <div>Loading ...</div>;
    }
    return (
      <div>
        {this.state.questions.map(question => (
          <Question key={question.id} question={question} />
        ))}
      </div>
    );
  }
}

export default Questions;
