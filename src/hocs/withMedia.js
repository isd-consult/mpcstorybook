import React from 'react'

export function withMedia(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        mq: '',
        mediaSizes: [
          { label: 'xs', value: 0 },
          { label: 'sm', value: 600 },
          { label: 'md', value: 768 },
          { label: 'lg', value: 980 },
          { label: 'xl', value: 1200 },
        ],
      }
    }

    componentDidMount() {
      this.mediaListener()
    }

    componentWillUnmount() {
      this.mediaListener(true)
    }

    mediaMatch(mql, mq) {
      if (mql.matches) {
        this.setState({ mq })
      }
    }

    mediaListener(isRemove) {
      const { mediaSizes } = this.state

      if (window.matchMedia) {
        mediaSizes.forEach((size, index) => {
          const from = `(min-width: ${size.value}px)`
          let to = ''

          if (index !== mediaSizes.length - 1) {
            to = ` and (max-width: ${mediaSizes[index + 1].value - 1}px)`
          }

          const mql = window.matchMedia(`${from}${to}`)
          if (isRemove) {
            mql.removeListener(mq => {
              this.mediaMatch(mq.matches, size.label)
            })
          } else {
            mql.addListener(mq => {
              this.mediaMatch(mq, size.label)
            })

            this.mediaMatch(mql, size.label)
          }
        })
      }
    }

    render() {
      const { mq } = this.state
      return <WrappedComponent mq={mq} {...this.props} />
    }
  }
}
