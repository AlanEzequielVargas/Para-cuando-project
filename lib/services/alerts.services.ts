import Swal from "sweetalert2";



export function showAlert(title: string, message: string, type: 'success' | 'error' | 'warning' | 'info' = 'info') {
  Swal.fire({
    title,
    text: message,
    icon: type,
    confirmButtonText: 'OK',
  });
}