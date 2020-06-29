import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionContactUS.scss'
import Text from 'components/atoms/common/Text'
import Select from 'components/molecules/forms/Select'
import InputField from 'components/molecules/forms/inputs/InputField'
import TextArea from 'components/molecules/forms/inputs/TextArea'
import Button from 'components/molecules/buttons/Button'
import Divider from 'components/atoms/common/Divider'
import Icon from 'components/atoms/common/Icon'
import ButtonFile from 'components/molecules/buttons/ButtonFile'
import PhoneLink from 'components/atoms/common/PhoneLink'
import { Formik } from 'formik'
import { ContactUsSchema } from 'utils/formikValidation'

const detailIssues = [
  {
    label: 'Delivery',
    value: 'Delivery',
  },
  {
    label: 'Returns',
    value: 'Returns',
  },
  {
    label: 'F-bucks',
    value: 'F-bucks',
  },
  {
    label: 'My Account',
    value: 'Account',
  },
  {
    label: 'Order',
    value: '5',
  },
  {
    label: 'Other',
    value: '6',
  }
]

class SectionContactUS extends Component {
  constructor(props) {
    super(props)
    this.state = {
      issue: null,
      isLoading: false,
      fileContent: null,
    }
    this.onIssueSelectChange = this.onIssueSelectChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onFileChange = this.onFileChange.bind(this)
    this.readFileData = this.readFileData.bind(this)
  }

  onIssueSelectChange(selected){
    this.setState({
      issue: selected
    })
  }

  async onFileChange(e) {
    await this.readFileData(e)
  }

  readFileData(e) {
    const file = e.target.files[0]
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = (event) => {
        const byteArray = new Uint8Array(event.target.result)
        this.setState({
          fileContent: byteArray
        })
        resolve(reader.result)
      }
      reader.onerror = (err) => {
        reject(err)
      }
      if( file )
        reader.readAsArrayBuffer(file)
    })
  }

  async handleSubmit (values) {
    const { issue, fileContent } = this.state
    const { contact } = this.props
    this.setState({isLoading: true})
    await contact(fileContent, {
      issue,
      issue_detail: "None",
      first_name: values.firstName,
      last_name: values.lastName,
      phone: values.phoneNumber,
      email: values.email,
      subject: values.subject,
      message: values.message
    })
    this.setState({isLoading: false})
  }

  render () {
    const { className, theme } = this.props
    const { isLoading } = this.state

    return (
      <div
        className={clsx(
          'section-contact-us',
          className
        )}
      >
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            subject: '',
            message: ''
          }}
          enableReinitialize
          validationSchema={ContactUsSchema}
          onSubmit={this.handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit
          }) => (
            <form onSubmit={handleSubmit}>
              <Text color="grey" size="xl" lh="1-6">
                {'Please get in touch using one of the options below. '
                +'You will receive a response within 24 hours by email'}
              </Text>
              <Text className="mt-15" fw="bold">
                What do you need help with?
              </Text>
              <Select
                className="mt-5"
                placeholder="Select your issue"
                options={detailIssues}
                onChange={this.onIssueSelectChange}
              />
              <Text className="mt-20" size="xl" fw="bold">
                Other Inquiry
              </Text>
              <InputField
                label="First Name"
                placeholder="First Name"
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                validationError={
                  errors.firstName && touched.firstName 
                  ? errors.firstName 
                  : null
                }
                required
              />
              <InputField
                label="Last Name"
                placeholder="Last Name"
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                validationError={
                  errors.lastName && touched.lastName 
                  ? errors.lastName 
                  : null
                }
                required
              />
              <InputField
                label="Phone"
                placeholder="Phone"
                name="phoneNumber"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phoneNumber}
                validationError={
                  errors.phoneNumber && touched.phoneNumber 
                  ? errors.phoneNumber 
                  : null
                }
                required
              />
              <InputField
                label="Email Address"
                placeholder="Email Address"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                validationError={
                  errors.email && touched.email 
                  ? errors.email 
                  : null
                }
                required
              />
              <InputField
                label="Subject"
                placeholder="Subject"
                name="subject"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subject}
                validationError={
                  errors.subject && touched.subject 
                  ? errors.subject 
                  : null
                }
                required
              />
              <Text className="mt-15" fw="bold">
                Tell us more about your issue / query
              </Text>
              <TextArea
                placeholder="Message"
                name="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
                block
              />
              <Text
                className="mt-5"
                color="grey"
                align="center"
                size="xxs"
              >
                Please provide any additional informatin 
                that would help us resolve your issue
              </Text>
              <ButtonFile
                className="mt-20"
                id="contact-file"
                extensions=".jpg, .jpeg, .gif, .png, .bmp, .pdf"
                onChange={this.onFileChange}
                type="col"
                theme={theme}
              >
                Choose File
              </ButtonFile>
              <Button
                tag='button'
                className="mt-20"
                category="grey"
                type='submit'
                isLoading={isLoading}
              >
                Submit
              </Button>
            </form>
          )}
        </Formik>

        <Text className="mt-30" size="xl" fw="bold">
          Prefer to call?
        </Text>
        <Text className="mt-5" color="grey" lh="1-6">
          Feel free to give us a call on.
        </Text>
        <Divider className="mt-15 mb-15" />
        <div className="mt-5" style={{display: 'flex'}}>
          <Icon name="telephone" size={15} />
          <PhoneLink to="0879432444">
            <Text className="ml-10" lh="1-6">
              (087) 943 2444
            </Text>
          </PhoneLink>
        </div>
      </div>
    )
  }
}

SectionContactUS.defaultProps = {
  className: '',
  theme: null,
  contact: null,
}

SectionContactUS.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  contact: PropTypes.func,
}

export default SectionContactUS
