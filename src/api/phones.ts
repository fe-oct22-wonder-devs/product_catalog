import { Phone } from '../types/Phone';

const BASE_URL = 'https://productcatalogapi-production-840a.up.railway.app';

type QueryParams = {
  page?: string,
  perPage?: string,
  sort?: string,
};

function objToQueryString(obj: QueryParams): string {
  const keyValuePairs = Object.entries(obj);

  return keyValuePairs.map(el => el.join('=')).join('&');
}

function get<T>(url: string): Promise<T> {
  // eslint-disable-next-line prefer-template
  const fullURL = BASE_URL + url;

  return fetch(fullURL, { method: 'GET' }).then(res => res.json());
}

export const getPhonesPagination = (searchParams: QueryParams) => {
  const queryString = objToQueryString(searchParams);

  return get<Phone[]>(`/phones?${queryString}`);
};

export const getTabletPagination = (searchParams: QueryParams) => {
  const queryString = objToQueryString(searchParams);

  return get<Phone[]>(`/tablets?${queryString}`);
};

export const getPhonesCount = () => get<number>('/phones/length');
export const getTabletsCount = () => get<number>('/tablets/length');

// export const getUser = (userId: number) => get<User>(`/users/${userId}`);
