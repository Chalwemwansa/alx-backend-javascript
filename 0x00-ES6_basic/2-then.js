// function that returns the response object to the calling function
function res() {
  return ({
    status: 200,
    body: 'success',
  });
}
// function that is called when an error is encountered during
// processing of the promise
function err() {
  return new Error();
}
// function that prints that the request was granted
function always() {
  console.log('Got a response from the API');
}
// the function to be exported to the main function
export default function handleResponseFromAPI(promise) {
  return promise
    .then(res)
    .catch(err)
    .finally(always);
}
