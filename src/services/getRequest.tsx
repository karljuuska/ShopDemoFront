import axios from 'axios';

async function getRequest(url: string) {
  try {
    const response = await axios.get(url, {
      timeout: 5000,
    });
    console.log(response);
    return [false, response?.data];
  } catch (err) {
    console.error('NetworkError: ', err);
    return [true, []];
  }
}

export default getRequest;
