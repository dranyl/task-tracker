import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  const onClick = () => {
    console.log('click')
  }

  return (
    <div>
      <header className='header'>
        <h1>{title}</h1>
        <Button
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}
        />
      </header>
    </div>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string,
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'green',
// }

export default Header
