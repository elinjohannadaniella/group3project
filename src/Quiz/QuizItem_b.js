import React, { Component } from "react";
import data from "./questions_a.json";

export class QuizList_b extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userAnswer: null,
      currentIndex: 0,
      options: [],
      quisEnd: false,
      score: 0,
      disabled: true,
    };
  }

  render() {
    return (
      <div>
        <p>Quiz b</p>
        <p>Tester för Linda</p>
      </div>
    );
  }
}

export default QuizList_b;
