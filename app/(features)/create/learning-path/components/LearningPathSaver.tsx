
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import saveLearningPath from '../actions/saveLearningPath';

export default function LearningPathSaver() {

    return (
        <Button
            variant="secondary"
            className='w-96 text-base'
            onClick={() => {
                toast.promise(saveLearningPath, {
                    loading: 'Saving...',
                    success: (data) => {
                        return `${data} is the email you signed in with!`
                    },
                    error: 'Something went wrong. Please try again later!'
                });
            }}
        >
            Save
        </Button>
    )
}