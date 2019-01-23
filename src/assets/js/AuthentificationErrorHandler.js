export default function AuthentificationErrorHandler(context, errorHandlerFunc, error) {
  if (error && error.response && error.response.status && error.response.status === 401) {
    context.$router.push('/signin');
  } else {
    errorHandlerFunc(error);
  }
}
