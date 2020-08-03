import { connect } from 'react-redux'
import * as ReminderActions from '../actions'
import { bindActionCreators } from 'redux'
import MainSection from '../components/MainSection'


const mapStateToProps = state => ({
  reminders: state.reminders
})


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ReminderActions, dispatch)
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSection)