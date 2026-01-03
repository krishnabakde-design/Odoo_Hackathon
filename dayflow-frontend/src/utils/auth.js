export function login() {
  localStorage.setItem("token", "mock");
  localStorage.setItem("role", "employee");
}

export function logout() {
  localStorage.clear();
}

export function isAuthenticated() {
  return !!localStorage.getItem("token");
}

export function getRole() {
  return localStorage.getItem("role");
}
