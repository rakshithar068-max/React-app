import type { Employee, EmployeeFormData } from '../types/Employee';

// Update this with your actual backend URL
const API_BASE_URL = 'http://135.13.12.231/api/employees';

export const employeeAPI = {
  // Get all employees
  getEmployees: async (options?: RequestInit): Promise<Employee[]> => {
    try {
      const response = await fetch(`${API_BASE_URL}/GetEmployees`, options);
      if (!response.ok) throw new Error('Failed to fetch employees');
      return await response.json();
    } catch (error) {
      console.error('Error fetching employees:', error);
      throw error;
    }
  },

  // Get employee by ID
  getEmployeeById: async (id: number): Promise<Employee> => {
    try {
      const response = await fetch(`${API_BASE_URL}/GetEmployeesById/${id}`);
      if (!response.ok) throw new Error('Failed to fetch employee');
      return await response.json();
    } catch (error) {
      console.error('Error fetching employee:', error);
      throw error;
    }
  },

  // Create new employee
  createEmployee: async (data: EmployeeFormData): Promise<Employee> => {
    try {
      const response = await fetch(`${API_BASE_URL}/CreateEmployee`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to create employee');
      return await response.json();
    } catch (error) {
      console.error('Error creating employee:', error);
      throw error;
    }
  },

  // Update employee
  updateEmployee: async (id: number, data: EmployeeFormData): Promise<Employee> => {
    try {
      const response = await fetch(`${API_BASE_URL}/UpdateEmployee/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to update employee');
      return await response.json();
    } catch (error) {
      console.error('Error updating employee:', error);
      throw error;
    }
  },

  // Delete employee
  deleteEmployee: async (id: number): Promise<void> => {
    try {
      const response = await fetch(`${API_BASE_URL}/DeleteEmployee/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete employee');
    } catch (error) {
      console.error('Error deleting employee:', error);
      throw error;
    }
  },
};
