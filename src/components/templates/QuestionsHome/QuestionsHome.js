/* eslint-disable max-len */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import Text from 'components/atoms/common/Text'
import QuestionsInput from 'components/atoms/questions/QuestionsInput'
import QuestionsButton from 'components/atoms/questions/QuestionsButton'
import anime from 'animejs'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'
import QuestionsBg from 'assets/images/questions-bg.jpg'
import QuestionsLayout from '../../layouts/QuestionsLayout'
import './QuestionsHome.scss'

class QuestionsHome extends Component {
  constructor() {
    super()
    this.state = {
      isUpdating: false
    }

    this.$home = React.createRef()
  }

  static getDerivedStateFromProps(props) {
    return {
      isUpdating: !!props.initialValues.name,
    }
  }

  componentDidMount () {
    this.animate()
  }

  animate () {
    const background = this.$home.current.querySelector(
      '.questions-home__background',
    )
    const items = this.$home.current.querySelectorAll(
      '.js-question-content-part',
    )
    anime.set(background, { translateY: '60%' })
    anime.set(items, { translateY: 50, opacity: 0 })
    anime({
      targets: background,
      easing: 'easeInOutExpo',
      translateY: '0%',
      duration: 2300,
    })
    anime({
      targets: items,
      easing: 'easeInOutExpo',
      translateY: 0,
      opacity: 1,
      duration: 2300,
      delay: anime.stagger(150),
    })
  }

  render() {
    const { className, initialValues, onSubmit, theme, pagination, data } = this.props
    const { name } = initialValues
    const { isUpdating } = this.state

    return (
      <Formik
        initialValues={{ name }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('This field is required'),
        })}
        onSubmit={values => {
          onSubmit({
            answer: {
              name: values.name,
            },
            pagination: pagination[1],
            theme,
            isHome: true
          })
        }}
      >
        {props => (
          <QuestionsLayout>
            <form
              onSubmit={props.handleSubmit}
              ref={this.$home}
              className={clsx('questions-home', className)}
            >
              <div
                style={{ backgroundImage: `url(${QuestionsBg})` }}
                className="questions-home__content pr-40 pl-40"
              >
                <div className="questions-home__background-wrapper">
                  <svg
                    preserveAspectRatio="none"
                    viewBox="0 0 403.7 573.8"
                    className="questions-home__background"
                  >
                    <polygon points="583.3,313.1 512.6,-33.5 -1326.5,556.8 -1255.8,903.4 -1253.6,913.9 627.6,529.9" />
                  </svg>
                </div>
                <div className="questions-home__content-inner">
                  <div className="mb-30">
                    <Text
                      color="white"
                      fw="bold"
                      size="h1"
                      className="questions-home__title mb-10 js-question-content-part"
                    >
                      Personalise your experience
                    </Text>
                    <Text
                      className="js-question-content-part"
                      fw="light"
                      color="white"
                      size="h2"
                    >
                      & get R100 off
                    </Text>
                  </div>
                  {!data.isContinue ? (
                    <>
                      <Field name="name">
                        {({ field, meta }) => (
                          <QuestionsInput
                            className="js-question-content-part mb-15"
                            placeholder="Enter your name"
                            error={
                              meta.touched && meta.error ? meta.error : null
                            }
                            {...field}
                          />
                        )}
                      </Field>

                      <QuestionsButton
                        className="js-question-content-part mb-15"
                        icon="arrow"
                        tag="button"
                        type="submit"
                        isTertiary
                      >
                        {isUpdating ? 'UPDATE AND GO NEXT' : 'GET STARTED'}
                      </QuestionsButton>
                    </>
                  ) : (
                    <QuestionsButton
                      isTertiary
                      className="js-question-content-part mb-15"
                      onClick={() => {
                        if (onSubmit) {
                          onSubmit({
                            answer: null,
                            pagination: pagination[1],
                            isContinue: true,
                            theme,
                          })
                        }
                      }}
                    >
                      CONTINUE
                    </QuestionsButton>
                  )}
                  <div className="js-question-content-part d-flex">
                    <QuestionsButton to="/" className="mr-5">
                      SKIP FOR NOW
                    </QuestionsButton>
                    <QuestionsButton isBlackYellow className="ml-5" to="/login">
                      LOGIN
                    </QuestionsButton>
                  </div>
                </div>
              </div>
            </form>
          </QuestionsLayout>
        )}
      </Formik>
    )
  }
}

QuestionsHome.defaultProps = {
  className: '',
  onSubmit: null,
  theme: 1,
  data: {},
  isContinue: false,
  initialValues: {
    name: ''
  },
  pagination: [],
}

QuestionsHome.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
  initialValues: PropTypes.object,
  isContinue: PropTypes.bool,
  data: PropTypes.object,
  pagination: PropTypes.array,
  theme: PropTypes.number,
}

export default QuestionsHome
