// Dados de teste para login
export const testUser = {
    email: "teste@teste.com",
    password: "123456"
};

// Dados de teste para cadastro
export const testRegisterData = {
    name: "Usuário Teste",
    email: "teste@teste.com",
    password: "123456",
    confirmPassword: "123456"
};
const today = new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"

// Dados mockados para a home
export const mockDashboardData = {
    balance: 1314.70,
    income: 1200.00,
    expenses: 500.00,
    recentTransactions: [
        {
            id: 1,
            description: "Salário",
            amount: 780.30,
            type: "income",
            date: "2024-03-15"
        },
        {
            id: 2,
            description: "Supermercado",
            amount: 35.30,
            type: "expense",
            date: "2024-03-12"
        },
        {
            id: 3,
            description: "Freelance",
            amount: 50.00,
            type: "income",
            date: "2024-03-10"
        },
        {
            id: 4,
            description: "Aluguel",
            amount: 155.90,
            type: "expense",
            date: "2024-03-10"
        },
        {
            id: 99,
            description: "Teste hoje",
            amount: 123.45,
            type: "income",
            date: today
          },
          {
            id: 100,
            description: "Teste hoje",
            amount: 200.45,
            type: "income",
            date: today
          },
          {
            id: 101,
            description: "Teste hoje",
            amount: 1000.00,
            type: "income",
            date: today
          }

    ]
}; 