export interface user{
    id: number;
    name: string;
    username: string;
    address?: Address;
    email: string;
    company?: Company;
    phone: string;
    website: string;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo
}

export interface Geo {
    lat: string;
    lng: string
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}