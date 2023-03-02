const BASE_URL = 'https://productcatalogapi-production-840a.up.railway.app';

export type Phone = {
  id: string,
  category: string,
  phoneId: string,
  itemId: string,
  name: string,
  fullPrice: number,
  price: number,
  screen: string,
  capacity: string,
  color: string,
  ram: string,
  year: number,
  image: string
};

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

export const getPhones = () => get<Phone[]>('/phones');

export const getPhonesPagination = (searchParams: QueryParams) => {
  const queryString = objToQueryString(searchParams);

  return get<Phone[]>(`/phones?${queryString}`);
};

// export const getUser = (userId: number) => get<User>(`/users/${userId}`);
