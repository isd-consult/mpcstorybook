/* eslint-disable max-len */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import * as Yup from 'yup'

import Text from 'components/atoms/common/Text'
import Container from 'components/atoms/layout/Container'
import QuestionsCheckbox from 'components/atoms/questions/QuestionsCheckbox'
import QuestionsRadio from 'components/atoms/questions/QuestionsRadio'
import QuestionsSlider from 'components/atoms/questions/QuestionsSlider'
import QuestionsButton from 'components/atoms/questions/QuestionsButton'
import QuestionsPagination from 'components/molecules/questions/QuestionsPagination'
import QuestionsThanks from 'components/molecules/questions/QuestionsThanks'
import QuestionsRow from 'components/molecules/questions/QuestionsRow'
import QuestionsUserField from 'components/molecules/questions/QuestionsUserField'
import QuestionsInput from 'components/atoms/questions/QuestionsInput'
import QuestionsItemCheckbox from 'components/atoms/questions/QuestionsItemCheckbox'
import Loading from 'components/molecules/overlays/Loading'
import { v4 } from 'uuid'
import { Formik, Field, FieldArray } from 'formik'
import QuestionsLayout from '../../layouts/QuestionsLayout'

import './QuestionsQuiz.scss'

function isRequired(value) {
  let error
  if (!value) {
    error = 'Required field'
  }
  return error
}

class QuestionsQuiz extends Component {
  constructor() {
    super()
    this.state = {
      validationSchema: null,
      isExit: false,
    }
    this.handleToggleExit = this.handleToggleExit.bind(this)
  }

  static getDerivedStateFromProps(props) {
    let schema = null

    props.data.forEach(question => {
      if (schemas[question.attribute.value]) {
        schema = schemas[question.attribute.value]
        if (question.attribute.value === 'save_preferences') {
          if (typeof question.answer === 'string') {
            schema = null
          }
        }
      }
    })

    return {
      validationSchema: schema,
    }
  }

  handleToggleExit(bool) {
    this.setState({ isExit: bool })
  }

  switchRenderer(data, values) {
    let renderFunc = null

    switch (data.attribute.value) {
      case 'category':
        renderFunc = this.renderCategories.bind(this)
        break
      case 'shop4':
        renderFunc = this.renderShop4.bind(this)
        break
      case 'languages':
        renderFunc = this.renderLanguages.bind(this)
        break
      case 'gender':
        renderFunc = this.renderGender.bind(this)
        break
      case 'size':
        renderFunc = this.renderSize.bind(this)
        break
      case 'brand':
        renderFunc = this.renderBrand.bind(this)
        break
      case 'preferences_shop4_other':
        renderFunc = this.render4Other.bind(this)
        break
      case 'names_shop4':
        renderFunc = this.renderNames.bind(this)
        break
      case 'save_preferences':
        renderFunc = this.renderPreferences.bind(this)
        break
      case 'thanks':
        renderFunc = this.renderThanks.bind(this)
        break
      default:
        break
    }

    return renderFunc ? renderFunc(data, values) : null
  }

  renderExit() {
    return (
      <Container fluid>
        <div className="d-flex fd-column">
          <QuestionsButton to="/" className='mb-15'>
            Yes - I do not want R100 or a personalized experience
          </QuestionsButton>
          <QuestionsButton
            isSecondary
            onClick={() => this.handleToggleExit(false)}
          >
            Woops - please take me back, I want my money!
          </QuestionsButton>
        </div>
      </Container>
    )
  }

