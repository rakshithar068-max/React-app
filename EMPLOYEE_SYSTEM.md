# Employee Management System

A modern, responsive React application for managing employee data with full CRUD operations via REST API endpoints.

## Features

- ✅ **Full CRUD Operations**: Create, Read, Update, and Delete employees
- ✅ **Search & Filter**: Search employees by name, email, or department
- ✅ **Form Validation**: Comprehensive client-side validation
- ✅ **Responsive Design**: Works on desktop, tablet, and mobile devices
- ✅ **Error Handling**: User-friendly error messages and notifications
- ✅ **Loading States**: Visual feedback during API operations
- ✅ **Confirmation Dialogs**: Safety confirmations for delete operations
- ✅ **Modern UI**: Clean, professional design with smooth animations

## Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: CSS3 with responsive design
- **HTTP Client**: Fetch API

## Project Structure

```
src/
├── components/
│   ├── EmployeeForm.tsx      # Form for creating/editing employees
│   └── EmployeeGrid.tsx      # Main employee grid/table component
├── services/
│   └── employeeAPI.ts        # API service for backend communication
├── types/
│   └── Employee.ts           # TypeScript interfaces
├── styles/
│   ├── EmployeeGrid.css      # Grid table styles
│   └── EmployeeForm.css      # Form modal styles
├── config/
│   └── api.ts                # API configuration
├── App.tsx                   # Main app component
├── App.css                   # App container styles
├── main.tsx                  # React entry point
└── index.css                 # Global styles
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Configure your backend API URL in `src/services/employeeAPI.ts`:
```typescript
const API_BASE_URL = 'http://your-backend-url/api/employees';
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build for Production

Build the application:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

### Linting

Run ESLint:
```bash
npm run lint
```

## API Integration

The application communicates with the following REST API endpoints:

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/GetEmployees` | Fetch all employees |
| GET | `/GetEmployeesById/{id}` | Fetch employee by ID |
| POST | `/CreateEmployee` | Create new employee |
| PUT | `/UpdateEmployee/{id}` | Update existing employee |
| DELETE | `/DeleteEmployee/{id}` | Delete employee |

### Request/Response Format

**Employee Object:**
```json
{
  "id": 1,
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "phone": "+1-555-0123",
  "department": "IT",
  "salary": 75000,
  "joinDate": "2023-01-15"
}
```

## Features in Detail

### Employee Grid

- Displays all employees in a responsive table
- Shows: First Name, Last Name, Email, Phone, Department, Salary, Join Date
- Action buttons for Edit and Delete operations
- Refresh button to reload data
- Search functionality with real-time filtering

### Add Employee

- Click "+ Add Employee" button
- Fill in all required fields
- Form validation for email format and required fields
- Submit to create new employee

### Edit Employee

- Click "Edit" button on any employee
- Pre-populated form with current data
- Submit to update changes

### Delete Employee

- Click "Delete" button on any employee
- Confirmation dialog appears
- Employee is permanently deleted upon confirmation

### Search/Filter

- Type in the search box to filter employees
- Filters across firstName, lastName, email, and department fields
- Real-time filtering as you type

## Styling

The application uses:
- **Color Scheme**: Professional blue (#007bff) accent colors
- **Responsive Grid**: CSS Grid and Flexbox for layouts
- **Animations**: Smooth transitions and modal animations
- **Mobile-First**: Optimized for all screen sizes

## Error Handling

The application includes:
- Network error messages
- Form validation errors
- Confirmation dialogs for destructive operations
- Loading states to prevent duplicate operations

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Development Tips

### Adding New Fields

1. Update the `Employee` interface in `src/types/Employee.ts`
2. Add field to the form in `src/components/EmployeeForm.tsx`
3. Update table in `src/components/EmployeeGrid.tsx`
4. Add API validation on the backend

### Customizing Styles

- Global styles: `src/index.css`
- Component styles: `src/styles/*.css`
- App container: `src/App.css`

### API Error Handling

All API calls in `src/services/employeeAPI.ts` include error handling:
```typescript
try {
  // API call
} catch (error) {
  console.error('Error:', error);
  throw error;
}
```

## Troubleshooting

### API Connection Issues

1. **Check Backend URL**: Ensure `API_BASE_URL` in `employeeAPI.ts` matches your backend
2. **CORS Configuration**: Backend must allow CORS from your frontend URL
3. **Network Tab**: Check browser DevTools Network tab for failed requests

### Form Validation Issues

- All fields must be filled
- Email format must be valid
- Salary must be a positive number
- Join Date must be selected

### Build Issues

```bash
# Clear node_modules and reinstall
rm -r node_modules
npm install

# Rebuild
npm run build
```

## License

This project is part of a React + TypeScript + Vite application.

## Support

For issues or questions, please refer to:
- API Setup: See `API_SETUP.md`
- React Documentation: https://react.dev
- Vite Documentation: https://vitejs.dev
