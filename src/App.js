import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';

const date = new Date().getFullYear();

// export function App() {
// 	return (
// 		<div className='App'>
// 			<header className='App-header'>
// 				<img src={logo} className='App-logo' alt='logo' />
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload 2.
// 				</p>
// 				<a
// 					className='App-link'
// 					href='https://reactjs.org'
// 					target='_blank'
// 					rel='noopener noreferrer'
// 				>
// 					Learn React
// 				</a>
// 				<h2>
// 					{date}
// 				</h2>
// 			</header>
// 		</div>
// 	);
// }

//весь App.js является декларативным

export function App () {
	return createElement(
		'div',
		{ className: 'App' },
		createElement(
			'header',
			{ className: 'App-header' },
			createElement(
				'img',
				{ 
					src: logo ,
				 	className: 'App-logo',
				 	alt: 'logo' 
				}
			),
			createElement(
				'p',
				null,
				'Edit',
				createElement('code', null, 'src/App.js' ),
				' and save to reload 2.'
			),
			createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React'
			),
			createElement(
				'h2',
				null,
				`${date}`
			)
		)
	)
}