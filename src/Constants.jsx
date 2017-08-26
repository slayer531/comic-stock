export const API_BASE_URL = 'http://frontendshowcase.azurewebsites.net/api/';

export const API_SUPPLIERS_ENDPOINT = 'Suppliers/';
export const API_ISSUES_ENDPOINT = 'Issues/';
export const API_ORDERS_ENDPOINT = 'Orders/';

export const API_SUPPLIERS_URL = API_BASE_URL + API_SUPPLIERS_ENDPOINT;
export const API_ISSUES_URL = API_BASE_URL + API_ISSUES_ENDPOINT;
export const API_ORDERS_URL = API_BASE_URL + API_ORDERS_ENDPOINT;

export const APP_HOME = '/';

export const APP_HOME_PAGE = '/home';

export const APP_SUPPLIERS_URL = `${APP_HOME}suppliers/`;
export const APP_SUPPLIERS_ADD_URL = `${APP_SUPPLIERS_URL}add/`;
export const APP_SUPPLIERS_EDIT_URL = `${APP_SUPPLIERS_URL}edit/`;
export const APP_SUPPLIERS_DELETE_URL = `${APP_SUPPLIERS_URL}delete/`;
export const APP_ISSUES_URL = `${APP_HOME}issues/`;
export const APP_ISSUES_VIEW_URL = `${APP_ISSUES_URL}view/`;
export const APP_ISSUES_VIEW_ID_URL = `${APP_ISSUES_VIEW_URL}id/:issueId`;
export const APP_ORDER = 'order/';

export const IssueCondition = {
  VeryFine: 1,
  Fine: 2,
  Good: 3,
  Poor: 4,
};

export const PageState = {
  List: 1,
  Edit: 2,
  New: 3,
  Saved: 4,
};
