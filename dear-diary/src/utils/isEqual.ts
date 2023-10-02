// Compare objects for equality
function isEqual(objA: any, objB: any): boolean {
    return JSON.stringify(objA) === JSON.stringify(objB);
}

export {isEqual};