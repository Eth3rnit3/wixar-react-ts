import { ISession, IOrganization, ICreator, IProject, IMedia } from "./models";

export interface IStore {
  app: IAppState;
  auth: IAuthState;
  projects: IProjectsState;
  medias: IMediaState;
}

export interface IAppState{
  locale: 'en' | 'fr' | string;
}

export interface IAuthState{
  jwt: string | null;
  creator: ICreator;
  session?: ISession;
  isConnected: boolean;
  keepSession: boolean;
}

export interface IProjectsState{
  list: IProject[];
  loading: boolean;
}

export interface IMediaState{
  list: IMedia[];
  loading: boolean;
}