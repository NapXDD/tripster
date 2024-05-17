export default function checkBudget(budget: number) {
  if (budget === 0) {
    return Promise.reject(new Error("Ngân sách là cần thiết"));
  } else {
    return Promise.resolve();
  }
}
