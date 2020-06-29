/* eslint-disable max-len */
/* eslint-disable no-restricted-syntax */
import API from '@aws-amplify/api'
import { ApiUtils } from 'utils/ApiUtils'
import ArrayUtils from 'utils/ArrayUtils'
import sessionStorageUtils from 'utils/sessionStorageUtils'
import {
  setPagination,
  setLoading,
  setLoadingQuiz,
  setQuestionList,
  setCurrentPageData,
  setLoaded,
  setInitialValues,
  setTheme,
} from './reducer'
import { showNotification } from '../mpc/reducer'

// =======================================
// Initial load
// =======================================
export const initAction = () => {
  return async dispatch => {
    dispatch(setLoading(true))
    await dispatch(fetchQuestionList())
    dispatch(setLoading(false))
  }
}

// =======================================
// Fetch questions list
// =======================================
export const fetchQuestionList = (dataIndex) => {
  return (dispatch, getState) => {
    return new Promise(resolve => {
      const { questions: { isLoaded } } = getState()

      API.get('mpc', ApiUtils.getQuestions())
        .then(async response => {
          const data = formatResponse(response, isLoaded)
          const groupedData = formatQuestionsToGroups(data)

          await dispatch(setQuestionList(groupedData))
          await dispatch(setNextPage(dataIndex))

          dispatch(setTheming())
          dispatch(setLoaded())
          resolve()
        })
    })
  }
}

// =======================================
// To group questions
// =======================================
function formatQuestionsToGroups (questions) {
  return [...ArrayUtils.groupBy(questions, question => question.priority).values()]
}

const setTheming = () => {
  return (dispatch, getState) => {
    const { questions: { questionsList } } = getState()
    const names = sessionStorageUtils.loadState('qNames')

    if (names) {

      questionsList.forEach(questions => {
        questions.forEach(question => {
          if (question.name) {
            const index = names.indexOf(question.name)

            if (index !== -1) {
              dispatch(setTheme(index + 1))
            }
          }
        })

      })
    }
  }
}

// =======================================
// On paging
// =======================================
export const onPaging = (data) => {
  return dispatch => {
    if (data.isContinue) {
      dispatch(setAnswered(0))
      dispatch(setNextPage(1))
    } else {
      dispatch(answerForQuestion(data))
    }
  }
}

// =======================================
// Set answered questions
// =======================================
const setAnswered = (dataIndex, isAnswered = true) => {
  return (dispatch, getState) => {
    const { questions: { questionsList } } = getState()
    const updatedList = questionsList.map((items, index) => {
      if (dataIndex === index) {
        return items.map(item => {
          return {
            ...item,
            isAnswered
          }
        })
      }

      return items
    })

    dispatch(setQuestionList(updatedList))
  }
}

// =======================================
// Set initial data
// =======================================
const setInitialData = currentData => {
  return (dispatch) => {
    let data = {
      name: '',
      shop4: ['Just me'],
      names_shop4: {
        Men: [''],
        Girls: [''],
        Boys: [''],
        Women: [''],
        Someones: [''],
      },
      preferences_shop4_other: "No - Skip for now",
      category: {
        Tops: [],
        Bottoms: [],
        Shoes: [],
      },
      brand: [],
      size: {
        Tops: ['M', 'XL'],
        Bottoms: ['M', 'XL'],
        Shoes: '4',
      },
      languages: 'English',
      gender: 'Prefer not to say',
      save_preferences: {
        email: '',
        password: ''
      }
    }

    currentData.forEach(item => {
      const { attribute: { value }, options, answer } = item

      if (answer) {
        data = {
          ...data,
          [value]: answer
        }
      } else if (value === 'preferences_shop4_other') {
        data = {
          ...data,
          preferences_shop4_other: options[0]
        }
      }
    })

    dispatch(setInitialValues(data))
  }
}

// =======================================
// Set next page
// =======================================
function setNextPage (dataIndex) {
  return (dispatch, getState) => {
    const { questions: { questionsList } } = getState()
    let nextPage = []

    const next = questionsList.find(questions =>
      questions.some(question => !question.isAnswered),
    )
    const byIndex = questionsList.find((q, index) => index === dataIndex)

    if (dataIndex === 0 || dataIndex) {
      if (byIndex && byIndex.every(item => item.isAnswered)) {
        nextPage = byIndex
      } else {
        nextPage = next
      }

    } else {
      nextPage = next
    }

    dispatch(setAnswered(questionsList.indexOf(nextPage), false))

    dispatch(setCurrentPageData(nextPage || []))
    dispatch(setInitialData(nextPage || []))

    dispatch(updatePagination())
  }
}

