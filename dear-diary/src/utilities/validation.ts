import 'react-toastify/dist/ReactToastify.css';

function validateDiaryCard(title: string, description: string): boolean {

  if (!title.trim() || !description.trim()) {
    return false;
  }

  return true;
}


export { validateDiaryCard };
