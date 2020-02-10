import { constants } from '../../constants';

export const toSignIn = async (uri: string, phoneNumber: string, pin: string) => {
  const result = await fetch(constants.apiUrl + uri, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: phoneNumber,
      password: pin
    })
  });
  alert(JSON.stringify(result.json, null, 10));
};
