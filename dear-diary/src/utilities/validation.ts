import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { calculateMinutesDifference } from './timeDifference';

const toastConfig = {
  style: { minHeight: '20px', fontSize: '13px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  autoWidth: true,
  autoClose: 300,
  hideProgressBar: true,
  closeOnClick: true,
};

function showToast(message: string, type: 'success' | 'error'): void {
  toast[type](message, toastConfig);
}

function showElapsedTimeMessage(message: string, startTime: Date, endTime: Date): void {
  const elapsedMinutes = calculateMinutesDifference(startTime, endTime);
  showToast(`${message}  ${elapsedMinutes} mins ago`, 'success');
}

function validateDiaryCard(title: string, description: string): boolean {
  if (!title.trim() || !description.trim()) {
    showToast('Title and description are required!', 'error');
    return false;
  }

  return true;
}

function cardAdded(startTime: Date, endTime: Date): void {
  showElapsedTimeMessage('Record Saved Successfully!', startTime, endTime);
}

function userLogged(startTime: Date, endTime: Date): void {
  showElapsedTimeMessage('Login successful!', startTime, endTime);
}

export { validateDiaryCard, cardAdded, userLogged };
