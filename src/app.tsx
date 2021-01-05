import React from "react";
import { Logger } from "./debug";
import { useData, useFibonacci } from "./hooks";

/**
 *  1. Extend useData to accept a URL and fetch the data
 *  2. Fetch data from public/data.json
 *  3. Show a successful response
 *  4. Show an error response
 *  5. enforce loading state (always load for min. 2s)
 *  6. Implement a loading component (basic as text "Loading...")
 *  7. Add emotion.js
 *  8. Add a "simple" (styled) loading component and use it for the loading state.
 *  9. Display the data in a (styled) list or table (why list or table?.
 * 10. Add a button that will (re)fetch the data when clicked.
 * 11. Add a button that will always create an error.
 * 12. Extend useFibonacci to return the correct fibonacci number.
 * 13. Improve useFibonacci to use a cache (using methods provided by react).
 * 14. Add an input field (type number) to request a fibonacci number.
 * 15. Limit the input to 0 - 50 (native API).
 * 16. Display the result for the requested fibonacci number.
 *
 * Caveats:
 * * All custom functions or methods are fully typed
 * * Typings include optional and/or extendable types if applicable
 */

/**
 *
 */
const App = () => {
	const { loading, error, data } = useData();
	const fib = useFibonacci(0);
	return (
		<>
			<h2>Data</h2>
			<Logger source={{ loading, error, data }} />
			<h2>Fibonacci</h2>
			<Logger source={fib} />
		</>
	);
};

export default App;
