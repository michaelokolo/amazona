export const getError = (error) => {
  return error.response && error.response.data.messaage
    ? error.response.data.message
    : error.message;
};
