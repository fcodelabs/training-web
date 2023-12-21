import { toast } from 'react-toastify';

function validateDiaryCard(title: string, description: string): boolean {
  if (!title.trim() || !description.trim()) {
    toast.error('Title and description are required!');
    return false;
  }

  return true;
}

export default  validateDiaryCard ;