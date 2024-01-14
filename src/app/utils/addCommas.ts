export const addCommas = <T extends string | { name: string }>(input: T[]): string => {
    let result = "";

    for (const value of input) {
        result += typeof value === 'string' ? `${value}, ` : `${value.name}, `;
    }

    return result.slice(0, -2);
}