const moneyFormat = (num = 0) => `$ ${num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
// const moneyFormat = (num = 0) => `$ ${Number(num.toFixed(1)).toLocaleString()}`;
export default moneyFormat;
