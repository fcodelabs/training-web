import { toast } from 'react-toastify';

function validateDiaryCard(title: string, description: string): boolean {
  if (!title.trim()) {
    toast.error('Please enter a title for the diary card');
    return false;
  }

  if (!description.trim()) {
    toast.error('Please enter a description for the diary card');
    return false;
  }

  return true;
}

export default  validateDiaryCard ;