  renderNames(data, values) {
    return (
      <Container isFluid>
        {data.options.map((item, index) => {
          const name = `names_shop4.${item.value}`

          return (
            <div className="mb-15" key={index.toString()}>
              <Text className="mb-5">{item.question}</Text>
              <FieldArray
                name={name}
                render={arrayHelpers => (
                  <div>
                    {values.names_shop4[item.value] &&
                      values.names_shop4[item.value].length > 0 &&
                      values.names_shop4[item.value].map((category, idx) => (
                        <div key={idx.toString()}>
                          <Field validate={isRequired} name={`${name}.${idx}`}>
                            {({ field, meta }) => {
                              return (
                                <QuestionsUserField
                                  className="mb-10"
                                  onAdd={() => arrayHelpers.push('')}
                                  onRemove={() => arrayHelpers.remove(idx)}
                                  isRemove={idx !== 0}
                                  error={
                                    meta.touched && meta.error
                                      ? meta.error
                                      : null
                                  }
                                  {...field}
                                />
                              )
                            }}
                          </Field>
                        </div>
                      ))}
                  </div>
                )}
              />
            </div>
          )
        })}
      </Container>
    )
  }

  renderPreferences(data) {
    if (typeof data.answer === 'string') {
      return (
        <Container isFluid>
          <Text size="xxl" fw="bold">
            {data.answer}
          </Text>
        </Container>
      )
    }

    return (
      <Container isFluid>
        <Field name="save_preferences.email">
          {({ field, meta }) => (
            <QuestionsInput
              className="mb-10"
              placeholder="Enter your email address"
              error={meta.touched && meta.error ? meta.error : null}
              {...field}
            />
          )}
        </Field>
        <Field name="save_preferences.password">
          {({ field, meta }) => (
            <QuestionsInput
              className="mb-10"
              placeholder="Password"
              error={meta.touched && meta.error ? meta.error : null}
              {...field}
              type="password"
            />
          )}
        </Field>
      </Container>
    )
  }

  renderLanguages(data) {
    return (
      <Container isFluid>
        <Field name="languages">
          {({ field, form }) => (
            <QuestionsSlider
              isVertical
              items={data.options.map(item => item.value)}
              value={field.value}
              onChange={value => {
                form.setFieldValue('languages', value)
              }}
            />
          )}
        </Field>
      </Container>
    )
  }

  renderGender(data) {
    return (
      <Container isFluid>
        <Field name="gender">
          {({ field, form }) => (
            <QuestionsSlider
              items={data.options.map(item => item.value)}
              value={field.value}
              onChange={value => {
                form.setFieldValue('gender', value)
              }}
            />
          )}
        </Field>
      </Container>
    )
  }

  renderThanks() {
    return (
      <div className="d-flex jc-center mt-30">
        <QuestionsThanks />
      </div>
    )
  }

  renderSize(data) {
    return (
      <Container isFluid>
        {data.options.map((item, index) => {
          const fieldName = `size.${item.value}`
          return (
            <React.Fragment key={index.toString()}>
              <Text size="xl" fw="bold" className="mb-5 pl-15 pr-15">
                {item.attribute_sub_type}
              </Text>
              <Field name={fieldName}>
                {({ field, form }) => {
                  return (
                    <div className="questions-quiz__row mb-30">
                      <QuestionsSlider
                        items={item.suboptions.map(option => option.value)}
                        value={field.value}
                        onChange={value => {
                          form.setFieldValue(fieldName, value)
                        }}
                      />
                    </div>
                  )
                }}
              </Field>
            </React.Fragment>
          )
        })}
      </Container>
    )
  }

  renderShop4(data) {
    return data.options.map((item, index) => (
      <React.Fragment key={index.toString()}>
        <Container isFluid className="d-flex fd-column ai-flex-start">
          <Field name="shop4">
            {({ field, form }) => (
              <QuestionsCheckbox
                className="mb-15"
                id={v4()}
                label={item.value}
                name={item.value}
                checked={field.value.includes(item.value)}
                onChange={() => {
                  if (field.value.includes(item.value)) {
                    const nextValue = field.value.filter(
                      value => value !== item.value,
                    )

                    form.setFieldValue('shop4', nextValue)
                  } else {
                    const nextValue = field.value.concat(item.value)

                    if (item.value === 'Just me') {
                      form.setFieldValue('shop4', ['Just me'])
                    } else {
                      form.setFieldValue(
                        'shop4',
                        nextValue.filter(val => val !== 'Just me'),
                      )
                    }
                  }
                }}
              />
            )}
          </Field>
        </Container>
      </React.Fragment>
    ))
  }

