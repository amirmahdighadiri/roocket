export const calculateTotal = (products) => products.reduce((sum, p) => sum + p.course.price , 0);
