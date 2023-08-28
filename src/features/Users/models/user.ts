export interface IUsersRoot {
  users: IUser[]
  total: number
  skip: number
  limit: number
}

export interface IUser {
  id: number
  firstName: string
  lastName: string
  maidenName: string
  age: number
  gender: string
  email: string
  phone: string
  username: string
  password: string
  birthDate: string
  image: string
  bloodGroup: string
  height: number
  weight: number
  eyeColor: string
  hair: UserHair
  domain: string
  ip: string
  address: UserAddress
  macAddress: string
  university: string
  bank: UserBank
  company: UserCompany
  ein: string
  ssn: string
  userAgent: string
}

export interface UserHair {
  color: string
  type: string
}

export interface UserAddress {
  address: string
  city: string
  coordinates: UserCoordinates
  postalCode: string
  state: string
}

export interface UserCoordinates {
  lat: number
  lng: number
}

export interface UserBank {
  cardExpire: string
  cardNumber: string
  cardType: string
  currency: string
  iban: string
}

export interface UserCompany {
  address: UserCompanyAddress
  department: string
  name: string
  title: string
}

export interface UserCompanyAddress {
  address: string
  city: string
  coordinates: UserCompanyCoordinates
  postalCode: string
  state: string
}

export interface UserCompanyCoordinates {
  lat: number
  lng: number
}
