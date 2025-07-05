# QAID AI Agents Marketplace

A modern, comprehensive marketplace for AI agents built with React, TypeScript, and Vite.

## 🚀 Features

- **Modern Tech Stack**: Built with React 18, TypeScript, and Vite for fast development and optimal performance
- **Responsive Design**: Fully responsive UI that works on all devices
- **Dark/Light Mode**: Built-in theme switching with system preference detection
- **Component Library**: Comprehensive UI component library with shadcn/ui
- **Agent Management**: Create, upload, test, and deploy AI agents
- **Developer Mode**: Advanced tools for agent development and testing
- **Marketplace**: Browse and discover AI agents from the community
- **User Dashboard**: Manage your agents, workflows, and account

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **State Management**: React Hooks

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # Reusable UI components
│   ├── pages/           # Page components
│   └── ...              # Feature components
├── lib/                 # Utility functions
├── hooks/               # Custom React hooks
├── types/               # TypeScript type definitions
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd qaid-ai-agents-marketplace
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint for code linting

## 🎨 Styling

This project uses Tailwind CSS for styling with a custom design system. The theme supports both light and dark modes with automatic system preference detection.

### Custom CSS Variables

The project uses CSS custom properties for theming, defined in `src/index.css`. These variables are automatically adjusted for light and dark modes.

## 🧩 Components

The project includes a comprehensive component library based on shadcn/ui, including:

- Buttons, Cards, Dialogs
- Forms, Inputs, Selects
- Navigation, Menus, Tabs
- Data Display components
- And many more...

## 🔧 Development

### Adding New Components

1. Create component files in the appropriate directory under `src/components/`
2. Follow the existing naming conventions and structure
3. Export components from their respective index files
4. Update type definitions if necessary

### Styling Guidelines

- Use Tailwind CSS classes for styling
- Follow the existing design system and color palette
- Ensure components work in both light and dark modes
- Use semantic HTML elements where possible

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🌙 Theme System

The application supports automatic theme detection and manual theme switching:
- System preference detection
- Manual light/dark mode toggle
- Persistent theme selection
- Smooth theme transitions

## 🚀 Deployment

To build the project for production:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support and questions, please open an issue in the repository or contact the development team.
# Qaid_Ai_Marketplace