/* eslint-disable prettier/prettier */
import withSidebar from '@/src/hoc/with-sidebar';
import withAuth from '@/src/hoc/with-auth';
import withStore from '@/src/hoc/with-store';
import StudentCsv from '@/src/components/admin/dashboard/facultyCsv';

const AdminPageStudentWithSidebar = withSidebar(StudentCsv, { page: 'StudentCsv' });
const AdminPageStudentWithAuth = withAuth(AdminPageStudentWithSidebar);
const AdminPageStudent = withStore(AdminPageStudentWithAuth);

export default AdminPageStudent;
