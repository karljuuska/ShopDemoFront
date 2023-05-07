import axios from 'axios';

async function putRequest(data: any[], url: string) {
  try {
    const response = await axios.put(url, data, {timeout: 5000});
    console.log(response);
    return true;
  } catch (err) {
    console.error('NetworkError: ', err);
    return false;
  }
}

export default putRequest;
