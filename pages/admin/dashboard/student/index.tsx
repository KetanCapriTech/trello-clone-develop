/* eslint-disable prettier/prettier */
import Settings from '@/src/components/settings';
import withSidebar from '@/src/hoc/with-sidebar';
import withAuth from '@/src/hoc/with-auth';
import withStore from '@/src/hoc/with-store';
import StudentTab from '@/src/components/admin/dashboard/students';

const AdminPageStudentWithSidebar = withSidebar(StudentTab, { page: 'settings' });
const AdminPageStudentWithAuth = withAuth(AdminPageStudentWithSidebar);
const AdminPageStudent = withStore(AdminPageStudentWithAuth);

export default AdminPageStudent;
