import API from '@aws-amplify/api'
import { ApiUtils } from 'utils/ApiUtils'
import {
    setName,
    setAnswering,
    setQuestionList,
} from './reducer'

/**
 * fetch Question List
 */
export const fetchQuestionList = () => {
    return async dispatch => {
        return new Promise(async resolve => {
            API.get('mpc', ApiUtils.getQuestions())
            .then(response=>{
                dispatch(setQuestionList(response))
                resolve(response)
            })
            .catch((error)=>{
                resolve(error)
            })
        })
    }
}

/**
 * answer for question
 * @param {object} answer
 */
export const answerForQuestion = (answer) => {
    return async dispatch => {
        dispatch(setAnswering(true))
        return new Promise(async resolve => {
            API.post('mpc', ApiUtils.questionToAnswer(),{body:answer})
            .then(response=>{
                if (answer.attribute.value === 'name') {
                    dispatch(setName(answer.answer[0]))
                }
                dispatch(setAnswering(false))
                resolve(response)
            })
            .catch(error=>{
                dispatch(setAnswering(false))
                resolve(error)
            })
        })
    }
}
