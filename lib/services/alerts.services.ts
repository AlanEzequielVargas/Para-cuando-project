import Swal from "sweetalert2";

export function showAlert(title: string,toast: boolean, message: string, type: any,timer: number,color:string,button:boolean,backdrop:string,iconHtml:string) {
  Swal.fire({
    title,
    iconColor: 'yellow',
    toast,
    text: message,
    icon: type,
    timer,
    width: 300,
    padding: '1em',
    color,
    showConfirmButton: button,
    background: 'rgb(0 0 0 / 0.5)',
    backdrop,
    iconHtml,
  })
}