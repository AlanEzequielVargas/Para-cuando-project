import Swal from "sweetalert2";

export function showAlert(title: string,toast: boolean, message: string, type: any,timer: number) {
  Swal.fire({
    title,
    toast,
    text: message,
    icon: type,
    timer,
    width: 300,
    padding: '1em',
    color: 'yellow',
    showConfirmButton: false,
    background: 'rgb(0 0 0 / 0.8)',
    backdrop: `
      rgba(0,0,123,0.4)
    `
  })
}