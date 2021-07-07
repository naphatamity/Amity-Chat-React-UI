/* eslint-disable no-console */
import ASCClient from '@amityco/js-sdk';

import { ICustomer, ISettings } from './context';

class ASC {
  client: any;

  customer: ICustomer | undefined;

  setting: ISettings | undefined;

  dm: string | undefined;

  constructor() {
    this.client = undefined;
    this.customer = {
      accept_marketing: '11123',
      email: 'naphat@amity.co',
      first_name: 'naphat',
      last_name: 'sawasdee',
      name: 'naphat',
      id: 'Farrari_Virtual',
    };
    this.setting = undefined;
    this.dm = undefined;
  }

  initialize = ({
    api,
    customer,
    setting,
    dm,
  }: {
    api: string;
    customer: ICustomer;
    setting: ISettings;
    dm: string | undefined;
  }) => {
    console.log('Initialising ASC');
    if (this.client === undefined) {
      console.log('ASC Client undefined. creating');
      this.client = ASCClient.create({ apiKey: api });
    }

    this.customer = customer;
    this.setting = setting;
    this.dm = dm;
    console.log('set customer, setting and dm', { customer, setting, dm });

    return { client: this.client, dm };
  };

  connectClient = userId => {
    this.client.registerSession({ userId });
  };

  setDm = userId => {
    this.dm = userId;
  };

  connectClientAlt = ({ userId, displayName }) => {
    this.client.registerSession({
      userId,
      displayName,
    });
  };
}

export default ASC;
