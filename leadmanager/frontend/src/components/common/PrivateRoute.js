import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const PrivateRoute = (auth) => {
	if (auth.auth.isLoading) {
		return <h2>Loading...</h2>
	} else if (!auth.auth.isAuthenticated) {
		return <Navigate to='/login' />
	} else {
		return <Outlet />
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth,
})

export default connect(mapStateToProps)(PrivateRoute)
