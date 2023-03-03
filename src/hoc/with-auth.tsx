/* eslint-disable no-inner-declarations */
// /* eslint-disable no-empty */
// /* eslint-disable prettier/prettier */
// import React, { Component } from 'react';
// import { setOrGetStore } from '@/util/initialise-store';
// import isValidUser from '@/util/is-valid-user';
// import { updateUserData, fetchUser } from '@/src/slices/user';

// const WithAuth = (App) => {
//   return class AppWithAuth extends Component {
//     constructor(props) {
//       super(props);
//     }

//     static async getInitialProps(ctx) {
//       let appProps = {};

//       const reduxStore = setOrGetStore();
//       const { dispatch } = reduxStore;

//       const userDetails = isValidUser(ctx);
//       const token = localStorage.getItem('hhjklmno-hjsohjso-toKeN');

//       if (userDetails && !userDetails.isValid && !localStorage.getItem('hhjklmno-hjsohjso-toKeN')) {
//         ctx.res.writeHead(307, {
//           Location: '/login'
//         });
//         localStorage.clear();

//         ctx.res.end();
//       }

//       if (App.getInitialProps) {
//         appProps = await App.getInitialProps(ctx);
//       }

//       await dispatch(updateUserData({ type: 'isValid', value: true }));

//       if (ctx.req) {
//         await dispatch(updateUserData({ type: 'id', value: userDetails && userDetails.id }));
//         await dispatch(fetchUser());
//       }

//       ctx.reduxState = reduxStore.getState();

//       return {
//         ...appProps
//       };
//     }

//     render() {
//       return <App />;
//     }
//   };
// };

// export default WithAuth;import React, { useEffect } from 'react';import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { setOrGetStore } from '@/util/initialise-store';
import isValidUser from '@/util/is-valid-user';
import { updateUserData, fetchUser } from '@/src/slices/user';
import { useEffect, useRef } from 'react';

// Custom hook to call a function repeatedly with a specified delay
function useInterval(callback: () => void, delay: number) {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (typeof savedCallback?.current !== 'undefined') {
        savedCallback?.current();
      }
    }

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const WithAuth = (App) => {
  const AuthenticatedApp = (props) => {
    const router = useRouter();
    const userDetails = isValidUser({ req: props.req });

    // Check for token continuously with a delay of 500ms
    useInterval(() => {
      const token = localStorage.getItem('hhjklmno-hjsohjso-toKeN');
      if (!token) {
        router.push('/login');
      }
    }, 500);

    useEffect(() => {
      const token = localStorage.getItem('hhjklmno-hjsohjso-toKeN');
      if (token) {
        if (userDetails && !userDetails.isValid) {
          localStorage.clear();
          router.push('/login');
        } else {
          async function fetchData(): Promise<void> {
            const reduxStore = setOrGetStore();
            const { dispatch } = reduxStore;
            await dispatch(updateUserData({ type: 'isValid', value: true }));
            await dispatch(updateUserData({ type: 'id', value: userDetails && userDetails.id }));
            await dispatch(fetchUser());
          }
          fetchData();
        }
      }
    }, []);

    return <App {...props} />;
  };

  return AuthenticatedApp;
};

export default WithAuth;
