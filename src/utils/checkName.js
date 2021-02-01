export function checkName(name) {
	if (name.trim().length < 5 || name.includes(" ")) {
		return false;
	}

	return true;
}
