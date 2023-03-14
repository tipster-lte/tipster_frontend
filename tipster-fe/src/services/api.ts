import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { GET_MATCH_DETAILS, GET_PREDICTION } from '../graphql/queries';


const httpLink = createHttpLink({
  uri: 'https://your-graphql-api-url.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

export const getMatchDetails = async (matchId: string) => {
  const { data } = await client.query({
    query: GET_MATCH_DETAILS,
    variables: { matchId },
  });

  return data.match;
};

export const getPrediction = async (matchId: string) => {
  const { data } = await client.query({
    query: GET_PREDICTION,
    variables: { matchId },
  });

  return data.prediction;
};
