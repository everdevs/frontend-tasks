export interface DataResult {
	loading: boolean;
	data: null | Record<string, any>;
	error: null | Error;
}

/**
 * ...?
 */
export const useData = (): DataResult => {
	return {
		data: null,
		error: null,
		loading: false
	};
};

export interface FibonacciResult {
	request: number;
	response: number;
	sequence: number[];
}

/**
 *  ...?
 */
export const useFibonacci = (request: number): FibonacciResult => {
	const sequence = [0, 1];
	const response = sequence[request];
	return {
		request,
		response,
		sequence
	};
};
