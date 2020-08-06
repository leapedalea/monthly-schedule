import { connect } from 'react-redux'
import * as ReminderActions from '../actions'
import { bindActionCreators } from 'redux'
import MainSection from '../components/MainSection'


const mapStateToProps = state => ({
  reminderEditing: state.reminderEditing !== null ? 
    state.reminders.find(r => r.id === state.reminderEditing) :
    null,
  cityWeather: state.cityWeather
})


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ReminderActions, dispatch)
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSection)