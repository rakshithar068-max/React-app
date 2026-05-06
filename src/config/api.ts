// API Configuration
// Update this file with your actual backend URL

export const API_CONFIG = {
  // Base URL for all API endpoints
  // Change this to match your backend server
  BASE_URL: import.meta.env.VITE_API_URL || 'https://rakshitha-api-axfjf8ffavafb9bq.southindia-01.azurewebsites.net/api/employees',

  // Request timeout in milliseconds
  TIMEOUT: 30000,

  // Retry configuration
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000,
};

export default API_CONFIG;
