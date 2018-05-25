const isEvenlyDivisible = (value: number, divider: number): boolean => value % divider === 0;

function isLeapYear(year: number): boolean {
    return (
        (isEvenlyDivisible(year, 4) && !isEvenlyDivisible(year, 100)) ||
        (isEvenlyDivisible(year, 4) && isEvenlyDivisible(year, 400))
    )
}

export default isLeapYear