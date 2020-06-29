import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dashboard from 'components/templates/Dashboard'
import PropTypes from 'prop-types'
import {
    newInLink,
    scrollPos
} from 'constants/landing'

import { menuInfo } from 'constants/header'
import ReactGA from 'react-ga'

import {
    fetchBannerList,
    fetchMessageList,
    fetchCategoryList,
    fetchNewInList,
    dismissMessage
} from 'redux/modules/landing/actions'

import {
    fetchQuestionList
} from 'redux/modules/question/actions'
import Transition from './Transition'
import 'transition.scss'

class LandingPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visitedShopByCategory: false,
            visitedNewIn: false,
            qActive: false,
        }
        this.handleScroll = this.handleScroll.bind(this)
    }

    async componentDidMount() {
        const {
            isAuthenticated,
            getQuestionList,
            getNewInList,
            getBannerList,
            getMessageList,
            getCategoryList
        } = this.props

        getQuestionList()
        getNewInList()
        getBannerList()
        getCategoryList()

        if (isAuthenticated) getMessageList()

        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll() {
        let scrollTop = window.pageYOffset
        const { visitedNewIn, visitedShopByCategory, qActive } = this.state
        if(qActive) scrollTop -= 250
        if(scrollTop >= scrollPos.newin
            && scrollTop < scrollPos.shopbycategory
            && !visitedNewIn){
            ReactGA.event({
                category: 'Block',
                action: 'Visit New In'
            })
            this.setState({visitedNewIn: true})
        }else if(scrollTop >= scrollPos.shopbycategory
            && !visitedShopByCategory){
            ReactGA.event({
                category: 'Block',
                action: 'Visit Shop By Category'
            })
            this.setState({visitedShopByCategory: true})
        }
    }

    render() {
        const {
            theme,
            questionList,
            bannerList,
            messageList,
            categoryList,
            newInList,
            closeMessage,
            ...others
        } = this.props

        return (
          <Transition>
            <Dashboard
              theme={theme}
              menuInfo={menuInfo}
              bannerItems={bannerList}
              messages={messageList}
              closeMessage={closeMessage}
              questions={questionList}
              categoryTopItems={categoryList && categoryList.slice(0, 2)}
              categoryItems={categoryList && categoryList.slice(2, 6)}
              newInItems={newInList}
              newInLink={newInLink}
              {...others}
            />
          </Transition>
        )
    }
}
const mapStateToProps = state => {
    return {
        questionList: state.question.questionList,
        bannerList: state.landing.bannerList,
        messageList: state.landing.messageList,
        categoryList: state.landing.categoryList,
        newInList: state.landing.newInList
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getQuestionList:() => dispatch(fetchQuestionList()),
        getBannerList:() => dispatch(fetchBannerList()),
        getMessageList:() => dispatch(fetchMessageList()),
        getCategoryList:() => dispatch(fetchCategoryList()),
        getNewInList:() => dispatch(fetchNewInList()),
        closeMessage:(messageId) => dispatch(dismissMessage(messageId)),
    }
}

LandingPage.defaultProps = {
    history: null,
    isAuthenticated: null,
    theme: null,
    questionList: null,
    messageList: null,
    bannerList: null,
    categoryList: null,
    newInList: null,

    getQuestionList: null,
    getBannerList: null,
    getMessageList: null,
    getCategoryList: null,
    getNewInList: null,
    closeMessage: null,
}

LandingPage.propTypes = {
    history: PropTypes.object,
    isAuthenticated: PropTypes.bool,
    theme: PropTypes.oneOf([null, 'men', 'women']),
    questionList: PropTypes.array,
    messageList: PropTypes.array,
    bannerList: PropTypes.array,
    categoryList: PropTypes.array,
    newInList: PropTypes.array,

    getQuestionList: PropTypes.func,
    getMessageList: PropTypes.func,
    getBannerList: PropTypes.func,
    getCategoryList: PropTypes.func,
    getNewInList: PropTypes.func,
    closeMessage: PropTypes.func,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LandingPage)
