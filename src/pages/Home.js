import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown } from 'office-ui-fabric-react/lib-commonjs/Dropdown';
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib-commonjs/Button';
import { Spinner } from 'office-ui-fabric-react/lib-commonjs/Spinner';
import { initializeIcons } from '@uifabric/icons';
import { fetchUser, clearUser } from '../state/actions';
import { UserCard, GhostLabel } from '../components';
import { isEmpty } from '../utils';

initializeIcons();

class Home extends Component {
	state = {
		department: 'hr',
		employee: null,
	};
	getDetails = () => {
		const { employee } = this.state;
		this.props.dispatch(fetchUser(employee));
	};
	clearDetails = () => {
		this.props.dispatch(clearUser());
	};
	handleChange = (name, value) => {
		let newState = {};
		switch (name) {
			case 'department': {
				newState = {
					[name]: value.key,
					employee: null,
				};
				break;
			}
			case 'employee': {
				newState = {
					...this.state,
					[name]: value.key,
				};
				break;
			}
			default:
			//
		}
		this.setState(newState);
	};
	render() {
		const { handleChange, getDetails, clearDetails } = this;
		const { isFetching, options, selectedUser } = this.props;
		const { department, employee } = this.state;
		return (
			<div className="container">
				<div className="filter">
					<div className="filter__item filter__item--dropdown">
						<Dropdown
							label="Departments"
							selectedKey={department}
							onChange={(e, item) => handleChange('department', item)}
							options={[{ key: 'hr', text: 'HR' }, { key: 'engineering', text: 'Engineering' }]}
						/>
					</div>
					<div className="filter__item filter__item--dropdown">
						<Dropdown
							label="Employees"
							selectedKey={employee ? employee : undefined}
							onChange={(e, item) => handleChange('employee', item)}
							options={options[department]}
						/>
					</div>
					<div className="filter__item">
						<GhostLabel />
						<PrimaryButton disabled={isEmpty(employee)} text="Get Details" onClick={getDetails} />
					</div>
					<div className="filter__item">
						<GhostLabel />
						<DefaultButton disabled={isEmpty(selectedUser)} text="Clear" onClick={clearDetails} />
					</div>
				</div>
				<div className="row">
					<div className="col">
						{selectedUser ? (
							<UserCard {...selectedUser} />
						) : isFetching ? (
							<Spinner label="Loading..." labelPosition="left" />
						) : null}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { isFetching: state.isFetching, selectedUser: state.selectedUser, options: state.options };
};

export default connect(mapStateToProps, null)(Home);
