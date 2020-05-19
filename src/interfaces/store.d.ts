import { ISession, IOrganization, ICreator } from "./models";

export interface IStore {
  app: IAppState;
  auth: IAuthState;
}

export interface IAppState{
  locale: 'en' | 'fr' | string;
}

export interface IAuthState{
  jwt: string | null;
  creator: ICreator;
  organization: IOrganization;
  session?: ISession;
  isConnected: boolean;
  keepSession: boolean;
}