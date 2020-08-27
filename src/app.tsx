import React from "react";
import { Logger } from "./debug";
import { useData, useFibonacci } from "./hooks";

/**
 *  1. Extend useData to accept a URL and fetch the data
 *  2. Fetch data from public/data.json
 *  3. Show a successful response
 *  3. Show an error response
 *  4. enforce loading state (always load for min. 2s)
 *  5. Implement a loading component (basic as text "Loading...")
 *  6. Add emotion.js
 *  7. Add a "simple" (styled) loading component and use it for the loading state.
 *  8. Display the data in a (styled) list or table (why list or table?.
 *  9. Add a button that will (re)fetch the data when clicked.
 * 10. Add a button that will always create an error.
 * 11. Extend useFibonacci to return the correct fibonacci number.
 * 12. Improve useFibonacci to use a cache (using methods provided by react).
 * 13. Add an input field (type number) to request a fibonacci number.
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
