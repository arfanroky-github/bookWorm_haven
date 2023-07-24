interface ToastProps {
  status: "success" | "info" | "error";
  message: string;
}

const Toast = ({ status, message }: ToastProps) => {
  return (
    <div className="toast toast-top toast-end">
      <div className={`alert alert-${status}`}>
        <span>{message}.</span>
      </div>
    </div>
  );
};
export default Toast;
