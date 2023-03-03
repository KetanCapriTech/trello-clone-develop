/* eslint-disable prettier/prettier */
import Settings from '@/src/components/settings';
import withSidebar from '@/src/hoc/with-sidebar';
import withAuth from '@/src/hoc/with-auth';
import withStore from '@/src/hoc/with-store';
import FacultyTab from '@/src/components/admin/dashboard/faculty';

const AdminPageFacultyWithSidebar = withSidebar(FacultyTab, { page: 'faculty' });
const AdminPageFacultyWithAuth = withAuth(AdminPageFacultyWithSidebar);
const AdminPageFaculty = withStore(AdminPageFacultyWithAuth);

export default AdminPageFaculty;
