import { toast } from 'react-toastify';

function validateDiaryCard(title: string, description: string): boolean {
  if (!title.trim() || !description.trim()) {
    toast.error('Title and description are required!');
    return false;
  }

  return true;
}



function cardAdded(): void {
  toast.success('New diary card added successfully!');
}



function userLogged(): void {
  toast.success('Login successfull!');
}

export { validateDiaryCard, cardAdded, userLogged };