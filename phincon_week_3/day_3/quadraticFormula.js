let quadraticFormula = (a, b, c) => {
    const positive = (-b + Math.sqrt(Math.abs(b * b - 4 * a * c))) / (2 * a * c);
    const negative = (-b - Math.sqrt(Math.abs(b * b - 4 * a * c))) / (2 * a * c);
    return [positive, negative];
};
console.log(quadraticFormula(10, 20, 5));
