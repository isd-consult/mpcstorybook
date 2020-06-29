import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionUploadPoP.scss'
import Text from 'components/atoms/common/Text'
import Button 
  from 'components/molecules/buttons/Button'
import Link 
  from 'components/atoms/common/Link'
import ButtonFile from 'components/molecules/buttons/ButtonFile'
import Step from 'components/molecules/panels/Step'
import Icon from 'components/atoms/common/Icon'
import Block from 'components/molecules/wrapers/Block'
import Divider from 'components/atoms/common/Divider'

class SectionUploadPoP extends Component {

  constructor(props) {
    super(props)
    this.state = {
      fileContent: null,
      isSubmitting: false,
    }
    this.onChangeFile = this.onChangeFile.bind(this)
    this.onUploadFile = this.onUploadFile.bind(this)
    this.readFileData = this.readFileData.bind(this)
  }

  async onChangeFile(e) {
    await this.readFileData(e)
  }

  async onUploadFile() {
    const {
      uploadPoPFile,
      orderNumber
    } = this.props
    const {
      fileContent
    } = this.state
    if(fileContent){
      this.setState({
        isSubmitting: true
      })
      await uploadPoPFile(fileContent, orderNumber)    
      this.setState({
        isSubmitting: false
      })
    }
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

  renderSubmitForm() {
    const { 
      orderNumber,
      theme
    } = this.props
    const {
      isSubmitting
    } = this.state
    return (
      <>
        <Text
          className="mt-10"
          size="xxl"
          lh="1-5"
          fw="medium"
        >
          {`Upload proof of payment for order # ${orderNumber}`}
        </Text>
        <Block className="pt-15 pr-15 pb-15 pl-15 mt-10">
          <ButtonFile
            extensions=".jpg, .jpeg, .gif, .png, .bmp, .pdf"
            onChange={this.onChangeFile}
            theme={theme}
          >
            Choose File
          </ButtonFile>
          <Divider className="mt-10" />
          <Text className="mt-10 mb-10">
            Allowed extensions: jpg, jpeg, gif, png, bmp, pdf
          </Text>
          <Button
            className="mt-10 mb-10"
            onClick={this.onUploadFile}
            isLoading={isSubmitting}
            theme={theme}
          >
            UPLOAD
          </Button>
        </Block>
      </>
    )
  }

  renderConfirmation() {
    const {
      theme
    } = this.props
    return (
      <>
        <div style={{textAlign: 'center'}}>
          <Icon 
            className="mt-40"
            name="starbox"
            size={100}
            theme={theme}
          />
        </div>
        <Text
          className="mt-30 mb-30"
          color="grey"
          size="xl"
          align="center"
        >
          Thank you for uploading your Proof
          of Payment. Your order will now be
          processed. Please note that you do 
          not need to email the PoP to us as well.
        </Text>
      </>
    )
  }

  render () {
    const {
      className,
      step
    } = this.props
    return (
      <div
        className={clsx(
          'section-upload-pop',
          className
        )}
      >
        <Step active={step === 0}>
          {this.renderSubmitForm()}
        </Step>
        <Step active={step === 1}>
          {this.renderConfirmation()}
        </Step>
        <Link to="/orders/list">
          <Button
            className='mt-10 mb-20'
            category="grey"
            fw='bold'
          >
            Back to My Orders
          </Button>
        </Link>
      </div>
    )
  }
}

SectionUploadPoP.defaultProps = {
  className: '',
  orderNumber: null,
  theme: null,
  step: 0,
  uploadPoPFile: null,
}

SectionUploadPoP.propTypes = {
  className: PropTypes.string,
  orderNumber: PropTypes.string,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  step: PropTypes.number,
  uploadPoPFile: PropTypes.func,
}

export default SectionUploadPoP
