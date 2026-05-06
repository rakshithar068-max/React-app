import { useState, useEffect } from 'react';
import type { Employee, EmployeeFormData } from '../types/Employee';
import { employeeAPI } from '../services/employeeAPI';
import EmployeeForm from './EmployeeForm';
import '../styles/EmployeeGrid.css';

const EmployeeGrid = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);
  const [formLoading, setFormLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    setLoading(true);
    setError(null);

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 10000);

    try {
      const data = await employeeAPI.getEmployees({ signal: controller.signal });
      setEmployees(data);
    } catch (error) {
      if ((error as Error).name === 'AbortError') {
        setError('Employee request timed out. Please check your backend and try again.');
      } else {
        setError('Failed to load employees. Please check your backend connection.');
      }
    } finally {
      window.clearTimeout(timeoutId);
      setLoading(false);
    }
  };

  const handleAddEmployee = () => {
    setEditingEmployee(null);
    setShowForm(true);
  };

  const handleEditEmployee = async (employee: Employee) => {
    try {
      const fullEmployee = await employeeAPI.getEmployeeById(employee.id);
      setEditingEmployee(fullEmployee);
      setShowForm(true);
    } catch {
      setError('Failed to load employee details');
    }
  };

  const handleDeleteEmployee = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      try {
        await employeeAPI.deleteEmployee(id);
        setEmployees(employees.filter((emp) => emp.id !== id));
      } catch {
        setError('Failed to delete employee');
      }
    }
  };

  const handleFormSubmit = async (data: EmployeeFormData) => {
    setFormLoading(true);
    try {
      if (editingEmployee) {
        await employeeAPI.updateEmployee(editingEmployee.id, data);
      } else {
        await employeeAPI.createEmployee(data);
      }
      await fetchEmployees();
      setShowForm(false);
      setEditingEmployee(null);
    } catch {
      setError('Failed to save employee');
    } finally {
      setFormLoading(false);
    }
  };

  const filteredEmployees = employees.filter(
    (emp) =>
      emp.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="employee-grid-container">
      <div className="employee-grid-header">
        <h1>Employee Management</h1>
        <div className="header-actions">
          <input
            type="text"
            placeholder="Search employees..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button className="btn btn-primary" onClick={handleAddEmployee}>
            + Add Employee
          </button>
          <button className="btn btn-secondary" onClick={fetchEmployees} disabled={loading}>
            {loading ? 'Refreshing...' : 'Refresh'}
          </button>
        </div>
      </div>

      {error && (
        <div className="alert alert-error">
          {error}
          <button onClick={() => setError(null)} className="close-alert">×</button>
        </div>
      )}

      {loading && !employees.length ? (
        <div className="loading">Loading employees...</div>
      ) : filteredEmployees.length === 0 ? (
        <div className="empty-state">
          <p>{searchTerm ? 'No employees found matching your search.' : 'No employees found.'}</p>
          <button className="btn btn-primary" onClick={handleAddEmployee}>
            Add First Employee
          </button>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="employee-table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Join Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.email}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.department}</td>
                  <td>{employee.salary.toFixed(2)}</td>
                  <td>{new Date(employee.joinDate).toLocaleDateString()}</td>
                  <td className="actions">
                    <button
                      className="btn btn-small btn-info"
                      onClick={() => handleEditEmployee(employee)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-small btn-danger"
                      onClick={() => handleDeleteEmployee(employee.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showForm && (
        <EmployeeForm
          employee={editingEmployee}
          onSubmit={handleFormSubmit}
          onClose={() => {
            setShowForm(false);
            setEditingEmployee(null);
          }}
          isLoading={formLoading}
        />
      )}
    </div>
  );
};

export default EmployeeGrid;