function formatResponse(response, isLoaded) {
  const responseData = response
  const firstStepIndex = responseData.findIndex(item => item.number === '1')

  if (firstStepIndex !== -1 && !isLoaded) {
    if (responseData[firstStepIndex].isAnswered) {
      responseData[firstStepIndex].isAnswered = false
      responseData[firstStepIndex].isContinue = true
    }
  }

  // =======================================
  // Add last thanks step
  // =======================================
  responseData.push({
    id: 99,
    question: `Thank you for sharing, ${response[0].answer}!`,
    number: 99,
    priority: 99,
    isThanks: true,
    attribute: { type: 'customer', value: 'thanks' },
    isAnswered: false
  })

  return responseData
}

// =======================================
// Update pagination
// =======================================
function updatePagination () {
  return (dispatch, getState) => {
    const { questions: { questionsList } } = getState()
    const pagination = []
    const currentIndex = questionsList.findIndex(group =>
      group.some(question => !question.isAnswered),
    )

    questionsList.forEach((group, index) => {
      const isAnswered = group.some(question => question.isAnswered)

      if (group[0].isThanks) {
        pagination.push({
          label: index + 1,
          isCurrent: index === currentIndex,
          dataIndex: index,
          isR: true,
          isAnswered
        })

        // window.sessionStorage.removeItem('qNames')
      } else {
        pagination.push({
          label: index + 1,
          isCurrent: index === currentIndex,
          dataIndex: index,
          isAnswered,
        })
      }
    })

    dispatch(setPagination(pagination))
  }
}

// =======================================
// Format answers
// =======================================
function formatAnswers(answer) {
  return (dispatch, getState) => {
    const {
      questions: { questionsList },
    } = getState()

    const answers = []

    if (answer) {
      Object.keys(answer).forEach(key => {
        questionsList.forEach((questions, qsIndex) => {
          questions.forEach((question, qIndex) => {
            if (question.attribute.value === key && !question.isAnswered) {
              const item = questionsList[qsIndex][qIndex]

              if (answer[key]) {
                answers.push({
                  ...item,
                  answer: answer[key],
                  isUpdate: !!question.answer
                })
              }
            }
          })
        })
      })
    }

    return answers
  }
}

// =======================================
// Answer for question
// =======================================
function answerForQuestion (data) {
  return async dispatch => {
    dispatch(setLoadingQuiz(true))

    const answers = dispatch(formatAnswers(data.answer))

    if (answers.length) {
      const answerPromises = []

      answers.forEach(answer => {
        const { isUpdate, ...pureAnswer } = answer

        if (answer.attribute.value === 'name') {
          dispatch(setLoading(true))
          sessionStorageUtils.saveState('qNames', [answer.answer])
        }
        if (answer.attribute.value === 'names_shop4') {
          let asnw = sessionStorageUtils.loadState('qNames')
          if (asnw) {
            const vals = Object.values(answer.answer).flat()
            asnw = [
              ...asnw,
              ...vals
            ]
          }

          sessionStorageUtils.saveState('qNames', asnw)
        }

        if (answer.isUpdate) {
          answerPromises.push(
            API.put('mpc', ApiUtils.questionToAnswer(), { body: pureAnswer }),
          )
        } else {
          answerPromises.push(
            API.post('mpc', ApiUtils.questionToAnswer(), { body: pureAnswer }),
          )
        }
      })

      await Promise.all(answerPromises).then(async responses => {
        let isError = false

        responses.forEach(res => {
          if (!res.status) {
            isError = true

            dispatch(
              showNotification({
                message: res.msg,
                category: 'danger',
                position: 'bottom',
                duration: 3000,
              }),
            )
          }
        })

        if (!isError) {
          if (data.pagination) {
            await dispatch(fetchQuestionList(data.pagination.dataIndex))
          } else {
            await dispatch(fetchQuestionList())
          }
        }
      })
    } else if (data.pagination) {
      await dispatch(fetchQuestionList(data.pagination.dataIndex))
    } else {
      await dispatch(fetchQuestionList())
    }

    dispatch(setLoading(false))
    dispatch(setLoadingQuiz(false))
  }
}
