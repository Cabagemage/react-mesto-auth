export const BASE_URL = 'https://auth.nomoreparties.co';

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then((response) => {
    try {
      if (response.status === 200){
        return response.json();
      }
    } catch(e){
      return (e)
    }
  })
  .then((res) => {
    return res;
  })
  .catch((err) => console.log(err));
};


export const signIn = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then((response) => {
    try {
      if (response.status === 200){
        return response.json();
      }
    } catch(e){
      return (e)
    }
  })
  .then((data) => {
    if(data){
      localStorage.setItem('jwt', data.jwt);
      return data
    }
    else {return}
  })
  .catch((err) => console.log(err));
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
  .then(res => res.json())

}