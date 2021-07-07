import React, { useContext } from 'react';

export interface ICustomer {
  accept_marketing: string;
  email: string;
  first_name: string;
  last_name: string;
  name: string;
  id: string;
}
export interface ISettings {
  customerOnly: boolean;
  primaryColor: string;
  secondaryColor: string;
}

type ContextType = {
  client: any | undefined;
  dm: string | undefined;
  customer: ICustomer | undefined;
  setting: ISettings | undefined;
  initialize: ({ api: string, customer: ICustomer, setting: ISettings }) => any;
  setDm: (userId: string | undefined) => void;
};

const ConfigContext = React.createContext<ContextType | null | undefined>(null);

export const withConfig = Component => props => (
  <ConfigContext.Consumer>
    {config => <Component {...props} config={config} />}
  </ConfigContext.Consumer>
);

export const withSDK = Component => props => {
  /* @ts-ignore */
  const { client } = useContext(ConfigContext);
  const { currentUserId } = client;
  const userRoles = client?.currentUser?.model?.roles;
  return (
    <Component client={client} currentUserId={currentUserId} userRoles={userRoles} {...props} />
  );
};

export const useConfig = () => {
  const context = React.useContext(ConfigContext);

  if (!context) {
    throw new Error('useConfig must be used within Config provider');
  }

  return context;
};

export default ConfigContext;
