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
            id: "550e8400-e29b-41d4-a716-446655440000",
            description: "Salário",
            amount: 780.30,
            type: "income",
            date: "2024-03-15"
        },
        {
            id: "550e8400-e29b-41d4-a716-446655440001",
            description: "Supermercado",
            amount: 35.30,
            type: "expense",
            date: "2024-03-12"
        },
        {
            id: "550e8400-e29b-41d4-a716-446655440002",
            description: "Freelance",
            amount: 50.00,
            type: "income",
            date: "2024-03-10"
        },
        {
            id: "550e8400-e29b-41d4-a716-446655440003",
            description: "Aluguel",
            amount: 155.90,
            type: "expense",
            date: "2024-03-10"
        },
        {
            id: "550e8400-e29b-41d4-a716-446655440004",
            description: "Teste hoje",
            amount: 123.45,
            type: "income",
            date: today
        },
        {
            id: "550e8400-e29b-41d4-a716-446655440005",
            description: "Teste hoje",
            amount: 200.45,
            type: "income",
            date: today
        },
        {
            id: "550e8400-e29b-41d4-a716-446655440006",
            description: "Teste hoje",
            amount: 1000.00,
            type: "income",
            date: today
        }
    ]
}; 