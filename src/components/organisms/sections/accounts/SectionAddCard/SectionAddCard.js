import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './SectionAddCard.scss'
import InputField from 'components/molecules/forms/inputs/InputField'
import Text from 'components/atoms/common/Text'
import Select from 'components/molecules/forms/Select'
import Button from 'components/molecules/buttons/Button'

const months = [
  {label: "Jan", value: "01"},
  {label: "Feb", value: "02"},
  {label: "Mar", value: "03"},
  {label: "Apr", value: "04"},
  {label: "May", value: "05"},
  {label: "Jun", value: "06"},
  {label: "Jul", value: "07"},
  {label: "Aug", value: "08"},
  {label: "Sep", value: "09"},
  {label: "Oct", value: "10"},
  {label: "Nov", value: "11"},
  {label: "Dec", value: "12"},
]

const years = [
  {label: "2020", value: "20"},
  {label: "2021", value: "21"},
  {label: "2022", value: "22"},
  {label: "2023", value: "23"},
  {label: "2024", value: "24"},
  {label: "2025", value: "25"},
  {label: "2026", value: "26"},
  {label: "2027", value: "27"},
  {label: "2028", value: "28"},
  {label: "2029", value: "29"},
  {label: "2030", value: "30"},
]

class SectionAddCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      info: {
        holder_name: "",
        number: "",
        expiry_month: "",
        expiry_year_2d: "",
        cvv: ""
      }
    }
    this.onTextChange = this.onTextChange.bind(this)
    this.onMonthChange = this.onMonthChange.bind(this)
    this.onYearChange = this.onYearChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.approvalSubmit = React.createRef()
  }
  
  componentDidUpdate(prevProps) {
    const { addCardApproval } = this.props
    if (addCardApproval && JSON.stringify(addCardApproval) 
      !== JSON.stringify(prevProps.addCardApproval)) {
      this.approvalSubmit.current.click()
    }
  }

  onTextChange(e) {
    const {info} = this.state
    this.setState({
      info: {
        ...info, 
        [e.target.name]: e.target.value
      }
    })
  }
  
  onMonthChange(value) {
    const {info} = this.state
    this.setState({
      info: {
        ...info, 
        expiry_month: value
      }
    })
  }
  
  onYearChange(value) {
    const {info} = this.state
    this.setState({
      info: {
        ...info, 
        expiry_year_2d: value
      }
    })
  }

  async onSubmit() {
    const {addCard} = this.props
    const {info} = this.state

    if (addCard) {
      this.setState({isLoading: true})
      await addCard(info)
      this.setState({isLoading: false})
    } 
  }

  render () {
    const { className, addCardApproval, theme } = this.props
    const { isLoading, info } = this.state

    return (
      <div
        className={clsx(
          'section-add-card',
          className
        )}
      >
        <InputField
          theme={theme}
          label="Card Holder Name"
          required
          name="holder_name"
          onChange={this.onTextChange}
          value={info && info.holder_name}
        />
        <InputField
          theme={theme}
          label="Card Number"
          required
          name="number"
          onChange={this.onTextChange}
          value={info && info.number}
        />
        <Text className="mt-20 mb-5" fw="bold">
          Card Card Expiry Date
          <span style={{color:'red'}}>*</span>
        </Text>
        <div style={{display: `flex`}}>
          <Select
            className="section-add-card__month"
            placeholder="Month"
            options={months}
            onChange={this.onMonthChange}
          />
          <Select
            className="section-add-card__year ml-10"
            placeholder="Year"
            options={years}
            onChange={this.onYearChange}
          />
        </div>
        <div style={{display: 'flex'}}>
          <InputField
            theme={theme}
            className="section-add-card__cvv"
            label="CVV"
            required
            name="cvv"
            onChange={this.onTextChange}
            value={info && info.cvv}
          />
        </div>
        <Button
          className="section-add-card__btn mt-30 mb-30"
          theme={theme}
          isCentered
          onClick={this.onSubmit}
          isLoading={isLoading}
        >
          USE THIS CARD
        </Button>
        {/* Form for checking card */}
        {
          addCardApproval && (
          <form action={addCardApproval.url} method={addCardApproval.method}>
            {
              addCardApproval.parameters.map((param, index)=>(
                <input
                  key={index.toString()}
                  type="hidden"
                  name={param.name}
                  value={param.value}
                />
              ))
            }
            <button type="submit" ref={this.approvalSubmit} hidden>
              submit
            </button>
          </form>
        )}
      </div>
    )
  }
}

SectionAddCard.defaultProps = {
  className: '',
  theme: null,
  addCard: null,
  addCardApproval: null
}

SectionAddCard.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf([null, 'men', 'women']),
  addCard: PropTypes.func,
  addCardApproval:PropTypes.object
}

export default SectionAddCard
