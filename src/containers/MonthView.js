import { connect } from 'react-redux'
import Month from '../components/Month'


const mapStateToProps = state => ({
  reminders: state.reminders
})


export default connect(
  mapStateToProps,
  null
)(Month)