  renderCategories(data) {
    const { theme } = this.props
    const associations = {
      'Shoes & Accessories': 'Shoes',
      Tops: 'Tops',
      Bottoms: 'Bottoms',
    }

    return data.options.map((item, index) => (
      <React.Fragment key={index.toString()}>
        <Field name={`category.${associations[item.value]}`}>
          {({ field, form }) => (
            <QuestionsRow className="mb-20" title={item.value}>
              {item.suboptions.map((box, idx) => (
                <React.Fragment key={idx.toString()}>
                  <QuestionsItemCheckbox
                    id={v4()}
                    label={box.value}
                    theme={theme}
                    name={box.value}
                    image={box.svg_image}
                    isChecked={field.value.includes(box.value)}
                    onChange={() => {
                      if (field.value.includes(box.value)) {
                        const nextValue = field.value.filter(
                          value => value !== box.value,
                        )
                        form.setFieldValue(
                          `category.${associations[item.value]}`,
                          nextValue,
                        )
                      } else {
                        const nextValue = field.value.concat(box.value)
                        form.setFieldValue(
                          `category.${associations[item.value]}`,
                          nextValue,
                        )
                      }
                    }}
                  />
                </React.Fragment>
              ))}
            </QuestionsRow>
          )}
        </Field>
      </React.Fragment>
    ))
  }

  renderBrand(data) {
    const { theme } = this.props
    return (
      <Field name="brand">
        {({ field, form }) => (
          <QuestionsRow isSecondary className="mb-20">
            {data.options.map((item, index) => (
              <React.Fragment key={index.toString()}>
                <QuestionsItemCheckbox
                  id={v4()}
                  label={item.value}
                  theme={theme}
                  name={item.value}
                  image={
                    item.svg_image !== 'None' ? item.svg_image : item.png_image
                  }
                  checked={field.value.includes(item.value)}
                  onChange={() => {
                    if (field.value.includes(item.value)) {
                      const nextValue = field.value.filter(
                        value => value !== item.value,
                      )
                      form.setFieldValue('brand', nextValue)
                    } else {
                      const nextValue = field.value.concat(item.value)
                      form.setFieldValue('brand', nextValue)
                    }
                  }}
                />
              </React.Fragment>
            ))}
          </QuestionsRow>
        )}
      </Field>
    )
  }

  render4Other(data) {
    return (
      <Container isFluid>
        <Field name="preferences_shop4_other">
          {({ field, form }) => (
            <div>
              {data.options.map((item, index) => (
                <React.Fragment key={index.toString()}>
                  <QuestionsRadio
                    id={v4()}
                    className="mb-15"
                    label={item}
                    values={item}
                    checked={field.value === item}
                    onChange={() =>
                      form.setFieldValue('preferences_shop4_other', item)
                    }
                  >
                    {item}
                  </QuestionsRadio>
                </React.Fragment>
              ))}
            </div>
          )}
        </Field>
      </Container>
    )
  }

  renderSubtitle(data) {
    let subtitle = null

    switch (data.attribute.value) {
      case 'category':
      case 'brand':
        subtitle = 'Select as many as you like:'
        break
      case 'shop4':
        subtitle = 'You can select multiple.'
        break
      case 'languages':
        subtitle = 'Choose a language for these questions:'
        break
      case 'save_preferences':
        subtitle =
          'Add your details to see more recommendations next time you visit.'
        break
      case 'thanks':
        subtitle = 'Here is your R100 off coupon:'
        break
      default:
        break
    }
    return subtitle
  }

