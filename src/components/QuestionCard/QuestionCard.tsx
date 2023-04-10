import React from "react";
import {AnswerObject} from "../../containers/App/App";
import {ButtonWrapper, Wrapper } from "./QuestionCard.styles";

type PropsType = {
    question: string,
    answers: Array<string>,
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void,
    userAnswer: AnswerObject | undefined,
    questionNm: number,
    totalQuestions: number
}

const QuestionCard: React.FC<PropsType> = ({
                                               question,
                                               answers,
                                               callback,
                                               userAnswer,
                                               questionNm,
                                               totalQuestions
                                           }) => {
    return (
        <Wrapper>
            <p className="number">
                Question: {questionNm} / {totalQuestions}
            </p>
            <p className="question" dangerouslySetInnerHTML={{ __html: question }} />
            <div>
                {
                    answers.map(answer =>(
                        <ButtonWrapper
                            key={answer}
                            correct={userAnswer?.correctAnswer === answer}
                            userClicked={userAnswer?.answer === answer}
                        >
                            <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                                <span dangerouslySetInnerHTML={{ __html: answer }} />
                            </button>
                        </ButtonWrapper>
                    ))
                }
            </div>
        </Wrapper>
    )
}

export default QuestionCard;