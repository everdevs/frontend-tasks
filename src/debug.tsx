import React from "react";

/**
 * Display an Object as prettified JSON.
 */
export const Logger: React.FC<{ source: Record<string, any> }> = ({ source }) => (
	<pre>
		<code>{JSON.stringify(source, null, 4)}</code>
	</pre>
);
