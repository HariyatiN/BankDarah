// registerPendonor.js
import { instance } from '../axios/index';

const registerPendonor = async (data) => {
  try {
    const response = await instance.post('/register', data);

    // Check if the response is undefined
    if (!response) {
      throw new Error('Unexpected response from the server');
    }

    // Check if the response status is 200
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Unexpected status code: ${response.status}`);
    }
  } catch (error) {
    console.error('Registration Error:', error); // Log the full error for debugging

    const errorMessage =
      error.response?.data?.message ||
      (error.response?.data?.error ? error.response.data.error : '') ||
      error.message ||
      'Unexpected error';

    console.error('Full Error:', error); // Log the full error for debugging

    throw new Error(errorMessage);
  }
};

export { registerPendonor };
