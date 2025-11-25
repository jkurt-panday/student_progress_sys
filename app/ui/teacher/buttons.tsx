import { 
  // PencilIcon, 
  PlusIcon, 
  // TrashIcon 
} from '@heroicons/react/24/outline';
import Link from 'next/link';

// import { deleteInvoice } from '@/app/lib/actions';    // chapter 12, mutating data

export function CreateTeacher() {
  return (
    <Link
      href="/admin/teacher/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Teacher</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function CreateGradeLevel() {
  return (
    <Link
      href="/admin/gradelevel/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Grade Level</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function CreateStudent() {
  return (
    <Link
      href="/admin/student/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Student</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}