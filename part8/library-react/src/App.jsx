// TestConnection.jsx
import { gql } from '@apollo/client';
import { useSubscription } from '@apollo/client/react';
import { useEffect } from 'react';

const TEST_SUB = gql`
  subscription TestConnection {
    bookAdded {
      title
      author {
        name
      }
    }
  }
`;

export const TestConnection = () => {
  const { data, error, loading } = useSubscription(TEST_SUB, {
    onData: ({ data: subscriptionData }) => {
      console.log('🎉 SUSCRIPCIÓN FUNCIONA!', subscriptionData);
      if (subscriptionData.data?.bookAdded) {
        window.alert(`NUEVO LIBRO: ${subscriptionData.data.bookAdded.title}`);
      }
    },
    onError: (err) => {
      console.error('❌ Error en suscripción:', err);
    }
  });

  useEffect(() => {
    console.log('🔍 Estado suscripción:', { loading, error: !!error, data: !!data });
  }, [loading, error, data]);

  return (
    <div style={{
      padding: '10px',
      background: loading ? 'yellow' : error ? 'red' : data ? 'green' : 'gray',
      color: 'white'
    }}>
      <h5>Test Subscription</h5>
      <p>Estado: {loading ? 'Cargando...' : error ? 'Error' : data ? 'Activa' : 'Inactiva'}</p>
    </div>
  );
};