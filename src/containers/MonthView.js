import { connect } from 'react-redux'
import * as ReminderActions from '../actions'
import { bindActionCreators } from 'redux'
import Month from '../components/Month'


const mapStateToProps = state => ({
  reminders: state.reminders,
  month: state.month
})


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ReminderActions, dispatch)
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Month)