import React, { Component } from 'react'
import withStyles from 'material-ui/styles/withStyles'
import Link from 'react-router-dom/Link'
import Button from 'material-ui/Button'

const style = theme => ({
  root: {
    marginTop: '20px'
  },
  button: {
    backgroundColor: 'transparent',
    border: 'none',
    width: '30px',
    height: '30px',
    borderRadius: '5px',
    cursor: 'pointer',
    outline: 'none',
    '&:hover': {
      backgroundColor: 'rgba(23, 123, 200, 0.6)'
    },
    '&:focus': {
      border: 'none',
      boxSizing: 'none'
    }
  }
})

class Pagination extends Component {
  renderLeftArrow() {
    if (this.props.current === 1) return null
    return (
      <button
        onClick={() => this.props.onChange(this.props.current - 1)}
        className={this.props.classes.button}
      >
        {'<'}
      </button>
    )
  }

  renderRightArrow() {
    if (this.props.current === this.props.pages) return null
    return (
      <button
        className={this.props.classes.button}
        onClick={() => this.props.onChange(this.props.current + 1)}
      >
        {'>'}
      </button>
    )
  }

  getIncrementor() {
    const { maxRange, pages, current } = this.props
    const min = Math.floor(current - maxRange / 2)
    const max = Math.floor(current + maxRange / 2) - pages
    let incrementor = min > 0 ? min : 0
    incrementor -= max > 0 ? max : 0
    return incrementor
  }

  renderPages() {
    const { maxRange, current, classes, onChange, pages } = this.props
    const incrementor = this.getIncrementor()
    return Array(maxRange < pages ? maxRange : pages)
      .fill(null)
      .map((_, page) => {
        const pageNumber = page + 1 + incrementor
        const style = {}
        if (current === pageNumber) {
          style.backgroundColor = 'rgb(23, 123, 200)'
          style.color = 'white'
          style.fontWeight = 'bold'
        }
        return (
          <button
            style={style}
            onClick={() => onChange(pageNumber)}
            key={page}
            className={classes.button}
          >
            {pageNumber}
          </button>
        )
      })
  }

  render() {
    if (this.props.pages < 2) return null
    return (
      <div>
        {this.renderLeftArrow()}
        {this.renderPages()}
        {this.renderRightArrow()}
      </div>
    )
  }
}

export default withStyles(style)(Pagination)
