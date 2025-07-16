const BaseURL = 'http://localhost:8000';

const handleResponse = async (response) => {
  const contentType = response.headers.get('content-type');
  let data;
  if (contentType && contentType.includes('application/json')) {
    data = await response.json();
  } else {
    data = await response.text();
  }

  if (!response.ok) {
    const errorMsg = data?.detail || data?.message || response.statusText || 'Something went wrong. Please try again.';
    throw new Error(errorMsg);
  }
  return data;
};

export const fetchPlantsAPI = async () => {
  try {
    const response = await fetch(`${BaseURL}/plants`);
    return await handleResponse(response);
  } catch (error) {
    throw new Error('Unable to fetch plants. Please try again later.');
  }
};

export const fetchPlantByIdAPI = async (id) => {
  try {
    const response = await fetch(`${BaseURL}/plants/${id}`);
    return await handleResponse(response);
  } catch (error) {
    throw new Error('Unable to fetch plant details. Please try again later.');
  }
};