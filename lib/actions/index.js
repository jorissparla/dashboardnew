import axios from 'axios';

export const FETCH_SUMMARY = 'FETCH_SUMMARY';
export const FETCH_ACCOUNTS = 'FETCH_ACCOUNTS';
export const FETCH_CHAT = 'FETCH_CHAT';
export const CREATE_CHAT = 'CREATE_CHAT';
export const FETCH_RANGES = 'FETCH_RANGES';
export const FETCH_HISTORY = 'FETCH_HISTORY';
export const FETCH_HISTORY_DAY = 'FETCH_HISTORY_DAY';
export const FETCH_GOLIVES = 'FETCH_GOLIVES';
export const FETCH_NEWS = 'FETCH_NEWS';
export const SHOW_NEWS = 'SHOW_NEWS';
export const CREATE_NEWS = 'CREATE_NEWS';
export const UPDATE_NEWS = 'UPDATE_NEWS';
export const DELETE_NEWS = 'DELETE_NEWS';
export const FETCH_KUDOS = 'FETCH_KUDOS';
export const FETCH_ALERTS = 'FETCH_ALERTS';
export const CREATE_ALERTS = 'CREATE_ALERTS';
export const UPDATE_ALERTS = 'UPDATE_ALERTS';
export const DELETE_ALERT = 'DELETE_ALERT';

export const AUTH_USER = 'AUTH_USER';
export const UNAUTH_USER = 'UNAUTH_USER';
export const AUTH_ERROR = 'AUTH_ERROR';
export const FETCH_MESSAGE = 'FETCH_MESSAGE';

const ROOT_URL = 'http://nlbavwtls22:3001/api';

const fetchSummary = () => {
	const request = axios.get(ROOT_URL + '/summary');
	return {
		type: FETCH_SUMMARY,
		payload: request
	};
};

const fetchAccounts = () => {
	const request = axios.get(ROOT_URL + '/accounts');
	return {
		type: FETCH_ACCOUNTS,
		payload: request
	};
};

const fetchChat = () => {
	const request = axios.get(ROOT_URL + '/chat');
	return {
		type: FETCH_CHAT,
		payload: request
	};
};

const createChat = chatData => {
	const request = axios.put(ROOT_URL + '/chat', chatData);
	return {
		type: CREATE_CHAT,
		payload: request
	};
};

const fetchRanges = () => {
	const request = axios.get(ROOT_URL + '/ranges');
	return {
		type: FETCH_RANGES,
		payload: request
	};
};

const fetchGoLives = () => {
	const request = axios.get(ROOT_URL + '/golives');
	return {
		type: FETCH_GOLIVES,
		payload: request
	};
};

const fetchHistory = () => {
	const request = axios.get(ROOT_URL + '/history');
	return {
		type: FETCH_HISTORY,
		payload: request
	};
};

const fetchHistoryDay = () => {
	console.log(`FETCH_HISTORY_DAY`);

	const request = axios.get(ROOT_URL + '/historyday');
	return {
		type: FETCH_HISTORY_DAY,
		payload: request
	};
};
const fetchNews = () => {
	const request = axios.get(ROOT_URL + '/news');
	return {
		type: FETCH_NEWS,
		payload: request
	};
};

const fetchNewsItem = id => {
	const request = axios.get(ROOT_URL + '/news/' + id);
	return {
		type: FETCH_NEWS,
		payload: request
	};
};

const createNews = props => {
	const request = axios.put(ROOT_URL + '/news', props);
	return {
		type: CREATE_NEWS,
		payload: request
	};
};

const updateNews = props => {
	const request = axios.post(ROOT_URL + '/news/update', props);
	return {
		type: UPDATE_NEWS,
		payload: request
	};
};

const fetchKudos = () => {
	const request = axios.get(ROOT_URL + '/kudos');
	return {
		type: FETCH_KUDOS,
		payload: request
	};
};

const fetchAlerts = () => {
	const request = axios.get(ROOT_URL + '/alerts');
	return {
		type: FETCH_ALERTS,
		payload: request
	};
};

const fetchAlertItem = id => {
	const request = axios.get(ROOT_URL + '/alerts/' + id);
	return {
		type: FETCH_ALERTS,
		payload: request
	};
};

const createAlert = props => {
	const request = axios.put(ROOT_URL + '/alerts', props);
	return {
		type: CREATE_ALERTS,
		payload: request
	};
};

const updateAlerts = props => {
	const request = axios.post(ROOT_URL + '/alerts/update', props);
	return {
		type: UPDATE_ALERTS,
		payload: request
	};
};

const deleteAlert = id => {
	const request = axios.delete(ROOT_URL + '/alerts/' + id);
	return {
		type: DELETE_ALERT,
		payload: request
	};
};
const deleteNews = id => {
	const request = axios.delete(ROOT_URL + '/news/' + id);
	return {
		type: DELETE_NEWS,
		payload: request
	};
};

exports.fetchSummary = fetchSummary;
exports.fetchAccounts = fetchAccounts;

exports.fetchChat = fetchChat;
exports.createChat = createChat;
exports.fetchRanges = fetchRanges;
exports.fetchGoLives = fetchGoLives;
exports.fetchHistory = fetchHistory;
exports.fetchHistoryDay = fetchHistoryDay;
exports.fetchKudos = fetchKudos;
exports.fetchNews = fetchNews;
exports.fetchNewsItem = fetchNewsItem;
exports.createNews = createNews;
exports.updateNews = updateNews;
exports.fetchAlerts = fetchAlerts;
exports.fetchAlertItem = fetchAlertItem;
exports.createAlert = createAlert;
exports.updateAlerts = updateAlerts;
exports.deleteAlert = deleteAlert;
exports.deleteNews = deleteNews;
