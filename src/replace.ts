export function replace(inString: string, vars: any): string {
    function _replace(match, group) {
        return vars[group] || match;
    }

    let outString = inString.replace(/\\\$/g, '%#');

    outString = outString.replace(/\$\{(\w+)\}/g, _replace);
    outString = outString.replace(/\$(\w+)/g, _replace);

    outString = outString.replace(/%#/g, '$');

    return outString;
}
