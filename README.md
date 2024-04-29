# todo-sol

Welcome to the Solana Todo App! This application leverages the power of the Solana blockchain to manage your todos securely. With this app, you can create todos, mark them as done, and automatically close your account once all todos are completed.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Account Creation**: Create a unique account on the Solana blockchain to manage your todos.
- **Todo Management**: Add new todos, mark them as done, and keep track of your tasks.
- **Automatic Account Closure**: Once all todos are completed, your account is automatically closed for security.

## Tech Stack

- **Next.js**: A React framework for building server-side rendered and statically generated applications.
- **Solana Smart Contract**: Written in Rust using the Anchor framework, ensuring secure and efficient execution of transactions on the Solana blockchain.
- **Phantom Wallet**: A browser extension wallet for the Solana blockchain, providing seamless integration for managing your account and signing transactions.

## Getting Started

To get started with the Solana Todo App, follow these steps:

1. Clone this repository to your local machine.
2. Install dependencies using `npm install`.
3. Ensure you have the latest version of the Phantom Wallet extension installed in your browser.
4. Start the development server using `npm run dev`.
5. Visit `http://localhost:3000` in your browser.

## Usage

1. **Create Account**: On the homepage, click on the "Create Account" button to create a new account on the Solana blockchain. This will generate a unique public/private key pair managed by your Phantom Wallet.
2. **Add Todos**: Once logged in, you can add new todos using the input field provided. Press Enter to submit each todo.
3. **Mark Todos as Done**: Click on the checkbox next to each todo to mark it as done. Completed todos will be visually distinguished from pending ones.
4. **Close Account**: When all todos are completed, your account will automatically close for security purposes.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).