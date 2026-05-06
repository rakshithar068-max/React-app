# Employee Management System - API Configuration

## Backend Setup

This React application connects to a backend API for employee management. You need to configure your backend API URL.

### Step 1: Update API Base URL

Edit the file `src/services/employeeAPI.ts` and update the `API_BASE_URL` constant:

```typescript
const API_BASE_URL = 'http://localhost:3000/api/employees';
```

Replace `http://localhost:3000/api/employees` with your actual backend base URL.

### Step 2: Backend API Endpoints

The application expects the following REST API endpoints:

#### Get All Employees
- **Endpoint**: `GET /GetEmployees`
- **Response**: Array of Employee objects

#### Get Employee by ID
- **Endpoint**: `GET /GetEmployeesById/{id}`
- **Response**: Single Employee object

#### Create Employee
- **Endpoint**: `POST /CreateEmployee`
- **Body**: EmployeeFormData object
- **Response**: Created Employee object with ID

#### Update Employee
- **Endpoint**: `PUT /UpdateEmployee/{id}`
- **Body**: EmployeeFormData object
- **Response**: Updated Employee object

#### Delete Employee
- **Endpoint**: `DELETE /DeleteEmployee/{id}`
- **Response**: Success/confirmation

### Step 3: Employee Data Model

```typescript
interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  department: string;
  salary: number;
  joinDate: string; // ISO date format (YYYY-MM-DD)
}
```

### CORS Configuration

Ensure your backend allows Cross-Origin Resource Sharing (CORS) for requests from your React frontend URL.

### Testing the API Connection

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open the application at `http://localhost:5173/`

3. Try adding a new employee to test the API connection

### Common Issues

**Issue**: "Failed to load employees. Please check your backend connection."
- **Solution**: Verify the API_BASE_URL is correct and your backend is running

**Issue**: CORS errors in browser console
- **Solution**: Configure CORS in your backend to accept requests from your frontend URL

**Issue**: Invalid date format
- **Solution**: Ensure dates from the backend are in ISO format (YYYY-MM-DD)

## CRUD Operations Features

### Create
- Click "+ Add Employee" button
- Fill in all required fields
- Click "Create" to submit

### Read
- All employees are displayed in the table on page load
- Search functionality to filter employees by name, email, or department

### Update
- Click "Edit" button on any employee row
- Modify the fields
- Click "Update" to save changes

### Delete
- Click "Delete" button on any employee row
- Confirm deletion in the dialog
- Employee will be removed from the grid

## Features

- ✅ Full CRUD operations (Create, Read, Update, Delete)
- ✅ Search/filter employees by name, email, department
- ✅ Form validation before submission
- ✅ Responsive design (desktop, tablet, mobile)
- ✅ Error handling with user-friendly messages
- ✅ Loading states for API calls
- ✅ Confirmation dialogs for destructive operations
- ✅ Modern UI with Bootstrap-inspired design
