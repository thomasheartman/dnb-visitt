/*
 * Created by Thomas Hartmann
 * Mapper for result items
 */
import { getHousingIcon } from '../../../../../../media/icons'
import { connect } from 'react-redux'
import ResultItem from './ResultItem'

const mapDispatchToProps = dispatch => ({
  getIcon (propertyType) {
    getHousingIcon(propertyType)
  }
})

export default connect(null, mapDispatchToProps)(ResultItem)
