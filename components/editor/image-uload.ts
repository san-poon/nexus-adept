import { createImageUpload } from "novel/plugins";
import { toast } from 'sonner';

async function onUpload(file: File) {
  // Artificial delay of 2 seconds
  await new Promise(resolve => {
    setTimeout(resolve, 2000)
    toast('Upload successful.')
  });

  const src = URL.createObjectURL(file);
  return src;
}

export const uploadFn = createImageUpload({
  onUpload,
  validateFn: (file) => {
    if (!file.type.includes("image/")) {
      toast.error("File type not supported.");
      return false;
    }
    if (file.size / 1024 / 1024 > 1) {
      toast.error("File size too big (max 1MB).");
      return false;
    }
    return true;
  }
})