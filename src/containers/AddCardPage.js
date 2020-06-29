import React, { Component } from 'react'
import { connect } from 'react-redux'
import { menuInfo } from 'constants/header'
import PropTypes from 'prop-types'
import AddCard from 'components/templates/accounts/AddCard'
import { 
  addNewCard
} from 'redux/modules/checkout/actions'
import Transition from 'containers/Transition'

class AddCardPage extends Component {

  render() {
    const {
      theme,
      addCard,
      addCardApproval,
      ...others
    } = this.props
    return (
      <Transition>
        <AddCard
          theme={theme}
          menuInfo={menuInfo}
          addCard={addCard}
          addCardApproval={addCardApproval}
          {...others}
        />
      </Transition>
    )
  }
}
const mapStateToProps = state => {
  return {
    addCardApproval: state.checkout.credit_cards_add_approval
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCard:(data) => dispatch(addNewCard(data)),
  }
}
AddCardPage.defaultProps = {
  theme: null,
  addCard: null,
  addCardApproval: null
}
AddCardPage.propTypes = {
  theme: PropTypes.oneOf([null, 'men', 'women']),
  addCard: PropTypes.func,
  addCardApproval: PropTypes.object
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddCardPage)