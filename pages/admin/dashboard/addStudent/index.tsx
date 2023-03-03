/* eslint-disable prettier/prettier */
import withSidebar from '@/src/hoc/with-sidebar';
import withAuth from '@/src/hoc/with-auth';
import withStore from '@/src/hoc/with-store';
import AddStudentForm from '@/src/components/admin/dashboard/addStudent';
const AdminPageStudentWithSidebar = withSidebar(AddStudentForm, { page: 'AddStudentForm' });
const AdminPageStudentWithAuth = withAuth(AdminPageStudentWithSidebar);
const AddStudentPage = withStore(AdminPageStudentWithAuth);

export default AddStudentPage;
