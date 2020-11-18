
const h = 0.1;
const yFirst = 1;

export const algorithm = (f) => {
    const xArray = new Array(10).fill(0).reduce(
        (acc, value, index) => {
            const x = value + index / 10;
            return [...acc, x];
        }, []
    );

    const {
        y,
        yProizv
    } = xArray.reduce(
        (acc, x, index) => {
            let yCurr;

            if (index === 0) {
                yCurr = yFirst;
            } else {
                yCurr = acc.y[index - 1] + h * acc.yProizv[index - 1];
            }

            const yProizvCurr = f(x, yCurr);

            acc.y.push(yCurr);
            acc.yProizv.push(yProizvCurr);

            return acc;
        }, {
            y: [], // acc object
            yProizv: [], // acc object
        }
    );

    return {
        xArray,
        y,
        yProizv
    };
};

export const funct = (x, y) => 2 * (x * x * y);