  render() {
    const {
      className,
      theme,
      data,
      pagination,
      onSubmit,
      isLoading,
      initialValues,
    } = this.props

    const { isExit } = this.state
    const { validationSchema } = this.state

    return (
      <Formik
        validateOnBlur={false}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={values => {
          const answer = {}

          data.forEach(item => {
            const value = values[item.attribute.value]

            if (item.attribute.value === 'names_shop4') {
              answer[item.attribute.value] = {}
              Object.keys(value).forEach(key => {
                if (item.options.some(option => option.value === key)) {
                  answer[item.attribute.value][key] = value[key]
                }
              })
            } else {
              answer[item.attribute.value] = value
            }
          })
          if (onSubmit) {
            onSubmit({
              answer,
              theme,
              pagination: values.pg,
            })
          }
        }}
        initialValues={{
          shop4: ['Just me'],
          names_shop4: {
            Men: [''],
            Girls: [''],
            Boys: [''],
            Women: [''],
          },
          preferences_shop4_other: 'No - Skip for now',
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
            password: '',
          },
          ...initialValues,
        }}
      >
        {props => (
          <QuestionsLayout
            className={clsx(
              'questions-quiz',
              { [`questions-quiz--${theme}`]: theme },
              className,
            )}
            onExit={this.handleToggleExit}
          >
            <div className="questions-quiz__content">
              {isLoading ? (
                <Loading isNoBackground isLogo size="large" />
              ) : (
                <>
                  {!isExit ? (
                    data.map((item, index) => (
                      <React.Fragment key={index.toString()}>
                        <div className="questions-quiz__part">
                          <Container className="mb-30" isFluid>
                            {item.attribute.value ===
                              'preferences_shop4_other' && (
                              <div className="questions-quiz__done mb-15 ta-center">
                                <Text tag="span" size="h3" fw="bold">
                                  {item.name}
                                </Text>
                                <Text tag="span" size="h3">
                                  {' '}
                                  is completed
                                </Text>
                              </div>
                            )}
                            <Text className="mb-10" size="xxxl" fw="bold">
                              <span
                                // eslint-disable-next-line react/no-danger
                                dangerouslySetInnerHTML={{
                                  __html: item.question,
                                }}
                              />
                            </Text>
                            <Text size="xl" className="mb-15">
                              {this.renderSubtitle(item)}
                            </Text>
                          </Container>
                          <div>{this.switchRenderer(item, props.values)}</div>
                        </div>
                      </React.Fragment>
                    ))
                  ) : (
                    <div className="questions-quiz__part">
                      <Container className="mb-30" isFluid>
                        <Text className="mb-10" size="xxxl" fw="bold">
                          Are you sure you want to leave?
                        </Text>
                      </Container>
                      <div>{this.renderExit()}</div>
                    </div>
                  )}
                </>
              )}
            </div>
            <QuestionsPagination
              data={pagination}
              theme={theme}
              isDisabled={isLoading || isExit}
              onPaging={pg => {
                props.setValues({ ...props.values, pg })
                props.handleSubmit()
              }}
              className="questions-quiz__pagination"
            />
          </QuestionsLayout>
        )}
      </Formik>
    )
  }
}

const schemas = {
  save_preferences: Yup.object().shape({
    save_preferences: Yup.object().shape({
      email: Yup.string()
        .email('Invalid email')
        .required('This field is required'),
      password: Yup.string()
        .required('This field is required')
        .min(6, 'Too short. Mininum 6 symbols.'),
    }),
  }),
}

QuestionsQuiz.defaultProps = {
  className: '',
  theme: 1,
  pagination: [],
  data: [
    {
      question: 'Loading...',
      options: [],
      attribute: {},
    },
  ],
  onSubmit: null,
  isLoading: false,
  initialValues: {},
}

QuestionsQuiz.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.number,
  pagination: PropTypes.array,
  data: PropTypes.array,
  onSubmit: PropTypes.func,
  isLoading: PropTypes.bool,
  initialValues: PropTypes.object,
}

export default QuestionsQuiz
