export interface IStore {
  app: IAppState;
}

export interface IAppState{
  locale: 'en' | 'fr' | string;
}