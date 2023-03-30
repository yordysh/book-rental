import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Admin from '../layouts/Admin';

const Home = lazy(async () => await import('../views/home'));
const Editorial = lazy(async () => await import('../views/editorial'));

const LoadingPage = (): JSX.Element => {
	return <div>loading ...</div>;
};

const routes: RouteObject[] = [
	{
		path: '/',
		element: <Admin />,
		errorElement: <>Error 404</>,
		children: [
			{
				index: true,
				element: (
					<Suspense fallback={<LoadingPage />}>
						<Home />
					</Suspense>
				),
			},
			{
				path: '/editorial',
				element: (
					<Suspense fallback={<LoadingPage />}>
						<Editorial />
					</Suspense>
				),
			},
		],
	},
];
export default createBrowserRouter(routes);
