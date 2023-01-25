export const onLabelClick = (iri) => {
	window.open(iri, "_blank");
};

export const getStringBetween = (str: string, start: string, end: string) => {
	const result = str.match(new RegExp(start + "(.*)" + end)) as string[];

	return result[1];
};
