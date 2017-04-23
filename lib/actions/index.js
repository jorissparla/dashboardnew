import axios from 'axios';
export const FETCH_ACCOUNTS = 'FETCH_ACCOUNTS';

const fetchAccounts = () => {
	const request = axios.get('https://accountsapi.now.sh' + '/accounts');
	return {
		type: FETCH_ACCOUNTS,
		payload: request
	};
};

exports.fetchAccounts = fetchAccounts;
