import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionReturnItemEdit.scss'
import Block from 'components/molecules/wrapers/Block'
import Text from 'components/atoms/common/Text'
import noimage from 'assets/images/noimage.png'
import StringUtils from 'utils/StringUtils'
import Select from 'components/molecules/forms/Select'
import ButtonFile from 'components/molecules/buttons/ButtonFile'
import Divider from 'components/atoms/common/Divider'
import TextArea from 'components/molecules/forms/inputs/TextArea'
// import { uploadAPI } from 'utils'
// import { ApiUtils } from 'utils/ApiUtils'

class SectionReturnItemEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {data: props.data, isUploading: false}
    this.onChangeFile = this.onChangeFile.bind(this)
    this.onCommentChange = this.onCommentChange.bind(this)
    this.onReasonChange = this.onReasonChange.bind(this)
  }
  
  static getDerivedStateFromProps(props, state) {
    if (JSON.stringify(props.data) !== JSON.stringify(state.data)) {
      return {data: props.data}
    }
    return null
  }

  async onChangeFile(e) {
    const {onUploadFile, onChange} = this.props
    const {data} = this.state
    if (!data.file_ids) data.file_ids = []
    this.setState({isUploading: true})
    this.readFileData(e).then((content)=>{
      onUploadFile(content)
      .then(response=>{
        this.setState({isUploading: false})
        if (response.key) {
          data.file_ids.push(response.key)
          this.setState({data})
          if (onChange) onChange(data)
        }
      })
      .catch(()=>{
        this.setState({data, isUploading: false})
        if (onChange) onChange(data)
      })
    })
  }

  onCommentChange(e) {
    const {onChange} = this.props
    const {data} = this.state
    data.additional_comment = e.target.value
    this.setState({data})
    if (onChange) onChange(data)
  }
  
  onReasonChange(value) {
    const {onChange} = this.props
    const {data} = this.state
    data.reason = value
    this.setState({data})
    if (onChange) onChange(data)
  }

  readFileData(e) {
    const file = e.target.files[0]
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = (event) => {
        const byteArray = new Uint8Array(event.target.result)
        resolve(byteArray)
      }
      reader.onerror = (err) => {
        reject(err)
      }
      if( file )
        reader.readAsArrayBuffer(file)
    })
  }

  render () {
    const {
      className,
      theme,
      reasons,
    } = this.props
    const {data, isUploading} = this.state

    return (
      <div
        className={clsx(
          'section-return-item-edit',
          className
        )}
      >
        <Block className="pt-15 pr-15 pb-15 pl-15 mb-20">
          <div className="section-return-item-edit__head">
            <Text className="section-return-item-edit__head-product">
              Product/Order
            </Text>
            <Text className="section-return-item-edit__head-qty">
              Qty
            </Text>
          </div>
          <div className="section-return-item-edit__row">
            <img
              className="section-return-item-edit__row-image"
              src={StringUtils.getThumbnail(data.img_url)}
              alt={data.product_name}
              onError={
                (e)=>{
                  e.target.onerror = null 
                  e.target.src = noimage
                }
              }
            />
            <div className="section-return-item-edit__row-desc">
              <Text>{data.product_name}</Text>
              <Text className="mt-5" size="xxs" theme={theme}>
                {`#${data.order_number} at ${data.ordered_at}`}
              </Text>
            </div>
            <Text className="mt-20">{data.qty_can_return}</Text>
          </div>
          <Text>Reason</Text>
          <Select
            placeholder="-Please Select-"
            options={reasons}
            onChange={this.onReasonChange}
          />
          <Text className="mt-20" size="xl">Attach Files</Text>
          <Text className="mt-5" color="grey" lh="1-6">
            If you are returning an item because it is damaged 
            please add a picture of the item, showing the
          </Text>
          <ButtonFile
            id={data.simple_sku}
            className="mt-10"
            type="col"
            theme={theme}
            onChange={this.onChangeFile}
            isDisabled={isUploading}
          >
            {isUploading?"UPLOADING FILE...":"CHOOSE FILE"}
          </ButtonFile>
          <Divider className="mt-20" />
          <Text className="mt-15" size="xl">
            Additional Information
          </Text>
          <TextArea
            className="section-return-item-edit__comment"
            value={
              data && data.additional_comment
              ? data.additional_comment
              : ''
            }
            onChange={this.onCommentChange}
          />
        </Block>
      </div>
    )
  }
}

SectionReturnItemEdit.defaultProps = {
  className: '',
  theme: null,
  data: null,
  reasons: null,
  onUploadFile: null,
  onChange: null
}

SectionReturnItemEdit.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  data: PropTypes.object,
  reasons: PropTypes.array,
  onUploadFile: PropTypes.func,
  onChange: PropTypes.func
}

export default SectionReturnItemEdit
