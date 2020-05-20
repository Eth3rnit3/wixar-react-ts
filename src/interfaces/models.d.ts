export interface ICreator {
  id: number;
  user_name: string;
  created_at: string;
  updated_at: string;
  email: string;
  user_id: number;
  right: {
    id: number;
    role_name: string;
    created_at: string;
    updated_at: string;
  }
  organization: IOrganization;
}

export interface ISession {
  id: number;
  user_name: string;
  created_at: string;
  updated_at: string;
  project: any;
  enduser: {
    id: number;
    user_name: string;
    created_at: string;
    updated_at: string;
    email: string;
    user_id: number;
    right: number;
    organization: number;
  },
  results: any;
}

export interface IOrganization {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  legal_name: string;
  address_locality: string;
  address_region: string;
  address_country: string;
  phone: string;
  postal_code: string;
  email: string;
  siret: string;
  street_address: string;
}

export interface IProject {
  id: number;
  name: string;
  language: {
    id: number;
    name: string;
  };
  need_login: boolean;
  organization: IOrganization;
}

export interface IMedia {
  id: number;
  name: string;
  type: 'image' | 'audio' | 'video';
  s3_url: string;
  is_used: boolean;
  created_at: string;
  updated_at: string;
  organization: IOrganization;
}