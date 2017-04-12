export function replace(inString: string, vars: any): string {
    function _replace(match, group) {
        return vars[group];
    }

    let outString = inString.replace(/\\\$/g, '%#');

    console.log(outString);

    outString = outString.replace(/\$\{(\w+)\}/g, _replace);
    outString = outString.replace(/\$(\w+)/g, _replace);

    outString = outString.replace(/%#/g, '\\$');

    return outString;
}
